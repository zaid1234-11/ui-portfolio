const fs = require('fs');
let content = fs.readFileSync('C:/Users/zaids/.gemini/antigravity-ide/brain/43dccf86-fe47-4536-aa51-92df002628ea/.system_generated/steps/17/content.md', 'utf-8');
content = content.replace(/^[0-9]+: /gm, '');

let js = content.substring(content.indexOf('import'));

// Remove all imports
js = js.replace(/import.*?;/g, '');

// Prepend our imports
const imports = `import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, Mesh, ShaderMaterial, Vector2, LinearFilter, Clock, TextureLoader, WebGLRenderTarget, OrthographicCamera, HalfFloatType, RGBAFormat } from 'three';

export interface HoverMaskRevealProps {
  imageBase?: { src: string; srcSet?: string; alt?: string; positionX?: string; positionY?: string };
  imageHover?: { src: string; srcSet?: string; alt?: string; positionX?: string; positionY?: string };
  borderRadius?: number | string;
  radius?: number;
  blur?: number;
  circleBoost?: number;
  texture?: number;
  timeSpeed?: number;
  splatRadius?: number;
  velocityDissipation?: number;
  shrinkTimeSeconds?: number;
  curl?: number;
  pressureIterations?: number;
  parallax?: boolean;
  parallaxAmount?: number;
  parallaxSmoothing?: number;
  preview?: boolean;
  style?: React.CSSProperties;
}
`;

// Replace React rendering
let replaced = js.replace(/return \/\*#__PURE__\*\/_jsx\(.*?hasBaseImage\)\{.*?return \/\*#__PURE__\*\/_jsx.*?\}\);}/s, `if(!hasBaseImage){return <div style={{height:"100%",width:"100%",position:"relative",borderRadius:borderRadius}}><div style={{height:"100%",width:"100%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>Add a base image to create stunning liquid mask effects with gooey animations</div></div>;}`);

replaced = replaced.replace(/return \/\*#__PURE__\*\/_jsxs.*?\]\}\);}/s, `
  return (
    <div ref={containerRef} style={{width:"100%",height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:borderRadius,overflow:"clip",...props.style}}>
      <figure style={{position:"absolute",inset:0,margin:0,padding:0,zIndex:1}}>
        <img ref={imgRef} src={imageBase?.src} srcSet={imageBase?.srcSet} alt={imageBase?.alt||"Back image"} draggable={false} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:\`\${imageBase?.positionX||"50%"} \${imageBase?.positionY||"50%"}\`,margin:0,padding:0,userSelect:"none",pointerEvents:"none"}}/>
      </figure>
      {!isMobile&&<canvas ref={canvasRef} id="stage" style={{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:3,pointerEvents:"none",mixBlendMode:"normal",background:"transparent"}}/>}
      <div ref={zoomProbeRef} style={{position:"absolute",width:20,height:20,opacity:0,pointerEvents:"none"}}/>
    </div>
  );
}`);

// Change signature
replaced = replaced.replace(/export default function LiquidMask\(props\)\{/, 'export default function HoverMaskReveal(props: HoverMaskRevealProps) {');


// Remove framer specific stuff
replaced = replaced.replace(/addPropertyControls.*?$/s, '');
replaced = replaced.replace(/const isCanvasMode.*?=.*?canvas;/g, 'const isCanvasMode = false;');

const finalCode = imports + replaced;
fs.writeFileSync('src/components/HoverMaskReveal.tsx', finalCode);
