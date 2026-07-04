import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, RefreshCw, Mail, Github, Linkedin, Twitter, Sparkles, X } from 'lucide-react';
import VariableProximity from './VariableProximity';

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedType, setSelectedType] = useState('UI/UX Design');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Section reference for proximity tracking
  const sectionRef = useRef<HTMLDivElement>(null);

  // Canvas Reference for Particle Confetti Explosion
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const requestTypes = [
    'UI/UX Design',
    'Full Brand Identity',
    'Full-Stack React App',
    'Monthly Advisory'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please specify your name so I can address you correctly.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please leave a short message describing your venture.');
      return;
    }

    setIsSubmitting(true);

    // Simulate high-fidelity server validation & pipeline response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setSelectedType('UI/UX Design');
    setIsSubmitted(false);
    setErrorMsg('');
  };

  // Particle Canvas Physics System (confetti explosion)
  useEffect(() => {
    if (!isSubmitted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill the modal boundary or window
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();

    // Define particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      gravity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = canvasWidth / 2;
        this.y = canvasHeight / 2 - 50;
        this.size = Math.random() * 8 + 4;
        
        const colors = [
          '#1E1D1D', // Americano
          '#303031', // Brew
          '#5A4D41', // Mocha
          '#7E6957', // Chai
          '#867C70'  // Roast
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Circular angle distribution for explosion effect
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 8 + 4;
        this.speedX = Math.cos(angle) * velocity;
        this.speedY = Math.sin(angle) * velocity - 2; // slight upward bias
        
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.opacity = 1;
        this.gravity = 0.15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.rotation += this.rotationSpeed;
        this.opacity -= 0.015;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.rotation * Math.PI) / 180);
        context.globalAlpha = Math.max(0, this.opacity);
        context.fillStyle = this.color;
        
        // Draw elegant little paper-like rectangles
        context.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        context.restore();
      }
    }

    const particles: Particle[] = [];
    // Spawn 100 particles for high-fidelity feel
    for (let i = 0; i < 110; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let allDone = true;
      particles.forEach(p => {
        if (p.opacity > 0) {
          p.update();
          p.draw(ctx);
          allDone = false;
        }
      });

      if (!allDone) {
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSubmitted]);

  return (
    <section id="connect" ref={sectionRef} className="relative py-24 px-6 md:px-12 bg-transparent">
      {/* Background Notebook Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto pl-6 md:pl-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] text-[#B8925A] tracking-[0.3em] uppercase bg-[#ECE3D2] border border-[#B8925A]/25 px-2.5 py-1 rounded-full font-bold">
                04 - ESTABLISH CONTACT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1c1c1b] tracking-tight leading-none">
              <span className="font-display block uppercase tracking-tighter text-3d-ivory cursor-pointer">
                <VariableProximity
                  label="Let's Build"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={sectionRef}
                  radius={140}
                  falloff="gaussian"
                  className="font-display block uppercase tracking-tighter text-3d-ivory"
                />
              </span>
              <span className="font-display font-bold italic text-[#B8925A] mt-1 block cursor-pointer">
                <VariableProximity
                  label="something"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 800"
                  containerRef={sectionRef}
                  radius={140}
                  falloff="gaussian"
                  className="font-display font-bold italic text-[#B8925A]"
                />
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4E4842]/85 leading-relaxed font-light">
            Ready to project digital prestige onto your next venture? Fill in the parameters below to launch our discovery.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact Details and Metadata */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-[#1c1c1b] cursor-pointer">
                <VariableProximity
                  label="The Discovery Phase starts with a single dialogue."
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 800"
                  containerRef={sectionRef}
                  radius={160}
                  falloff="gaussian"
                  className="font-display text-2xl font-bold text-[#1c1c1b]"
                />
              </h3>
              <p className="text-sm text-[#4E4842]/85 leading-relaxed font-light">
                Once submitted, I'll review your project goals, analyze market competitors, and propose a specific aesthetic and functional design strategy within 24 hours.
              </p>
            </div>

            {/* Direct Connect Grid - Styled like beautiful paper tags taped to the notebook */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 bg-[#ECE3D2]/40 border border-[#B8925A]/20 p-4 rounded-xl relative shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1c1c1b] flex items-center justify-center text-[#FAF6EE] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-[#4E4842]/60 uppercase tracking-widest font-bold">
                    DIRECT EMAIL
                  </span>
                  <a href="mailto:alex@artefact.studio" className="text-xs font-semibold text-[#1c1c1b] hover:text-[#B8925A] transition-colors">
                    alex@artefact.studio
                  </a>
                </div>
                {/* Visual tape piece */}
                <div className="absolute -top-2 left-1/3 masking-tape text-[7px] bg-white/50 text-[#1c1c1b]/60 px-2 py-0.5 scale-75">
                  ★ SECURE
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-[#ECE3D2]/40 border border-[#B8925A]/20 p-4 rounded-xl relative shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1c1c1b] flex items-center justify-center text-[#B8925A] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[8px] text-[#4E4842]/60 uppercase tracking-widest font-bold">
                    ESTIMATED RESPONSE TIMELINE
                  </span>
                  <span className="text-xs font-semibold text-[#1c1c1b]">
                    Under 24 Hours · Monday - Friday
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-4">
              <span className="block font-mono text-[9px] text-[#4E4842]/60 uppercase tracking-widest font-bold">
                DIGITAL CHANNELS
              </span>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="w-4 h-4" />, href: 'https://github.com' },
                  { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
                  { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#ECE3D2]/50 border border-[#B8925A]/20 flex items-center justify-center text-[#1c1c1b]/70 hover:text-[#FAF6EE] hover:bg-[#1c1c1b] hover:border-[#1c1c1b] transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Liquid Glass Form Panel - Styled as a Premium Charcoal Slate card */}
          <div className="lg:col-span-7">
            <div className="bg-[#1c1c1b] border border-[#B8925A]/15 p-8 md:p-12 rounded-xl relative overflow-hidden shadow-xl text-[#FAF6EE]">
              
              {/* Conditional rendering for Form vs Success Message */}
              {!isSubmitted ? (
                <form id="portfolio-contact-form" onSubmit={handleFormSubmit} className="space-y-8 relative z-10">
                  
                  {/* Category Type selector */}
                  <div className="space-y-3">
                    <label className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest font-bold">
                      What can we help you solve?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {requestTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          id={`type-btn-${type.toLowerCase().replace(/ /g, '-')}`}
                          onClick={() => setSelectedType(type)}
                          className={`text-left p-3.5 rounded-xl border font-mono text-[10px] tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                            selectedType === type
                              ? 'bg-[#B8925A] text-[#1c1c1b] border-[#B8925A] font-bold shadow-lg scale-[1.02]'
                              : 'bg-white/5 text-[#FAF6EE]/70 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Standard text Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest font-bold">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#B8925A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#FAF6EE] placeholder-white/20 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email-input" className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest font-bold">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        name="email"
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-[#B8925A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#FAF6EE] placeholder-white/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message-input" className="block font-mono text-[9px] text-[#ECE3D2]/50 uppercase tracking-widest font-bold">
                      Describe the venture goals & scope
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      placeholder="Share a brief overview of your product goals, budget parameter, timeline expectations, or design references."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#B8925A] focus:outline-none rounded-xl p-4 text-sm text-[#FAF6EE] placeholder-white/20 transition-colors resize-none h-28"
                    ></textarea>
                  </div>

                  {/* Error Notification Banner */}
                  {errorMsg && (
                    <div className="bg-red-950/40 border border-red-900/50 p-4 rounded-xl text-red-200 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="submit-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#FAF6EE] hover:bg-[#B8925A] disabled:bg-white/10 text-[#1c1c1b] hover:text-[#FAF6EE] font-mono text-xs tracking-wider uppercase font-bold py-4 rounded-full transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#1c1c1b]" />
                        SYNTHESIZING...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        TRANSMIT INQUIRY
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Success screen with physics confetti canvas */
                <div id="contact-success-panel" className="relative text-center py-8 space-y-6 flex flex-col items-center justify-center min-h-[400px]">
                  
                  {/* Particle Canvas Layer */}
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none z-0 rounded-xl"
                  ></canvas>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B8925A] animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="relative z-10 space-y-2">
                    <span className="block font-mono text-[9px] text-[#B8925A] tracking-[0.2em] uppercase font-bold">
                      CONNECTION TRANSMITTED SUCCESSFULLY
                    </span>
                    <h3 className="font-display text-3xl font-bold text-[#FAF6EE]">
                      Thank you, {formData.name}!
                    </h3>
                    <p className="max-w-md mx-auto text-sm text-[#ECE3D2]/80 leading-relaxed font-light">
                      I have safely captured your inquiry regarding <strong className="text-[#B8925A] font-mono">{selectedType}</strong>. I will run a competitive brand analysis on your space and reply to you directly at <strong className="text-[#B8925A] font-mono">{formData.email}</strong> within 24 hours.
                    </p>
                  </div>

                  <button
                    id="reset-form-btn"
                    onClick={resetForm}
                    className="relative z-10 font-mono text-[9px] tracking-widest text-[#ECE3D2]/60 hover:text-[#FAF6EE] border border-white/5 hover:border-white/15 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    TRANSMIT ANOTHER MESSAGE
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
