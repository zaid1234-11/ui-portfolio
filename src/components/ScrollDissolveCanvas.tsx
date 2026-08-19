import React, { useRef, useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  LinearFilter,
  TextureLoader,
  Texture
} from 'three';

interface ScrollDissolveCanvasProps {
  imageSrc: string;
  isDark?: boolean;
  className?: string;
}

export default function ScrollDissolveCanvas({
  imageSrc,
  isDark = false,
  className = ""
}: ScrollDissolveCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const textureRef = useRef<Texture | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene & Renderer setup with optimal mobile pixel ratio
    const scene = new Scene();
    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    renderer.setSize(width, height);

    const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 1;

    // 2. Texture loading
    const loader = new TextureLoader();
    const texture = loader.load(imageSrc, (tex) => {
      tex.minFilter = LinearFilter;
      tex.magFilter = LinearFilter;
      if (materialRef.current) {
        materialRef.current.uniforms.u_textureAspect.value = tex.image.width / tex.image.height;
      }
    });
    textureRef.current = texture;

    // 3. Ultra-optimized Shaders for smooth liquid morphogenesis
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_progress;
      uniform sampler2D u_texture;
      uniform float u_containerAspect;
      uniform float u_textureAspect;
      uniform float u_isDark;

      // 2D Simplex Noise implementation
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;

        // Responsive cover UV mapping
        vec2 coverUv = uv;
        if (u_textureAspect > 0.0 && u_containerAspect > 0.0) {
          if (u_textureAspect > u_containerAspect) {
            float scale = u_textureAspect / u_containerAspect;
            coverUv.x = (uv.x - 0.5) / scale + 0.5;
          } else {
            float scale = u_containerAspect / u_textureAspect;
            coverUv.y = (uv.y - 0.5) / scale + 0.5;
          }
        }

        // Fast path: when progress is negligible, output un-displaced texture
        if (u_progress <= 0.001) {
          gl_FragColor = texture2D(u_texture, coverUv);
          return;
        }

        // Smooth organic liquid undulating wave & metaball contour with refined gentle amplitude
        float liquidWave = sin(coverUv.x * 4.2 + u_time * 0.45) * 0.055
                         + cos(coverUv.x * 7.8 - u_time * 0.3) * 0.03
                         + sin(coverUv.x * 12.5 + u_time * 0.6) * 0.018
                         + snoise(vec2(coverUv.x * 2.2, u_time * 0.15)) * 0.055;

        // Melt level sweeps gently and steadily from bottom
        float meltLevel = u_progress * 1.05 - 0.05;
        float liquidBoundary = meltLevel + liquidWave;

        // Distance from current UV height to the organic liquid boundary
        float distToBoundary = coverUv.y - liquidBoundary;

        // Viscous liquid downward surface-tension stretch near the melting lip
        float stretchFactor = smoothstep(0.18, 0.0, max(0.0, distToBoundary)) * u_progress * 0.045;
        vec2 displacedUv = coverUv;
        displacedUv.y -= stretchFactor * (1.0 + sin(coverUv.x * 5.5 + u_time * 0.3) * 0.30);
        displacedUv.x += stretchFactor * 0.15 * cos(coverUv.x * 7.5);

        // Crisp, anti-aliased smooth liquid cutout contour
        float liquidAlpha = smoothstep(-0.005, 0.005, distToBoundary);

        // Sample texture with viscous liquid displacement
        vec4 texColor = texture2D(u_texture, displacedUv);

        // Subtle fluid refraction / meniscus highlight right on the liquid lip
        float lipHighlight = smoothstep(0.0, 0.012, distToBoundary) * 
                             (1.0 - smoothstep(0.012, 0.04, distToBoundary)) * 
                             (1.0 - smoothstep(0.85, 1.0, u_progress));

        vec3 lipColor = (u_isDark > 0.5)
          ? vec3(0.85, 0.70, 0.45) // Subtle warm amber gold in dark mode
          : vec3(0.40, 0.32, 0.26); // Subtle graphite bronze in light mode

        vec3 finalRgb = mix(texColor.rgb, lipColor, lipHighlight * 0.4);

        gl_FragColor = vec4(finalRgb, texColor.a * liquidAlpha);
      }
    `;

    const uniforms = {
      u_time: { value: 0 },
      u_progress: { value: 0 },
      u_texture: { value: texture },
      u_containerAspect: { value: width / height },
      u_textureAspect: { value: 1.0 },
      u_isDark: { value: isDark ? 1.0 : 0.0 }
    };

    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true
    });
    materialRef.current = material;

    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // 4. Update sizes & aspect ratios
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.u_containerAspect.value = w / h;
    };
    window.addEventListener('resize', handleResize);

    // 5. Native high-performance scroll measurement (zero React re-renders)
    const calculateTargetProgress = (): number => {
      const btn = document.getElementById('hero-explore-btn-light-mobile') || document.getElementById('hero-explore-btn');
      if (btn) {
        const btnRect = btn.getBoundingClientRect();
        // Start threshold: when explore buttons reach ~80% viewport height
        const startThreshold = window.innerHeight * 0.80;
        // Completion Boundary: fully reaches 100% dissolution precisely when buttons reach just below the navbar at ~2% screen height
        const endThreshold = window.innerHeight * 0.02;

        if (btnRect.top >= startThreshold) {
          return 0;
        }
        if (btnRect.top <= endThreshold) {
          return 1.0;
        }

        const scrollDistance = startThreshold - endThreshold;
        const rawProgress = (startThreshold - btnRect.top) / scrollDistance;
        return Math.max(0, Math.min(1, rawProgress));
      }
      if (!container) return 0;
      const rect = container.getBoundingClientRect();
      const heroHeight = container.offsetHeight || window.innerHeight;
      const raw = Math.max(0, Math.min(1, -rect.top / heroHeight));
      return Math.max(0, Math.min(1, (raw - 0.25) / 0.55));
    };

    // 6. 120fps Animation frame loop with smooth spring lerp
    let animationFrameId: number;
    let clockTime = 0;
    let currentProgress = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Gentle, slow-motion viscous wave flow
      clockTime += 0.007;

      if (materialRef.current) {
        materialRef.current.uniforms.u_time.value = clockTime;
        materialRef.current.uniforms.u_isDark.value = isDark ? 1.0 : 0.0;

        const target = calculateTargetProgress();
        // Luxurious, silky-smooth inertial damping (eliminates abrupt jumps)
        currentProgress += (target - currentProgress) * 0.06;
        materialRef.current.uniforms.u_progress.value = currentProgress;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [imageSrc, isDark]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
