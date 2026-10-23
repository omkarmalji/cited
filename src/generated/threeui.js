var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e5) {
    throw err = [e5], e5;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\constellation-field.html.js
var n;
var init_constellation_field_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\constellation-field.html.js"() {
    n = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumira - Advanced Analytics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>

<body class="relative min-h-screen overflow-x-hidden flex flex-col font-sans text-[#F2F4FB] bg-[#070914] selection:bg-[#7FC4FF]/30 selection:text-[#7FC4FF]">

    <!-- WebGL Constellation Canvas Shell & Depth Overlay -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#0E1222_0%,_#070914_100%)]"></div>
    <div class="fixed inset-0 -z-10 pointer-events-none">
        <canvas id="constellationCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#0E1222]/40 to-[#070914] opacity-80"></div>

    <!-- Header (Elevated Glassy UI) -->
    <nav class="w-full relative z-20 bg-[#0E1222]/40 backdrop-blur-md border-b border-[#1C2236] shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
        <div class="flex justify-between items-center py-5 px-6 md:px-12 max-w-[90rem] mx-auto">
            
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#F2F4FB]">
                <div class="relative h-8 w-8 bg-transparent border border-[#1C2236] flex items-center justify-center rounded-md" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <span class="h-2 w-2 rounded-full bg-[#E6C879]" style="box-shadow: 0 0 12px rgba(230,200,121,0.6);"></span>
                </div>
                <span class="text-xl font-thin tracking-tight uppercase ml-1">Lumira</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Features</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Use Cases</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Developers</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Pricing</a>
            </div>

            <!-- Gradient Border Shell CTA -->
            <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/30 to-transparent">
                <a href="#" class="block bg-[#0E1222]/80 backdrop-blur-sm text-[#E6C879] px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-widest hover:bg-[#E6C879] hover:text-[#0E1222] transition-colors">
                    Get Access
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-28 md:pt-32 lg:pt-40">

        <div class="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

            <!-- Trust Indicators -->
            <div class="flex items-center gap-4 mb-12 fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="flex -space-x-3">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User 1" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-30 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User 2" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-20 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User 3" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-10 opacity-80 mix-blend-luminosity">
                </div>

                <div class="flex flex-col items-start gap-1">
                    <div class="flex items-center text-[#E6C879] text-lg">
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                    </div>
                    <span class="text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">Trusted by 10,000+ data teams</span>
                </div>
            </div>

            <!-- Headline (Ultralight System Display - GSAP Masked Reveal) -->
            <h1 class="masked-reveal text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-[#F2F4FB] text-center leading-tight max-w-5xl cursor-default">
                Uncover hidden patterns<br />with intelligent analytics
            </h1>

            <!-- Subheadline (GSAP Masked Reveal) -->
            <p class="masked-reveal mt-8 text-lg md:text-xl text-[#9AA3BC] max-w-2xl font-normal leading-relaxed">
                Lumira synthesizes complex datasets, disparate sources, and endless metrics into actionable, automated insights that guide your decisions.
            </p>

            <!-- Chunky CTAs to Refined Border Shells -->
            <div class="flex flex-col sm:flex-row items-center gap-6 mt-14 w-full justify-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;">
                
                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/40 to-transparent w-full sm:w-auto" style="box-shadow: 0 16px 40px rgba(0,0,0,0.36);">
                    <a href="#" class="w-full sm:w-auto bg-[#E6C879] text-[#0E1222] px-12 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#E6C879]/90 transition-colors flex items-center justify-center">
                        Get Access
                    </a>
                </div>

                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/16 to-transparent w-full sm:w-auto" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <a href="#" class="w-full sm:w-auto bg-[#0E1222]/60 backdrop-blur-md text-[#F2F4FB] px-10 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1C2236]/80 transition-colors flex items-center justify-center gap-2 group">
                        Explore Demo
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl text-[#7FC4FF] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>

            </div>
        </div>

        <!-- Logos Section -->
        <div class="w-full mt-28 md:mt-32 max-w-6xl mx-auto flex flex-col items-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;">
            <p class="text-xs font-normal text-[#5C668A] mb-12 tracking-widest uppercase">Powering data-driven enterprises</p>

            <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:box-linear" stroke-width="1.5"></iconify-icon>
                    Quantus
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:globus-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    NexusData
                </div>

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    OmniStream
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:routing-2-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    Veridian
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:letter-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    ApexMetrics
                </div>

                <div class="hidden lg:flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    Zenith
                </div>

            </div>
        </div>

    </main>

    <script>
        // WebGL Drifting Nodes & Network Logic
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160; 
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initNodes();
        });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        // Pointer gravity tracker
        document.addEventListener('mousemove', e => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        // Clear pointer on leave
        document.addEventListener('mouseleave', () => {
            pointer.x = -1000;
            pointer.y = -1000;
        });

        function dist(a, b) {
            return Math.hypot(a.x - b.x, a.y - b.y);
        }

        // Render Loop
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            // Draw Links first so nodes sit crisp on top
            ctx.strokeStyle = '#E6C879';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.22 + (1 - d/LINK) * 0.55;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                // Gentle Pointer gravity
                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.005;
                    node.y -= (node.y - pointer.y) * 0.005;
                }
                
                // Draw Node (Pale Gold) \u2014 core + soft halo so particles read at retina scale
                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '#E6C879';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animateCanvas();
        }

        // --- Intersection Observer for structural fade-ins ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });

        // --- GSAP Masked Staggered Word Reveal ---
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.masked-reveal');
                
                revealElements.forEach(el => {
                    // Non-destructive split that respects <br> tags
                    const html = el.innerHTML;
                    const fragments = html.split(/(<br\\s*\\/?>|\\s+)/);
                    el.innerHTML = '';
                    
                    fragments.forEach(frag => {
                        if (/<br/i.test(frag)) {
                            el.appendChild(document.createElement('br'));
                        } else if (frag.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: bottom; padding-top: 0.1em; margin-top: -0.1em;';
                            
                            const inner = document.createElement('span');
                            inner.className = 'reveal-word';
                            inner.style.cssText = 'display: inline-block; transform: translateY(110%); will-change: transform;';
                            inner.innerHTML = frag;
                            
                            wrapper.appendChild(inner);
                            el.appendChild(wrapper);
                        } else {
                            // Preserve spaces
                            el.appendChild(document.createTextNode(frag));
                        }
                    });

                    // Trigger the animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    });
                });
            }
        });
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\particle-drift.html.js
var n2;
var init_particle_drift_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\particle-drift.html.js"() {
    n2 = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith Compute Network</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030509] min-h-screen flex items-center justify-center p-4 md:p-12 font-sans antialiased text-[#FFFFFF] overflow-x-hidden selection:bg-[#60A5FA] selection:text-[#030509]">

    <!-- Gradient Border Shell Technique -->
    <div class="w-full max-w-[1440px] shadow-[0px_100px_80px_rgba(0,0,0,0.12),_0px_41.8px_33.4px_rgba(0,0,0,0.086),_0px_22.3px_17.9px_rgba(0,0,0,0.07)]" style="display:inline-block; padding:1px; border-radius:24px; background:linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0));">
        
        <!-- Main Inner Surface -->
        <div class="relative w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] md:min-h-[650px]" style="background:#030509; border-radius:23px; box-shadow:rgba(255, 255, 255, 0.02) 0px 0px 40px 0px inset;">
            
            <!-- Canvas Particle System Background Field -->
            <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"></canvas>

            <!-- Matte Noise Texture Overlay -->
            <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

            <!-- Left Column: Copy & Controls -->
            <div class="w-full md:w-[38%] px-8 lg:px-16 py-10 md:py-14 flex flex-col justify-between relative z-20 shrink-0 border-r border-white/5">
                
                <!-- Lineart Detail: Corner Brackets -->
                <div class="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20"></div>
                <div class="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20"></div>
                <div class="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20"></div>
                <div class="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20"></div>

                <!-- Top Badge -->
                <div class="fade-in-el opacity-0 inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-16 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                    ZENITH COMPUTE
                </div>

                <!-- Heading (Playfair Display) -->
                <div>
                    <h1 id="hero-heading" class="text-5xl md:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none opacity-0 font-light" style="font-family: 'Playfair Display', serif;">
                        Infinite execution threads.<br>The cognitive backbone.
                    </h1>

                    <!-- Body Text -->
                    <p class="fade-in-el opacity-0 text-[#9CA3AF] text-lg leading-relaxed max-w-[320px] font-light mb-8" style="font-family: 'Inter', sans-serif;">
                        An autonomous state-management protocol synchronizing distributed workloads across edge micro-clusters and centralized servers. Adjust the target environment to refine processing speed.
                    </p>
                    
                    <!-- Primary Action Button -->
                    <button class="fade-in-el opacity-0 bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-colors flex items-center gap-2" style="font-family: 'Inter', sans-serif;">
                        Provision Network
                        <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                    </button>
                </div>

                <!-- Custom Slider Control -->
                <div class="fade-in-el opacity-0 mt-16 pt-8 w-full relative">
                    <!-- Track Line -->
                    <div class="w-full h-[1px] bg-white/10 relative">
                        <!-- Thumb / Active Indicator -->
                        <div class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    
                    <!-- Labels -->
                    <div class="flex justify-between mt-4 w-full" style="font-family: 'Inter', sans-serif;">
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Local</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Edge</span>
                        <span class="text-xs font-light tracking-widest uppercase text-[#60A5FA] cursor-default">Ring</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Core</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Cloud</span>
                    </div>
                </div>

            </div>

            <!-- Right Column: Media Frame -->
            <div class="w-full md:w-[62%] relative bg-transparent overflow-hidden min-h-[400px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none" style="transform-style: preserve-3d;">
                
                <!-- Deep Integration Gradients -->
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90"></div>
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#030509] via-[#030509]/30 to-transparent opacity-80"></div>
                
                <!-- Glassmorphism Floating Logic Card -->
                <div id="floating-card" class="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-xs uppercase tracking-widest font-light" style="font-family: 'Inter', sans-serif;">Throughput</span>
                    </div>
                    <div class="text-3xl leading-9 tracking-tighter mb-1" style="font-family: 'Inter', sans-serif;">128.6 PB/s</div>
                    <div class="text-xs uppercase tracking-widest text-[#60A5FA]/60" style="font-family: 'Inter', sans-serif;">Sync Efficiency</div>
                </div>

            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- ASCII Particle System Implementation ---
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            function initParticles() {
                nodes = Array.from({ length: 90 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.1,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 25 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 6) + 3,
                    opacity: Math.random() * 0.5 + 0.3
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams (Fast)
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 100;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes (ASCII)
                ctx.font = '12px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines
                ctx.lineWidth = 0.5;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.15 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy; // Slow drift
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap
                    if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

                    // Mouse Connection
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(96, 165, 250, \${0.5 * (1 - dist/180)})\`;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();

            // --- GSAP Timeline Reveals ---
            const heading = document.getElementById('hero-heading');
            
            // Staggered vertical masked word setup
            const words = heading.innerHTML.trim().split(/(<br\\s*\\/?>|\\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
            let newHTML = '';
            words.forEach(word => {
                if(word.toLowerCase().includes('<br')) {
                    newHTML += '<br/>';
                } else if (word.trim() !== '') {
                    newHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span class="reveal-word inline-block translate-y-full opacity-0">\${word}</span></span> \`;
                }
            });
            heading.innerHTML = newHTML;
            heading.style.opacity = 1;

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                delay: 0.1 
            });

            tl.to('.reveal-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, 0);

            tl.to('.fade-in-el', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.6);

            // Canvas Timeline Integration
            tl.to(canvas, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0.2);

            // Floating Logic independent 3D shifts
            gsap.to('#floating-card', {
                y: "-=12",
                rotationX: 4,
                rotationY: -4,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\particle-network.html.js
var n3;
var init_particle_network_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\particle-network.html.js"() {
    n3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnichannel Data Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white m-0 p-0 h-screen w-full flex flex-col overflow-hidden selection:bg-blue-500/30 bg-black relative" style="font-family: 'Inter', sans-serif;">

    <!-- Background Image Stage -->
    <div class="absolute inset-0 z-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
    
    <!-- Directional Tonal Washes for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

    <!-- Visible Structural Grid Scaffold -->
    <div class="absolute inset-0 z-10 pointer-events-none flex justify-center w-full">
        <div class="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-4 border-x border-white/5 divide-y-0 md:divide-x divide-white/5 relative">
            <!-- Structural Line Markers -->
            <div class="hidden md:block absolute top-[20%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute top-[20%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <!-- Grid columns -->
            <div class="relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block"></div>
        </div>
    </div>

    <!-- Controls Box (Top Right Anchored) -->
    <div class="absolute top-6 right-6 md:top-8 md:right-8 z-40 flex gap-3">
        <!-- Gradient Border Treatment Applied via wrapper -->
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button id="pauseBtn" class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Pause Animation">
                <iconify-icon icon="solar:pause-linear" width="18" height="18" stroke-width="1.5" class="group-hover:scale-110 transition-transform"></iconify-icon>
            </button>
        </div>
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Settings">
                <iconify-icon icon="solar:settings-linear" width="18" height="18" stroke-width="1.5" class="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
            </button>
        </div>
    </div>

    <!-- Additive Canvas Overlay -->
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full z-20 pointer-events-none"></canvas>

    <!-- Anchored Content Overlay low in viewport -->
    <main class="relative z-30 flex-grow w-full flex flex-col justify-end pb-12 md:pb-24">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-end">
                
                <!-- Primary Headline Block -->
                <header class="md:col-span-2 flex flex-col gap-6">
                    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white drop-shadow-lg">
                        <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Omnichannel</span></span> <br>
                        <span class="text-white/60">
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Data</span></span>
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Intelligence</span></span>
                        </span>
                    </h1>
                    <p id="split-text-target" class="text-sm md:text-base font-extralight text-white/50 max-w-sm leading-relaxed tracking-wide">
                        Empowering next-generation analytics platforms with real-time distributed insights and secure, scalable hybrid-cloud processing architectures.
                    </p>
                </header>

                <!-- Secondary Framed Grid Lane (Stats) with Premium Gradient Border -->
                <div class="md:col-span-2 relative p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent backdrop-blur-sm">
                    <!-- Corner structural crosses -->
                    <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-white/40 z-10"></div>
                    <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-white/40 z-10"></div>

                    <!-- Grid Layout for Stats inside Gradient Wrapper -->
                    <div class="grid grid-cols-2 gap-px bg-white/5 w-full h-full relative z-0">
                        <!-- Stat 1 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">120+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Edge<br>Nodes</span>
                        </div>

                        <!-- Stat 2 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">5.2P</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Data<br>Indexed</span>
                        </div>

                        <!-- Stat 3 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">&lt;10ms</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Query<br>Latency</span>
                        </div>

                        <!-- Stat 4 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">3.4B+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Event<br>Triggers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // Set up the masked text reveal dynamically for the paragraph text
        const p = document.getElementById('split-text-target');
        const text = p.innerText.trim();
        const words = text.split(/\\s+/);
        p.innerHTML = '';
        words.forEach(word => {
            p.innerHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block gsap-word translate-y-full">\${word}</span></span> \`;
        });

        // Initialize GSAP ScrollTrigger for masked reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.gsap-word', {
            y: "0%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: "main",
                start: "top 95%"
            }
        });

        // Canvas Particle Network (Original logic preserved)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const pauseBtn = document.getElementById('pauseBtn');
        let isPaused = false;

        let width, height;
        let particles = [];
        const particleCount = 200;
        const speedMultiplier = 1.1;

        let originX, originY;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            originX = width / 2;
            originY = height * 0.7; // Lowered slightly to fit grid stage better
        }

        class Particle {
            constructor() {
                this.reset();
                this.z = Math.random() * 1000;
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 600;
                
                this.x = Math.cos(angle) * radius;
                this.y = (Math.sin(angle) * radius) - 150; 
                
                this.z = 1000; 
                this.speed = (Math.random() * 2 + 1) * speedMultiplier;
                
                // Restrained blue and white hues for technical atmosphere
                const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';
                this.color = \`rgb(\${hue})\`;
                this.length = Math.random() * 2 + 0.5;
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                }
            }

            draw() {
                const fov = 300; 
                
                const scale = fov / this.z;
                const px = originX + this.x * scale;
                const py = originY + this.y * scale;

                const prevZ = this.z + this.speed * this.length;
                const prevScale = fov / prevZ;
                const prevPx = originX + this.x * prevScale;
                const prevPy = originY + this.y * prevScale;

                let opacity = 1 - (this.z / 1000);
                if (this.z < 100) opacity = this.z / 100; 
                if (opacity < 0) opacity = 0;

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                
                ctx.strokeStyle = this.color.replace('rgb', 'rgba').replace(')', \`, \${opacity * 0.9})\`);
                // Hairline strokes stay crisp under retina DPR scaling
                ctx.lineWidth = Math.max(0.25, (1 - (this.z / 1000)) * 0.4);
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                
                ctx.stroke();
            }
        }

        function init() {
            resize();
            window.addEventListener('resize', resize);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isPaused) {
                // Faster fade keeps streaks sharp instead of smeared
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fillRect(0, 0, width, height);

                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = pauseBtn.querySelector('iconify-icon');
            if (isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
            }
        });

        init();
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\flux-vortex.html.js
var n4;
var init_flux_vortex_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\flux-vortex.html.js"() {
    n4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Flux</title>
    
    <!-- Tailwind & Iconify -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- GSAP Core & ScrollTrigger -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    
    <!-- Three.js Import Map -->
    <script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
    }
    <\/script>
</head>
<body class="bg-[#050505] text-white selection:bg-white selection:text-black font-extralight overflow-x-hidden relative" style="font-family: 'Space Grotesk', sans-serif;">

    <!-- Loading Overlay -->
    <div id="loader" class="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-1000">
        <div class="flex flex-col items-center gap-4">
            <div class="h-px w-24 bg-neutral-800 overflow-hidden relative">
                <div id="shimmer-bar" class="absolute inset-y-0 left-0 bg-white w-full -translate-x-full"></div>
            </div>
            <p class="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light">
                Booting Sequence
            </p>
        </div>
    </div>

    <!-- 3D Canvas Container -->
    <div class="fixed inset-0 z-0">
        <canvas id="webgl-canvas" class="w-full h-full outline-none cursor-auto"></canvas>
    </div>

    <!-- Container Lines & Corner Squares -->
    <div class="fixed inset-y-6 inset-x-6 md:inset-y-12 md:inset-x-12 border-x border-white/10 pointer-events-none z-10 flex flex-col justify-between">
        <!-- Top Left -->
        <div class="absolute top-0 -translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Top Right -->
        <div class="absolute top-0 -translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Left -->
        <div class="absolute bottom-0 translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Right -->
        <div class="absolute bottom-0 translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
    </div>

    <!-- Scrollable UI Overlay -->
    <div class="relative z-20 flex flex-col min-h-[160vh] pointer-events-none">
        
        <!-- Fixed Navigation -->
        <header class="fixed top-6 md:top-12 left-6 right-6 md:left-12 md:right-12 px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item z-30">
            <div class="flex items-center gap-3 group cursor-pointer">
                <div class="w-8 h-8 rounded-none border border-neutral-800 flex items-center justify-center bg-[#050505] group-hover:border-neutral-400 transition-colors duration-300">
                    <span class="font-light text-xs tracking-tighter text-white">Q</span>
                </div>
                <span class="text-xs font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase glitch-target">
                    Quantum
                </span>
            </div>

            <nav class="hidden md:flex items-center gap-10 px-8 py-3 rounded-none" style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid transparent; background-clip: padding-box, border-box; background-image: linear-gradient(#050505, #050505), linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%);">
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Topology</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Matrix</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Protocol</a>
            </nav>

            <button class="group flex items-center gap-3 px-5 py-2.5 rounded-none transition-all duration-300" style="background: linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05)) border-box; border: 1px solid transparent;">
                <span class="text-xs font-light tracking-widest uppercase text-neutral-400 group-hover:text-white">Connect</span>
                <iconify-icon icon="solar:arrow-right-linear" width="14" class="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
            </button>
        </header>

        <!-- Main Content Area -->
        <main class="flex-grow flex flex-col pt-[35vh] pb-[40vh] px-12 md:px-24 pointer-events-none relative z-20 w-full max-w-6xl mx-auto scroll-trigger-area">
            <div class="space-y-12">
                <!-- Status Tagline -->
                <div class="overflow-hidden">
                    <div class="flex items-center gap-3 mask-word translate-y-full inline-flex">
                        <span class="flex h-1.5 w-1.5 rounded-none bg-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                        <p class="text-xs uppercase tracking-[0.25em] text-neutral-400 font-extralight">
                            Neural Node: Active
                        </p>
                    </div>
                </div>

                <!-- Headline with Staggered Masked Reveal -->
                <div class="max-w-4xl flex flex-wrap gap-x-6 gap-y-2">
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Dynamic</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Resonance</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700 glitch-target">Field.</span></span>
                </div>

                <!-- Description -->
                <div class="overflow-hidden max-w-lg">
                    <p class="mask-word translate-y-[110%] inline-block text-sm md:text-base text-neutral-500 leading-relaxed font-extralight">
                        An autonomous volumetric simulation powered by algorithmic dispersion and real-time data flow.
                    </p>
                </div>

                <!-- CTA Actions -->
                <div class="overflow-hidden pt-6">
                    <div class="mask-word translate-y-[110%] flex flex-wrap gap-5 pointer-events-auto">
                        <button class="relative group px-8 py-3.5 bg-white text-black rounded-none overflow-hidden">
                            <div class="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <div class="relative flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-black">Initialize</span>
                                <iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                            </div>
                        </button>

                        <button class="group px-8 py-3.5 rounded-none transition-colors backdrop-blur-sm" style="background: linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%) border-box; border: 1px solid transparent;">
                            <div class="flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-neutral-400 group-hover:text-white transition-colors">System Specs</span>
                                <iconify-icon icon="solar:document-linear" width="16" class="text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Fixed Footer -->
        <footer class="fixed bottom-6 md:bottom-12 left-6 right-6 md:left-12 md:right-12 pointer-events-auto nav-item opacity-0 px-6 py-6 grid grid-cols-3 items-end z-30">
            <div class="flex flex-col gap-2">
                <span class="text-[10px] uppercase tracking-widest text-neutral-600 font-light">Telemetry</span>
                <span id="coords" class="text-xs font-mono text-neutral-300 font-extralight">0.00.0.00.00</span>
            </div>

            <div class="hidden sm:flex flex-col gap-2 items-center">
                <span class="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-light">Scroll to traverse</span>
                <div class="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent"></div>
            </div>
            
            <div class="flex gap-6 justify-self-end">
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
                </a>
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
                </a>
            </div>
        </footer>
    </div>

    <!-- Main Logic & Interactions -->
    <script type="module">
        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // --- Configuration (Monotone) ---
        const config = {
            colors: {
                bg: 0x050505,
                primary: 0xdddddd, 
                secondary: 0x555555
            }
        };

        // --- Scene Setup ---
        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(config.colors.bg);
        scene.fog = new THREE.FogExp2(config.colors.bg, 0.04);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            powerPreference: "high-performance",
            alpha: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;

        // --- Objects Container ---
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // --- 1. Vortex Particle Field (Smaller Dots) ---
        const vortexCount = 9500;
        const vortexPositions = new Float32Array(vortexCount * 3);
        const vortexRadius = new Float32Array(vortexCount);
        const vortexAngle = new Float32Array(vortexCount);
        const vortexHeight = new Float32Array(vortexCount);
        const vortexSpeed = new Float32Array(vortexCount);

        for (let i = 0; i < vortexCount; i++) {
            const i3 = i * 3;
            const y = (Math.random() - 0.5) * 7.5;
            const funnel = 0.4 + Math.abs(y) * 0.2;
            const r = (0.1 + Math.pow(Math.random(), 1.5) * 2.5) * funnel;
            const a = Math.random() * Math.PI * 2;

            vortexHeight[i] = y;
            vortexRadius[i] = r;
            vortexAngle[i] = a;
            vortexSpeed[i] = 0.5 + Math.random() * 0.8;

            vortexPositions[i3] = Math.cos(a) * r;
            vortexPositions[i3 + 1] = y;
            vortexPositions[i3 + 2] = Math.sin(a) * r;
        }

        const vortexGeometry = new THREE.BufferGeometry();
        vortexGeometry.setAttribute('position', new THREE.BufferAttribute(vortexPositions, 3));
        const vortexMaterial = new THREE.PointsMaterial({
            size: 0.006, // Smaller dots requested
            color: config.colors.primary,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const vortexPoints = new THREE.Points(vortexGeometry, vortexMaterial);
        mainGroup.add(vortexPoints);

        // --- 2. Spiral Guides ---
        function createSpiralLine(turnOffset, color) {
            const spiralPoints = [];
            const pointCount = 400;
            for (let i = 0; i < pointCount; i++) {
                const t = i / (pointCount - 1);
                const angle = t * Math.PI * 14 + turnOffset;
                const radius = 0.2 + t * 2.8;
                const y = (0.5 - t) * 6.0;
                spiralPoints.push(new THREE.Vector3(
                    Math.cos(angle) * radius,
                    y,
                    Math.sin(angle) * radius
                ));
            }
            const spiralGeometry = new THREE.BufferGeometry().setFromPoints(spiralPoints);
            const spiralMaterial = new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });
            return new THREE.Line(spiralGeometry, spiralMaterial);
        }

        const spiralLineA = createSpiralLine(0, config.colors.secondary);
        const spiralLineB = createSpiralLine(Math.PI, config.colors.primary);
        mainGroup.add(spiralLineA);
        mainGroup.add(spiralLineB);

        // --- 3. Ambient Particles ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 300;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.008,
            color: config.colors.secondary,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- Post Processing ---
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
        bloomPass.strength = 0.6;
        bloomPass.radius = 0.3;
        bloomPass.threshold = 0.2;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // --- Interactions & Animation State ---
        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
            
            // Coordinates Update
            const xVal = (event.clientX / window.innerWidth).toFixed(2);
            const yVal = (event.clientY / window.innerHeight).toFixed(2);
            document.getElementById('coords').innerText = \`\${xVal}.\${yVal}.00\`;
        });

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.0008;

            mainGroup.rotation.y += 0.002;
            mainGroup.rotation.y += 0.03 * (targetX - mainGroup.rotation.y);
            mainGroup.rotation.x += 0.03 * (targetY - mainGroup.rotation.x);

            const positions = vortexGeometry.attributes.position.array;
            for (let i = 0; i < vortexCount; i++) {
                const i3 = i * 3;
                const spin = elapsedTime * vortexSpeed[i] * 0.5 + vortexHeight[i] * 0.5;
                const angle = vortexAngle[i] + spin;
                const pulse = Math.sin(elapsedTime * 1.2 + i * 0.01) * 0.05;
                const radius = vortexRadius[i] + pulse;

                positions[i3] = Math.cos(angle) * radius;
                positions[i3 + 1] = vortexHeight[i] + Math.sin(elapsedTime + i * 0.02) * 0.03;
                positions[i3 + 2] = Math.sin(angle) * radius;
            }
            vortexGeometry.attributes.position.needsUpdate = true;

            spiralLineA.rotation.y = elapsedTime * 0.15;
            spiralLineB.rotation.y = -elapsedTime * 0.12;

            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = -mouseY * 0.0001;

            composer.render();
            requestAnimationFrame(animate);
        }

        // --- Resize ---
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
        });

        // --- Init & GSAP Animations ---
        window.onload = () => {
            animate();

            // Loader Shimmer loop
            gsap.to("#shimmer-bar", { x: "100%", duration: 1.5, repeat: -1, ease: "power1.inOut" });

            const tl = gsap.timeline();

            // 1. Loader Exit & Nav Enter
            tl.to("#loader", {
                opacity: 0,
                duration: 1.0,
                onComplete: () => { document.getElementById("loader").style.display = "none"; }
            })
            .from(mainGroup.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 2.0, ease: "power3.out" }, "-=0.5")
            .to(".nav-item", { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, "-=1.5");

            // 2. ScrollTrigger Masked Staggered Word Reveal
            gsap.to(".mask-word", {
                scrollTrigger: {
                    trigger: ".scroll-trigger-area",
                    start: "top 80%",
                },
                y: 0,
                duration: 1.4,
                stagger: 0.1,
                ease: "power4.out"
            });
        };
    <\/script>

    <!-- JS based Glitch Effect to avoid arbitrary style tags -->
    <script>
        (function(){
            const targets = document.querySelectorAll('.glitch-target');
            let lastX = 0, lastY = 0, lastTime = 0;
            
            document.addEventListener('mousemove', e => {
                const now = Date.now(), dt = now - lastTime;
                if (dt > 40) {
                    const dx = e.clientX - lastX, dy = e.clientY - lastY;
                    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
                    
                    if (speed > 2.0) {
                        targets.forEach(el => {
                            if (!el.dataset.animating) {
                                el.dataset.animating = "true";
                                gsap.to(el, {
                                    x: () => (Math.random() - 0.5) * 4,
                                    y: () => (Math.random() - 0.5) * 2,
                                    textShadow: "2px 0 rgba(255,255,255,0.4), -2px 0 rgba(100,100,100,0.4)",
                                    duration: 0.05,
                                    yoyo: true,
                                    repeat: 3,
                                    onComplete: () => {
                                        gsap.set(el, { x: 0, y: 0, textShadow: "none" });
                                        setTimeout(() => el.dataset.animating = "", 200);
                                    }
                                });
                            }
                        });
                    }
                    lastX = e.clientX; lastY = e.clientY; lastTime = now;
                }
            });
        })();
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\portal-field.html.js
var e;
var init_portal_field_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\portal-field.html.js"() {
    e = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEON // Portal</title>
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
</head>
<body style="
    --bg-base: #020202; 
    --bg-surface-1: rgba(255, 255, 255, 0.015); 
    --bg-surface-2: rgba(255, 255, 255, 0.04); 
    --bg-surface-3: rgba(255, 255, 255, 0.08);
    --text-primary: #F4F4F5; 
    --text-secondary: #A3A3A3; 
    --text-accent: #020202; 
    --text-tech: #666666;
    --bg-accent: #F4F4F5; 
    --bg-accent-active: #22C55E;
    --border-glow: rgba(255, 255, 255, 0.08);
    --glow-color: 255, 255, 255;
    background-color: var(--bg-base); 
    color: var(--text-primary);
    transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
" class="font-['Inter'] min-h-screen overflow-hidden flex items-center justify-center antialiased selection:bg-[var(--bg-surface-3)] selection:text-[var(--text-primary)]">

    <!-- Ambient Background -->
    <div id="webgl-container" class="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen"></div>

    <!-- Structural Framing -->
    <div class="fixed inset-4 lg:inset-8 pointer-events-none z-0 border border-[var(--border-glow)] hidden lg:block transition-colors duration-700">
        <!-- Corner Registration Marks -->
        <div class="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        
        <!-- Precision Grid Lines -->
        <div class="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[var(--border-glow)] to-transparent opacity-20"></div>
        <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent opacity-10"></div>
    </div>

    <!-- Interface Controls -->
    <div class="absolute top-6 lg:top-12 right-6 lg:right-12 z-20 flex items-center gap-6">
        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-tech)] tracking-widest uppercase transition-colors duration-500 hidden sm:block">SYS-2.9</div>
        <button id="themeToggleBtn" class="h-8 px-4 border border-[var(--border-glow)] bg-[var(--bg-surface-1)] hover:bg-[var(--bg-surface-2)] text-[var(--text-primary)] backdrop-blur-md flex items-center gap-2 transition-all duration-300 text-xs font-light tracking-wide rounded-sm">
            <iconify-icon id="themeIcon" icon="solar:moon-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
            <span id="themeText">DARK</span>
        </button>
    </div>

    <!-- Metadata Labels -->
    <div class="absolute top-12 left-8 lg:top-16 lg:left-16 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase transition-colors duration-500 hidden sm:block">
        NEURAL.NET // ACTIVE
    </div>
    <div style="transform: translateY(-50%) rotate(90deg); transform-origin: center right;" class="absolute top-1/2 right-8 lg:right-12 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase flex items-center gap-4 transition-colors duration-500 hidden xl:flex">
        <span class="opacity-40">[</span>
        <span>PRT</span>
        <span class="opacity-40">=</span>
        <span>ECHO-9</span>
        <span class="opacity-40">]</span>
    </div>

    <!-- Remixed Layout: Typographic Hero + Interactive Section -->
    <div class="relative z-10 w-full max-w-[1440px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 py-24 gap-16 lg:gap-8">
        
        <!-- Hero Section -->
        <div class="w-full lg:w-1/2 flex flex-col gap-6 lg:pr-12">
            <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-secondary)] tracking-widest uppercase flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-[var(--bg-accent-active)] animate-pulse"></div>
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authorization Pending</span></span>
            </div>
            
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extralight leading-[0.95] text-[var(--text-primary)] uppercase">
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Establish</span></span>
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Connection</span></span>
            </h1>
            
            <p class="text-sm lg:text-base font-extralight text-[var(--text-secondary)] leading-relaxed max-w-md mt-4">
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Restricted network sector. Verify your identity via biometric uplink to access the centralized mainframe and quantum datasets.</span></span>
            </p>
        </div>

        <!-- Second Section (Interactive Card) -->
        <div class="w-full max-w-[420px] lg:w-1/2 flex justify-center lg:justify-end">
            
            <!-- Structural Shell with Gradient Border -->
            <div class="relative w-full rounded-sm p-[1px] bg-gradient-to-br from-[var(--border-glow)] via-transparent to-[var(--border-glow)] group">
                
                <div class="w-full rounded-sm bg-[var(--bg-surface-1)] backdrop-blur-2xl p-8 lg:p-10 flex flex-col gap-8 transition-colors duration-500 shadow-2xl shadow-black/40">
                    
                    <!-- Card Header -->
                    <div class="flex flex-col gap-2">
                        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-primary)] border border-[var(--border-glow)] bg-[var(--bg-surface-2)] px-3 py-1 self-start mb-2 tracking-widest uppercase rounded-sm transition-colors duration-500">IDENTITY.CHECK</div>
                        <h2 class="text-2xl tracking-tight font-light text-[var(--text-primary)]">
                            <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authentication</span></span>
                        </h2>
                    </div>

                    <!-- Alternate Methods Grid -->
                    <div class="grid grid-cols-3 gap-3">
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Biometric Scan">
                            <iconify-icon icon="solar:fingerprint-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Hardware Token">
                            <iconify-icon icon="solar:smartphone-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Neural Passkey">
                            <iconify-icon icon="solar:shield-keyhole-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                    </div>

                    <!-- Divider -->
                    <div class="flex items-center gap-4 text-[var(--text-tech)] font-['JetBrains_Mono'] text-xs tracking-widest uppercase">
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                        <span>FALLBACK PROTOCOL</span>
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                    </div>

                    <!-- Input Fields -->
                    <div class="flex flex-col gap-5">
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">AGENT_ALIAS</label>
                            <input type="text" placeholder="agent.name@aeon.net" autocomplete="username" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">ACCESS_CODE</label>
                            <input type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                    </div>

                    <!-- Primary Action -->
                    <button class="h-14 mt-4 rounded-sm bg-[var(--bg-accent)] text-[var(--text-accent)] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-[var(--bg-accent-active)] hover:text-white group/submit relative overflow-hidden">
                        <span class="relative z-10 flex items-center gap-2">
                            INITIATE LINK 
                            <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" class="text-base transition-transform duration-300 group-hover/submit:translate-x-1"></iconify-icon>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <script>
        // GSAP Masked Reveal Directive
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.to(".masked-word", {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.1,
                delay: 0.1
            });
        });

        // Theme Toggling Logic
        const body = document.body;
        const themeBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        let isDark = true;

        const themes = {
            dark: {
                '--bg-base': '#020202',
                '--bg-surface-1': 'rgba(255, 255, 255, 0.015)',
                '--bg-surface-2': 'rgba(255, 255, 255, 0.04)',
                '--bg-surface-3': 'rgba(255, 255, 255, 0.08)',
                '--text-primary': '#F4F4F5',
                '--text-secondary': '#A3A3A3',
                '--text-accent': '#020202',
                '--text-tech': '#666666',
                '--bg-accent': '#F4F4F5',
                '--bg-accent-active': '#22C55E',
                '--border-glow': 'rgba(255, 255, 255, 0.08)',
                '--glow-color': '255, 255, 255',
                shaderCore: '#FFFFFF',
                shaderFringe: '#1e3a8a'
            },
            light: {
                '--bg-base': '#F4F4F5',
                '--bg-surface-1': 'rgba(0, 0, 0, 0.02)',
                '--bg-surface-2': 'rgba(0, 0, 0, 0.05)',
                '--bg-surface-3': 'rgba(0, 0, 0, 0.1)',
                '--text-primary': '#020202',
                '--text-secondary': '#666666',
                '--text-accent': '#FFFFFF',
                '--text-tech': '#A3A3A3',
                '--bg-accent': '#020202',
                '--bg-accent-active': '#16A34A',
                '--border-glow': 'rgba(0, 0, 0, 0.08)',
                '--glow-color': '0, 0, 0',
                shaderCore: '#020202',
                shaderFringe: '#94a3b8'
            }
        };

        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            const currentTheme = isDark ? themes.dark : themes.light;

            for (const [key, value] of Object.entries(currentTheme)) {
                if (key.startsWith('--')) {
                    body.style.setProperty(key, value);
                }
            }

            if (isDark) {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeText.textContent = 'DARK';
            } else {
                themeIcon.setAttribute('icon', 'solar:sun-linear');
                themeText.textContent = 'LIGHT';
            }

            if (typeof material !== 'undefined') {
                material.uniforms.u_colorCore.value = new THREE.Color(currentTheme.shaderCore);
                material.uniforms.u_colorFringe.value = new THREE.Color(currentTheme.shaderFringe);
                material.uniforms.u_isLightMode.value = isDark ? 0.0 : 1.0;
            }
        });

        // Ambient WebGL Background
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);

        const vertexShader = \`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform vec3 u_colorCore;
            uniform vec3 u_colorFringe;
            uniform float u_isLightMode;
            varying vec2 vUv;

            vec2 hash( vec2 p ) {
                p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
                return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }
            float noise( in vec2 p ) {
                const float K1 = 0.366025404;
                const float K2 = 0.211324865;
                vec2 i = floor( p + (p.x+p.y)*K1 );
                vec2 a = p - i + (i.x+i.y)*K2;
                vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
                vec2 b = a - o + K2;
                vec2 c = a - 1.0 + 2.0*K2;
                vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
                vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
                return dot( n, vec3(70.0) );
            }

            float sdArc(vec2 p, vec2 center, float radius, float width, float warp) {
                p.y += sin(p.x * 2.0 + u_time * 0.3) * warp;
                p.x += noise(p * 1.5 + u_time * 0.1) * (warp * 0.8);
                float d = length(p - center) - radius;
                return abs(d) - width;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                vec2 st = uv;
                st.x *= u_resolution.x / u_resolution.y;
                
                vec2 mouseOffset = (u_mouse - 0.5) * 0.05;
                st += mouseOffset;

                // Center organic form behind the content area
                vec2 center = vec2(0.5, 0.5);
                
                float d1 = sdArc(st, center, 0.6, 0.02, 0.15);
                float d2 = sdArc(st, center, 0.65, 0.06, 0.2);
                
                float coreGlow = exp(-d1 * 30.0);
                float fringeGlow = exp(-d2 * 10.0);
                float wash = smoothstep(1.5, -0.5, length(st - center)) * 0.15;

                vec3 finalColor = vec3(0.0);
                finalColor += u_colorCore * coreGlow;
                finalColor += u_colorFringe * fringeGlow;
                finalColor += u_colorFringe * wash * (sin(u_time * 0.5) * 0.2 + 0.8);

                float alpha = clamp(coreGlow + fringeGlow + wash, 0.0, 1.0);
                finalColor = vec3(1.0) - exp(-finalColor * 1.5);
                
                if(u_isLightMode > 0.5) {
                    alpha = clamp((coreGlow * 1.2 + fringeGlow + wash * 0.4), 0.0, 0.4);
                }

                gl_FragColor = vec4(finalColor, alpha * 0.6);
            }
        \`;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                u_colorCore: { value: new THREE.Color(themes.dark.shaderCore) },
                u_colorFringe: { value: new THREE.Color(themes.dark.shaderFringe) },
                u_isLightMode: { value: 0.0 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending 
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let targetMouse = new THREE.Vector2(0.5, 0.5);
        document.addEventListener('mousemove', (e) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1.0 - (e.clientY / window.innerHeight); 
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value = clock.getElapsedTime();
            material.uniforms.u_mouse.value.lerp(targetMouse, 0.03);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            material.uniforms.u_resolution.value.set(width, height);
        });
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\flow-field.html.js
var n5;
var init_flow_field_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\flow-field.html.js"() {
    n5 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flow Field with Particle Trails</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200, 149, 108, 0.5);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">Flow Field</div>
<canvas id="canvas"></canvas>
<script>
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Simplex Noise (compact implementation)
// Based on Stefan Gustavson's simplex noise
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const SimplexNoise = (function() {
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const F3 = 1 / 3;
  const G3 = 1 / 6;

  const grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
  ];

  function SimplexNoise(seed) {
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    const p = new Uint8Array(256);
    // Seed-based permutation
    seed = seed || Math.random() * 65536;
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      seed = (seed * 16807 + 0) % 2147483647;
      const j = seed % (i + 1);
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  SimplexNoise.prototype.noise2D = function(xin, yin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = xin - X0, y0 = yin - Y0;
    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; }
    else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii + perm[jj]]; n0 = t0 * t0 * (grad3[gi][0]*x0 + grad3[gi][1]*y0); }
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii + i1 + perm[jj + j1]]; n1 = t1 * t1 * (grad3[gi][0]*x1 + grad3[gi][1]*y1); }
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii + 1 + perm[jj + 1]]; n2 = t2 * t2 * (grad3[gi][0]*x2 + grad3[gi][1]*y2); }
    return 70 * (n0 + n1 + n2);
  };

  SimplexNoise.prototype.noise3D = function(xin, yin, zin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2, n3;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t, Y0 = j - t, Z0 = k - t;
    const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0;
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
      else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
      else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
    } else {
      if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
      else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
      else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
    }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2*G3, y2 = y0 - j2 + 2*G3, z2 = z0 - k2 + 2*G3;
    const x3 = x0 - 1 + 3*G3, y3 = y0 - 1 + 3*G3, z3 = z0 - 1 + 3*G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii+perm[jj+perm[kk]]]; n0 = t0*t0*(grad3[gi][0]*x0+grad3[gi][1]*y0+grad3[gi][2]*z0); }
    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]]; n1 = t1*t1*(grad3[gi][0]*x1+grad3[gi][1]*y1+grad3[gi][2]*z1); }
    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]]; n2 = t2*t2*(grad3[gi][0]*x2+grad3[gi][1]*y2+grad3[gi][2]*z2); }
    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if (t3 < 0) n3 = 0;
    else { t3 *= t3; const gi = permMod12[ii+1+perm[jj+1+perm[kk+1]]]; n3 = t3*t3*(grad3[gi][0]*x3+grad3[gi][1]*y3+grad3[gi][2]*z3); }
    return 32 * (n0 + n1 + n2 + n3);
  };

  return SimplexNoise;
})();

// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Flow Field Renderer
// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const noise = new SimplexNoise(42);
  const dpr = window.devicePixelRatio || 1;

  let W, H;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fill with background on resize to avoid flash
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);
  }

  window.addEventListener('resize', resize);
  resize();

  // \u2500\u2500 Mouse tracking \u2500\u2500
  const mouse = { x: -9999, y: -9999, active: false };
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', function() {
    mouse.active = false;
  });

  // \u2500\u2500 Color palette \u2500\u2500
  // Warm tones: amber, gold, coral, with variations
  const palette = [
    { r: 200, g: 149, b: 108 }, // amber  #c8956c
    { r: 212, g: 165, b: 116 }, // gold   #d4a574
    { r: 224, g: 120, b: 80  }, // coral  #e07850
    { r: 190, g: 130, b: 90  }, // dark amber
    { r: 230, g: 180, b: 140 }, // light gold
    { r: 210, g: 100, b: 70  }, // deep coral
    { r: 180, g: 160, b: 120 }, // muted gold
  ];

  function lerpColor(a, b, t) {
    return {
      r: a.r + (b.r - a.r) * t,
      g: a.g + (b.g - a.g) * t,
      b: a.b + (b.b - a.b) * t
    };
  }

  function getColor(noiseVal) {
    // Map noise [-1,1] to palette index
    const t = (noiseVal + 1) * 0.5; // 0..1
    const idx = t * (palette.length - 1);
    const i = Math.floor(idx);
    const f = idx - i;
    const a = palette[Math.min(i, palette.length - 1)];
    const b = palette[Math.min(i + 1, palette.length - 1)];
    return lerpColor(a, b, f);
  }

  // \u2500\u2500 Particles \u2500\u2500
  const PARTICLE_COUNT = 2500;
  let NOISE_SCALE = 0.0025;
  let SPEED = 1.2;
  const MOUSE_RADIUS = 150;
  const MOUSE_FORCE = 2.5;

  const particles = [];

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      speed: 0.4 + Math.random() * 1.0,
      alpha: 0.15 + Math.random() * 0.55,
      size: 0.5 + Math.random() * 1.5
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }

  // \u2500\u2500 Animation \u2500\u2500
  let time = 0;

  function draw() {
    // Fade previous frame with dark overlay \u2014 creates trailing effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.03)';
    ctx.fillRect(0, 0, W, H);

    time += 0.0008;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Sample noise field at particle position with time evolution
      const nx = p.x * NOISE_SCALE;
      const ny = p.y * NOISE_SCALE;
      const angle = noise.noise3D(nx, ny, time) * Math.PI * 2;

      // Secondary noise for color variation
      const colorNoise = noise.noise3D(nx * 1.5 + 100, ny * 1.5 + 100, time * 0.5);

      // Velocity from flow field
      let vx = Math.cos(angle) * p.speed * SPEED;
      let vy = Math.sin(angle) * p.speed * SPEED;

      // Mouse interaction \u2014 gentle push away
      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          vx += (dx / dist) * force;
          vy += (dy / dist) * force;
        }
      }

      // Store previous position for line drawing
      const px = p.x;
      const py = p.y;

      // Update position
      p.x += vx;
      p.y += vy;

      // Draw particle trail segment
      const color = getColor(colorNoise);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + p.alpha + ')';
      ctx.lineWidth = p.size;
      ctx.stroke();

      // Respawn if offscreen
      if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
        p.x = Math.random() * W;
        p.y = Math.random() * H;
      }
    }

    requestAnimationFrame(draw);
  }

  // Initial fill
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  requestAnimationFrame(draw);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'SPEED': SPEED = e.data.value; break;
        case 'NOISE_SCALE': NOISE_SCALE = e.data.value; break;
      }
    }
  });
})();
<\/script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>
</html>
`;
  }
});

// raw:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\vendor\threeui\src\shaders\neuform-isolated\sources\amber-halftone.html
var amber_halftone_default;
var init_amber_halftone = __esm({
  "raw:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\vendor\\threeui\\src\\shaders\\neuform-isolated\\sources\\amber-halftone.html"() {
    amber_halftone_default = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aegis Security - Remixed Bento</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Mono&display=swap" rel="stylesheet">
</head>
<body class="bg-[#111111] text-black antialiased min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-x-hidden selection:bg-yellow-300 selection:text-black" style="font-family: 'Space Mono', monospace;">

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto min-h-[85vh] py-8">
        
        <!-- Card 1: Grainy / Light (Black Globe) -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#f4f4f0, #f4f4f0) padding-box, linear-gradient(135deg, #ffffff 0%, #d1d5db 100%) border-box;">
            <!-- Noise Overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: multiply;"></div>
            
            <!-- WebGL Background -->
            <div class="absolute inset-0 z-0 top-1/4">
                <canvas id="webgl-lines" class="w-full h-full opacity-60"></canvas>
            </div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.01</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] mb-4 masked-reveal">
                    Absolute stealth.<br>Zero presence.
                </h2>
                <p class="text-xs leading-relaxed font-sans max-w-[220px] text-black/70 masked-reveal" style="font-family: 'Inter', sans-serif;">
                    Your network footprint.<br>Entirely eradicated.
                </p>
            </main>
        </article>

        <!-- Card 2: Yellow Grid + Aura Asset Image -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#FDE047, #FDE047) padding-box, linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(202,138,4,0.4) 100%) border-box;">
            
            <!-- Aura Asset Image Background -->
            <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" class="w-full h-full object-cover" alt="Futuristic Deconstructed Pyramid">
            </div>

            <!-- Grid Background Overlay -->
            <div class="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style="background-image: linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.02</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] masked-reveal">
                    Adaptive shields.<br>Total autonomy.
                </h2>
            </main>
        </article>

        <!-- Card 3: Black Halftone -->
        <article class="col-span-1 md:col-span-2 relative w-full h-[450px] md:h-[350px] rounded-[2rem] flex flex-col md:flex-row justify-between p-8 overflow-hidden text-white shadow-2xl border border-transparent" style="font-family: 'Inter', sans-serif; background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%) border-box;">
            
            <!-- WebGL Halftone Background -->
            <div class="absolute inset-0 z-0 md:left-1/3 pointer-events-none">
                <canvas id="webgl-halftone" class="w-full h-full"></canvas>
            </div>

            <!-- Header (Left on desktop) -->
            <header class="relative z-20 flex md:flex-col justify-between md:justify-start items-center md:items-start text-sm tracking-tight font-normal text-white/90 gap-4" style="font-family: 'Space Mono', monospace;">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" class="text-yellow-400" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.03</span>
            </header>

            <!-- Main Content (Right on desktop) -->
            <main class="relative z-20 mt-auto md:mt-0 md:self-end md:text-right max-w-md w-full">
                <h2 class="text-4xl md:text-5xl tracking-tight leading-[1.1] font-normal mb-4 md:mb-6 uppercase masked-reveal">
                    Quantum<br>Core.
                </h2>
                <p class="text-xs leading-relaxed text-white/70 md:ml-auto md:max-w-[240px] masked-reveal" style="font-family: 'Space Mono', monospace;">
                    Next-gen cryptography<br>for modern infrastructure.
                </p>
            </main>
        </article>

    </div>

    <script>
        // GSAP ScrollTrigger Setup
        gsap.registerPlugin(ScrollTrigger);

        // Utility: Split text into words and wrap for masking
        function wrapWords(element) {
            const text = element.innerHTML;
            const words = text.split(/(<br>|\\s+)/).filter(Boolean);
            element.innerHTML = '';
            
            words.forEach(word => {
                if (word === '<br>') {
                    element.appendChild(document.createElement('br'));
                    return;
                }
                if (word.trim() === '') {
                    element.appendChild(document.createTextNode(' '));
                    return;
                }

                const outerSpan = document.createElement('span');
                outerSpan.style.display = 'inline-block';
                outerSpan.style.overflow = 'hidden';
                outerSpan.style.verticalAlign = 'bottom';
                outerSpan.style.paddingBottom = '0.1em'; // Prevent clipping on descenders

                const innerSpan = document.createElement('span');
                innerSpan.style.display = 'inline-block';
                innerSpan.innerHTML = word;
                innerSpan.classList.add('reveal-target');
                innerSpan.style.transform = 'translateY(110%)';
                innerSpan.style.willChange = 'transform';

                outerSpan.appendChild(innerSpan);
                element.appendChild(outerSpan);
            });
        }

        // Apply masking structure and animation
        document.querySelectorAll('.masked-reveal').forEach(el => {
            wrapWords(el);
            
            gsap.to(el.querySelectorAll('.reveal-target'), {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.04
            });
        });

        /* --- WebGL Section 1: Abstract Lines --- */
        const initLinesWebGL = () => {
            const canvas = document.getElementById('webgl-lines');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = parent.clientWidth;
                const height = parent.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();

            camera.position.z = 4.5;

            const group = new THREE.Group();
            scene.add(group);

            const material = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.85 }); 
            const particlesCount = 200;
            
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i+=3) {
                const r = 2.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                positions[i] = r * Math.sin(phi) * Math.cos(theta);
                positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i+2] = r * Math.cos(phi);
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const index = [];
            for (let i = 0; i < particlesCount; i++) {
                for (let j = i + 1; j < particlesCount; j++) {
                    const dx = positions[i*3] - positions[j*3];
                    const dy = positions[i*3+1] - positions[j*3+1];
                    const dz = positions[i*3+2] - positions[j*3+2];
                    const distSq = dx*dx + dy*dy + dz*dz;
                    if (distSq < 1.2) { 
                        index.push(i, j);
                    }
                }
            }
            geometry.setIndex(index);
            
            const lines = new THREE.LineSegments(geometry, material);
            group.add(lines);

            const animate = () => {
                requestAnimationFrame(animate);
                group.rotation.y += 0.002;
                group.rotation.x += 0.001;
                renderer.render(scene, camera);
            };
            animate();
        };

        /* --- WebGL Section 3: Animated Halftone --- */
        const initHalftoneWebGL = () => {
            const canvas = document.getElementById('webgl-halftone');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setClearColor(0x0A0A0A, 1);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = Math.max(1, (parent && parent.clientWidth) || window.innerWidth || canvas.clientWidth || 1);
                const height = Math.max(1, (parent && parent.clientHeight) || window.innerHeight || canvas.clientHeight || 1);
                renderer.setSize(width, height, false);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                const aspect = width / height;
                camera.left = -aspect;
                camera.right = aspect;
                camera.bottom = -1;
                camera.top = 1;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();
            camera.position.z = 1;

            const gridSize = 20;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const scales = [];

            for (let x = -gridSize; x <= gridSize; x++) {
                for (let y = -gridSize; y <= gridSize; y++) {
                    positions.push(x * 0.15, y * 0.15, 0);
                    scales.push(1); 
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0xFBBF24) }, 
                    color2: { value: new THREE.Color(0xFFFFFF) }
                },
                vertexShader: \`
                    attribute float scale;
                    varying vec2 vUv;
                    varying float vScale;
                    uniform float time;
                    
                    void main() {
                        vUv = position.xy;
                        float dist = length(position.xy);
                        float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);
                        vScale = animatedScale;
                        
                        gl_PointSize = animatedScale * 5.0; 
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                \`,
                fragmentShader: \`
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    varying float vScale;
                    
                    void main() {
                        vec2 coord = gl_PointCoord - vec2(0.5);
                        if(length(coord) > 0.5) discard;
                        
                        vec3 finalColor = mix(color2, color1, (vUv.y + 1.0) * 0.5);
                        gl_FragColor = vec4(finalColor, vScale * 0.9);
                    }
                \`,
                transparent: true
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                material.uniforms.time.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };
            animate();
        };

        // Initialize WebGL instances
        initLinesWebGL();
        initHalftoneWebGL();
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\diagnostics-panel.html.js
var t;
var init_diagnostics_panel_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\diagnostics-panel.html.js"() {
    t = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@200;300;400&display=swap" rel="stylesheet">
    <style>
        /* Essential mask utility for inner gradient borders */
        .mask-border {
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
    </style>
</head>
<body class="bg-[#020804] text-white/90 antialiased min-h-screen flex items-center justify-center p-6 md:p-12 selection:bg-[#34d399]/20 font-sans relative overflow-hidden">

    <!-- Aura Asset Image Background Layer -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

    <!-- WebGL-style Lines & Particles Background -->
    <canvas id="bg-waves" class="absolute inset-0 z-0 pointer-events-none opacity-40"></canvas>

    <main id="main-container" class="max-w-7xl w-full relative bg-white/[0.04] p-px z-10 backdrop-blur-sm shadow-2xl shadow-[#34d399]/5 rounded-sm">
        
        <div id="flashlight" class="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none" style="background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(52,211,153,0.08), transparent 40%);"></div>

        <!-- Corner Accents -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>

        <!-- Horizontal Shooting Line -->
        <div class="hidden md:block absolute -top-px left-0 right-0 h-px overflow-hidden z-20 pointer-events-none">
            <div id="shoot-h" class="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-[#34d399]/80 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-px md:gap-x-px relative z-10">
            
            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    CORE-X
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-layers" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Neural Synchrony"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Optimized for zero-latency cognitive routing, maintaining absolute parity across decentralized processing nodes.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>
                
                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot1" class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>
                
                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    LINK-Y
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-nodes" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Fluid Topologies"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Self-healing network architectures that dynamically adjust vectors to circumvent bottlenecks and systemic anomalies.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot2" class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#34d399]/60 to-transparent"></div>
                </div>
                <div class="hidden md:block absolute top-0 bottom-0 -right-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot3" class="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:network-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    GRID-Z
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-flow" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Elastic Matrices"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Responsive structural frameworks that instantly allocate computational mass during spikes and retract to preserve efficiency.</p>
                </div>
            </article>

        </div>
    </main>

    <script>
        // WebGL-style Background (Lines & Particles)
        const bgCanvas = document.getElementById('bg-waves');
        const bgCtx = bgCanvas.getContext('2d', { alpha: true });
        let bw, bh, bgT = 0;
        const resizeBg = () => {
            bw = window.innerWidth; bh = window.innerHeight;
            bgCanvas.width = bw; bgCanvas.height = bh;
        };
        window.addEventListener('resize', resizeBg);
        resizeBg();

        const drawBg = () => {
            bgT += 0.012;
            bgCtx.clearRect(0, 0, bw, bh);
            bgCtx.save();
            bgCtx.translate(bw / 2, bh / 2 + 150);
            
            const cols = 32, rows = 22, sp = 65;
            bgCtx.lineWidth = 1;
            
            for(let z = 0; z < rows; z++) {
                for(let x = 0; x < cols; x++) {
                    const px = (x - cols/2) * sp;
                    const pz = z * sp;
                    const scale = 800 / (800 + pz);
                    const sx = px * scale;
                    const y = Math.sin(x * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                    const sy = (y + 50) * scale - 200;

                    bgCtx.fillStyle = \`rgba(52,211,153, \${0.7 * scale})\`;
                    bgCtx.beginPath();
                    bgCtx.arc(sx, sy, 1.2 * scale, 0, Math.PI*2);
                    bgCtx.fill();

                    if (x > 0) {
                        const pxL = (x - 1 - cols/2) * sp;
                        const sxL = pxL * scale;
                        const yL = Math.sin((x - 1) * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                        const syL = (yL + 50) * scale - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxL, syL);
                        bgCtx.stroke();
                    }
                    if (z > 0) {
                        const pzU = (z - 1) * sp;
                        const scaleU = 800 / (800 + pzU);
                        const sxU = px * scaleU;
                        const yU = Math.sin(x * 0.3 + bgT) * Math.cos((z - 1) * 0.3 + bgT) * 60;
                        const syU = (yU + 50) * scaleU - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxU, syU);
                        bgCtx.stroke();
                    }
                }
            }
            bgCtx.restore();
            requestAnimationFrame(drawBg);
        };
        drawBg();

        // Interactive & Shooting Lines
        const mainEl = document.getElementById('main-container');
        const flash = document.getElementById('flashlight');
        const s1 = document.getElementById('shoot1'), s2 = document.getElementById('shoot2');
        const s3 = document.getElementById('shoot3'), sh = document.getElementById('shoot-h');
        let pos1 = -200, pos2 = -400, pos3 = -300, posH = -300;

        mainEl.addEventListener('mousemove', (e) => {
            const rect = mainEl.getBoundingClientRect();
            flash.style.setProperty('--x', \`\${e.clientX - rect.left}px\`);
            flash.style.setProperty('--y', \`\${e.clientY - rect.top}px\`);
            flash.style.opacity = '1';
        });
        mainEl.addEventListener('mouseleave', () => flash.style.opacity = '0');

        const animateShoots = () => {
            const h = mainEl.offsetHeight || 1000, w = mainEl.offsetWidth || 1200;
            pos1 += 2.5; pos2 += 1.8; pos3 += 3; posH += 3.5;
            if (pos1 > h) pos1 = -200;
            if (pos2 > h) pos2 = -200;
            if (pos3 > h) pos3 = -200;
            if (posH > w) posH = -300;
            if (s1) s1.style.transform = \`translateY(\${pos1}px)\`;
            if (s2) s2.style.transform = \`translateY(\${pos2}px)\`;
            if (s3) s3.style.transform = \`translateY(\${pos3}px)\`;
            if (sh) sh.style.transform = \`translateX(\${posH}px)\`;
            requestAnimationFrame(animateShoots);
        };
        animateShoots();

        // Typewriter Effect
        document.querySelectorAll('.typewriter').forEach(el => {
            const text = el.getAttribute('data-text');
            let i = 0, isDeleting = false;
            const type = () => {
                i += isDeleting ? -1 : 1;
                el.textContent = text.substring(0, i);
                let delay = isDeleting ? 30 : 80;
                if (!isDeleting && i === text.length) { delay = 4000; isDeleting = true; }
                else if (isDeleting && i === 0) { delay = 1500; isDeleting = false; }
                setTimeout(type, delay);
            };
            type();
        });

        // GSAP Masked Staggered Word Reveal 
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.reveal-text').forEach((el) => {
            const words = el.innerText.split(' ');
            el.innerHTML = '';
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.className = 'inline-block overflow-hidden mr-[0.25em] align-bottom leading-tight';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-full will-change-transform';
                inner.innerText = word;
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
            });

            gsap.to(el.querySelectorAll('.will-change-transform'), {
                y: 0,
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                }
            });
        });

        // 3D Canvas Utilities
        const projectIso = (x, y, z) => {
            const angle = Math.PI / 6; 
            return { x: (x - z) * Math.cos(angle), y: y + (x + z) * Math.sin(angle) };
        };

        const setupCanvas = (id, renderFn) => {
            const canvas = document.getElementById(id);
            const ctx = canvas.getContext('2d', { alpha: true });
            let w, h, time = 0;
            const resize = () => {
                const rect = canvas.parentElement.getBoundingClientRect();
                w = rect.width; h = rect.height;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = w * dpr; canvas.height = h * dpr;
                ctx.scale(dpr, dpr);
            };
            window.addEventListener('resize', resize);
            resize();
            const loop = () => {
                time += 0.015;
                ctx.clearRect(0, 0, w, h);
                ctx.save();
                ctx.translate(w / 2, h / 2 + 5);
                renderFn(ctx, time);
                ctx.restore();
                requestAnimationFrame(loop);
            };
            loop();
        };

        // Card 1: Fixed Cropping
        setupCanvas('canvas-layers', (ctx, t) => {
            const size = 42, layers = 5, gap = 20;
            ctx.lineWidth = 1;
            for (let i = layers - 1; i >= 0; i--) {
                const yOff = i * gap - (layers * gap) / 2 + Math.sin(t + i * 0.4) * 4;
                const p1 = projectIso(-size, yOff, -size), p2 = projectIso(size, yOff, -size);
                const p3 = projectIso(size, yOff, size), p4 = projectIso(-size, yOff, size);

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                
                ctx.fillStyle = '#020804'; ctx.fill();
                ctx.strokeStyle = i === 0 ? 'rgba(52,211,153,0.8)' : 'rgba(52,211,153,0.15)';
                ctx.stroke();

                if (i === 0) {
                    ctx.save();
                    const center = projectIso(0, yOff, 0);
                    ctx.translate(center.x, center.y); ctx.scale(1, 0.5);
                    const sqSize = size * 0.55;
                    ctx.beginPath(); ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
                    ctx.strokeStyle = 'rgba(52,211,153,0.4)'; ctx.stroke();
                    ctx.clip();
                    for(let j = -sqSize; j < sqSize; j += 4) {
                        ctx.beginPath(); ctx.moveTo(-sqSize, j); ctx.lineTo(sqSize, j);
                        ctx.strokeStyle = 'rgba(52,211,153,0.2)'; ctx.stroke();
                    }
                    ctx.restore();
                }
                
                if (i < layers - 1) {
                    const nextY = (i+1) * gap - (layers * gap) / 2 + Math.sin(t + (i+1) * 0.4) * 4;
                    const p1Next = projectIso(-size, nextY, -size), p3Next = projectIso(size, nextY, size);
                    ctx.beginPath(); ctx.setLineDash([2, 2]);
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p1Next.x, p1Next.y);
                    ctx.moveTo(p3.x, p3.y); ctx.lineTo(p3Next.x, p3Next.y);
                    ctx.strokeStyle = 'rgba(52,211,153,0.1)'; ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        });

        // Card 2
        const drawCube = (ctx, x, y, z, s, colorStr) => {
            const pts = [
                projectIso(x-s, y-s, z-s), projectIso(x+s, y-s, z-s), projectIso(x+s, y-s, z+s), projectIso(x-s, y-s, z+s),
                projectIso(x-s, y+s, z-s), projectIso(x+s, y+s, z-s), projectIso(x+s, y+s, z+s), projectIso(x-s, y+s, z+s)
            ];
            ctx.strokeStyle = colorStr; ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[1].x, pts[1].y); ctx.lineTo(pts[2].x, pts[2].y); ctx.lineTo(pts[3].x, pts[3].y); ctx.closePath();
            ctx.moveTo(pts[4].x, pts[4].y); ctx.lineTo(pts[5].x, pts[5].y); ctx.lineTo(pts[6].x, pts[6].y); ctx.lineTo(pts[7].x, pts[7].y); ctx.closePath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[4].x, pts[4].y);
            ctx.moveTo(pts[1].x, pts[1].y); ctx.lineTo(pts[5].x, pts[5].y);
            ctx.moveTo(pts[2].x, pts[2].y); ctx.lineTo(pts[6].x, pts[6].y);
            ctx.moveTo(pts[3].x, pts[3].y); ctx.lineTo(pts[7].x, pts[7].y);
            ctx.stroke();
        };

        setupCanvas('canvas-nodes', (ctx, t) => {
            const s = 22, float = Math.sin(t) * 4;
            drawCube(ctx, -35, -float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, -35, float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, -float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 0, Math.cos(t)*6 - 15, 0, s*0.9, 'rgba(52,211,153,0.6)'); 
        });

        // Card 3
        setupCanvas('canvas-flow', (ctx, t) => {
            const size = 65, segments = 22, step = (size * 2) / segments;
            ctx.lineWidth = 1;
            const getH = (x, z) => {
                const dist = Math.sqrt(x*x + z*z);
                const peak = Math.max(0, 45 - dist * 1.1);
                const wave = Math.sin(x*0.2 + t*1.5) * Math.cos(z*0.2 + t*1.5) * 5;
                return -peak - wave + 15;
            };

            for (let z = -size; z < size; z += step) {
                for (let x = -size; x < size; x += step) {
                    const y1 = getH(x, z), y2 = getH(x + step, z);
                    const y3 = getH(x + step, z + step), y4 = getH(x, z + step);
                    const p1 = projectIso(x, y1, z), p2 = projectIso(x + step, y2, z);
                    const p3 = projectIso(x + step, y3, z + step), p4 = projectIso(x, y4, z + step);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                    ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                    ctx.fillStyle = '#020804'; ctx.fill();

                    const heightRatio = Math.max(0, (-y1) / 30);
                    const alpha = 0.05 + heightRatio * 0.4;
                    ctx.strokeStyle = heightRatio > 0.6 ? \`rgba(52,211,153,\${alpha + 0.3})\` : \`rgba(52,211,153,\${alpha + 0.05})\`;
                    ctx.stroke();
                }
            }
        });
    <\/script>
</body>
</html>`;
  }
});

// raw:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\vendor\threeui\src\shaders\neuform-isolated\sources\signal-particles.html
var signal_particles_default;
var init_signal_particles = __esm({
  "raw:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\vendor\\threeui\\src\\shaders\\neuform-isolated\\sources\\signal-particles.html"() {
    signal_particles_default = `<!doctype html>
<html lang="en" data-autofocus-guard-installed="1"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Security - Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.top-0{top:0px}.z-0{z-index:0}.z-50{z-index:50}.z-10{z-index:10}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-2{margin-top:0.5rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.h-1{height:0.25rem}.h-32{height:8rem}.h-\\[65vh\\]{height:65vh}.h-full{height:100%}.min-h-screen{min-height:100vh}.min-h-\\[500px\\]{min-height:500px}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-\\[40px\\]{max-width:40px}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1\\.5{gap:0.375rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-6{gap:1.5rem}.gap-\\[2px\\]{gap:2px}.overflow-hidden{overflow:hidden}.rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-xl{border-radius:0.75rem}.border-b{border-bottom-width:1px}.border-white\\/5{border-color:rgb(255 255 255 / 0.05)}.bg-\\[\\#0a0a0a\\]{--tw-bg-opacity:1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1))}.bg-\\[\\#0a0a0a\\]\\/80{background-color:rgb(10 10 10 / 0.8)}.bg-\\[\\#1a1a1a\\]{--tw-bg-opacity:1;background-color:rgb(26 26 26 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-\\[\\#121212\\]{--tw-bg-opacity:1;background-color:rgb(18 18 18 / var(--tw-bg-opacity, 1))}.bg-blue-500\\/80{background-color:rgb(59 130 246 / 0.8)}.bg-purple-500\\/80{background-color:rgb(168 85 247 / 0.8)}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity, 1))}.p-6{padding:1.5rem}.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pt-16{padding-top:4rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-light{font-weight:300}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-0.025em}.tracking-wide{letter-spacing:0.025em}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-80{opacity:0.8}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\\:bg-blue-500\\/30 *::selection{background-color:rgb(59 130 246 / 0.3)}.selection\\:bg-blue-500\\/30::selection{background-color:rgb(59 130 246 / 0.3)}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:inset-0::before{content:var(--tw-content);inset:0px}.before\\:-z-10::before{content:var(--tw-content);z-index:-10}.before\\:rounded-md::before{content:var(--tw-content);border-radius:0.375rem}.before\\:rounded-xl::before{content:var(--tw-content);border-radius:0.75rem}.before\\:bg-gradient-to-b::before{content:var(--tw-content);background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.before\\:from-white\\/20::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-white\\/15::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.15) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:to-transparent::before{content:var(--tw-content);--tw-gradient-to:transparent var(--tw-gradient-to-position)}.before\\:p-\\[1px\\]::before{content:var(--tw-content);padding:1px}.before\\:transition-colors::before{content:var(--tw-content);transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.before\\:duration-500::before{content:var(--tw-content);transition-duration:500ms}.before\\:\\[mask-composite\\:exclude\\]::before{content:var(--tw-content);-webkit-mask-composite:xor;mask-composite:exclude}.before\\:\\[mask\\:linear-gradient\\(\\#fff_0_0\\)_content-box\\2c linear-gradient\\(\\#fff_0_0\\)\\]::before{content:var(--tw-content);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}.hover\\:bg-\\[\\#222\\]:hover{--tw-bg-opacity:1;background-color:rgb(34 34 34 / var(--tw-bg-opacity, 1))}.hover\\:before\\:from-white\\/25:hover::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.25) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.group:hover .group-hover\\:opacity-100{opacity:1}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-8xl{font-size:6rem;line-height:1}}</style><meta name="disabled-font-classes" content="font-inter,font-roboto,font-poppins,font-playfair,font-merriweather,font-bricolage,font-work-sans,font-pt-serif,font-space-mono,font-cormorant,font-newsreader,font-dm-sans,font-oswald,font-geist-mono,font-space-grotesk,font-montserrat,font-quicksand,font-google-sans-flex,font-nunito,font-geist,font-jakarta,font-instrument-serif"><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style></head>
<body class="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-blue-500/30 antialiased font-sans">

    <!-- Header -->
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div class="flex items-center gap-2">
            <span class="text-base text-white tracking-tight font-medium font-sans">Vanguard</span>
            <span class="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded tracking-wide font-sans">Security</span>
        </div>
        <button class="relative flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-slate-300 text-xs px-3 py-1.5 rounded-md z-0 before:absolute before:inset-0 before:-z-10 before:rounded-md before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor] font-sans">
            <iconify-icon icon="solar:alt-arrow-left-linear" stroke-width="1.5"></iconify-icon>
            Back to Portal
        </button>
    </header>

    <!-- Hero Section with Canvas Animation & Aura Background -->
    <section class="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5 pt-16">
        <!-- Aura Abstract Asset Image Background -->
        <div class="absolute inset-0 z-0 opacity-20 mix-blend-screen bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center"></div>
        
        <!-- WebGL/Canvas Background -->
        <canvas id="particle-canvas" class="absolute inset-0 z-0 w-full h-full opacity-80" width="1519" height="715"></canvas>
        
        <!-- Hero Content -->
        <div class="relative z-10 text-center mx-4 max-w-4xl w-full">
            <h1 class="reveal-text text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-6 font-manrope font-light">
                Autonomous Cyber<br>Immunity
            </h1>
            <p class="reveal-text text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-manrope font-light">
                Securing global infrastructure through AI-driven threat intelligence and proactive zero-day neutralization.
            </p>
        </div>
    </section>

    <!-- Content Grid Section -->
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Sentinel Protocol <span class="text-xs text-slate-500 font-normal font-sans">(Threat Detection)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Deep learning algorithms monitoring data streams to isolate vulnerabilities before they manifest.
                    </p>
                </div>
                
                <!-- Animated Dot Chart -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <!-- Bars -->
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Nexus Guardian <span class="text-xs text-slate-500 font-normal font-sans">(Node Security)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Heuristic analysis tracking process execution and memory states to halt malicious payloads instantly.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Purple tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Aether Monitor <span class="text-xs text-slate-500 font-normal font-sans">(Cloud Defense)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Continuous validation of distributed environments and access controls to maintain absolute state integrity.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Blue tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Text Masked Reveal with GSAP Split Logic
            document.querySelectorAll('.reveal-text').forEach(el => {
                const html = el.innerHTML;
                const newHtml = html.split(/(<br\\s*\\/?>|\\s+)/).map(part => {
                    if (part.match(/<br/i)) return part;
                    if (part.trim() === '') return part; 
                    return \`<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span class="reveal-word" style="display:inline-block; transform:translateY(100%); opacity:0;">\${part}</span></span>\`;
                }).join('');
                el.innerHTML = newHtml;
            });

            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.reveal-text').forEach(el => {
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%'
                    }
                });
            });

            // Chart Animation Logic
            setInterval(() => {
                document.querySelectorAll('.chart-col').forEach(col => {
                    const dots = col.querySelectorAll('.chart-dot');
                    const activeCount = Math.floor(Math.random() * (dots.length + 1));
                    dots.forEach((dot, index) => {
                        dot.style.opacity = index < activeCount ? '1' : '0.15';
                    });
                });
            }, 600);

            // Canvas Background Logic
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                const spacing = 16;
                const dotRadius = 1.5;
                let time = 0;

                function resize() {
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
                
                window.addEventListener('resize', resize);
                resize();

                function draw() {
                    ctx.clearRect(0, 0, width, height);
                    
                    const cols = Math.floor(width / spacing);
                    const rows = Math.floor(height / spacing);
                    
                    const offsetX = (width - cols * spacing) / 2;
                    const offsetY = (height - rows * spacing) / 2;

                    for (let i = 0; i <= cols; i++) {
                        for (let j = 0; j <= rows; j++) {
                            const x = offsetX + i * spacing;
                            const y = offsetY + j * spacing;
                            
                            const nx = i * 0.1;
                            const ny = j * 0.1;
                            
                            const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3);
                            const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8);
                            const value = wave1 + wave2;

                            if (value > 0.1) {
                                ctx.beginPath();
                                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

                                const highlightCheck = Math.sin(i * 12.34) * Math.cos(j * 56.78);
                                
                                if (highlightCheck > 0.98) {
                                    ctx.fillStyle = '#3b82f6'; // Blue highlight
                                } else if (highlightCheck < -0.98) {
                                    ctx.fillStyle = '#8b5cf6'; // Purple highlight
                                } else {
                                    const alpha = Math.min(0.6, (value - 0.1) * 0.8);
                                    ctx.fillStyle = \`rgba(148, 163, 184, \${alpha})\`;
                                }
                                
                                ctx.fill();
                            }
                        }
                    }
                    
                    time += 0.02;
                    requestAnimationFrame(draw);
                }
                
                draw();
            }
        });
    <\/script>

</body></html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\skeuomorphic-toggle.html.js
var e2;
var init_skeuomorphic_toggle_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\skeuomorphic-toggle.html.js"() {
    e2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skeuomorphic Toggle UI - Blue Remix</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-slate-50 flex items-center justify-center min-h-screen p-4 antialiased" style="background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px); background-size: 120px 120px; background-position: center center;">

    <!-- Card Container with Premium Gradient Border -->
    <div id="toggle-card" class="relative rounded-[2rem] w-full max-w-[380px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] p-[1px] bg-gradient-to-b from-slate-200/80 via-slate-100/50 to-slate-50/20 z-10">
        
        <div class="bg-white rounded-[calc(2rem-1px)] w-full h-full overflow-hidden flex flex-col relative">
            
            <!-- Top Section: 3D Environment -->
            <div class="relative h-64 w-full flex items-center justify-center overflow-hidden" style="background: radial-gradient(circle at 50% 50%, #f0f7ff 0%, #ffffff 80%);">
                
                <!-- Light Rays -->
                <div class="absolute inset-0 pointer-events-none opacity-40" style="background: repeating-conic-gradient(from 0deg at 50% -10%, rgba(59, 130, 246, 0.04) 0deg, transparent 4deg, transparent 8deg, rgba(59, 130, 246, 0.04) 12deg);"></div>

                <!-- Soft Overlay Shadows -->
                <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 20px 40px -10px rgba(0,0,0,0.04), inset 0 -20px 40px -10px rgba(59, 130, 246, 0.05);"></div>

                <!-- Simulated WebGL Waves / Ripples -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <!-- Ambient Wave Base -->
                    <div class="absolute bottom-0 w-full h-32" style="background: radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);"></div>
                    
                    <!-- Outer Ripple -->
                    <div class="absolute w-[320px] h-[160px] rounded-[80px]" style="border: 1px solid rgba(96, 165, 250, 0.05); box-shadow: 0 0 30px rgba(96, 165, 250, 0.06), inset 0 0 20px rgba(96, 165, 250, 0.03);"></div>
                    <!-- Middle Ripple -->
                    <div class="absolute w-[260px] h-[120px] rounded-[60px]" style="border: 1px solid rgba(96, 165, 250, 0.12); box-shadow: 0 0 20px rgba(96, 165, 250, 0.1), inset 0 0 15px rgba(96, 165, 250, 0.05);"></div>
                    <!-- Inner Ripple -->
                    <div class="absolute w-[220px] h-[90px] rounded-[45px]" style="border: 1px solid rgba(96, 165, 250, 0.2); box-shadow: 0 0 15px rgba(96, 165, 250, 0.18), inset 0 0 10px rgba(96, 165, 250, 0.1);"></div>
                </div>

                <!-- Dotted Pattern Arc -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] pointer-events-none" style="mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px); -webkit-mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px);">
                    <div class="w-full h-full opacity-40" style="background-image: radial-gradient(rgba(59, 130, 246, 0.7) 1.5px, transparent 1.5px); background-size: 8px 8px; mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);"></div>
                </div>

                <!-- Skeuomorphic Toggle Control -->
                <div id="skeuomorphic-toggle" role="switch" aria-checked="true" tabindex="0" class="relative z-10 w-48 h-16 rounded-full p-1.5 cursor-pointer select-none" style="background: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%); box-shadow: inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4); border: 1px solid #60a5fa; transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;">
                    <div id="skeuomorphic-thumb" class="absolute top-1.5 left-1.5 w-[116px] h-[calc(100%-0.75rem)] rounded-full flex items-center justify-center" style="background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%); box-shadow: 0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2); border: 1px solid #e0edfa; transform: translateX(64px); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;">
                        <span class="text-sm font-normal text-slate-800 tracking-wide" style="text-shadow: 0 1px 1px rgba(255,255,255,0.9); transition: color 0.35s ease, opacity 0.35s ease;">Live Sync</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Section: Content -->
            <div class="p-7 pb-9 bg-white z-20 relative">
                <!-- Icon -->
                <div class="w-8 h-8 rounded-[0.6rem] mb-4 flex items-center justify-center" style="background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); box-shadow: inset 0 2px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1), 0 4px 8px -2px rgba(37, 99, 235, 0.4); border: 1px solid #1d4ed8;">
                    <iconify-icon icon="solar:server-square-linear" class="text-white text-base" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));"></iconify-icon>
                </div>
                
                <!-- Text -->
                <h2 class="text-xl font-normal tracking-tight text-slate-900 mb-1.5 mask-reveal">Real-time Updates</h2>
                <p class="text-sm text-slate-500 leading-relaxed mask-reveal">Seamless background integration keeps everything current.</p>
            </div>
            
        </div>
    </div>

    <script>
        (function () {
            var toggle = document.getElementById('skeuomorphic-toggle');
            var thumb = document.getElementById('skeuomorphic-thumb');
            var label = thumb && thumb.querySelector('span');
            if (!toggle || !thumb) return;

            var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';
            var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';
            var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';
            var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';
            var ON_BORDER = '#60a5fa';
            var OFF_BORDER = '#94a3b8';
            var ON_THUMB_SHADOW = '0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2)';
            var OFF_THUMB_SHADOW = '0 8px 16px -4px rgba(15, 23, 42, 0.18), 0 3px 5px -2px rgba(0,0,0,0.05), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(148, 163, 184, 0.25)';

            function travel() {
                return Math.max(0, toggle.clientWidth - thumb.clientWidth - 12);
            }

            function apply(on) {
                toggle.setAttribute('aria-checked', on ? 'true' : 'false');
                toggle.style.background = on ? ON_BG : OFF_BG;
                toggle.style.boxShadow = on ? ON_SHADOW : OFF_SHADOW;
                toggle.style.borderColor = on ? ON_BORDER : OFF_BORDER;
                thumb.style.transform = 'translateX(' + (on ? travel() : 0) + 'px)';
                thumb.style.boxShadow = on ? ON_THUMB_SHADOW : OFF_THUMB_SHADOW;
                if (label) {
                    label.style.opacity = on ? '1' : '0.72';
                    label.style.color = on ? '#1e293b' : '#475569';
                }
            }

            function flip() {
                apply(toggle.getAttribute('aria-checked') !== 'true');
            }

            apply(true);
            toggle.addEventListener('click', flip);
            toggle.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    flip();
                }
            });
            window.addEventListener('resize', function () {
                apply(toggle.getAttribute('aria-checked') === 'true');
            });
        })();

        document.addEventListener("DOMContentLoaded", () => {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
            gsap.registerPlugin(ScrollTrigger);
            
            document.querySelectorAll('.mask-reveal').forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                
                text.split(/(\\s+)/).forEach(part => {
                    if (!part.trim()) {
                        el.appendChild(document.createTextNode(part));
                        return;
                    }
                    
                    const wrapper = document.createElement('span');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.overflow = 'hidden';
                    wrapper.style.verticalAlign = 'bottom';
                    
                    const inner = document.createElement('span');
                    inner.innerText = part;
                    inner.style.display = 'inline-block';
                    inner.className = 'reveal-word';
                    inner.style.transform = 'translateY(110%)';
                    inner.style.opacity = '0';
                    
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
                
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                    }
                });
            });
        });
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\matrix-field.html.js
var n6;
var init_matrix_field_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\matrix-field.html.js"() {
    n6 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Matrix State</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Geist:wght@300;400&family=Gloock&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-white h-screen w-screen overflow-hidden relative selection:bg-white/20 selection:text-white">
    
    <!-- WebGL Background Canvas -->
    <canvas id="glcanvas" class="absolute inset-0 z-0 w-full h-full"></canvas>

    <!-- Aura Asset Image Overlay (Mix Blend Texture) -->
    <div class="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center"></div>

    <!-- Structural Framing Lines with Corner Squares -->
    <div class="absolute inset-6 md:inset-12 border border-white/10 pointer-events-none z-20 transition-all duration-1000 fade-target" style="opacity: 0;">
        <div class="absolute -top-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -top-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
    </div>

    <!-- Main Content Overlay -->
    <main class="absolute inset-0 z-30 p-12 md:p-20 flex flex-col justify-between pointer-events-none">
        
        <!-- Top Row: Editorial Grid Metadata -->
        <header class="grid grid-cols-2 md:grid-cols-3 w-full gap-8 fade-target transition-all duration-1000 ease-out font-['DM_Mono'] uppercase" style="opacity: 0; transform: translateY(10px);">
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light">
                <span class="text-gray-200">SYSTEM \u2014 09</span>
                <span>NETWORK UPLINK</span>
            </div>
            <div class="hidden md:flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-center">
                <span class="text-gray-200">PING 1.2MS</span>
                <span>SYNC COMPLETE</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-right">
                <span class="text-gray-200">SECURITY</span>
                <span>SECURED</span>
            </div>
        </header>

        <!-- Middle: Dashboard Layout -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12 md:gap-8 fade-target transition-all duration-1000 ease-out flex-1 mt-12 md:mt-0" style="opacity: 0; transform: translateY(10px);">
            
            <!-- Left: Title & Context -->
            <section class="flex-shrink-0 z-40 pointer-events-auto">
                <h2 class="font-['Gloock'] text-5xl md:text-7xl font-normal tracking-tight text-white leading-none uppercase">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">QUANTUM</span></span><br>
                    <span class="inline-block overflow-hidden align-bottom italic text-gray-300 pr-4"><span class="reveal-word inline-block translate-y-full">MATRIX</span></span>
                </h2>
                <p class="font-['Geist'] text-sm text-gray-400 mt-6 max-w-xs font-light leading-relaxed">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">Continuous</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">monitoring</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">of</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">decentralized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">server</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">arrays.</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">All</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">telemetry</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">data</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">is</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">perfectly</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">synchronized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">across</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">the</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">global</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">infrastructure</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">network.</span></span>
                </p>
            </section>

            <!-- Right: Telemetry Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pointer-events-auto font-['Geist'] z-40">
                <!-- Metric Card 1 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Bandwidth</span>
                            <iconify-icon icon="solar:graph-up-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">142.8<span class="text-sm text-gray-500 ml-1 font-light">GB/s</span></div>
                        <div class="w-full h-0.5 bg-white/10 mt-2">
                            <div class="h-full bg-gray-300 w-[88%]"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Metric Card 2 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Server Uplinks</span>
                            <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">8,192</div>
                        <div class="flex items-end gap-1 h-4 mt-2 opacity-70">
                            <div class="w-full bg-white/20 h-1/2"></div>
                            <div class="w-full bg-white/40 h-3/4"></div>
                            <div class="w-full bg-white/30 h-1/3"></div>
                            <div class="w-full bg-white/60 h-full"></div>
                            <div class="w-full bg-white/50 h-2/3"></div>
                            <div class="w-full bg-white/80 h-[90%]"></div>
                        </div>
                    </div>
                </div>

                <!-- Metric Card 3 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Health</span>
                            <div class="w-1.5 h-1.5 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div class="text-xl font-normal tracking-tight text-gray-200 leading-snug mt-auto">
                            Systems nominal across all primary regions.
                        </div>
                    </div>
                </div>

                <!-- Metric Card 4 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Firewalls</span>
                            <iconify-icon icon="solar:shield-check-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-auto font-['DM_Mono']">
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">AES-256</span>
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">BIOMETRIC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Row: Status Footer -->
        <footer class="w-full flex justify-between items-end fade-target transition-all duration-1000 ease-out mt-8" style="opacity: 0; transform: translateY(10px);">
            <div class="flex items-center gap-3 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light">
                <iconify-icon icon="solar:radar-linear" stroke-width="1.5" class="text-lg text-gray-200"></iconify-icon>
                <span class="hidden md:inline">MONITORING SECTORS</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light text-right">
                <span class="text-gray-200">ROOT.USER</span>
                <span>SESSION ACTIVE</span>
            </div>
        </footer>
    </main>

    <!-- UI Animation Logic -->
    <script>
        window.addEventListener('load', () => {
            gsap.registerPlugin(ScrollTrigger);

            // Initial UI fade
            document.querySelectorAll('.fade-target').forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 150 + 100);
            });

            // Masked word reveal
            gsap.to('.reveal-word', {
                scrollTrigger: {
                    trigger: '.reveal-word',
                    start: 'top 95%',
                },
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power4.out',
                delay: 0.3
            });
        });
    <\/script>

    <!-- WebGL Logic -->
    <script>
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        let mouseX = -1000, mouseY = -1000;
        let lastMouseMove = 0;
        let currentMouseActive = 0.0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = canvas.clientHeight - e.clientY;
            lastMouseMove = Date.now();
        });

        const vsSource = \`
            attribute vec4 aVertexPosition;
            void main() {
                gl_Position = aVertexPosition;
            }
        \`;

        const fsSource = \`
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform float u_mouseActive;

            float hash(float n) { return fract(sin(n)*753.5453123); }
            float noise(float x) {
                float i = floor(x);
                float f = fract(x);
                f = f*f*(3.0-2.0*f);
                return mix(hash(i), hash(i+1.0), f);
            }

            vec2 sdLine(vec2 p, vec2 a, vec2 b) {
                vec2 pa = p - a, ba = b - a;
                float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                return vec2(length(pa - ba * h), h);
            }

            float lightning(vec2 uv, vec2 a, vec2 b, float t) {
                vec2 ab = b - a;
                float len = length(ab);
                if(len < 0.01) return 0.0;
                vec2 dir = ab / len;
                
                vec2 pa = uv - a;
                float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
                float dist = length(pa - dir * (h * len));
                
                float env = sin(h * 3.1415);
                
                float offset = (noise(h * 25.0 - t * 35.0) - 0.5) * 0.08 * env;
                offset += (noise(h * 70.0 + t * 50.0) - 0.5) * 0.02 * env;
                
                float d = abs(dist + offset);
                
                return (0.0002 / (d + 0.0002) + 0.00001 / (d*d + 0.00001)) * env;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                uv = uv * 2.0 - 1.0;
                uv.x *= u_resolution.x / u_resolution.y;

                vec2 mouseUV = u_mouse / u_resolution.xy;
                mouseUV = mouseUV * 2.0 - 1.0;
                mouseUV.x *= u_resolution.x / u_resolution.y;

                vec2 center = vec2(-0.8, -0.2);
                center.x += sin(u_time * 0.4) * 0.03;
                center.y += cos(u_time * 0.3) * 0.03;

                vec2 dirUp = normalize(vec2(0.15, 1.0));
                vec2 dirRight = normalize(vec2(1.0, -0.25));
                vec2 dirDownLeft = normalize(vec2(-0.8, -0.6));

                vec2 l1 = sdLine(uv, center, center + dirUp * 5.0);
                vec2 l2 = sdLine(uv, center, center + dirRight * 5.0);
                vec2 l3 = sdLine(uv, center, center + dirDownLeft * 5.0);

                float intensity = 0.006;
                float glow = intensity / (l1.x + 0.001) +
                             intensity / (l2.x + 0.001) +
                             (intensity * 0.4) / (l3.x + 0.001);

                float pulse1 = smoothstep(0.1, 0.0, abs(l1.y - fract(u_time * 0.4))) * 0.03 / (l1.x + 0.001);
                float pulse2 = smoothstep(0.1, 0.0, abs(l2.y - fract(u_time * 0.5 + 0.3))) * 0.03 / (l2.x + 0.001);
                float pulse3 = smoothstep(0.1, 0.0, abs(l3.y - fract(u_time * 0.3 + 0.7))) * 0.015 / (l3.x + 0.001);
                glow += pulse1 + pulse2 + pulse3;

                vec2 p1 = center + dirUp * clamp(dot(mouseUV - center, dirUp), 0.0, 5.0);
                vec2 p2 = center + dirRight * clamp(dot(mouseUV - center, dirRight), 0.0, 5.0);
                vec2 p3 = center + dirDownLeft * clamp(dot(mouseUV - center, dirDownLeft), 0.0, 5.0);
                
                float lgt1 = lightning(uv, p1, mouseUV, u_time);
                float lgt2 = lightning(uv, p2, mouseUV, u_time + 10.0);
                float lgt3 = lightning(uv, p3, mouseUV, u_time + 20.0);
                
                float flicker = step(0.1, noise(u_time * 60.0)) * (noise(u_time * 150.0) * 0.8 + 0.2);
                
                float d1 = length(mouseUV - p1);
                float d2 = length(mouseUV - p2);
                float d3 = length(mouseUV - p3);
                
                glow += lgt1 * smoothstep(2.0, 0.0, d1) * u_mouseActive * flicker;
                glow += lgt2 * smoothstep(2.0, 0.0, d2) * u_mouseActive * flicker;
                glow += lgt3 * smoothstep(2.0, 0.0, d3) * u_mouseActive * flicker;

                float distToCenter = length(uv - center);
                glow += 0.04 / (distToCenter + 0.01);

                vec3 baseColor = vec3(0.6, 0.75, 1.0);
                vec3 finalColor = baseColor * glow;

                finalColor *= 0.85 + 0.15 * sin(u_time * 2.0 - distToCenter * 8.0);

                float vignette = 1.0 - smoothstep(0.4, 2.0, length(uv));
                finalColor *= vignette;

                float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
                finalColor += n * 0.02;

                gl_FragColor = vec4(finalColor, 1.0);
            }
        \`;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
            return shader;
        }

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, createShader(gl, gl.VERTEX_SHADER, vsSource));
        gl.attachShader(shaderProgram, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
        gl.linkProgram(shaderProgram);

        const programInfo = {
            program: shaderProgram,
            attribLocations: { vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition') },
            uniformLocations: {
                resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
                time: gl.getUniformLocation(shaderProgram, 'u_time'),
                mouse: gl.getUniformLocation(shaderProgram, 'u_mouse'),
                mouseActive: gl.getUniformLocation(shaderProgram, 'u_mouseActive'),
            },
        };

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]), gl.STATIC_DRAW);

        let startTime = Date.now();

        function render() {
            if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.useProgram(programInfo.program);

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

            let timeSinceMove = Date.now() - lastMouseMove;
            let targetActive = timeSinceMove < 150 ? 1.0 : Math.max(0.0, 1.0 - (timeSinceMove - 150) / 350.0);
            currentMouseActive += (targetActive - currentMouseActive) * 0.15;

            gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
            gl.uniform1f(programInfo.uniformLocations.time, (Date.now() - startTime) * 0.001);
            gl.uniform2f(programInfo.uniformLocations.mouse, mouseX, mouseY);
            gl.uniform1f(programInfo.uniformLocations.mouseActive, currentMouseActive);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\gateway-flow.html.js
var e3;
var init_gateway_flow_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\gateway-flow.html.js"() {
    e3 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Gateway</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet">
</head>
<body class="bg-black text-slate-300 antialiased min-h-screen flex flex-col selection:bg-slate-700 selection:text-white relative" style="font-family: 'Inter', sans-serif;">

    <!-- Global Dither Overlay -->
    <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E'); background-size: 2px 2px;"></div>

    <!-- Visualization Background -->
    <div class="fixed inset-0 z-0 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 80%);"></div>
        <canvas id="flow-canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-30 px-6 py-12 min-h-screen w-full">
        
        <!-- Premium Login Card with Hover Border Gradient -->
        <div class="max-w-md w-full bg-black/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl flex flex-col relative group">
            
            <!-- Base Border -->
            <div class="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-transparent"></div>
            
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <!-- Header Text -->
            <div class="text-center mb-8 w-full relative z-20">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/50 border border-slate-700/50 mb-6 shadow-inner">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="24" height="24" stroke-width="1.5" class="text-slate-200"></iconify-icon>
                </div>
                <h1 id="reveal-title" class="text-3xl md:text-4xl font-thin tracking-tight text-white leading-tight mb-3 uppercase flex flex-wrap justify-center gap-x-2">
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Nexus</span></span>
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Gateway</span></span>
                </h1>
                <p class="text-sm text-slate-500 font-extralight leading-relaxed">
                    Verify identity to initialize secure connection with the primary framework. Oversee active protocols and routing.
                </p>
            </div>

            <!-- Form -->
            <form class="space-y-5 relative z-20">
                <div>
                    <label for="identifier" class="text-xs font-light text-slate-400 mb-1.5 block uppercase tracking-widest">Operative ID</label>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="text" id="identifier" class="relative w-full bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="operative@nexus.net">
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label for="key" class="text-xs font-light text-slate-400 block uppercase tracking-widest">Security Key</label>
                        <a href="#" class="text-xs font-extralight text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2">Recover access</a>
                    </div>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="password" id="key" class="relative w-full bg-transparent pl-3 pr-10 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">
                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors z-30" aria-label="Toggle visibility">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2 pt-1">
                    <div class="relative flex items-center justify-center w-4 h-4">
                        <input type="checkbox" id="session" class="peer appearance-none w-4 h-4 border border-slate-700 rounded bg-black/50 checked:bg-slate-300 checked:border-slate-300 cursor-pointer transition-colors">
                        <iconify-icon icon="solar:check-linear" width="12" height="12" stroke-width="1.5" class="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none"></iconify-icon>
                    </div>
                    <label for="session" class="text-xs font-extralight text-slate-400 cursor-pointer select-none uppercase tracking-wider">Maintain persistent uplink</label>
                </div>
                
                <!-- Primary Button -->
                <button type="submit" class="w-full bg-[#0a0a0a] hover:bg-[#111] text-white text-sm font-light py-2.5 rounded-lg transition-all mt-2 uppercase tracking-widest relative group/btn shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                    <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none transition-colors duration-300 group-hover/btn:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20">Initialize Uplink</span>
                </button>
            </form>

            <!-- Divider -->
            <div class="relative flex items-center py-6 z-20">
                <div class="flex-grow border-t border-slate-800/60"></div>
                <span class="flex-shrink-0 px-4 text-xs font-extralight text-slate-600 uppercase tracking-widest">Alternative Auth</span>
                <div class="flex-grow border-t border-slate-800/60"></div>
            </div>

            <!-- Alternative Options -->
            <div class="grid grid-cols-2 gap-3 z-20">
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:buildings-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Corporate SSO</span>
                </button>
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Git Auth</span>
                </button>
            </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex flex-col items-center gap-4 relative z-20">
            <div class="flex -space-x-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <div class="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-300 font-extralight shadow-lg">+</div>
            </div>
            <p class="text-xs text-slate-600 font-extralight uppercase tracking-widest">Validated by distributed consensus nodes</p>
        </div>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // GSAP Masked Reveal for Heading
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 95%",
                }
            });

            // Flow Canvas Animation
            const canvas = document.getElementById('flow-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let explosions = [];

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }
            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('click', (e) => {
                explosions.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
            });

            const paths = [];
            const numPaths = 80;
            
            for(let i = 0; i < numPaths; i++) {
                paths.push({
                    isLeft: i % 2 === 0,
                    startY: (i / numPaths) * height * 1.4 - height * 0.2,
                    particles: [{
                        t: Math.random(),
                        speed: 0.0015 + Math.random() * 0.002
                    }]
                });
            }

            function getBezierPoint(t, p0, p1, p2, p3) {
                const u = 1 - t;
                return {
                    x: u**3 * p0.x + 3 * u**2 * t * p1.x + 3 * u * t**2 * p2.x + t**3 * p3.x,
                    y: u**3 * p0.y + 3 * u**2 * t * p1.y + 3 * u * t**2 * p2.y + t**3 * p3.y
                };
            }

            function render() {
                ctx.clearRect(0, 0, width, height);
                const centerX = width / 2;
                const centerY = height / 2;

                explosions.forEach(exp => {
                    exp.radius += 15;
                    exp.life -= 0.015;
                });
                explosions = explosions.filter(exp => exp.life > 0);

                paths.forEach(path => {
                    const p0 = { x: path.isLeft ? 0 : width, y: path.startY };
                    const p1 = { x: path.isLeft ? centerX * 0.5 : width - centerX * 0.5, y: path.startY };
                    const p2 = { x: path.isLeft ? centerX * 0.8 : width - centerX * 0.8, y: centerY };
                    const p3 = { x: centerX, y: centerY };

                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([1, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    path.particles.forEach(p => {
                        p.t += p.speed;
                        if (p.t > 1) {
                            p.t = 0;
                            path.startY += (Math.random() - 0.5) * 10;
                        }

                        let pos = getBezierPoint(p.t, p0, p1, p2, p3);

                        let dxTotal = 0, dyTotal = 0;
                        explosions.forEach(exp => {
                            let dx = pos.x - exp.x;
                            let dy = pos.y - exp.y;
                            let dist = Math.hypot(dx, dy);
                            if (dist < exp.radius + 120 && dist > exp.radius - 120) {
                                let force = (1 - Math.abs(dist - exp.radius) / 120) * exp.life;
                                dxTotal += (dx / dist) * force * 80;
                                dyTotal += (dy / dist) * force * 80;
                            }
                        });
                        
                        pos.x += dxTotal;
                        pos.y += dyTotal;

                        ctx.fillStyle = \`rgba(255, 255, 255, 0.7)\`;
                        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
                    });
                });
                
                requestAnimationFrame(render);
            }
            
            render();
        });
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\connectivity-graph.html.js
var n7;
var init_connectivity_graph_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\connectivity-graph.html.js"() {
    n7 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Connectivity Nexus</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="font-sans antialiased text-blue-950 min-h-screen flex flex-col" style="background: linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(225,234,244,0.92) 40%, rgba(196,217,239,0.92) 80%, rgba(166,200,234,0.92) 100%), url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg') center/cover no-repeat fixed; background-blend-mode: normal;">

    <!-- Main Structural Container -->
    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col border-x border-transparent relative bg-white/20 backdrop-blur-[2px]" style="border-image: linear-gradient(to bottom, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
        
        <!-- Top Corner Squares -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>

        <!-- Header Section -->
        <header class="pt-24 pb-20 px-6 text-center border-b border-transparent relative z-10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <h1 id="reveal-title" class="text-5xl md:text-6xl font-normal tracking-tight text-blue-950 max-w-3xl mx-auto leading-tight">
                The nexus of <br> global connectivity
            </h1>
            
            <!-- Header Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </header>

        <!-- Stats Section -->
        <section class="border-b border-transparent relative z-10 bg-white/10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-300/40 text-center">
                
                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-950 tracking-tight">150+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        countries integrated worldwide
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/90 tracking-tight">
                        <span class="text-blue-500/80 font-light mr-1">$</span>3.1T
                    </div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        annual transfer volume
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/80 tracking-tight">99.999%</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        infrastructure reliability
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6">
                    <div class="text-4xl font-normal text-blue-700/80 tracking-tight">850M+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        verified digital identities
                    </div>
                </div>

            </div>
            
            <!-- Stats Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </section>

        <!-- Animation Section -->
        <main class="flex-grow relative overflow-hidden min-h-[500px]">
            
            <!-- Controls -->
            <div class="absolute top-6 right-6 flex gap-2 z-20">
                <button id="pauseBtn" class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Pause animation">
                    <iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Settings">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
            </div>

            <!-- Canvas Container -->
            <canvas id="networkCanvas" class="absolute inset-0 w-full h-full block z-0"></canvas>
            
            <!-- Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </main>
    </div>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let isPlaying = true;
        let animationFrameId;

        function resize() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initParticles();
        }

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.PI + (Math.random() * Math.PI); 
                if (Math.random() > 0.3) {
                    this.angle = Math.PI * 1.25 + (Math.random() * Math.PI * 0.5);
                }

                this.speed = 0.5 + Math.random() * 2.5;
                this.distance = initial ? Math.random() * (height * 1.2) : Math.random() * 50;
                this.maxLength = 20 + Math.random() * 180;
                this.length = 0;
                this.alpha = 0;
            }

            update() {
                this.distance += this.speed;
                this.length = Math.min(this.maxLength, this.distance * 0.8);
                
                const normalizedDist = this.distance / (height * 1.2);
                this.alpha = Math.min(1, this.distance / 100) * Math.max(0, 1 - normalizedDist);

                if (this.distance > height * 1.5) {
                    this.reset();
                }
            }

            draw() {
                const originX = width / 2;
                const originY = height + 50;

                const startX = originX + Math.cos(this.angle) * this.distance;
                const startY = originY + Math.sin(this.angle) * this.distance;
                const endX = originX + Math.cos(this.angle) * (this.distance + this.length);
                const endY = originY + Math.sin(this.angle) * (this.distance + this.length);

                const distRatio = Math.min(1, this.distance / height);
                const hue = 220 + (distRatio * 15);
                const lightness = 15 + (distRatio * 35);
                
                const color = \`hsla(\${hue}, 90%, \${lightness}%, \${this.alpha})\`;
                const tailColor = \`hsla(\${hue}, 90%, \${Math.max(5, lightness - 15)}%, \${this.alpha * 0.05})\`;

                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, tailColor);
                gradient.addColorStop(1, color);
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5 + (distRatio * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(endX, endY, 0.5 + (distRatio * 1.5), 0, Math.PI * 2);
                ctx.fillStyle = \`hsla(\${hue}, 100%, \${lightness + 20}%, \${this.alpha * 1.5})\`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 150 : 400;
            for(let i=0; i<particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!isPlaying) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationFrameId);
            resize();
            if(isPlaying) animate();
        });

        resize();
        animate();

        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                animate();
            } else {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                cancelAnimationFrame(animationFrameId);
            }
        });

        // GSAP Masked Text Reveal
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            const titleEl = document.getElementById('reveal-title');
            if (titleEl) {
                const lines = titleEl.innerHTML.split(/<br\\s*\\/?>/i);
                titleEl.innerHTML = '';
                
                lines.forEach((line, index) => {
                    const words = line.split(' ');
                    words.forEach((word) => {
                        if (word.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'inline-block overflow-hidden align-bottom';
                            wrapper.style.paddingBottom = '0.1em'; 
                            wrapper.style.marginBottom = '-0.1em';
                            
                            const inner = document.createElement('span');
                            inner.className = 'inline-block reveal-text';
                            inner.style.transform = 'translateY(110%)';
                            inner.innerHTML = word;
                            
                            wrapper.appendChild(inner);
                            titleEl.appendChild(wrapper);
                            titleEl.appendChild(document.createTextNode(' '));
                        }
                    });
                    if (index < lines.length - 1) {
                        titleEl.appendChild(document.createElement('br'));
                    }
                });

                gsap.to('.reveal-text', {
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '#reveal-title',
                        start: 'top 90%',
                    }
                });
            }
        });
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\interface-lines.html.js
var n8;
var init_interface_lines_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\interface-lines.html.js"() {
    n8 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Interface</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#0a0a0c] text-zinc-400 font-mono min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-zinc-800 selection:text-white">
    
    <!-- Aura Asset Background Image -->
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" 
         class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none z-0" 
         alt="">

    <!-- WebGL-simulated Background Animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Main UI Container -->
    <main class="relative z-10 w-full max-w-2xl flex flex-col gap-12 sm:gap-20">

        <!-- PANEL 1: CORE (Red/Orange) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#c87a65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#c87a65]">
                
                <!-- Top Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c87a65]/20 pb-2">
                    <h1 class="gsap-reveal text-3xl sm:text-4xl tracking-tight font-medium uppercase animate-pulse" style="animation-duration: 4s;">[ CORE ]</h1>
                    <div class="flex gap-6 text-xs tracking-wider">
                        <div class="flex flex-col gap-1">
                            <span>CONF.SYS</span>
                            <span class="opacity-70">RESTART</span>
                            <span class="opacity-70">SLEEP</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span>BUILD_11</span>
                            <span class="opacity-70">ANALYZE</span>
                            <span class="opacity-70">INPUT NEEDED</span>
                        </div>
                    </div>
                </div>

                <!-- Middle Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <!-- Dot Matrix -->
                    <div class="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-80" id="matrix-1">
                        <!-- Populated by JS for brevity -->
                    </div>
                    
                    <!-- Right Controls -->
                    <div class="flex flex-col gap-2 min-w-[200px]">
                        <div class="flex items-center justify-between border-b border-[#c87a65]/20 pb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#c87a65] animate-ping" style="animation-duration: 3s;"></div>
                                <span class="text-lg tracking-widest">++</span>
                            </div>
                            <span class="text-xs">HASH: 0x3C9A</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span>2B-44 - TEMP: 61\xB0C</span>
                            <div class="w-8 h-3 rounded-full border border-[#c87a65]/50 flex items-center p-[1px]">
                                <div class="w-2 h-full bg-[#c87a65] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PANEL 2: SECURE (Green) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-l from-[#7a9f65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-3 text-[#7a9f65]">
                
                <!-- Ruler -->
                <div class="relative w-full h-4 border-t border-[#7a9f65]/30 flex justify-between">
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <!-- Large Dot Pattern -->
                    <div class="flex flex-col gap-2 opacity-90">
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div></div>
                    </div>

                    <!-- Info Box & Title -->
                    <div class="flex flex-col items-end gap-2 w-full sm:w-auto">
                        <div class="flex items-stretch gap-2">
                            <div class="border border-[#7a9f65]/30 p-2 text-xs flex flex-col justify-center min-w-[120px]">
                                <span>APPROVED</span>
                                <span class="opacity-70">ID: X7-44</span>
                                <span class="opacity-70">SEQ: #0933</span>
                            </div>
                            <div class="border border-[#7a9f65]/30 p-2 flex items-center justify-center">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-xl"></iconify-icon>
                            </div>
                            <!-- Logo Box -->
                            <div class="w-12 h-12 bg-[#7a9f65] relative overflow-hidden flex-shrink-0">
                                <div class="absolute w-16 h-4 bg-[#0a0a0c] -rotate-45 top-4 -left-2"></div>
                            </div>
                        </div>
                        <h2 class="gsap-reveal text-2xl sm:text-3xl tracking-tight font-medium uppercase">SECURE</h2>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="flex flex-col sm:flex-row justify-between text-xs mt-2 opacity-80">
                    <span>LOADING <span class="animate-pulse">...</span></span>
                    <span>//KEY: <span class="text-white opacity-90">0x7B11</span>//</span>
                </div>
                <div class="text-xs opacity-70">
                    SYNCING - ID: 88-K - DATA DROP: 0.2% SECTOR 9
                </div>
            </div>
        </section>

        <!-- PANEL 3: 909 (Purple/Blue) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-t from-[#756a9f]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#756a9f]">
                
                <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Node Diagram -->
                    <div class="relative w-32 h-16 flex-shrink-0 hidden sm:block">
                        <!-- Lines -->
                        <div class="absolute top-2 left-2 w-20 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-10 left-6 w-16 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-2 left-22 w-px h-8 bg-[#756a9f]/50 rotate-45 origin-top-left"></div>
                        <div class="absolute top-10 left-6 w-px h-6 bg-[#756a9f]/50 -rotate-45 origin-top-left"></div>
                        
                        <!-- Nodes -->
                        <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-1.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-5.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-14.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        
                        <!-- Arrows -->
                        <div class="absolute top-5 left-0 flex items-center gap-1">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                    </div>

                    <!-- Middle: Title -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1 sm:hidden">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                        <h3 class="gsap-reveal text-5xl sm:text-6xl tracking-tight font-normal">909</h3>
                    </div>

                    <!-- Right: Info & Circle -->
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col text-xs">
                            <span>SECURITY-NET</span>
                            <span class="opacity-70">ACTIVE</span>
                            <span class="opacity-70">STAT: 0xBB02</span>
                            <div class="flex gap-1 mt-1">
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current bg-current"></div>
                            </div>
                        </div>
                        
                        <!-- Circular Dots -->
                        <div class="relative w-12 h-12 animate-spin" style="animation-duration: 10s; animation-timing-function: linear;">
                            <div class="absolute inset-0" id="circle-dots">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="text-center sm:text-left text-xs flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 mt-2 opacity-80">
                    <span>UPLINK STATUS - <span class="text-white opacity-90">ONLINE</span></span>
                    <span>POWER: 48V - DRAW: 1.8A</span>
                </div>
            </div>
        </section>

    </main>

    <script>
        // GSAP Masked Staggered Reveal Logic
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gsap-reveal').forEach(el => {
            const text = el.innerText;
            const words = text.split(' ');
            el.innerHTML = '';
            words.forEach((word, i) => {
                const outer = document.createElement('span');
                // Ensure overflow hidden and adjust alignment
                outer.className = 'inline-block overflow-hidden pb-1 -mb-1 align-bottom';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[120%]';
                inner.innerText = word + (i < words.length - 1 ? '\\u00A0' : '');
                outer.appendChild(inner);
                el.appendChild(outer);
                
                gsap.to(inner, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    }
                });
            });
        });

        // Populate Matrix 1
        const matrixContainer = document.getElementById('matrix-1');
        let matrixHTML = '';
        for(let i=0; i<80; i++) {
            const isFilled = Math.random() > 0.6;
            const isDim = Math.random() > 0.5;
            matrixHTML += \`<div class="w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''} \${isDim ? 'opacity-30' : ''}"></div>\`;
        }
        matrixContainer.innerHTML = matrixHTML;

        // Populate Circle Dots
        const circleContainer = document.getElementById('circle-dots');
        let circleHTML = '';
        for(let i=0; i<12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 24 + 20 * Math.cos(angle) - 3; // center 24, radius 20, offset half width
            const y = 24 + 20 * Math.sin(angle) - 3;
            const isFilled = i % 3 === 0;
            circleHTML += \`<div class="absolute w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''}" style="left: \${x}px; top: \${y}px;"></div>\`;
        }
        circleContainer.innerHTML = circleHTML;

        // WebGL-simulated Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const numParticles = window.innerWidth < 640 ? 30 : 70;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / 120) * 0.42})\`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
            }
            requestAnimationFrame(drawLines);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawLines();
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\wireframe-forms.html.js
var t2;
var init_wireframe_forms_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\wireframe-forms.html.js"() {
    t2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus / Systems</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
    </style>
</head>
<body class="text-zinc-300 min-h-screen flex flex-col overflow-x-hidden selection:bg-white/20 antialiased">

    <!-- Navbar / Top Brand -->
    <nav class="w-full relative z-20">
        <!-- Gradient Border Bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 text-sm tracking-tight font-medium text-white">
                <iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
                <span>NEXUS / CORE</span>
            </div>
            <div class="flex items-center gap-6 text-xs font-mono text-zinc-500">
                <span class="hidden sm:block reveal-text">BUILD.v7.2.1</span>
                <span class="flex items-center gap-2 text-zinc-400">
                    <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span class="reveal-text">ACTIVE</span>
                </span>
            </div>
        </div>
    </nav>

    <!-- Main Layout with Vertical Container Lines -->
    <main class="flex-grow w-full max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3">
        
        <!-- Gradient Container Borders -->
        <div class="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
        <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>

        <!-- Decoration: Corner Squares for Container Lines -->
        <div class="absolute -top-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -top-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>

        <!-- Section 01: Hypercube -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <!-- Header -->
            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Prismatic Core</span>
                <span class="reveal-text">01//</span>
            </div>
            
            <!-- Description Top -->
            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                The foundational structure processes raw data streams, organizing chaotic inputs into structured geometric architectures.
            </p>

            <!-- Visual (Canvas) -->
            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas1" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Axis Labels -->
                <span class="absolute left-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Input</span>
                <span class="absolute right-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Output</span>
            </div>

            <!-- Footer -->
            <div class="relative z-10 space-y-6">
                <div class="pt-4 relative">
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">Sequence: Alpha</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Nexus enables the synthesis of physical and virtual environments, unlocking realms previously hidden from standard view.
                    </p>
                </div>
                <!-- Mini Grid Decor -->
                <div class="flex justify-end">
                    <div class="grid grid-cols-4 grid-rows-3 gap-[1px] bg-[#1a1a1c] border border-[#1a1a1c] w-24 h-16 opacity-50">
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b] flex items-center justify-center"><div class="w-1 h-1 bg-white rounded-full"></div></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                    </div>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">V-00.XX.1024</span>
                </div>
            </div>
        </div>

        <!-- Section 02: Logic Cylinders -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Cognitive Mesh</span>
                <span class="reveal-text">02//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                Data flow stems from legacy nodes. An interface born from overlapping algorithms and encrypted keys.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas2" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Floating Glyphs -->
                <div class="absolute inset-0 flex items-center justify-center gap-16 pointer-events-none">
                    <iconify-icon icon="solar:code-scan-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite]"></iconify-icon>
                    <iconify-icon icon="solar:database-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite] animation-delay-2000"></iconify-icon>
                </div>
            </div>

            <div class="relative z-10 space-y-6">
                <div class="text-right">
                    <p class="text-xs text-zinc-500 leading-relaxed max-w-[240px] ml-auto reveal-text">
                        Within Nexus, metrics are redefined: bridging analytical processing and immersive interaction. The ultimate signature of digital evolution.
                    </p>
                </div>
                <div class="relative flex justify-between items-end font-mono text-[10px] text-zinc-600 pt-12">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">SYS.MEM.OVERFLOW</span>
                </div>
            </div>
        </div>

        <!-- Section 03: Esoteric Sphere -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg'); background-size: cover; background-position: center;"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Kinetic Frequency</span>
                <span class="reveal-text">03//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                "Frequency" denotes the synchronization of fragmented data packets, individuals, or systems oscillating at parallel states.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas3" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
            </div>

            <div class="relative z-10 space-y-6">
                 <div class="pt-4 relative">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">State: Synchronized</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Frequency: Data equals the juncture between pure logic and tactile feedback. Tuning to optimal processing bandwidths.
                    </p>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <div class="flex gap-2">
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700 bg-white/20"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                    </div>
                    <span class="reveal-text">Nexus.sys</span>
                </div>
            </div>
        </div>
    </main>

    <!-- Bottom Interface Bar -->
    <footer class="w-full relative z-20 bg-[#09090b]">
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between font-mono text-[10px] text-zinc-600 uppercase">
            <div class="flex items-center gap-4">
                <span class="reveal-text">Ping: 2ms</span>
                <span class="hidden sm:inline reveal-text">Cipher: RSA-4096</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
                <a href="#" class="hover:text-white transition-colors">Terms</a>
                <a href="#" class="hover:text-white transition-colors">Doctrine</a>
            </div>
        </div>
    </footer>

    <!-- WebGL-like Canvas Animation Script & GSAP Reveal -->
    <script>
        // GSAP ScrollTrigger Text Reveal
        gsap.registerPlugin(ScrollTrigger);
        
        document.querySelectorAll('.reveal-text').forEach(el => {
            const text = el.innerText.trim();
            const words = text.split(/\\s+/);
            el.innerHTML = words.map(word => 
                \`<span style="overflow: hidden; display: inline-block; vertical-align: top;"><span style="display: inline-block; transform: translateY(100%);" class="reveal-word">\${word}</span></span>\`
            ).join(' ');

            gsap.to(el.querySelectorAll('.reveal-word'), {
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Wireframe Engine
        class WireframeEngine {
            constructor(canvasId, shapeType) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.width = this.canvas.offsetWidth;
                this.height = this.canvas.offsetHeight;
                this.canvas.width = this.width * 2; 
                this.canvas.height = this.height * 2;
                this.ctx.scale(2, 2);
                this.cx = this.width / 2;
                this.cy = this.height / 2;
                this.shapeType = shapeType;
                
                this.points = [];
                this.edges = [];
                this.angleX = 0;
                this.angleY = 0;
                
                this.initShape();
                this.animate();
            }

            initShape() {
                if (this.shapeType === 'cube') {
                    const s = 80;
                    this.points.push({x: s, y: s, z: s}, {x: -s, y: -s, z: s}, {x: -s, y: s, z: -s}, {x: s, y: -s, z: -s});
                    this.points.push({x: -s, y: -s, z: -s}, {x: s, y: s, z: -s}, {x: s, y: -s, z: s}, {x: -s, y: s, z: s});
                    this.edges.push([0,1], [0,2], [0,3], [1,2], [1,3], [2,3]);
                    this.edges.push([4,5], [4,6], [4,7], [5,6], [5,7], [6,7]);
                } else if (this.shapeType === 'cylinders') {
                    const r = 70;
                    const segments = 24;
                    for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: -30 });
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: 30 });
                        let next = (i+1)%segments;
                        this.edges.push([i*2, next*2], [i*2+1, next*2+1], [i*2, i*2+1]);
                    }
                     let offset = this.points.length;
                     for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: -30, z: Math.sin(theta)*r });
                        this.points.push({ x: Math.cos(theta)*r, y: 30, z: Math.sin(theta)*r });
                        let next = (i+1)%segments;
                        this.edges.push([offset + i*2, offset + next*2], [offset + i*2+1, offset + next*2+1], [offset + i*2, offset + i*2+1]);
                    }
                } else if (this.shapeType === 'sphere') {
                    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
                    const s = 50; 
                    const p = [
                        [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
                        [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
                        [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
                    ];
                    p.forEach(v => this.points.push({x: v[0]*s, y: v[1]*s, z: v[2]*s}));
                    for(let i=0; i<this.points.length; i++){
                        for(let j=i+1; j<this.points.length; j++){
                            let d = Math.hypot(this.points[i].x - this.points[j].x, this.points[i].y - this.points[j].y, this.points[i].z - this.points[j].z);
                            if(d < s*2.1) this.edges.push([i,j]);
                        }
                    }
                     p.forEach(v => this.points.push({x: v[0]*s*0.5, y: v[1]*s*0.5, z: v[2]*s*0.5}));
                     let off = 12;
                     for(let i=0; i<12; i++){
                        for(let j=i+1; j<12; j++){
                            let d = Math.hypot(this.points[off+i].x - this.points[off+j].x, this.points[off+i].y - this.points[off+j].y, this.points[off+i].z - this.points[off+j].z);
                            if(d < s*1.1) this.edges.push([off+i,off+j]);
                        }
                        this.edges.push([i, off+i]); 
                     }
                }
            }

            project(p) {
                let x = p.x * Math.cos(this.angleY) - p.z * Math.sin(this.angleY);
                let z = p.z * Math.cos(this.angleY) + p.x * Math.sin(this.angleY);
                let y = p.y * Math.cos(this.angleX) - z * Math.sin(this.angleX);
                z = z * Math.cos(this.angleX) + p.y * Math.sin(this.angleX);
                
                let fov = 400;
                let scale = fov / (fov + z);
                return { x: x * scale + this.cx, y: y * scale + this.cy, z: z };
            }

            animate() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.angleY += 0.005;
                this.angleX += 0.002;
                
                this.ctx.lineWidth = 0.8;

                let projected = this.points.map(p => this.project(p));

                this.edges.forEach(e => {
                    let p1 = projected[e[0]];
                    let p2 = projected[e[1]];
                    let depth = (p1.z + p2.z) / 2;
                    let alpha = Math.max(0.1, (1 - (depth / 200)));
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = \`rgba(255, 255, 255, \${alpha * 0.4})\`;
                    this.ctx.stroke();
                });

                projected.forEach(p => {
                    let alpha = Math.max(0.1, (1 - (p.z / 200)));
                    if (alpha > 0.5) {
                        this.ctx.fillStyle = \`rgba(255, 255, 255, \${alpha})\`;
                        this.ctx.fillRect(p.x-1, p.y-1, 2, 2);
                    }
                });

                requestAnimationFrame(() => this.animate());
            }
        }

        window.onload = () => {
            new WireframeEngine('canvas1', 'cube');
            new WireframeEngine('canvas2', 'cylinders');
            new WireframeEngine('canvas3', 'sphere');
        };
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\defense-lines.html.js
var n9;
var init_defense_lines_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\defense-lines.html.js"() {
    n9 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defenses</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030303] min-h-screen flex flex-col items-center justify-center overflow-hidden text-white relative antialiased selection:bg-red-500/30" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Canvas for background line animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 opacity-50 pointer-events-none"></canvas>

    <!-- Ambient background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <main class="relative z-10 flex flex-col items-center justify-center w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- 3D Card Carousel -->
        <div class="relative flex items-center justify-center w-full h-[400px] sm:h-[650px]" style="perspective: 1200px;">
            <div id="carousel" class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d;">
                
                <!-- Left Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-r from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(-180%) translateZ(-400px) rotateY(35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-r from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(-120%) translateZ(-250px) rotateY(25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-r from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(-60%) translateZ(-100px) rotateY(15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Right Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-l from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(180%) translateZ(-400px) rotateY(-35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-l from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(120%) translateZ(-250px) rotateY(-25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-l from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(60%) translateZ(-100px) rotateY(-15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Center Active Card -->
                <div class="card absolute w-36 sm:w-72 h-[269px] sm:h-[461px] bg-gradient-to-br from-[#ff4747] to-[#cc0000] rounded-xl flex items-center justify-center z-30 border border-red-300/40 overflow-hidden cursor-pointer pointer-events-auto" style="transform: translateZ(50px); box-shadow: 0 0 80px 15px rgba(220, 38, 38, 0.35), inset 0 0 30px rgba(255,255,255,0.15);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" alt="Abstract Pattern">
                    <div class="relative flex w-full h-full pointer-events-none" style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px);">
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography Section (Overlayed) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-40" id="hero-text">
            
            <!-- Monospaced Technical Badge -->
            <div id="hero-badge" class="opacity-0 flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a0505]/80 backdrop-blur-md text-red-400 text-xs font-light tracking-widest uppercase mb-8" style="font-family: 'DM Mono', monospace; box-shadow: 0 0 20px rgba(220,38,38,0.15); border: 1px solid transparent; background-clip: padding-box, border-box; background-origin: padding-box, border-box; background-image: linear-gradient(#1a0505, #1a0505), linear-gradient(to right, rgba(153,27,27,0.6), rgba(239,68,68,0.3));">
                <iconify-icon icon="solar:radar-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                <span>Continuous Network Surveillance</span>
            </div>
            
            <!-- Elegant Serif Headline -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#f5f5f5] leading-none max-w-5xl flex flex-col items-center gap-y-2 sm:gap-y-4" style="font-family: 'Cormorant Garamond', serif; text-shadow: 0 10px 40px rgba(0,0,0,0.9);">
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">Expose</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">hidden</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">vulnerabilities</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 italic text-red-100">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">within</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">your</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">cloud</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">infrastructure</span></span>
                </div>
            </h1>

            <!-- Clean Sans-Serif CTA -->
            <button id="hero-button" class="opacity-0 group relative mt-10 sm:mt-14 px-8 py-4 rounded-lg text-sm font-light text-white transition-all active:scale-95 pointer-events-auto flex items-center justify-center bg-red-600 border border-red-500/50 overflow-hidden" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                <span class="absolute inset-0 w-full h-full bg-red-500 transition-all duration-500 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] z-0"></span>
                <span class="relative z-10 flex items-center gap-2">
                    Start Threat Assessment
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                </span>
            </button>
        </div>
    </main>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseLength: Math.random() * 80 + 20,
                    speedY: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.2 + 0.05
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            particles.forEach(p => {
                const distFromCenterX = Math.abs(p.x - centerX);
                const distFromCenterY = Math.abs(p.y - centerY);
                
                const proximityX = Math.max(0, 1 - (distFromCenterX / (width / 2)));
                const proximityY = Math.max(0, 1 - (distFromCenterY / (height / 2)));
                const centerProximity = proximityX * (0.4 + proximityY * 0.6);
                
                const currentLength = p.baseLength * (1 + centerProximity * 4); 
                
                const currentOpacity = Math.min(1.0, p.baseOpacity + (centerProximity * 2.0));
                const brightness = Math.floor(centerProximity * 180);
                
                ctx.beginPath();
                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + currentLength);
                grad.addColorStop(0, \`rgba(220, 38, 38, 0)\`);
                grad.addColorStop(0.5, \`rgba(255, \${38 + brightness}, \${38 + brightness}, \${currentOpacity})\`);
                grad.addColorStop(1, \`rgba(220, 38, 38, 0)\`);
                
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + currentLength);
                ctx.stroke();

                p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);
                
                if(p.y + currentLength < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 3D Cards Floating, Mouse Tracking & Hover Animation
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        let time = 0;
        let targetRotateY = 0;
        let currentRotateY = 0;

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => card.isHovered = true);
            card.addEventListener('mouseleave', () => card.isHovered = false);
            card.hoverAmt = 0;
        });

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            targetRotateY = x * 40; 
        });

        function animateCards() {
            time += 0.015;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            carousel.style.transform = \`rotateY(\${currentRotateY}deg)\`;

            cards.forEach((card, index) => {
                if(!card.dataset.baseTransform) {
                    card.dataset.baseTransform = card.style.transform;
                    const match = card.dataset.baseTransform.match(/translateX\\(([^)]+)\\)/);
                    card.directionX = match ? parseFloat(match[1]) : 0;
                }
                
                const targetHover = card.isHovered ? 1 : 0;
                card.hoverAmt += (targetHover - card.hoverAmt) * 0.15;
                
                const hoverZ = card.hoverAmt * 60;
                const hoverY = card.hoverAmt * -20;
                let hoverX = 0;
                
                if (card.directionX < 0) hoverX = card.hoverAmt * -40;
                else if (card.directionX > 0) hoverX = card.hoverAmt * 40;

                const offset = Math.sin(time + (index * 0.5)) * 8;
                
                card.style.transform = \`\${card.dataset.baseTransform} translateX(\${hoverX}px) translateY(\${offset + hoverY}px) translateZ(\${hoverZ}px)\`;
            });
            requestAnimationFrame(animateCards);
        }
        animateCards();

        // Entrance Animation with GSAP Masked Reveal
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate headline words in a masked stagger
            gsap.to('.word', {
                y: "0%",
                duration: 1.2,
                stagger: 0.06,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#hero-text",
                    start: "top 90%"
                }
            });

            // Fade in and float up the badge and button sequentially
            gsap.fromTo(['#hero-badge', '#hero-button'], 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out", delay: 0.4 }
            );
        }, 150);
    <\/script>
</body>
</html>`;
  }
});

// raw:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\vendor\threeui\src\shaders\neuform-isolated\sources\override-grid.html
var override_grid_default;
var init_override_grid = __esm({
  "raw:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\vendor\\threeui\\src\\shaders\\neuform-isolated\\sources\\override-grid.html"() {
    override_grid_default = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Override</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-zinc-900 text-orange-500 font-mono w-full h-screen overflow-hidden relative select-none flex items-center justify-center">

    <!-- Aura Asset Background Image (Subtle) -->
    <div class="absolute inset-0 z-[-1] opacity-30 mix-blend-screen bg-cover bg-center" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Dither / Noise Overlay -->
    <div class="pointer-events-none absolute inset-0 z-50 opacity-[0.06] mix-blend-screen" style="background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2 2%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3Crect x=%221%22 y=%221%22 width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3C/svg%3E'); background-size: 2px 2px;"></div>

    <!-- WebGL-style Block by Block Animation Canvas -->
    <canvas id="grid-canvas" class="absolute inset-0 z-0 opacity-50" aria-hidden="true"></canvas>

    <!-- Viewport Corner Markers -->
    <div class="absolute top-4 left-4 w-4 h-4 border-t border-l border-orange-500/50 z-10"></div>
    <div class="absolute top-4 right-4 w-4 h-4 border-t border-r border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-orange-500/50 z-10"></div>

    <!-- Background Telemetry Text -->
    <div class="absolute top-8 left-8 text-xs font-thin opacity-60 tracking-widest flex flex-col gap-1 z-10 hidden sm:flex">
        <span>SYNC_PHASE: <span id="log-frame">000000</span></span>
        <span>SYS_OVERRIDE_SEQ: [ ACTIVE ]</span>
        <span>ROUTE_MAP: TRACING</span>
        <span>CRIT_ALERT:</span>
        <span class="text-orange-600 animate-pulse">> ERR_TIMEOUT</span>
        <span id="typewriter" class="text-orange-400"></span>
    </div>

    <div class="absolute bottom-8 right-8 text-xs font-thin opacity-60 tracking-widest text-right z-10 hidden sm:block">
        <span id="log-mem">REG_ADDR: 0xFA48B2</span><br>
        <span>STATE: OVERRIDING</span>
    </div>

    <!-- Main Content Container -->
    <main class="relative z-20 w-full max-w-5xl h-full flex items-center justify-center px-4 sm:px-16">
        
        <!-- Container Lines & Mini Squares -->
        <div class="absolute inset-y-12 left-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute inset-y-12 right-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute top-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute top-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>

        <!-- The Main Orange Block (Gradient Border for Premium Surface) -->
        <div class="p-[1px] bg-gradient-to-br from-orange-300 via-orange-600/70 to-orange-900/40 relative w-full shadow-[0_0_50px_rgba(249,115,22,0.15)]">
            
            <div class="relative w-full h-40 sm:h-48 bg-[#f97316] flex items-center transition-all duration-100">
                
                <!-- Top Left Tab -->
                <div class="absolute -top-6 left-0 h-6 w-24 bg-[#f97316] flex items-center justify-between px-2 text-xs font-normal text-zinc-800 tracking-widest border-b border-zinc-800">
                    <span>TIMEOUT</span>
                    <div class="w-1.5 h-1.5 bg-zinc-800"></div>
                </div>

                <!-- Right Edge Extrusions & Cutouts -->
                <div class="absolute -top-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute top-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>
                <div class="absolute -bottom-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute bottom-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>

                <!-- Left Edge Middle Cutout -->
                <div class="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-4 bg-zinc-800 border-r border-[#f97316]/50"></div>
                <!-- Right Edge Middle Cutout -->
                <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-6 bg-zinc-800"></div>

                <!-- Inner Layout -->
                <div class="flex w-full h-full px-4 sm:px-8">
                    
                    <!-- Left Section: Warning & Text -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-1/2 border-zinc-800/30 sm:border-r pr-0 sm:pr-6 relative gs-reveal-container">
                        <!-- Subtle animated background highlight in left section -->
                        <div class="absolute inset-0 bg-white/5 opacity-0 animate-[pulse_4s_ease-in-out_infinite]" style="animation-direction: alternate;"></div>
                        
                        <iconify-icon icon="solar:round-transfer-horizontal-linear" class="text-zinc-800 text-5xl sm:text-7xl shrink-0 animate-spin-slow relative z-10" style="stroke-width: 1.5px; animation: spin 4s linear infinite;"></iconify-icon>
                        <div class="flex flex-col relative z-10 pt-1">
                            <h1 class="text-zinc-800 text-3xl sm:text-5xl font-light tracking-tight leading-[0.85] uppercase overflow-hidden pb-1">
                                <span class="block gs-reveal">System</span>
                            </h1>
                            <h2 class="text-zinc-800 text-3xl sm:text-5xl font-thin tracking-tight leading-[0.85] uppercase mt-1 overflow-hidden pb-1">
                                <span class="block gs-reveal">Override</span>
                            </h2>
                        </div>
                    </div>

                    <!-- Right Section: Data Matrix -->
                    <div class="hidden sm:flex flex-1 relative items-center justify-end pl-6">
                        <!-- Crosshairs / Guides -->
                        <div class="absolute inset-x-6 top-1/2 h-px bg-zinc-800/20 -translate-y-1/2"></div>
                        <div class="absolute inset-y-8 right-32 w-px bg-zinc-800/20"></div>
                        <div class="absolute inset-y-8 right-12 w-px bg-zinc-800/20"></div>

                        <!-- Data Grid Blocks -->
                        <div class="flex gap-4 sm:gap-6 relative z-10">
                            <!-- Block Group 1 -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                            
                            <!-- Block Group 2 (Offset) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit mt-8">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] opacity-20 animate-pulse"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>

                            <div class="w-2"></div>

                            <!-- Block Group 3 (Top aligned, missing piece blinking to suggest retry) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-transparent border border-zinc-800 relative animate-pulse">
                                    <div class="absolute inset-x-1 top-1/2 h-px bg-zinc-800"></div>
                                    <div class="absolute inset-y-1 left-1/2 w-px bg-zinc-800"></div>
                                </div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Left Micro Details -->
                <div class="absolute bottom-2 left-4 flex gap-2 items-center text-zinc-800">
                    <iconify-icon icon="solar:server-square-linear" class="text-lg opacity-80" style="stroke-width: 1.5px;"></iconify-icon>
                    <div class="flex flex-col">
                        <span class="text-xs tracking-widest opacity-80 uppercase font-light leading-none">AUTH_NODE // ACCESS DENIED</span>
                        <span class="text-xs tracking-widest opacity-60 uppercase font-thin mt-1">EXECUTING BYPASS PROTOCOL...</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        // GSAP ScrollTrigger Masked Reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".gs-reveal", {
            y: "120%",
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".gs-reveal-container",
                start: "top 95%",
            }
        });

        // WebGL-style Block by Block Animation (Simulated in 2D for constraints)
        const canvas = document.getElementById('grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.04;

            const blockSize = 48;
            const blockGap = 2;
            const pitch = blockSize + blockGap;
            const cols = Math.ceil(width / pitch);
            const rows = Math.ceil(height / pitch);

            const centerX = cols / 2;
            const centerY = rows / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const dist = Math.sqrt(Math.pow(i - centerX, 2) + Math.pow(j - centerY, 2));
                    const wave = Math.sin(time - dist * 0.4);
                    
                    if (wave > 0) {
                        const alpha = wave * 0.15; 
                        ctx.fillStyle = \`rgba(249, 115, 22, \${alpha})\`;
                        
                        // Block scaling for "Z-depth" pulsing feel
                        const scale = wave * 0.7 + 0.3;
                        const size = blockSize * scale;
                        const offset = (pitch - size) / 2;
                        
                        ctx.fillRect(i * pitch + offset, j * pitch + offset, size, size);
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        draw();

        // Simulate telemetry data updates
        setInterval(() => {
            const frameLog = document.getElementById('log-frame');
            const memLog = document.getElementById('log-mem');
            if (frameLog) frameLog.innerText = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
            if (memLog) {
                const hex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
                memLog.innerText = \`REG_ADDR: 0x\${hex}\`;
            }
        }, 150);

        // Typewriter Animation Logic
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement) {
            const phrases = ["> INITIATING BYPASS...", "> FLUSHING REGISTERS...", "> TIMEOUT: RETRYING..."];
            let phraseIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            
            function type() {
                const currentPhrase = phrases[phraseIdx];
                if (isDeleting) {
                    charIdx--;
                } else {
                    charIdx++;
                }
                
                typewriterElement.innerText = currentPhrase.substring(0, charIdx) + "_";
                
                let speed = isDeleting ? 30 : 60;
                
                if (!isDeleting && charIdx === currentPhrase.length) {
                    speed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    speed = 500;
                }
                
                setTimeout(type, speed);
            }
            type();
        }
    <\/script>
</body>
</html>`;
  }
});

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\topo-field.html.js
var n10;
var init_topo_field_html = __esm({
  "official-js:C:\\Omkar\\Hackathons\\Nebius x NVIDIA Global AI Hackathon\\Cited WebApp\\node_modules\\@designcodeio\\threeui\\lib-dist\\shaders\\neuform-isolated\\sources\\topo-field.html.js"() {
    n10 = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusNode Infrastructure</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen relative overflow-x-hidden selection:bg-white/20 selection:text-white font-light" style="background-color: #000; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- WebGL Background Container -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <canvas id="topo-canvas" class="w-full h-full"></canvas>
        <!-- Gradient overlay to fade bottom and top for text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-90 z-10"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 flex flex-col min-h-screen">
        
        <!-- Navigation -->
        <header class="container mx-auto px-6 py-6 flex items-center justify-between reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
            <div class="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer">
                <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
                <span class="font-light text-sm tracking-tight">NexusNode</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-extralight">
                <a href="#" class="hover:text-white transition-colors">Compute Clusters</a>
                <a href="#" class="hover:text-white transition-colors">Observability</a>
                <a href="#" class="hover:text-white transition-colors">Throughput</a>
                <a href="#" class="hover:text-white transition-colors">Consensus</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="#" class="hidden md:block text-sm text-neutral-400 font-extralight hover:text-white transition-colors">Sign In</a>
                <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
            <div class="max-w-4xl mx-auto flex flex-col items-center">
                
                <!-- Pill Badge -->
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span class="text-xs font-extralight text-neutral-300 tracking-wide uppercase">Nexus OS v4.2 deployment ready</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-neutral-500"></iconify-icon>
                </div>

                <h1 class="mask-container text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1]">
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Orchestrate</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">the</span></span>
                    <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 font-extralight inline-block">
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">neural</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">compute</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">fabric.</span></span>
                    </span>
                </h1>
                
                <p class="mask-container mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-extralight">
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Provision</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">ultra-low</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">latency</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">inference</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">nodes</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">with</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">zero</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">configuration.</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Enterprise-grade</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">AI</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">infrastructure</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">built</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">for</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">real-time</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">model</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">serving.</span></span>
                </p>
                
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors group">
                        Launch Workspace
                        <iconify-icon icon="solar:transfer-horizontal-linear" width="18" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/20 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Matrix with Subtler Gradient Borders -->
        <section class="container mx-auto px-6 py-24 pb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300">
                
                <!-- Feature Card 1 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Homomorphic</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Encryption</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Cryptographic isolation guaranteeing absolute data privacy during active model inference across edge nodes.</p>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Serverless</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">GPUs</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">On-demand distributed compute layers. Elastic scaling powered by decentralized tensor processing units.</p>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Global</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">State</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Sync</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Distributed vector database integration. Access and mutate embedding states with sub-millisecond precision.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactions & WebGL Implementation -->
    <script>
        // Native Reveal Animations Trigger
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 100);

        // GSAP Masked Reveal Implementation
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.mask-container').forEach(container => {
            const words = container.querySelectorAll('.mask-word');
            gsap.to(words, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                },
                y: "0%",
                opacity: 1,
                duration: 1.1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });
        });

        // WebGL Topography
        const canvas = document.getElementById('topo-canvas');
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });

        if (gl) {
            const vsSource = \`
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            \`;

            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform float u_dpr;

                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    // 1px physical grid rendering
                    float gridSize = 48.0 * u_dpr;
                    vec2 gridSt = gl_FragCoord.xy / gridSize;
                    vec2 gridFract = fract(gridSt);
                    float lineThickness = 1.0 / gridSize;
                    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
                    gridLines = clamp(gridLines, 0.0, 1.0) * 0.12; 

                    // Ultra-thin Topographic Lines
                    float noiseScale = 1.4;
                    vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float numBands = 10.0;
                    float bandVal = n * numBands;
                    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0; 
                    
                    // Thinner smoothstep constraint for fine industrial aesthetic
                    float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;

                    vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;

                    gl_FragColor = vec4(color, 1.0);
                }
            \`;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const dprLocation = gl.getUniformLocation(program, "u_dpr");

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(dprLocation, dpr);
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            let startTime = performance.now();
            function render(time) {
                gl.uniform1f(timeLocation, (time - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`;
  }
});

// vendor/threeui/src/shaders/neuform-isolated/NeuformBatchEffects.tsx
var NeuformBatchEffects_exports = {};
__export(NeuformBatchEffects_exports, {
  AmberHalftone: () => AmberHalftone,
  ConnectivityGraph: () => ConnectivityGraph,
  ConstellationField: () => ConstellationField,
  DIAGNOSTICS_PANEL_DEFAULTS: () => DIAGNOSTICS_PANEL_DEFAULTS,
  DefenseLines: () => DefenseLines,
  DiagnosticsPanel: () => DiagnosticsPanel,
  FlowField: () => FlowField,
  FluxVortex: () => FluxVortex,
  GatewayFlow: () => GatewayFlow,
  InterfaceLines: () => InterfaceLines,
  MatrixField: () => MatrixField,
  NEUFORM_BATCH_DEFAULTS: () => NEUFORM_BATCH_DEFAULTS,
  OverrideGrid: () => OverrideGrid,
  ParticleDrift: () => ParticleDrift,
  ParticleNetwork: () => ParticleNetwork,
  PortalField: () => PortalField,
  SignalParticles: () => SignalParticles,
  SkeuomorphicToggle: () => SkeuomorphicToggle,
  TopoField: () => TopoField,
  WireframeForms: () => WireframeForms
});
import { useEffect as useEffect2, useMemo, useRef as useRef2, useState } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}
function scaleCount(base, density, minimum = 1) {
  return Math.max(minimum, Math.round(base * density));
}
function resolveWireframeVariant(variant) {
  return variant === "cylinders" || variant === "sphere" ? variant : "cube";
}
function glslFloat(value, digits = 3) {
  const fixed = Number(value).toFixed(digits);
  return fixed.includes(".") ? fixed : `${fixed}.0`;
}
function resolveMode3(mode, fallback = "dark") {
  if (mode === void 0 || mode === null) return fallback;
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}
function readAutomaticMode() {
  if (typeof document === "undefined" || typeof window === "undefined") return "dark";
  const root = document.documentElement;
  const declared = root.dataset.scheme ?? root.dataset.theme;
  if (declared === "light" || declared === "dark") return declared;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function useAutomaticMode(enabled) {
  const [mode, setMode] = useState(readAutomaticMode);
  useEffect2(() => {
    if (!enabled || typeof document === "undefined" || typeof window === "undefined") return void 0;
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setMode(readAutomaticMode());
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["data-scheme", "data-theme"] });
    media.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, [enabled]);
  return mode;
}
function resolveBackground(background, mode) {
  return typeof background === "function" ? background(mode) : background;
}
function patchDiagnosticsPanel(source, { mode }) {
  let next = source.replaceAll(
    "time += 0.015;",
    "time += 0.015 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);"
  );
  if (mode === "light") {
    next = next.replaceAll("ctx.fillStyle = '#020804';", `ctx.fillStyle = '${LIGHT_PAPER}';`).replaceAll("rgba(52,211,153,", "rgba(4,120,87,");
  }
  return next;
}
function buildFocusedDocument(definition, knobs) {
  const mode = knobs.mode;
  const background = resolveBackground(definition.background, mode);
  const targetJson = JSON.stringify(definition.targets).replace(/</g, "\\u003c");
  const controlsJson = JSON.stringify({
    mode,
    speed: knobs.speed,
    size: knobs.size,
    gap: knobs.gap,
    length: knobs.length,
    density: knobs.density,
    strokeWidth: knobs.strokeWidth,
    opacity: knobs.opacity
  }).replace(/</g, "\\u003c");
  const patchedSource = definition.patch ? definition.patch(definition.source, {
    variant: knobs.variant,
    size: knobs.size,
    gap: knobs.gap,
    length: knobs.length,
    density: knobs.density,
    strokeWidth: knobs.strokeWidth,
    mode
  }) : definition.source;
  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${background} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${definition.focusCss ?? ""}
</style>`;
  const controlScript = `<script data-threeui-controls>
(function () {
  var controls = ${controlsJson};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
<\/script>`;
  const focusScript = `<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${targetJson};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;
  return patchedSource.replace(/<head([^>]*)>/i, `<head$1>${controlScript}${focusStyle}`).replace(/<\/body>/i, `${focusScript}</body>`);
}
function NeuformBatchEffect({
  definition,
  variant = "cube",
  mode,
  speed = NEUFORM_BATCH_DEFAULTS.speed,
  size = NEUFORM_BATCH_DEFAULTS.size,
  gap = NEUFORM_BATCH_DEFAULTS.gap,
  length = NEUFORM_BATCH_DEFAULTS.length,
  density = NEUFORM_BATCH_DEFAULTS.density,
  strokeWidth = NEUFORM_BATCH_DEFAULTS.strokeWidth,
  opacity = NEUFORM_BATCH_DEFAULTS.opacity,
  hue = NEUFORM_BATCH_DEFAULTS.hue,
  saturation = NEUFORM_BATCH_DEFAULTS.saturation,
  brightness = NEUFORM_BATCH_DEFAULTS.brightness,
  className,
  style
}) {
  const iframeRef = useRef2(null);
  const requestedMode = mode ?? definition.defaultMode ?? NEUFORM_BATCH_DEFAULTS.mode;
  const automaticMode = useAutomaticMode(requestedMode === "auto");
  const resolvedMode = requestedMode === "auto" ? automaticMode : resolveMode3(requestedMode, NEUFORM_BATCH_DEFAULTS.mode);
  const background = resolveBackground(definition.background, resolvedMode);
  const safeSpeed = clamp(speed, 0, 3);
  const safeSize = clamp(size, 0.05, 200);
  const safeGap = clamp(gap, 0, 64);
  const safeLength = clamp(length, 0.35, 2.5);
  const safeDensity = clamp(density, 0.25, 2.5);
  const safeStrokeWidth = clamp(strokeWidth, 0.25, 8);
  const safeOpacity = clamp(opacity, 0.05, 1);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);
  const source = useMemo(
    () => buildFocusedDocument(definition, {
      variant,
      mode: resolvedMode,
      speed: NEUFORM_BATCH_DEFAULTS.speed,
      size: safeSize,
      gap: safeGap,
      length: safeLength,
      density: safeDensity,
      strokeWidth: safeStrokeWidth,
      opacity: NEUFORM_BATCH_DEFAULTS.opacity
    }),
    [definition, resolvedMode, safeDensity, safeGap, safeLength, safeSize, safeStrokeWidth, variant]
  );
  useEffect2(() => {
    const frame = iframeRef.current?.contentWindow;
    if (!frame) return;
    frame.postMessage(
      {
        type: "threeui-controls",
        controls: {
          mode: resolvedMode,
          speed: safeSpeed,
          size: safeSize,
          gap: safeGap,
          length: safeLength,
          density: safeDensity,
          strokeWidth: safeStrokeWidth,
          opacity: safeOpacity
        }
      },
      "*"
    );
  }, [resolvedMode, safeDensity, safeGap, safeLength, safeOpacity, safeSize, safeSpeed, safeStrokeWidth, source]);
  const filter = safeHue === 0 && safeSaturation === 1 && safeBrightness === 1 ? void 0 : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;
  return /* @__PURE__ */ jsx2(
    "iframe",
    {
      ref: iframeRef,
      className,
      title: definition.title,
      srcDoc: source,
      sandbox: "allow-scripts",
      loading: "eager",
      style: {
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        filter,
        ...style
      }
    }
  );
}
function createEffectComponent(definition) {
  return function EffectComponent(props) {
    return /* @__PURE__ */ jsx2(NeuformBatchEffect, { ...props, definition });
  };
}
function DiagnosticsPanel({
  variant = DIAGNOSTICS_PANEL_DEFAULTS.variant,
  ...props
}) {
  const definition = DIAGNOSTICS_PANEL_VARIANTS[variant] ?? DIAGNOSTICS_PANEL_VARIANTS.layers;
  return /* @__PURE__ */ jsx2(NeuformBatchEffect, { ...props, definition });
}
var NEUFORM_BATCH_DEFAULTS, LIGHT_PAPER, DIAGNOSTICS_PANEL_FOCUS_CSS, EFFECTS, ConstellationField, ParticleDrift, ParticleNetwork, FluxVortex, PortalField, FlowField, AmberHalftone, DIAGNOSTICS_PANEL_VARIANTS, DIAGNOSTICS_PANEL_DEFAULTS, SignalParticles, SkeuomorphicToggle, MatrixField, GatewayFlow, ConnectivityGraph, InterfaceLines, WireframeForms, DefenseLines, OverrideGrid, TopoField;
var init_NeuformBatchEffects = __esm({
  "vendor/threeui/src/shaders/neuform-isolated/NeuformBatchEffects.tsx"() {
    "use strict";
    init_constellation_field_html();
    init_particle_drift_html();
    init_particle_network_html();
    init_flux_vortex_html();
    init_portal_field_html();
    init_flow_field_html();
    init_amber_halftone();
    init_diagnostics_panel_html();
    init_signal_particles();
    init_skeuomorphic_toggle_html();
    init_matrix_field_html();
    init_gateway_flow_html();
    init_connectivity_graph_html();
    init_interface_lines_html();
    init_wireframe_forms_html();
    init_defense_lines_html();
    init_override_grid();
    init_topo_field_html();
    NEUFORM_BATCH_DEFAULTS = {
      mode: "dark",
      speed: 1,
      size: 1,
      gap: 2,
      length: 1,
      density: 1,
      strokeWidth: 1,
      opacity: 1,
      hue: 0,
      saturation: 1,
      brightness: 1
    };
    LIGHT_PAPER = "#eef1f6";
    DIAGNOSTICS_PANEL_FOCUS_CSS = `
[data-threeui-role="ui"].flex-grow {
  flex: none !important;
  width: min(calc(100% - 32px), var(--threeui-target-width, 360px)) !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: calc(100% - 32px) !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 !important;
  overflow: hidden !important;
}
[data-threeui-role="ui"] > canvas {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
`;
    EFFECTS = {
      constellationField: {
        title: "Constellation Field",
        source: n,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#070914",
        targets: [{ selector: "#constellationCanvas", role: "background" }],
        patch(source, { size, length, density, strokeWidth, mode }) {
          let next = source.replace("const LINK = 160;", `const LINK = ${Math.round(160 * length)};`).replace(
            "const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",
            `const MAX_NODES = window.innerWidth < 768 ? ${scaleCount(40, density, 8)} : ${scaleCount(85, density, 12)};`
          ).replace(
            "radius: Math.random() * 2.4 + 1.8",
            `radius: (Math.random() * 2.4 + 1.8) * ${size}`
          ).replace("ctx.lineWidth = 1;", `ctx.lineWidth = ${Number(Math.max(0.25, strokeWidth).toFixed(2))};`).replace("node.x += node.vx;", "node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("node.y += node.vy;", "node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");
          if (mode === "light") {
            next = next.replace("ctx.strokeStyle = '#E6C879';", "ctx.strokeStyle = '#8B6914';").replace("ctx.fillStyle = '#E6C879';", "ctx.fillStyle = '#8B6914';");
          }
          return next;
        }
      },
      particleDrift: {
        title: "Particle Drift",
        source: n2,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#030509",
        targets: [{ selector: "#particle-canvas", role: "background" }],
        patch(source, { size, length, density, mode }) {
          const link = Math.round(120 * length);
          const proximityAlpha = mode === "light" ? 0.22 : 0.15;
          let next = source.replace("Array.from({ length: 90 })", `Array.from({ length: ${scaleCount(90, density, 12)} })`).replace("Array.from({ length: 25 })", `Array.from({ length: ${scaleCount(25, density, 4)} })`).replace("length: Math.random() * 100 + 50,", `length: (Math.random() * 100 + 50) * ${length},`).replace("n.y += n.vy; // Slow drift", "n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift").replace("b.y -= b.speed;", "b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if(d < 120) {", `if(d < ${link}) {`).replace("0.15 * (1 - d/120)", `${proximityAlpha} * (1 - d/${link})`).replace("ctx.lineWidth = 1.5;", `ctx.lineWidth = ${Number((1.5 * size).toFixed(2))};`);
          if (mode === "light") {
            next = next.replaceAll("rgba(96, 165, 250,", "rgba(37, 99, 235,").replaceAll("rgba(156, 163, 175,", "rgba(36, 48, 68,").replace("ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';", "ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';");
          }
          return next;
        }
      },
      particleNetwork: {
        title: "Particle Network",
        source: n3,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#05070d",
        targets: [{ selector: "#particle-canvas", role: "background" }],
        patch(source, { size, length, density, mode }) {
          let next = source.replace("const particleCount = 200;", `const particleCount = ${scaleCount(200, density, 40)};`).replace("this.length = Math.random() * 2 + 0.5;", `this.length = (Math.random() * 2 + 0.5) * ${length};`).replace("this.z -= this.speed;", "this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const fov = 300;", `const fov = ${Math.round(300 / Math.max(0.4, size))};`);
          if (mode === "light") {
            next = next.replace("ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';", "ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';").replace(
              "const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';",
              "const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';"
            );
          }
          return next;
        }
      },
      fluxVortex: {
        title: "Flux Vortex",
        source: n4,
        background: "#050505",
        targets: [{ selector: "#webgl-canvas", role: "background" }],
        patch(source, { size, density }) {
          return source.replace("const vortexCount = 9500;", `const vortexCount = ${scaleCount(9500, density, 1200)};`).replace("const particlesCount = 300;", `const particlesCount = ${scaleCount(300, density, 40)};`).replace("size: 0.006, // Smaller dots requested", `size: ${Number((6e-3 * size).toFixed(4))}, // Smaller dots requested`).replace("size: 0.008,", `size: ${Number((8e-3 * size).toFixed(4))},`);
        }
      },
      portalField: {
        title: "Portal Field",
        source: e,
        background: "#05060a",
        targets: [{ selector: "#webgl-container", role: "background" }],
        patch(source, { size, length }) {
          return source.replace(
            "float d1 = sdArc(st, center, 0.6, 0.02, 0.15);",
            `float d1 = sdArc(st, center, ${glslFloat(0.6 * length, 3)}, ${glslFloat(0.02 * size, 4)}, 0.15);`
          ).replace(
            "float d2 = sdArc(st, center, 0.65, 0.06, 0.2);",
            `float d2 = sdArc(st, center, ${glslFloat(0.65 * length, 3)}, ${glslFloat(0.06 * size, 4)}, 0.2);`
          );
        }
      },
      flowField: {
        title: "Flow Field",
        source: n5,
        background: "#0a0a0a",
        targets: [{ selector: "#canvas", role: "background" }],
        patch(source, { size, length, density }) {
          return source.replace(/<script defer src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js[^>]*><\/script>/, "").replace("const PARTICLE_COUNT = 2500;", `const PARTICLE_COUNT = ${scaleCount(2500, density, 300)};`).replace("let NOISE_SCALE = 0.0025;", `let NOISE_SCALE = ${Number((25e-4 / length).toFixed(6))};`).replace("time += 0.0008;", "time += 0.0008 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);").replace(
            "let vx = Math.cos(angle) * p.speed * SPEED;",
            "let vx = Math.cos(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);"
          ).replace(
            "let vy = Math.sin(angle) * p.speed * SPEED;",
            "let vy = Math.sin(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);"
          ).replace("ctx.lineWidth = p.size;", `ctx.lineWidth = p.size * ${Number(size.toFixed(3))};`);
        }
      },
      amberHalftone: {
        title: "Amber Halftone",
        source: amber_halftone_default,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#0A0A0A",
        targets: [{ selector: "#webgl-halftone", role: "background" }],
        patch(source, { size, length, density, mode }) {
          const spacing = Number((0.085 / Math.max(0.25, density)).toFixed(4));
          const gridSize = Math.max(12, Math.ceil(2.8 / spacing));
          const pointSize = Number((9 * size).toFixed(2));
          const wave = Number((6 * length).toFixed(2));
          let next = source.replace("const gridSize = 20;", `const gridSize = ${gridSize};`).replace("positions.push(x * 0.15, y * 0.15, 0);", `positions.push(x * ${spacing}, y * ${spacing}, 0);`).replace(
            "float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);",
            `float animatedScale = scale * (sin(dist * ${glslFloat(wave, 2)} - time * 2.5) * 0.5 + 0.5);`
          ).replace("gl_PointSize = animatedScale * 5.0;", `gl_PointSize = animatedScale * ${glslFloat(pointSize, 2)};`).replace(
            "material.uniforms.time.value = clock.getElapsedTime();",
            "material.uniforms.time.value = clock.getElapsedTime() * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);"
          );
          if (mode === "light") {
            next = next.replace("renderer.setClearColor(0x0A0A0A, 1);", "renderer.setClearColor(0xeef1f6, 1);").replace("color1: { value: new THREE.Color(0xFBBF24) },", "color1: { value: new THREE.Color(0xB45309) },").replace("color2: { value: new THREE.Color(0xFFFFFF) }", "color2: { value: new THREE.Color(0x1a1f2a) }");
          }
          return next;
        }
      },
      diagnosticsLayers: {
        title: "Layered Planes",
        source: t,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#020804",
        targets: [{ selector: "#main-container article:nth-of-type(1) .flex-grow", role: "ui", width: "360px" }],
        focusCss: DIAGNOSTICS_PANEL_FOCUS_CSS,
        patch: patchDiagnosticsPanel
      },
      diagnosticsNodes: {
        title: "Node Cubes",
        source: t,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#020804",
        targets: [{ selector: "#main-container article:nth-of-type(2) .flex-grow", role: "ui", width: "360px" }],
        focusCss: DIAGNOSTICS_PANEL_FOCUS_CSS,
        patch: patchDiagnosticsPanel
      },
      diagnosticsFlow: {
        title: "Flowing Mesh",
        source: t,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#020804",
        targets: [{ selector: "#main-container article:nth-of-type(3) .flex-grow", role: "ui", width: "360px" }],
        focusCss: DIAGNOSTICS_PANEL_FOCUS_CSS,
        patch: patchDiagnosticsPanel
      },
      signalParticles: {
        title: "Signal Particles",
        source: signal_particles_default,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#0a0a0a",
        targets: [{ selector: "#particle-canvas", role: "background" }],
        patch(source, { size, length, mode }) {
          let next = source.replace("const spacing = 16;", `const spacing = ${Math.max(6, Math.round(16 / Math.max(0.35, length)))};`).replace("const dotRadius = 1.5;", `const dotRadius = ${Number((1.5 * size).toFixed(2))};`).replace("time += 0.02;", "time += 0.02 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");
          if (mode === "light") {
            next = next.replace("ctx.fillStyle = '#3b82f6'; // Blue highlight", "ctx.fillStyle = '#1d4ed8'; // Blue highlight").replace("ctx.fillStyle = '#8b5cf6'; // Purple highlight", "ctx.fillStyle = '#5b21b6'; // Purple highlight").replace("ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;", `ctx.fillStyle = \`rgba(36, 48, 68, \${alpha})\`;`);
          }
          return next;
        }
      },
      skeuomorphicToggle: {
        title: "Skeuomorphic Toggle",
        source: e2,
        supportsMode: true,
        defaultMode: "auto",
        background: (mode) => mode === "light" ? "#f8fafc" : "#0b1220",
        targets: [{ selector: "#skeuomorphic-toggle", role: "ui", width: "192px" }],
        focusCss: `
#skeuomorphic-toggle {
  width: 12rem !important;
  height: 4rem !important;
  margin: auto !important;
  overflow: visible !important;
  max-height: none !important;
}
`,
        patch(source, { mode }) {
          if (mode !== "dark") return source;
          return source.replace(
            "var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';",
            "var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.035) 2px, rgba(255,255,255,0.035) 4px), linear-gradient(180deg, #1e3a8a 0%, #172554 100%)';"
          ).replace(
            "var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';",
            "var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 4px), linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';"
          ).replace(
            "var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';",
            "var ON_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.52), inset 0 -2px 4px rgba(147,197,253,0.24), 0 0 0 6px rgba(15,23,42,0.96), 0 0 26px 5px rgba(59,130,246,0.42)';"
          ).replace(
            "var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';",
            "var OFF_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.56), inset 0 -2px 4px rgba(148,163,184,0.12), 0 0 0 6px rgba(15,23,42,0.96), 0 0 18px 2px rgba(30,64,175,0.2)';"
          ).replace("var ON_BORDER = '#60a5fa';", "var ON_BORDER = '#3b82f6';").replace("var OFF_BORDER = '#94a3b8';", "var OFF_BORDER = '#334155';").replace(
            "background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);",
            "background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%);"
          ).replace("border: 1px solid #e0edfa;", "border: 1px solid #64748b;");
        }
      },
      matrixField: {
        title: "Matrix Field",
        source: n6,
        background: "#000000",
        targets: [{ selector: "#glcanvas", role: "background" }],
        patch(source, { size, length }) {
          return source.replace(
            "float intensity = 0.006;",
            `float intensity = ${glslFloat(6e-3 * size * length, 5)};`
          );
        }
      },
      gatewayFlow: {
        title: "Gateway Flow",
        source: e3,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#000000",
        targets: [{ selector: "#flow-canvas", role: "background" }],
        patch(source, { size, density, mode }) {
          let next = source.replace("const numPaths = 80;", `const numPaths = ${scaleCount(80, density, 12)};`).replace("p.t += p.speed;", "p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 1.2;", `ctx.lineWidth = ${Number((1.2 * size).toFixed(2))};`);
          if (mode === "light") {
            next = next.replace("ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';", `ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';`).replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;", `ctx.fillStyle = \`rgba(26, 31, 42, 0.75)\`;`);
          }
          return next;
        }
      },
      connectivityGraph: {
        title: "Connectivity Graph",
        source: n7,
        supportsMode: true,
        defaultMode: "light",
        background: (mode) => mode === "light" ? "#c4d9ef" : "#0a1220",
        targets: [{ selector: "#networkCanvas", role: "background" }],
        patch(source, { size, length, density, mode }) {
          let next = source.replace(
            "const particleCount = window.innerWidth < 768 ? 150 : 400;",
            `const particleCount = window.innerWidth < 768 ? ${scaleCount(150, density, 30)} : ${scaleCount(400, density, 60)};`
          ).replace("this.maxLength = 20 + Math.random() * 180;", `this.maxLength = (20 + Math.random() * 180) * ${length};`).replace("this.distance += this.speed;", "this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5 + (distRatio * 2);", `ctx.lineWidth = (0.5 + (distRatio * 2)) * ${size};`);
          if (mode === "dark") {
            next = next.replace("const lightness = 15 + (distRatio * 35);", "const lightness = 58 + (distRatio * 28);").replace(
              "const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;",
              "const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;"
            );
          }
          return next;
        }
      },
      interfaceLines: {
        title: "Interface Lines",
        source: n8,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#050505",
        targets: [{ selector: "#bg-canvas", role: "background" }],
        patch(source, { size, length, density, mode }) {
          const link = Math.round(120 * length);
          let next = source.replace(
            "const numParticles = window.innerWidth < 640 ? 30 : 70;",
            `const numParticles = window.innerWidth < 640 ? ${scaleCount(30, density, 8)} : ${scaleCount(70, density, 12)};`
          ).replace("p.x += p.vx;", "p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("p.y += p.vy;", "p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if (dist < 120)", `if (dist < ${link})`).replace("ctx.lineWidth = 1;", `ctx.lineWidth = ${Number((1 * size).toFixed(2))};`);
          if (mode === "light") {
            next = next.replace(
              "ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",
              `ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${link}) * 0.42})\`;`
            ).replace("ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';", `ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';`);
          } else {
            next = next.replace(
              "ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",
              `ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${link}) * 0.42})\`;`
            );
          }
          return next;
        }
      },
      wireframeForms: {
        title: "Wireframe Forms",
        source: t2,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#050505",
        targets: [{ selector: "main", role: "ui", width: "1040px" }],
        focusCss: `
main {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(1rem, 3vw, 2.5rem) !important;
  height: auto !important;
  min-height: 0 !important;
  padding: 1.5rem !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  grid-template-columns: none !important;
}
main > .absolute { display: none !important; }
main > .group {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
  background: transparent !important;
  flex: 0 0 auto !important;
  width: min(72vw, 480px) !important;
}
main > .group:not([data-wireframe-selected]) { display: none !important; }
main > .group > :not([data-wireframe-visual]) { display: none !important; }
main > .group > [data-wireframe-visual] {
  padding: 0 !important;
  flex-grow: 0 !important;
  width: 100% !important;
  aspect-ratio: 1 !important;
}
main > .group > [data-wireframe-visual] > :not(canvas) { display: none !important; }
#canvas1, #canvas2, #canvas3 {
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}
`,
        patch(source, { variant, size, length, mode }) {
          const selectedVariant = resolveWireframeVariant(variant);
          const selectedSection = {
            cube: "<!-- Section 01: Hypercube -->",
            cylinders: "<!-- Section 02: Logic Cylinders -->",
            sphere: "<!-- Section 03: Esoteric Sphere -->"
          }[selectedVariant];
          let next = source.replace(
            `${selectedSection}
        <div class="group`,
            `${selectedSection}
        <div data-wireframe-selected="${selectedVariant}" class="group`
          ).replace("this.angleY += 0.005;", "this.angleY += 0.005 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("this.angleX += 0.002;", "this.angleX += 0.002 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const s = 80;", `const s = ${Math.round(80 * length)};`).replace("const r = 70;", `const r = ${Math.round(70 * length)};`).replace("const s = 50; ", `const s = ${Math.round(50 * length)}; `).replace("this.ctx.lineWidth = 0.8;", `this.ctx.lineWidth = ${Number((0.8 * size).toFixed(2))};`);
          if (mode === "light") {
            next = next.replace(
              "this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;",
              "this.ctx.strokeStyle = `rgba(26, 31, 42, ${alpha * 0.45})`;"
            ).replace(
              "this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;",
              "this.ctx.fillStyle = `rgba(26, 31, 42, ${alpha})`;"
            );
          }
          return next;
        }
      },
      defenseLines: {
        title: "Defense Lines",
        source: n9,
        supportsMode: true,
        background: (mode) => mode === "light" ? "#f4ecec" : "#120303",
        targets: [{ selector: "#bg-canvas", role: "background" }],
        patch(source, { size, length, density, mode }) {
          let next = source.replace(
            "const particleCount = window.innerWidth < 768 ? 40 : 100;",
            `const particleCount = window.innerWidth < 768 ? ${scaleCount(40, density, 8)} : ${scaleCount(100, density, 16)};`
          ).replace("baseLength: Math.random() * 80 + 20,", `baseLength: (Math.random() * 80 + 20) * ${length},`).replace(
            "p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);",
            "p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);"
          ).replace("ctx.lineWidth = 0.5;", `ctx.lineWidth = ${Number((0.5 * size).toFixed(2))};`);
          if (mode === "light") {
            next = next.replaceAll("rgba(220, 38, 38, 0)", "rgba(153, 27, 27, 0)").replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);", "grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);");
          }
          return next;
        }
      },
      overrideGrid: {
        title: "Override Grid",
        source: override_grid_default,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#050505",
        targets: [{ selector: "#grid-canvas", role: "background" }],
        patch(source, { size, gap, mode }) {
          const blockSize = Math.max(8, Math.round(size));
          const blockGap = Math.max(0, Math.round(gap));
          let next = source.replace("const blockSize = 48;", `const blockSize = ${blockSize};`).replace("const blockGap = 2;", `const blockGap = ${blockGap};`).replace("time += 0.04;", "time += 0.04 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");
          if (mode === "light") {
            next = next.replace(
              "ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;",
              "ctx.fillStyle = `rgba(194, 65, 12, ${alpha * 1.35})`;"
            );
          }
          return next;
        }
      },
      topoField: {
        title: "Topo Field",
        source: n10,
        supportsMode: true,
        background: (mode) => mode === "light" ? LIGHT_PAPER : "#000000",
        targets: [{ selector: "#topo-canvas", role: "background" }],
        patch(source, { length, density, mode }) {
          let next = source.replace("float noiseScale = 1.4;", `float noiseScale = ${glslFloat(1.4 * length, 3)};`).replace("float numBands = 10.0;", `float numBands = ${glslFloat(10 * density, 2)};`);
          if (mode === "light") {
            next = next.replace("gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;", "gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;").replace(
              "float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;",
              "float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;"
            ).replace(
              "vec3 color = vec3(0.0);\n                    color += vec3(1.0) * gridLines;\n                    color += vec3(1.0) * topoLines;",
              "vec3 paper = vec3(0.933, 0.945, 0.965);\n                    vec3 ink = vec3(0.12, 0.14, 0.18);\n                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);\n                    vec3 color = mix(paper, ink, lines);"
            );
          }
          return next;
        }
      }
    };
    ConstellationField = createEffectComponent(EFFECTS.constellationField);
    ParticleDrift = createEffectComponent(EFFECTS.particleDrift);
    ParticleNetwork = createEffectComponent(EFFECTS.particleNetwork);
    FluxVortex = createEffectComponent(EFFECTS.fluxVortex);
    PortalField = createEffectComponent(EFFECTS.portalField);
    FlowField = createEffectComponent(EFFECTS.flowField);
    AmberHalftone = createEffectComponent(EFFECTS.amberHalftone);
    DIAGNOSTICS_PANEL_VARIANTS = {
      layers: EFFECTS.diagnosticsLayers,
      nodes: EFFECTS.diagnosticsNodes,
      flow: EFFECTS.diagnosticsFlow
    };
    DIAGNOSTICS_PANEL_DEFAULTS = {
      ...NEUFORM_BATCH_DEFAULTS,
      variant: "layers"
    };
    SignalParticles = createEffectComponent(EFFECTS.signalParticles);
    SkeuomorphicToggle = createEffectComponent(EFFECTS.skeuomorphicToggle);
    MatrixField = createEffectComponent(EFFECTS.matrixField);
    GatewayFlow = createEffectComponent(EFFECTS.gatewayFlow);
    ConnectivityGraph = createEffectComponent(EFFECTS.connectivityGraph);
    InterfaceLines = createEffectComponent(EFFECTS.interfaceLines);
    WireframeForms = createEffectComponent(EFFECTS.wireframeForms);
    DefenseLines = createEffectComponent(EFFECTS.defenseLines);
    OverrideGrid = createEffectComponent(EFFECTS.overrideGrid);
    TopoField = createEffectComponent(EFFECTS.topoField);
  }
});

// vendor/threeui/src/shaders/predictive-arc/PredictiveArcCanvas.tsx
import { lazy, Suspense, useEffect as useEffect3, useRef as useRef3 } from "react";

// vendor/threeui/src/shaders/data-pixel-arc/DataPixelArcCanvas.tsx
import { useEffect, useRef } from "react";

// vendor/threeui/src/shaders/data-pixel-arc/dataPixelArcRenderer.ts
var DATA_PIXEL_ARC_DEFAULTS = {
  mode: "dark",
  speed: 1,
  pixelSize: 8,
  arcCenter: 0.4,
  arcDrop: 0.9,
  thickness: 0.35,
  brightness: 1,
  hue: 0,
  saturation: 1
};
function resolveMode(mode) {
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}
function createDataPixelArcRenderer(canvas, getOptions) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return null;
  let width = 1;
  let height = 1;
  let time = 0;
  let lightBackground = null;
  const resize = (nextWidth, nextHeight) => {
    width = Math.max(1, nextWidth);
    height = Math.max(1, nextHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    lightBackground = context.createLinearGradient(0, 0, 0, height);
    lightBackground.addColorStop(0, "#f8faf6");
    lightBackground.addColorStop(0.58, "#f3f6f1");
    lightBackground.addColorStop(1, "#edf1ec");
  };
  const render = () => {
    const options = getOptions();
    const isLight = resolveMode(options.mode) === "light";
    context.fillStyle = isLight && lightBackground ? lightBackground : "#030308";
    context.fillRect(0, 0, width, height);
    const cols = Math.ceil(width / options.pixelSize);
    const rows = Math.ceil(height / options.pixelSize);
    const arcCenterY = height * options.arcCenter;
    const arcDrop = height * options.arcDrop;
    const thickness = height * options.thickness;
    for (let x = 0; x < cols; x += 1) {
      for (let y = 0; y < rows; y += 1) {
        const px = x * options.pixelSize;
        const py = y * options.pixelSize;
        const nx = px / width * 2 - 1;
        const curveY = arcCenterY + Math.pow(Math.abs(nx), 1.8) * arcDrop;
        let intensity = Math.max(0, 1 - Math.abs(py - curveY) / thickness);
        if (intensity <= 0.01) continue;
        const wave1 = Math.sin(nx * 4 - time * 1.5) * 0.1;
        const wave2 = Math.cos(py * 0.01 + time) * 0.1;
        intensity = Math.max(0, Math.min(1, intensity + wave1 + wave2));
        intensity *= Math.max(0, 1 - Math.pow(Math.abs(nx), 2.5));
        if (intensity <= 0.02) continue;
        const coreStrength = Math.pow(intensity, 3);
        const middleStrength = Math.pow(intensity, 1.5);
        let r;
        let g;
        let b;
        if (isLight) {
          const pigment = Math.pow(intensity, 0.78);
          const inkStrength = Math.max(0.45, Math.min(1.35, options.brightness));
          const paper = [238, 242, 237];
          const ink = [
            192 - 172 * pigment - 10 * coreStrength,
            204 - 88 * pigment + 18 * coreStrength,
            193 - 132 * pigment + 4 * coreStrength
          ];
          r = Math.max(0, Math.min(255, Math.round(paper[0] + (ink[0] - paper[0]) * inkStrength)));
          g = Math.max(0, Math.min(255, Math.round(paper[1] + (ink[1] - paper[1]) * inkStrength)));
          b = Math.max(0, Math.min(255, Math.round(paper[2] + (ink[2] - paper[2]) * inkStrength)));
        } else {
          r = Math.floor((30 * intensity + 100 * coreStrength) * options.brightness);
          g = Math.floor((220 * middleStrength + 40 * coreStrength) * options.brightness);
          b = Math.floor((80 * intensity + 50 * coreStrength) * options.brightness);
        }
        context.fillStyle = `rgb(${r}, ${g}, ${b})`;
        context.globalAlpha = isLight ? Math.min(1, 0.22 + Math.pow(intensity, 0.68) * 0.78) : intensity;
        context.fillRect(px, py, options.pixelSize - 1, options.pixelSize - 1);
      }
    }
    context.globalAlpha = 1;
    time += 0.02 * options.speed;
  };
  return { resize, render };
}

// vendor/threeui/src/shaders/data-pixel-arc/DataPixelArcCanvas.tsx
import { jsx } from "react/jsx-runtime";
function DataPixelArcCanvas({ className = "", ...props }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const optionsRef = useRef({ ...DATA_PIXEL_ARC_DEFAULTS, ...props });
  optionsRef.current = { ...DATA_PIXEL_ARC_DEFAULTS, ...props };
  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return void 0;
    const renderer = createDataPixelArcRenderer(canvas, () => optionsRef.current);
    if (!renderer) return void 0;
    let frame = 0;
    let visible = true;
    const resize = () => {
      const bounds = host.getBoundingClientRect();
      renderer.resize(bounds.width, bounds.height);
      renderer.render();
    };
    const tick = () => {
      renderer.render();
      frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      if (!visible && frame) cancelAnimationFrame(frame), frame = 0;
    });
    const visibility = () => {
      if (document.hidden && frame) cancelAnimationFrame(frame), frame = 0;
      else if (!document.hidden && visible && !frame) frame = requestAnimationFrame(tick);
    };
    observer.observe(host);
    intersection.observe(host);
    document.addEventListener("visibilitychange", visibility);
    resize();
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: hostRef,
      className: `threeui-background data-pixel-arc data-pixel-arc--${optionsRef.current.mode}${className ? ` ${className}` : ""}`,
      "data-mode": optionsRef.current.mode,
      children: /* @__PURE__ */ jsx("canvas", { ref: canvasRef, style: { filter: `hue-rotate(${optionsRef.current.hue}deg) saturate(${optionsRef.current.saturation})` } })
    }
  );
}

// vendor/threeui/src/shaders/predictive-arc/predictiveArcRenderer.ts
var PREDICTIVE_ARC_DEFAULTS = {
  mode: "dark",
  speed: 1,
  spacing: 5,
  dotSize: 6,
  archHeight: 0.7,
  thickness: 1,
  brightness: 1,
  hue: 0,
  saturation: 1
};
function resolveMode2(mode) {
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}
function createPredictiveArcRenderer(canvas, getOptions) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return null;
  let width = 1;
  let height = 1;
  let time = 0;
  const resize = (nextWidth, nextHeight) => {
    width = Math.max(1, nextWidth);
    height = Math.max(1, nextHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };
  const render = () => {
    const options = getOptions();
    const mode = resolveMode2(options.mode);
    const isLight = mode === "light";
    context.fillStyle = isLight ? "#eef1f6" : "#030303";
    context.fillRect(0, 0, width, height);
    time += 0.015 * options.speed;
    const centerX = width / 2;
    const archPeakY = height * 0.35;
    const archWidth = width * 1.5;
    const archHeight = height * options.archHeight;
    context.globalCompositeOperation = isLight ? "source-over" : "lighter";
    for (let x = 0; x < width; x += options.spacing) {
      const normX = (x - centerX) / (archWidth / 2);
      const curveY = archPeakY + normX * normX * archHeight;
      for (let y = 0; y < height; y += options.spacing) {
        const distanceToCurve = Math.abs(y - curveY);
        const thickness = (140 + (1 - Math.abs(normX)) * 80) * options.thickness;
        if (distanceToCurve >= thickness) continue;
        let intensity = 1 - distanceToCurve / thickness;
        const waveX = Math.sin(x * 0.015 + time);
        const waveY = Math.cos(y * 0.02 + time);
        intensity = intensity * 0.7 + waveX * waveY * 0.3 * intensity;
        intensity *= Math.max(0, 1 - Math.pow(Math.abs(normX), 2.5));
        if (intensity <= 0.02) continue;
        let r;
        let g;
        let b;
        if (isLight) {
          r = Math.min(255, 48 * intensity + 70 * Math.pow(intensity, 3));
          g = Math.min(255, 28 * intensity + 45 * Math.pow(intensity, 4));
          b = Math.min(255, 120 * intensity + 110 * Math.pow(intensity, 2));
          if (intensity > 0.7) {
            const coreBoost = (intensity - 0.7) * 3.3;
            r = Math.min(255, r + 90 * coreBoost);
            g = Math.min(255, g + 70 * coreBoost);
            b = Math.min(255, b + 110 * coreBoost);
          }
        } else {
          r = Math.min(255, 60 * intensity + 100 * Math.pow(intensity, 3));
          g = Math.min(255, 20 * intensity + 60 * Math.pow(intensity, 4));
          b = Math.min(255, 120 * intensity + 135 * Math.pow(intensity, 2));
          if (intensity > 0.7) {
            const coreBoost = (intensity - 0.7) * 3.3;
            r = Math.min(255, r + 150 * coreBoost);
            g = Math.min(255, g + 150 * coreBoost);
            b = Math.min(255, b + 150 * coreBoost);
          }
        }
        context.fillStyle = `rgb(${Math.floor(r * options.brightness)}, ${Math.floor(g * options.brightness)}, ${Math.floor(b * options.brightness)})`;
        context.fillRect(x, y, options.dotSize * intensity, options.dotSize * intensity);
      }
    }
    context.globalCompositeOperation = "source-over";
  };
  return { resize, render };
}

// vendor/threeui/src/shaders/predictive-arc/PredictiveArcCanvas.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var SignalParticlesVariant = lazy(
  () => Promise.resolve().then(() => (init_NeuformBatchEffects(), NeuformBatchEffects_exports)).then((module) => ({ default: module.SignalParticles }))
);
var OverrideGridVariant = lazy(
  () => Promise.resolve().then(() => (init_NeuformBatchEffects(), NeuformBatchEffects_exports)).then((module) => ({ default: module.OverrideGrid }))
);
function PredictiveArcRenderer({ className = "", ...props }) {
  const hostRef = useRef3(null);
  const canvasRef = useRef3(null);
  const optionsRef = useRef3({ ...PREDICTIVE_ARC_DEFAULTS, ...props });
  optionsRef.current = { ...PREDICTIVE_ARC_DEFAULTS, ...props };
  useEffect3(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return void 0;
    const renderer = createPredictiveArcRenderer(canvas, () => optionsRef.current);
    if (!renderer) return void 0;
    let frame = 0;
    let visible = true;
    const resize = () => {
      const bounds = host.getBoundingClientRect();
      renderer.resize(bounds.width, bounds.height);
      renderer.render();
    };
    const tick = () => {
      renderer.render();
      frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      if (!visible && frame) cancelAnimationFrame(frame), frame = 0;
    });
    const visibility = () => {
      if (document.hidden && frame) cancelAnimationFrame(frame), frame = 0;
      else if (!document.hidden && visible && !frame) frame = requestAnimationFrame(tick);
    };
    observer.observe(host);
    intersection.observe(host);
    document.addEventListener("visibilitychange", visibility);
    resize();
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return /* @__PURE__ */ jsx3(
    "div",
    {
      ref: hostRef,
      className: `threeui-background predictive-arc predictive-arc--${optionsRef.current.mode}${className ? ` ${className}` : ""}`,
      "data-mode": optionsRef.current.mode,
      children: /* @__PURE__ */ jsx3(
        "canvas",
        {
          ref: canvasRef,
          style: { filter: `hue-rotate(${optionsRef.current.hue}deg) saturate(${optionsRef.current.saturation})` }
        }
      )
    }
  );
}
function PredictiveArcCanvas(props) {
  if (props.variant === "data-pixel") {
    const { variant: _variant2, ...canvasProps2 } = props;
    return /* @__PURE__ */ jsx3(DataPixelArcCanvas, { ...canvasProps2 });
  }
  if (props.variant === "signal-particles") {
    const { variant: _variant2, ...effectProps } = props;
    return /* @__PURE__ */ jsx3(Suspense, { fallback: /* @__PURE__ */ jsx3("div", { className: "threeui-background predictive-arc" }), children: /* @__PURE__ */ jsx3(SignalParticlesVariant, { ...effectProps }) });
  }
  if (props.variant === "override-grid") {
    const { variant: _variant2, ...effectProps } = props;
    return /* @__PURE__ */ jsx3(Suspense, { fallback: /* @__PURE__ */ jsx3("div", { className: "threeui-background predictive-arc" }), children: /* @__PURE__ */ jsx3(OverrideGridVariant, { ...effectProps }) });
  }
  const { variant: _variant, ...canvasProps } = props;
  return /* @__PURE__ */ jsx3(PredictiveArcRenderer, { ...canvasProps });
}

// vendor/threeui/src/shaders/neuform-isolated/NeuformCraftEffects.tsx
import { useMemo as useMemo2 } from "react";

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\aeonix-ember-storm.html.js
var e4 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEONIX \u2014 Compute scaled in the void</title>
    
    <!-- Fonts: Thinner weights as requested (Syncopate 600 instead of 700, Space Grotesk 400/500/600, Inter 400/500) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@400;500;600&family=Syncopate:wght@400;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                        brand: ['Syncopate', 'sans-serif'],
                    },
                    colors: {
                        ink: '#080503',
                        ash: { DEFAULT: '#d2c3b4', dim: '#8c7d6f', faint: '#5d5249' },
                        ember: { DEFAULT: '#ff5a1e', hot: '#ff8a3a', gold: '#ffcf86' },
                        crimson: '#c11d12',
                    }
                }
            }
        }
    <\/script>
    
    <!-- Iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="bg-ink font-sans text-ash overflow-hidden relative h-screen w-screen selection:bg-ember/30 selection:text-white">

    <!-- Deep Forge Ground Layer -->
    <div class="ground fixed inset-0 z-0 pointer-events-none" 
         style="background: radial-gradient(60% 60% at 60% 47%, rgba(255,80,24,0.30) 0%, rgba(200,40,12,0.10) 30%, rgba(8,5,3,0) 58%), radial-gradient(120% 90% at 14% 116%, rgba(255,90,26,0.22) 0%, rgba(8,5,3,0) 52%), radial-gradient(140% 130% at 50% 50%, rgba(20,10,6,0) 38%, rgba(4,2,1,0.74) 100%), linear-gradient(180deg,#0b0604 0%,#080403 100%);">
    </div>

    <!-- Aura Asset Image Layer -->
    <div class="fixed inset-0 z-[1] pointer-events-none opacity-[0.12] mix-blend-screen bg-cover bg-center" 
         style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg');">
    </div>

    <!-- Breathing Core Overlay -->
    <div class="core fixed z-[1] left-[50%] lg:left-[60%] top-[38%] lg:top-[47%] w-[50vmax] lg:w-[34vmax] h-[50vmax] lg:h-[34vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen will-change-transform"
         style="background: radial-gradient(circle,rgba(255,150,70,0.42) 0%,rgba(255,70,20,0.16) 28%,rgba(190,30,10,0.05) 48%,rgba(8,5,3,0) 66%);">
    </div>

    <!-- Rotating Ember Ring -->
    <div class="ring fixed z-[1] left-[50%] lg:left-[60%] top-[38%] lg:top-[47%] w-[45vmax] lg:w-[30vmax] h-[45vmax] lg:h-[30vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen rounded-full will-change-transform opacity-0"
         style="background: conic-gradient(from 0deg,rgba(255,120,40,0) 0deg,rgba(255,140,55,0.18) 60deg,rgba(255,90,30,0) 130deg,rgba(255,150,70,0.12) 220deg,rgba(255,90,30,0) 300deg,rgba(255,120,40,0) 360deg); -webkit-mask: radial-gradient(circle,transparent 60%,#000 61%,#000 70%,transparent 72%); mask: radial-gradient(circle,transparent 60%,#000 61%,#000 70%,transparent 72%);">
    </div>

    <!-- WebGL Canvas for Particle Storm -->
    <canvas id="gl" class="fixed inset-0 z-[2] w-full h-full block pointer-events-none mix-blend-screen"></canvas>

    <!-- Grain Texture Overlay -->
    <div class="grain fixed inset-0 z-[3] pointer-events-none opacity-5"
         style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;);">
    </div>

    <!-- Readability Scrim -->
    <div class="scrim fixed inset-0 z-[3] pointer-events-none bg-gradient-to-b lg:bg-gradient-to-r from-ink/90 lg:from-ink/85 via-ink/40 lg:via-ink/55 to-ink/65 lg:to-transparent"
         style="background: linear-gradient(100deg,rgba(6,3,2,0.86) 0%,rgba(6,3,2,0.55) 28%,rgba(6,3,2,0) 56%);">
    </div>

    <!-- Frame Ticks (Crosshairs) -->
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 top-[18px] left-[18px] border-r-0 border-b-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 top-[18px] right-[18px] border-l-0 border-b-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 bottom-[18px] left-[18px] border-r-0 border-t-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 bottom-[18px] right-[18px] border-l-0 border-t-0"></span>

    <!-- Floating HUD Readout -->
    <div class="coretemp hidden lg:block fixed z-[4] right-[clamp(20px,9vw,140px)] top-[clamp(96px,21vh,200px)] text-right pointer-events-none opacity-0">
        <div class="k font-display text-[10px] tracking-[0.28em] uppercase text-ash-faint mb-1.5 flex items-center gap-2 justify-end">
            <span class="pip w-1.5 h-1.5 rounded-full bg-ember-hot" style="box-shadow: 0 0 10px 1px #ff5a1e;"></span>
            Core temp
        </div>
        <div class="v font-brand font-semibold text-[clamp(26px,3vw,40px)] leading-[0.9] text-[#fff2e2] tracking-[0.01em]">
            <span data-count="82" data-dec="0">0</span><small class="font-display text-[0.42em] text-ember-hot tracking-[0.06em] ml-1 font-medium">\xB0C</small>
        </div>
    </div>

    <!-- Main UI Shell -->
    <div class="shell relative z-[4] h-dvh h-screen flex flex-col w-full max-w-[1320px] mx-auto px-5 lg:px-[52px]">
        
        <!-- Navigation -->
        <nav class="pt-[clamp(20px,3.2vh,30px)]">
            <div class="nav-row flex items-center justify-between gap-5">
                <div class="brand flex items-center opacity-0">
                    <span class="wordmark font-brand font-semibold text-[15px] lg:text-[18px] tracking-[0.24em] lg:tracking-[0.30em] text-[#fff4e8] uppercase pl-[0.04em]">Aeonix</span>
                </div>
                <div class="nav-links hidden lg:flex items-center gap-[30px]">
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Platform</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Infrastructure</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Models</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Security</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Contact</a>
                </div>
                <a href="#" class="nav-cta inline-flex items-center gap-[9px] text-[12.5px] font-medium tracking-[0.02em] text-[#1a0a04] px-[17px] py-2.5 rounded-full whitespace-nowrap opacity-0 transition-all duration-300 hover:-translate-y-[1px]"
                   style="background: linear-gradient(180deg,#ffcf86,#ff7a2a); box-shadow: 0 4px 22px -6px rgba(255,100,40,0.7);">
                    <b class="w-1.5 h-1.5 rounded-full bg-[#3a1202] inline-block"></b>Deploy cluster
                </a>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-1 flex items-end pb-5 lg:pb-[clamp(28px,5vh,58px)] min-h-0">
            <div class="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-[clamp(28px,5vw,72px)] items-end">
                
                <div class="lead max-w-[780px]">
                    <div class="eyebrow flex items-center gap-3.5 mb-[clamp(18px,3vh,30px)]">
                        <span class="rule h-px w-0" style="background: linear-gradient(90deg, #ff5a1e, rgba(255,120,50,0));"></span>
                        <span class="tag font-display text-[11px] tracking-[0.3em] uppercase text-ember-hot whitespace-nowrap opacity-0">Hyperscale Compute</span>
                        <span class="ver text-[11px] tracking-[0.18em] text-ash-faint opacity-0">/ cluster v2.4</span>
                    </div>
                    
                    <h1 class="font-display font-medium text-[clamp(34px,12vw,52px)] lg:text-[clamp(40px,7.4vw,100px)] leading-[0.95] tracking-tight text-[#fff6ec] text-balance">
                        <span class="block">
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">Compute</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform">scaled</span></span>
                        </span>
                        <span class="block">
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">in</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">the</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform grad bg-clip-text text-transparent" style="background-image: linear-gradient(96deg,#ff7a2a 0%,#ffcf86 46%,#ff4d18 100%);">void.</span></span>
                        </span>
                    </h1>
                    
                    <p class="sub mt-[clamp(14px,3vh,26px)] max-w-[500px] text-[clamp(14px,1.15vw,16px)] leading-[1.62] text-ash-dim opacity-0">
                        <b class="text-[#ead9c8] font-medium">Aeonix</b> orchestrates the hyperscale infrastructure where neural networks are 
                        trained, deployed, and monitored under controlled precision. Distributed compute, 
                        live latency mapping, and parameter tuning traced down to the tensor.
                    </p>
                    
                    <div class="actions flex items-center gap-4 mt-[clamp(18px,3.6vh,36px)] flex-wrap">
                        <a href="#" class="btn btn-prime inline-flex items-center gap-2.5 rounded-full px-6 py-[13px] text-[13.5px] font-medium tracking-[0.01em] text-[#1a0a04] transition-all duration-300 hover:-translate-y-0.5 group"
                           style="background: linear-gradient(180deg,#ffcf86,#ff7322); box-shadow: 0 8px 30px -8px rgba(255,100,40,0.65);">
                            Start a cluster
                            <iconify-icon icon="solar:arrow-right-linear" class="text-lg transition-transform duration-300 group-hover:translate-x-1" style="stroke-width: 1.5;"></iconify-icon>
                        </a>
                        
                        <!-- Gradient Border Treatment -->
                        <div class="relative p-[1px] rounded-full bg-gradient-to-b from-ember/40 to-transparent group hover:from-ember/70 transition-colors duration-300 opacity-0 btn-ghost-wrap">
                            <a href="#" class="btn btn-ghost flex items-center gap-2.5 rounded-full px-6 py-[13px] text-[13.5px] font-medium tracking-[0.01em] text-ash bg-ink transition-colors duration-300 hover:text-[#fff1e2]">
                                Model registry
                            </a>
                        </div>
                    </div>
                </div>

                <aside class="rail relative w-full lg:w-[236px] flex flex-col grid grid-cols-2 lg:flex gap-x-[18px] gap-y-1.5 lg:gap-0 lg:pl-[22px] pt-[18px] lg:pt-0">
                    <!-- Gradient Border Treatments -->
                    <div class="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden lg:block"></div>
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent lg:hidden"></div>
                    
                    <div class="rail-head col-span-2 lg:col-span-1 flex items-center gap-2 mb-0.5 lg:mb-[18px] opacity-0">
                        <span class="dot w-1.5 h-1.5 rounded-full bg-ember-hot" style="box-shadow: 0 0 9px 1px #ff5a1e;"></span>
                        <span class="lbl font-display text-[10.5px] tracking-[0.26em] uppercase text-ash-faint">Cluster telemetry</span>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Peak latency</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="12" data-dec="0">0</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">ms</small>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Daily requests</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="4.2" data-dec="1">0.0</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">B</small>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Active nodes</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="1024" data-dec="0">0</span>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Uptime</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="99.99" data-dec="2">0.00</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">%</small>
                        </div>
                    </div>
                    
                    <div class="meter hidden lg:block mt-[18px] opacity-0 col-span-2">
                        <div class="mlbl flex justify-between text-[10px] tracking-[0.14em] uppercase text-ash-faint mb-2">
                            <span>Compute load</span><span>stable</span>
                        </div>
                        <div class="bars flex gap-[3px] h-[30px] items-end" id="bars">
                            <!-- Bars injected by JS -->
                        </div>
                    </div>
                </aside>
            </div>
        </main>

        <!-- Footer Status -->
        <footer class="pb-[clamp(16px,2.6vh,24px)]">
            <div class="status relative flex items-center justify-between gap-[18px] pt-[14px] opacity-0">
                <!-- Gradient Border Treatment -->
                <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>
                
                <div class="left flex items-center gap-5 flex-wrap">
                    <span class="pill flex items-center gap-2 text-[11px] tracking-[0.04em] text-ash-dim">
                        <span class="gd w-1.5 h-1.5 rounded-full bg-[#ffb347]" style="box-shadow: 0 0 8px 1px rgba(255,150,60,0.7);"></span>
                        All clusters nominal
                    </span>
                    <span class="pill flex items-center gap-2 text-[11px] tracking-[0.04em] text-ash-dim">
                        3 regions \xB7 edge + hyperscale
                    </span>
                </div>
                <div class="right hidden md:block font-display text-[11px] tracking-[0.18em] uppercase text-ash-faint whitespace-nowrap">
                    Trained by data, proven by scale
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>
    
    <script>
        const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        gsap.registerPlugin(ScrollTrigger);

        /* ============ EMBER STORM VORTEX (WebGL / Three.js) ============ */
        (function(){
            const canvas = document.getElementById('gl');
            if(!window.THREE) return;
            const RES = 0.5;
            let renderer;
            try{
                renderer = new THREE.WebGLRenderer({canvas, antialias:false, alpha:true, powerPreference:'high-performance'});
            }catch(e){ return; }
            renderer.setPixelRatio(1);
            renderer.setClearColor(0x000000, 0);

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);

            const COUNT = 12000;
            const seeds = new Float32Array(COUNT);
            const angs  = new Float32Array(COUNT);
            const rads  = new Float32Array(COUNT);
            for(let i=0;i<COUNT;i++){
                seeds[i] = Math.random();
                angs[i]  = Math.random()*Math.PI*2.0;
                rads[i]  = Math.sqrt(Math.random());
            }
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT*3), 3));
            geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
            geo.setAttribute('aAng',  new THREE.BufferAttribute(angs, 1));
            geo.setAttribute('aRad',  new THREE.BufferAttribute(rads, 1));

            const uniforms = {
                uTime:   { value: 0 },
                uScale:  { value: 1 },
                uAspect: { value: 1.6 },
            };

            const mat = new THREE.ShaderMaterial({
                uniforms,
                transparent:true,
                depthTest:false,
                depthWrite:false,
                blending:THREE.AdditiveBlending,
                vertexShader:\`
                    attribute float aSeed;
                    attribute float aAng;
                    attribute float aRad;
                    uniform float uTime;
                    uniform float uScale;
                    uniform float uAspect;
                    varying float vHeat;
                    varying float vFlick;
                    varying float vCore;
                    float hash(float n){ return fract(sin(n*12.9898)*43758.5453); }
                    void main(){
                        float life = hash(aSeed*7.31);
                        float u = fract(uTime*(0.045 + life*0.06) + aSeed);
                        float rmax = 0.58 + aRad*0.48;
                        float r = max(rmax*(1.0 - u*0.82), 0.018);
                        float omega = (0.55 + life*0.55) / (r*0.9 + 0.12);
                        float spiral = (rmax - r)*5.2;
                        float theta = aAng + uTime*omega*0.34 + spiral;
                        float t1 = sin(theta*3.0 + aSeed*10.0 + uTime*0.8);
                        float t2 = sin(r*9.0 - uTime*1.1 + aSeed*4.0);
                        r += t1*0.022 + t2*0.016;
                        float cx = 0.20, cy = 0.06;
                        float x = cx + (cos(theta)*r)/uAspect;
                        float y = cy + sin(theta)*r;
                        y += u*0.11 + sin(uTime*5.0 + aSeed*30.0)*0.006;
                        x += sin(uTime*3.3 + aSeed*22.0)*0.004/uAspect;

                        vCore  = 1.0 - smoothstep(0.0, 0.17, r);
                        vHeat  = clamp(pow(1.0-u, 1.3) * (0.5 + 0.5*(1.0-r)), 0.0, 1.0);
                        vFlick = 0.55 + 0.45*sin(uTime*9.0 + aSeed*40.0);
                        float sz = (0.7 + hash(aSeed*12.3)*2.7) * (0.45 + vHeat*1.55 + vCore*1.4);
                        gl_Position = vec4(x, y, 0.0, 1.0);
                        gl_PointSize = sz * uScale;
                    }
                \`,
                fragmentShader:\`
                    precision mediump float;
                    varying float vHeat;
                    varying float vFlick;
                    varying float vCore;
                    void main(){
                        vec2 p = gl_PointCoord*2.0 - 1.0;
                        float d = dot(p,p);
                        if(d>1.0) discard;
                        float core = (1.0-d); core *= core;
                        vec3 crimson = vec3(0.72,0.10,0.03);
                        vec3 amber   = vec3(1.0,0.55,0.12);
                        vec3 white   = vec3(1.0,0.93,0.78);
                        vec3 c = mix(crimson, amber, vHeat);
                        c = mix(c, white, vCore*0.85);
                        float a = core*(0.28 + 0.85*vHeat)*vFlick + core*vCore*0.55;
                        gl_FragColor = vec4(c*(1.0 + vHeat*0.5 + vCore*0.7), a);
                    }
                \`
            });

            const points = new THREE.Points(geo, mat);
            points.frustumCulled = false;
            scene.add(points);

            function resize(){
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(Math.round(w*RES), Math.round(h*RES), false);
                canvas.style.width = w+'px';
                canvas.style.height = h+'px';
                uniforms.uAspect.value = Math.max(0.6, w/h);
                uniforms.uScale.value = Math.max(0.6, (h*RES)/900);
            }
            resize();
            window.addEventListener('resize', resize);

            let raf=0, running=true, last=performance.now();
            function frame(now){
                if(!running) return;
                const dt = Math.min(0.05,(now-last)/1000); last=now;
                uniforms.uTime.value += dt;
                renderer.render(scene,camera);
                raf=requestAnimationFrame(frame);
            }
            if(REDUCED){
                uniforms.uTime.value = 9.1;
                renderer.render(scene,camera);
            } else {
                raf=requestAnimationFrame(frame);
            }
            document.addEventListener('visibilitychange',()=>{
                if(document.hidden){ running=false; cancelAnimationFrame(raf); }
                else if(!REDUCED){ running=true; last=performance.now(); raf=requestAnimationFrame(frame); }
            });
        })();

        /* ============ LIVING COMPUTATIONAL-LOAD METER ============ */
        (function(){
            const host = document.getElementById('bars');
            if(!host) return;
            const N=22, bars=[];
            for(let i=0;i<N;i++){ 
                const b=document.createElement('i'); 
                b.className = "flex-1 rounded-sm opacity-85 origin-bottom";
                b.style.background = "linear-gradient(180deg, #ffcf86, #c11d12)";
                b.style.transform = "scaleY(0.3)";
                host.appendChild(b); 
                bars.push(b); 
            }
            if(REDUCED){ bars.forEach((b,i)=>b.style.transform='scaleY('+(0.35+Math.abs(Math.sin(i*0.7))*0.55).toFixed(2)+')'); return; }
            let t=0, acc=0, prev=performance.now();
            function tick(now){
                acc += now-prev; prev=now;
                if(acc>=110){
                    acc=0; t+=0.18;
                    for(let i=0;i<N;i++){
                        const v = 0.30 + 0.55*Math.abs(Math.sin(t + i*0.55) * Math.cos(t*0.6 - i*0.3));
                        bars[i].style.transform = 'scaleY('+v.toFixed(2)+')';
                    }
                }
                requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        })();

        /* ============ COUNT-UP TELEMETRY ============ */
        function runCounters(){
            document.querySelectorAll('[data-count]').forEach(el=>{
                const target=parseFloat(el.dataset.count), dec=parseInt(el.dataset.dec||'0');
                if(REDUCED){ el.textContent=target.toFixed(dec); return; }
                const t0=performance.now(), dur=1500;
                function step(t){
                    const p=Math.min(1,(t-t0)/dur);
                    const e=1-Math.pow(1-p,3);
                    el.textContent=(target*e).toFixed(dec);
                    if(p<1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }

        /* ============ ENTRANCE CHOREOGRAPHY ============ */
        (function(){
            if(REDUCED || !window.gsap){
                document.querySelectorAll('.brand,.nav-links a,.nav-cta,.eyebrow .tag,.eyebrow .ver,.sub,.rail-head,.metric,.meter,.status,.frame-tick,.coretemp,.ring,.btn-prime,.btn-ghost-wrap')
                    .forEach(e=>{e.style.opacity=1; e.style.transform='none'});
                document.querySelectorAll('.word-reveal').forEach(e=>e.style.transform='none');
                document.querySelector('.eyebrow .rule').style.width='34px';
                runCounters();
                return;
            }
            
            const tl = gsap.timeline({defaults:{ease:'power3.out'}});
            tl.to('.frame-tick',{opacity:1,duration:.4,stagger:.05},0);
            tl.fromTo('.brand',{y:-12,opacity:0},{y:0,opacity:1,duration:.6},.1);
            
            // Masked staggered word reveal hooked to ScrollTrigger
            gsap.fromTo('.word-reveal', 
                {yPercent:115},
                {yPercent:0, duration:.9, ease:'power4.out', stagger:.08, scrollTrigger: { trigger: 'h1', start: "top 95%" }}
            );
            
            tl.to('.eyebrow .rule',{width:34,duration:.5},.3)
              .fromTo('.eyebrow .tag',{x:-10,opacity:0},{x:0,opacity:1,duration:.45},.42)
              .to('.eyebrow .ver',{opacity:1,duration:.45},.55);
              
            tl.fromTo('.nav-links a',{y:-8,opacity:0},{y:0,opacity:1,duration:.5,stagger:.06},.45)
              .fromTo('.nav-cta',{scale:.8,opacity:0},{scale:1,opacity:1,duration:.5,ease:'back.out(2)'},.5);
              
            tl.to('.ring',{opacity:1,duration:1.0},.4);
            tl.fromTo('.coretemp',{opacity:0,x:18},{opacity:1,x:0,duration:.7},.6);
            tl.fromTo('.sub',{opacity:0,y:14,filter:'blur(6px)'},{opacity:1,y:0,filter:'blur(0px)',duration:.7},.72);
            
            tl.fromTo(['.btn-prime','.btn-ghost-wrap'],{opacity:0,y:16},{opacity:1,y:0,duration:.55,stagger:.09},.84);
            
            tl.to('.rail-head',{opacity:1,duration:.45},.55)
              .fromTo('.metric',{x:18,opacity:0},{x:0,opacity:1,duration:.5,stagger:.09,onStart:runCounters},.62)
              .to('.meter',{opacity:1,duration:.45},1.0);
              
            tl.fromTo('.status',{y:10,opacity:0},{y:0,opacity:1,duration:.55},.95);

            // Ambient breathing animations
            gsap.to('.core',{filter:'brightness(1.35)',duration:2.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
            gsap.to('.ring',{rotation:360,duration:46,repeat:-1,ease:'none',transformOrigin:'50% 50%'});
            gsap.to('.rail-head .dot',{opacity:.35,duration:.9,repeat:-1,yoyo:true,ease:'sine.inOut'});
            gsap.to('.coretemp .pip',{opacity:.3,duration:.7,repeat:-1,yoyo:true,ease:'sine.inOut'});
        })();
    <\/script>
</body>
</html>`;

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\aura-ui-fluid.html.js
var t3 = `<!doctype html>
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aura UI Builder</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    
    <!-- Iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    
    <!-- Three.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<link id="all-fonts-link-font-geist" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style></head>
<body class="antialiased min-h-screen flex flex-col relative overflow-x-hidden bg-[#030305] text-white selection:bg-[#2640D9]/40 selection:text-white" style="font-family: 'Inter', sans-serif;">

    <!-- WebGL Background Canvas Layer -->
    <canvas id="bg-canvas" class="fixed inset-0 z-0 pointer-events-none w-full h-full"></canvas>
    
    <!-- Texture Layer: Grain Overlay -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.08]" style="mix-blend-mode: overlay; background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    
    <!-- Texture Layer: Blueprint Grid -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-20" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px);"></div>

    <!-- Navigation -->
    <nav class="w-full flex items-center justify-between py-6 px-8 relative z-10">
        <div class="flex items-center gap-8">
            <a href="#" class="flex items-center gap-2 text-[#EDEDED] font-normal font-geist">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H16V8H8L16 16H0V0Z" fill="white"></path>
                </svg>
                Aura
            </a>
            <div class="hidden md:flex items-center gap-6 text-sm text-[#A3A3A3] font-light">
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Product</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Integrations</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Resources</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Enterprise</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Pricing</a>
            </div>
        </div>
        <div>
            <div class="w-8 h-8 rounded-full bg-[#2640D9] flex items-center justify-center text-xs text-white font-normal shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)] font-geist">
                AL
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center pt-24 px-4 relative z-10 w-full max-w-[1400px] mx-auto">
        
        <!-- Hero Text -->
        <div class="text-center mb-12 max-w-2xl">
            <h1 id="hero-title" class="text-5xl md:text-6xl font-normal tracking-tight leading-tight mb-4 flex flex-col items-center justify-center">
                <div class="flex flex-wrap justify-center gap-[0.25em]">
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">The</span></span>
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">intelligent</span></span>
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">design</span></span>
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">system</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-[0.25em] text-[#A3A3A3]">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">for</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">industry-leading</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">creators</span></span>
                </div>
            </h1>
            <p class="text-lg text-[#A3A3A3] font-light opacity-0 font-geist" id="hero-subtitle">
                Architect and scale beautiful digital experiences with absolute control.
            </p>
        </div>

        <!-- Glowing Prompt Box -->
        <div class="w-full max-w-3xl relative mb-8 group" id="prompt-container">
            <!-- Atmospheric Glow -->
            <div class="absolute -inset-1 bg-gradient-to-r from-[#2640D9] via-[#6633E6] to-[#2640D9] rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <!-- Premium Surface with Border Gradient -->
            <div class="relative p-[1px] rounded-[18px] bg-gradient-to-b from-[#6633E6] via-[#2640D9] to-[#030305] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                
                <div class="bg-gradient-to-b from-[#0A0A14] to-[#030305] rounded-[17px] flex flex-col overflow-hidden" style="box-shadow: inset 0 2px 10px rgba(102,51,230,0.1), inset 0 -4px 10px rgba(0,0,0,0.8);">
                    
                    <textarea class="w-full bg-transparent text-[#EDEDED] placeholder:text-[#A3A3A3]/50 p-6 min-h-[140px] resize-none outline-none text-lg font-light" placeholder="Create a minimalist dashboard for a next-gen crypto wallet..."></textarea>

                    <div class="flex items-center justify-between px-4 py-3 border-t border-[#2640D9]/30 bg-[#030305]/80 backdrop-blur-sm">
                        
                        <button class="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5 font-light font-geist">
                            Model v4
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>

                        <button class="w-8 h-8 rounded-full bg-[#2640D9] flex items-center justify-center text-white hover:bg-[#3B54E6] transition-colors shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]">
                            <iconify-icon icon="solar:arrow-up-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Suggestion Pills -->
        <div class="flex flex-wrap justify-center gap-3 mb-16 opacity-0" id="suggestion-pills">
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Build a SaaS landing page</button>
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Draft a mobile app UI</button>
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Design a newsletter template</button>
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Write API documentation</button>
        </div>

        <a href="#mock-app" class="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors mb-12 opacity-0 font-light font-geist" id="explore-link">
            Explore the builder
            <iconify-icon icon="solar:arrow-down-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
        </a>

        <!-- Mock App Interface -->
        <div id="mock-app" class="w-full mt-8 rounded-t-2xl overflow-hidden flex flex-col shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] min-h-[600px] opacity-0 translate-y-12 bg-gradient-to-b from-[#161616cc] to-[#0c0c0ce6] backdrop-blur-[12px] border-t border-t-white/10 border-x border-x-white/5 border-b border-b-black/50" style="box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.05);">
            
            <header class="h-14 border-b border-[#262626] flex items-center justify-between px-4 bg-[#111111]">
                <div class="flex items-center gap-2">
                    <button class="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-white font-light bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-100 active:bg-[#111] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:border-t-[#111] font-geist">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H16V8H8L16 16H0V0Z" fill="currentColor"></path>
                        </svg>
                        Environment
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" stroke-width="1.5" class="text-[#A3A3A3]"></iconify-icon>
                    </button>
                    <div class="w-[1px] h-4 bg-[#262626] mx-2"></div>
                    <div class="flex items-center gap-1">
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:add-circle-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:maximize-square-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:text-square-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:pen-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                    </div>
                </div>

                <div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-[#A3A3A3] font-light">
                    <span class="text-white font-geist">Draft</span>
                    <span class="font-geist">\xB7</span>
                    <span class="flex items-center gap-1 bg-[#222] px-2 py-0.5 rounded text-xs font-geist"><iconify-icon icon="solar:link-linear" width="12" height="12" stroke-width="1.5"></iconify-icon> main</span>
                </div>

                <div class="flex items-center gap-3">
                    <div class="flex items-center -space-x-2 mr-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User" class="w-7 h-7 rounded-full border border-[#111] object-cover">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User" class="w-7 h-7 rounded-full border border-[#111] object-cover">
                        <div class="w-7 h-7 rounded-full border border-[#111] bg-[#222] flex items-center justify-center text-xs text-[#A3A3A3] z-10 font-light font-geist">+12</div>
                    </div>
                    <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] bg-[#222] rounded-md hover:text-white transition-colors shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"><iconify-icon icon="solar:play-linear" width="16" height="16" stroke-width="1.5"></iconify-icon></button>
                    <button class="px-3 py-1.5 rounded-md text-sm text-white font-light bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-100 active:bg-[#111] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:border-t-[#111] font-geist">Export</button>
                    <button class="px-4 py-1.5 rounded-md bg-[#2640D9] hover:bg-[#3B54E6] text-sm text-white font-normal shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)] transition-colors font-geist">Publish</button>
                </div>
            </header>

            <div class="flex-grow flex bg-[#0A0A0A]">
                <aside class="w-64 border-r border-[#262626] flex flex-col bg-[#111111]">
                    <div class="flex items-center p-2 border-b border-[#262626] text-xs font-light">
                        <button class="px-3 py-1.5 bg-[#222] text-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-geist">Pages</button>
                        <button class="px-3 py-1.5 text-[#A3A3A3] hover:text-white font-geist">Layers</button>
                        <button class="px-3 py-1.5 text-[#A3A3A3] hover:text-white font-geist">Assets</button>
                    </div>
                    <div class="p-3">
                        <div class="relative bg-[#0a0a0a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),inset_0_0_0_1px_#222] rounded-md flex items-center px-3 py-1.5 mb-4">
                            <iconify-icon icon="solar:magnifer-linear" width="14" height="14" stroke-width="1.5" class="text-[#A3A3A3] absolute"></iconify-icon>
                            <input type="text" placeholder="Search..." class="bg-transparent w-full pl-6 text-sm text-white placeholder:text-[#A3A3A3] outline-none font-light">
                        </div>
                        
                        <div class="flex items-center justify-between text-xs font-normal text-white mb-2 px-1 font-geist">
                            Pages
                            <button class="text-[#A3A3A3] hover:text-white"><iconify-icon icon="solar:add-square-linear" width="14" height="14" stroke-width="1.5"></iconify-icon></button>
                        </div>
                        
                        <div class="space-y-0.5">
                            <div class="flex items-center gap-2 px-2 py-1.5 bg-[#222] rounded-md text-sm text-white cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-light font-geist">
                                <iconify-icon icon="solar:home-2-linear" width="16" height="16" stroke-width="1.5" class="text-[#A3A3A3]"></iconify-icon>
                                Home
                            </div>
                            <div class="flex items-center gap-2 px-2 py-1.5 text-sm text-[#A3A3A3] hover:text-white cursor-pointer font-light font-geist">
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="12" height="12" stroke-width="1.5"></iconify-icon>
                                <iconify-icon icon="solar:document-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                                /components
                            </div>
                            <div class="flex items-center gap-2 px-2 py-1.5 pl-8 text-sm text-[#A3A3A3] hover:text-white cursor-pointer font-light font-geist">
                                <iconify-icon icon="solar:database-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                                Active Projects
                            </div>
                        </div>
                    </div>
                </aside>

                <div class="flex-grow flex flex-col items-center p-8 overflow-hidden relative">
                    <div class="w-full max-w-4xl flex items-center justify-between bg-[#161616] border border-[#262626] rounded-t-lg px-4 py-2 border-b-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#262626] to-[#161616] border-t-[#3a3a3a] border-x-[#222]">
                        <div class="flex items-center gap-2 text-xs text-[#A3A3A3] font-light">
                            <iconify-icon icon="solar:monitor-linear" width="14" height="14" stroke-width="1.5"></iconify-icon>
                            <span class="text-white font-geist">Desktop</span>
                            <span class="font-geist">1440</span>
                        </div>
                        <button class="w-6 h-6 flex items-center justify-center text-[#A3A3A3] hover:text-white bg-[#222] rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><iconify-icon icon="solar:add-linear" width="14" height="14" stroke-width="1.5"></iconify-icon></button>
                    </div>

                    <div class="w-full max-w-4xl flex-grow border border-t-0 border-[#262626] bg-black relative overflow-hidden flex flex-col">
                        <div class="flex items-center justify-between p-6">
                            <div class="text-white font-normal text-sm tracking-tight font-geist">Aura\u2122</div>
                            <div class="flex gap-6 text-xs text-[#A3A3A3] font-light">
                                <span class="hover:text-white cursor-pointer font-geist">Product</span>
                                <span class="hover:text-white cursor-pointer font-geist">Services</span>
                                <span class="hover:text-white cursor-pointer font-geist">About</span>
                                <span class="hover:text-white cursor-pointer font-geist">Help</span>
                            </div>
                            <div class="text-xs text-white border-b border-white pb-0.5 cursor-pointer font-light font-geist">Contact</div>
                        </div>

                        <div class="flex-grow flex items-center justify-center relative">
                            <h2 class="text-[12vw] leading-none text-white absolute bottom-0 translate-y-1/4 font-geist font-light tracking-tighter">AURA</h2>
                        </div>
                    </div>
                </div>

                <aside class="w-80 border-l border-[#262626] flex flex-col bg-[#111111]">
                    <div class="flex items-center p-2 border-b border-[#262626] text-xs font-light">
                        <button class="px-3 py-1.5 bg-[#222] text-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-geist">Copilot</button>
                        <button class="px-3 py-1.5 text-[#A3A3A3] hover:text-white font-geist">Properties</button>
                    </div>
                    
                    <div class="p-4 space-y-4">
                        <div class="flex items-center gap-2">
                            <div class="flex-grow flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222] font-light font-geist">
                                Add Navigation Bar
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" stroke-width="1.5" class="text-[#A3A3A3]"></iconify-icon>
                            </div>
                            <button class="w-9 h-9 flex items-center justify-center rounded-md text-[#A3A3A3] hover:text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222]"><iconify-icon icon="solar:add-linear" width="16" height="16" stroke-width="1.5"></iconify-icon></button>
                        </div>

                        <div class="bg-[#1A1A1A] rounded-xl border border-[#262626] p-4 flex flex-col gap-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048)]">
                            <p class="text-sm text-[#EDEDED] leading-relaxed font-light font-geist">
                                Generate an animated hero section and craft a short tagline for Aura.
                            </p>
                            
                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-10 h-10 rounded bg-[#222] border border-[#262626] overflow-hidden">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="thumb">
                                    </div>
                                    <div class="w-10 h-10 rounded bg-[#222] border border-[#262626] overflow-hidden">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="thumb">
                                    </div>
                                    <div class="w-10 h-10 rounded bg-[#222] border border-[#262626] overflow-hidden">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_1600w.jpg" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="thumb">
                                    </div>
                                </div>
                                <button class="w-7 h-7 flex items-center justify-center rounded-full bg-[#2A2A2A] text-[#A3A3A3] hover:text-white transition-colors">
                                    <iconify-icon icon="solar:reply-outline" width="14" height="14" stroke-width="1.5"></iconify-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>

    <script>
        // GSAP Animations with ScrollTrigger for masked reveal
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero-title',
                    start: 'top 85%'
                }
            });

            tl.to('.reveal-text', {
                y: '0%',
                duration: 1,
                ease: 'power4.out',
                stagger: 0.05
            });

            tl.to('#hero-subtitle', {
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.6");

            tl.fromTo('#prompt-container', 
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'back.out(1.2)' },
                "-=0.4"
            );

            tl.to('#suggestion-pills', {
                opacity: 1,
                duration: 0.5
            }, "-=0.2");
            
            tl.fromTo('#suggestion-pills button',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
                "-=0.5"
            );

            tl.to('#explore-link', {
                opacity: 1,
                duration: 0.5
            }, "-=0.2");

            gsap.to('#mock-app', {
                scrollTrigger: {
                    trigger: '#mock-app',
                    start: 'top 85%',
                    end: 'top 50%',
                    scrub: 1,
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // WebGL Dynamic Fluid Fragment Shader Background
        const canvas = document.querySelector('#bg-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const scene = new THREE.Scene();

        const geometry = new THREE.PlaneGeometry(2, 2);

        const vertexShader = \`
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`
            uniform float u_time;
            uniform vec2 u_resolution;

            // Compact 2D Simplex Noise
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
            
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy));
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m;
                m = m*m;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                uv.x *= u_resolution.x / u_resolution.y;

                vec3 baseColor = vec3(0.012, 0.012, 0.02);
                vec2 st = uv * 0.7;
                st += vec2(snoise(st + u_time * 0.05), snoise(st - u_time * 0.05)) * 0.3;

                float beam = smoothstep(0.1, 0.8, snoise(vec2(st.x + st.y * 1.5 - u_time * 0.15, u_time * 0.02)));
                vec3 glow = mix(vec3(0.15, 0.25, 0.85), vec3(0.4, 0.2, 0.9), snoise(uv * 1.5 + u_time * 0.1) * 0.5 + 0.5);

                gl_FragColor = vec4(baseColor + (glow * beam * 0.7), 1.0);
            }
        \`;

        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: uniforms
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const clock = new THREE.Clock();
        function animate() {
            uniforms.u_time.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        });
    <\/script>

</body></html>`;

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\glassblown-neon.html.js
var n11 = `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Glassblown neon</title>
  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: transparent;
    }
    #board {
      position: relative;
      width: min(100%, 1040px);
      aspect-ratio: 16 / 9;
      margin: 0 auto;
      background: transparent;
      border: 0;
      box-shadow: none;
    }
    #neon {
      display: block;
      width: 100%;
      height: 100%;
    }
    h1 {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  </style>
</head>
<body>
  <div id="board">
    <canvas id="neon" aria-hidden="true"></canvas>
    <h1>Glass blown</h1>
  </div>

  <script>
    (function () {
      'use strict';

      var board = document.getElementById('board');
      var cv = document.getElementById('neon');
      if (!board || !cv || !cv.getContext) return;
      var ctx = cv.getContext('2d');
      if (!ctx) return;

      var reduce = false;
      try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

      var P = Math.PI;
      var GLYPHS = {
        G: { w: 0.88, sub: [
          { c: [['M', 0.7946, 0.2320], ['E', 0.44, 0.50, 0.42, 0.50, -0.18 * P, -1.87 * P, 1], ['Q', 0.902, 0.606, 0.860, 0.492], ['L', 0.470, 0.492]] }
        ]},
        L: { w: 0.60, sub: [
          { c: [['M', 0.09, 0.00], ['L', 0.09, 0.66], ['R', 0.09, 1.00, 0.60, 1.00, 0.20], ['L', 0.575, 1.00]] }
        ]},
        A: { w: 0.90, sub: [
          { c: [['M', 0.040, 1.00], ['R', 0.450, 0.00, 0.860, 1.00, 0.105], ['L', 0.860, 1.00]] },
          { c: [['M', 0.174, 0.665], ['L', 0.726, 0.665]] }
        ]},
        S: { w: 0.74, sub: [
          { c: [['M', 0.5880, 0.0478], ['E', 0.40, 0.25, 0.32, 0.25, -0.30 * P, 0.50 * P, 1], ['E', 0.40, 0.75, 0.32, 0.25, -0.50 * P, 0.86 * P, 0]] }
        ]},
        B: { w: 0.74, sub: [
          { c: [['M', 0.09, 0.00], ['L', 0.09, 1.00]] },
          { c: [['M', 0.09, 0.00], ['L', 0.28, 0.00], ['E', 0.28, 0.25, 0.34, 0.25, -0.50 * P, 0.50 * P, 0], ['L', 0.09, 0.50]] },
          { c: [['M', 0.09, 0.50], ['L', 0.30, 0.50], ['E', 0.30, 0.75, 0.38, 0.25, -0.50 * P, 0.50 * P, 0], ['L', 0.09, 1.00]] }
        ]},
        O: { w: 0.90, sub: [
          { closed: 1, c: [['M', 0.46, 0.00], ['E', 0.46, 0.50, 0.42, 0.50, -0.50 * P, 1.50 * P, 0]] }
        ]},
        W: { w: 1.09, sub: [
          { c: [['M', 0.030, 0.00], ['R', 0.240, 1.00, 0.545, 0.30, 0.070], ['R', 0.545, 0.30, 0.850, 1.00, 0.070], ['R', 0.850, 1.00, 1.060, 0.00, 0.070], ['L', 1.060, 0.00]] }
        ]},
        N: { w: 0.88, sub: [
          { c: [['M', 0.08, 1.00], ['R', 0.08, 0.00, 0.84, 1.00, 0.075], ['R', 0.84, 1.00, 0.84, 0.00, 0.075], ['L', 0.84, 0.00]] }
        ]}
      };

      var LINES = ['GLASS', 'BLOWN'];
      var MINGAP = 0.17, LINEGAP = 0.46;
      var FLICK = { line: 1, i: 3 };
      var ELECTRODES = [
        { line: 0, i: 0, p: [0.7946, 0.2320], a: -0.95 },
        { line: 0, i: 4, p: [0.1100, 0.8560], a: 2.45 },
        { line: 1, i: 0, p: [0.0900, 1.0000], a: 2.60 },
        { line: 1, i: 4, p: [0.8400, 0.0000], a: -1.45 }
      ];

      function mk(w, h) {
        var c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(w));
        c.height = Math.max(1, Math.round(h));
        return c;
      }
      function emit(x, sp, ox, oy, s) {
        var cs = sp.c;
        for (var i = 0; i < cs.length; i++) {
          var c = cs[i], k = c[0];
          if (k === 'M') x.moveTo(ox + c[1] * s, oy + c[2] * s);
          else if (k === 'L') x.lineTo(ox + c[1] * s, oy + c[2] * s);
          else if (k === 'Q') x.quadraticCurveTo(ox + c[1] * s, oy + c[2] * s, ox + c[3] * s, oy + c[4] * s);
          else if (k === 'R') x.arcTo(ox + c[1] * s, oy + c[2] * s, ox + c[3] * s, oy + c[4] * s, c[5] * s);
          else if (k === 'E') x.ellipse(ox + c[1] * s, oy + c[2] * s, c[3] * s, c[4] * s, 0, c[5], c[6], !!c[7]);
        }
      }
      function trace(x, items) {
        x.beginPath();
        for (var i = 0; i < items.length; i++) {
          var it = items[i], sub = it.g.sub;
          for (var j = 0; j < sub.length; j++) emit(x, sub[j], it.ox, it.oy, it.s);
        }
      }
      function endsOf(sp) {
        if (sp.closed) return [];
        var a = sp.c[0], last = sp.c[sp.c.length - 1], b = null;
        if (last[0] === 'L' || last[0] === 'M') b = [last[1], last[2]];
        else if (last[0] === 'Q') b = [last[3], last[4]];
        else if (last[0] === 'E') b = [last[1] + last[3] * Math.cos(last[6]), last[2] + last[4] * Math.sin(last[6])];
        var out = [[a[1], a[2]]];
        if (b) out.push(b);
        return out;
      }
      function scaleItems(items, k) {
        return items.map(function (it) { return { g: it.g, ox: it.ox * k, oy: it.oy * k, s: it.s * k }; });
      }

      function strokePass(x, items, w, blur, col, alpha, additive) {
        x.save();
        x.lineCap = 'round'; x.lineJoin = 'round';
        if (blur > 0.25) { try { x.filter = 'blur(' + blur.toFixed(2) + 'px)'; } catch (e) {} }
        if (additive !== false) x.globalCompositeOperation = 'lighter';
        x.globalAlpha = (alpha == null) ? 1 : alpha;
        x.lineWidth = w; x.strokeStyle = col;
        trace(x, items); x.stroke();
        x.restore();
      }

      var SPILL_S = 0.34, BLOOM_S = 0.5;

      function buildSpill(items, cap, W, H) {
        var c = mk(W * SPILL_S, H * SPILL_S), x = c.getContext('2d');
        var it = scaleItems(items, SPILL_S), k = cap * SPILL_S;
        strokePass(x, it, k * 0.62, k * 0.30, 'rgba(255,22,118,1)', 0.115);
        strokePass(x, it, k * 0.42, k * 0.11, 'rgba(255,40,140,1)', 0.20);
        return c;
      }
      function buildBloom(items, tube, W, H) {
        var c = mk(W * BLOOM_S, H * BLOOM_S), x = c.getContext('2d');
        var it = scaleItems(items, BLOOM_S), t = tube * BLOOM_S;
        strokePass(x, it, t * 2.60, t * 1.75, 'rgba(255,40,146,1)', 0.30);
        strokePass(x, it, t * 1.34, t * 0.58, 'rgba(255,100,188,1)', 0.48);
        return c;
      }
      function paintCore(x, items, tube) {
        strokePass(x, items, tube * 0.88, tube * 0.10, '#ff2a96', 1);
        strokePass(x, items, tube * 0.54, tube * 0.06, '#ff8ed2', 1);
        strokePass(x, items, tube * 0.24, tube * 0.035, '#fff4fb', 1);
      }
      function buildSpec(items, tube, W, H) {
        var c = mk(W, H), x = c.getContext('2d');
        x.save();
        x.translate(-tube * 0.02, -tube * 0.25);
        x.lineCap = 'round'; x.lineJoin = 'round';
        x.lineWidth = tube * 0.17; x.strokeStyle = 'rgba(255,240,250,.52)';
        try { x.filter = 'blur(' + (tube * 0.11).toFixed(2) + 'px)'; } catch (e) {}
        trace(x, items); x.stroke();
        x.restore();
        x.globalCompositeOperation = 'destination-in';
        x.lineCap = 'round'; x.lineJoin = 'round';
        x.lineWidth = tube * 0.66; x.strokeStyle = '#fff';
        trace(x, items); x.stroke();
        return c;
      }

      function tips(x, items, tube) {
        x.save();
        x.globalCompositeOperation = 'source-over';
        for (var i = 0; i < items.length; i++) {
          var it = items[i], sub = it.g.sub;
          for (var j = 0; j < sub.length; j++) {
            var e = endsOf(sub[j]);
            for (var m = 0; m < e.length; m++) {
              var px = it.ox + e[m][0] * it.s, py = it.oy + e[m][1] * it.s;
              x.beginPath(); x.arc(px, py, tube * 0.47, 0, P * 2);
              x.fillStyle = '#33101f'; x.fill();
              x.beginPath(); x.arc(px, py, tube * 0.47, 0, P * 2);
              x.lineWidth = 1; x.strokeStyle = 'rgba(255,150,205,.20)'; x.stroke();
              x.beginPath(); x.arc(px - tube * 0.06, py - tube * 0.10, tube * 0.20, 0, P * 2);
              x.fillStyle = 'rgba(255,205,235,.14)'; x.fill();
            }
          }
        }
        x.restore();
      }

      function electrodes(x, list, tube) {
        x.save();
        for (var i = 0; i < list.length; i++) {
          var e = list[i], cx = e.x, cy = e.y, a = e.a;
          var sx = cx + Math.cos(a) * tube * 1.55, sy = cy + Math.sin(a) * tube * 1.55;
          x.beginPath(); x.moveTo(cx, cy); x.lineTo(sx, sy);
          x.lineCap = 'round'; x.lineWidth = tube * 0.46; x.strokeStyle = '#120a10'; x.stroke();
          x.beginPath(); x.arc(sx, sy, tube * 0.40, 0, P * 2);
          x.fillStyle = '#0b0509'; x.fill();
          x.beginPath(); x.arc(cx, cy, tube * 0.80, 0, P * 2);
          x.fillStyle = '#180a12'; x.fill();
          x.beginPath(); x.arc(cx, cy, tube * 0.80, 0, P * 2);
          x.lineWidth = 1.4; x.strokeStyle = 'rgba(214,120,164,.30)'; x.stroke();
          var g = x.createRadialGradient(cx, cy, 0, cx, cy, tube * 1.25);
          g.addColorStop(0, 'rgba(255,226,244,.95)');
          g.addColorStop(0.24, 'rgba(255,90,180,.62)');
          g.addColorStop(1, 'rgba(255,50,150,0)');
          x.globalCompositeOperation = 'lighter';
          x.beginPath(); x.arc(cx, cy, tube * 1.25, 0, P * 2);
          x.fillStyle = g; x.fill();
          x.globalCompositeOperation = 'source-over';
        }
        x.restore();
      }

      var W = 0, H = 0, cap = 0, tube = 0;
      var BASE = null, WLIT = null, dirty = { x: 0, y: 0, w: 0, h: 0 };

      function layout() {
        var lines = [], maxW = 0, i, j;
        for (i = 0; i < LINES.length; i++) {
          var s = LINES[i], sum = 0, gl = [];
          for (j = 0; j < s.length; j++) { var g = GLYPHS[s[j]]; gl.push(g); sum += g.w; }
          lines.push({ gl: gl, sum: sum });
          maxW = Math.max(maxW, sum + (gl.length - 1) * MINGAP);
        }
        var blockW = maxW, blockH = 2 + LINEGAP;
        cap = Math.min((W - W * 0.12) / blockW, (H - H * 0.18) / blockH);
        cap = Math.max(10, cap);
        tube = cap * 0.105;
        var x0 = (W - blockW * cap) / 2;
        var y0 = (H - blockH * cap) * 0.48;

        var items = [], flick = null, elec = [];
        for (i = 0; i < lines.length; i++) {
          var L = lines[i];
          var gap = (blockW - L.sum) / (L.gl.length - 1);
          var pen = x0, top = y0 + i * (1 + LINEGAP) * cap;
          for (j = 0; j < L.gl.length; j++) {
            var it = { g: L.gl[j], ox: pen, oy: top, s: cap, line: i, i: j };
            items.push(it);
            if (i === FLICK.line && j === FLICK.i) flick = it;
            for (var e = 0; e < ELECTRODES.length; e++) {
              var E = ELECTRODES[e];
              if (E.line === i && E.i === j) elec.push({ x: pen + E.p[0] * cap, y: top + E.p[1] * cap, a: E.a });
            }
            pen += L.gl[j].w * cap + gap;
          }
        }
        return { items: items, flick: flick, elec: elec };
      }

      function bake() {
        var L = layout();
        var items = L.items, flick = L.flick;
        var steady = items.filter(function (it) { return it !== flick; });
        var one = flick ? [flick] : [];

        var base = mk(W, H), b = base.getContext('2d');
        b.clearRect(0, 0, W, H);
        b.globalCompositeOperation = 'lighter';
        b.drawImage(buildSpill(steady, cap, W, H), 0, 0, W, H);
        b.drawImage(buildBloom(steady, tube, W, H), 0, 0, W, H);
        b.globalCompositeOperation = 'source-over';

        var tl = mk(W, H), t = tl.getContext('2d');
        strokePass(t, items, tube, 0, '#3d162a', 1, false);
        strokePass(t, items, tube * 0.70, 0, '#280c1a', 1, false);
        paintCore(t, steady, tube);
        t.globalCompositeOperation = 'lighter';
        t.drawImage(buildSpec(items, tube, W, H), 0, 0);
        t.globalCompositeOperation = 'source-over';
        tips(t, items, tube);
        electrodes(t, L.elec, tube);
        b.drawImage(tl, 0, 0);
        BASE = base;

        var lit = mk(W, H), w = lit.getContext('2d');
        if (one.length) {
          w.globalCompositeOperation = 'lighter';
          w.drawImage(buildSpill(one, cap, W, H), 0, 0, W, H);
          w.drawImage(buildBloom(one, tube, W, H), 0, 0, W, H);
          w.globalCompositeOperation = 'source-over';
          paintCore(w, one, tube);
          w.globalCompositeOperation = 'destination-out';
          var sub = one[0].g.sub;
          for (var j = 0; j < sub.length; j++) {
            var e = endsOf(sub[j]);
            for (var m = 0; m < e.length; m++) {
              w.beginPath();
              w.arc(one[0].ox + e[m][0] * one[0].s, one[0].oy + e[m][1] * one[0].s, tube * 0.47, 0, P * 2);
              w.fill();
            }
          }
          w.globalCompositeOperation = 'source-over';
          var pad = cap * 1.35;
          var bx = one[0].ox - pad, by = one[0].oy - pad;
          var bw2 = one[0].g.w * cap + pad * 2, bh2 = cap + pad * 2;
          dirty.x = Math.max(0, Math.floor(bx));
          dirty.y = Math.max(0, Math.floor(by));
          dirty.w = Math.min(W - dirty.x, Math.ceil(bw2));
          dirty.h = Math.min(H - dirty.y, Math.ceil(bh2));
        } else {
          dirty = { x: 0, y: 0, w: 0, h: 0 };
        }
        WLIT = lit;
      }

      function compose(f) {
        if (!BASE) return;
        if (dirty.w > 0 && composed) {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 1;
          ctx.clearRect(dirty.x, dirty.y, dirty.w, dirty.h);
          ctx.drawImage(BASE, dirty.x, dirty.y, dirty.w, dirty.h, dirty.x, dirty.y, dirty.w, dirty.h);
          if (f > 0.002) {
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = f;
            ctx.drawImage(WLIT, dirty.x, dirty.y, dirty.w, dirty.h, dirty.x, dirty.y, dirty.w, dirty.h);
          }
        } else {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 1;
          ctx.clearRect(0, 0, W, H);
          ctx.drawImage(BASE, 0, 0);
          if (f > 0.002 && WLIT) {
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = f;
            ctx.drawImage(WLIT, 0, 0);
          }
          composed = true;
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        lastF = f;
      }
      var composed = false, lastF = -1;

      var fseed = 0x1981;
      function frnd() { fseed = (fseed * 1103515245 + 12345) >>> 0; return fseed / 4294967296; }
      var ev = null, clock = 0;

      function nextEvent(after) {
        var segs = [], n = 1 + (frnd() < 0.42 ? 1 : 0);
        for (var i = 0; i < n; i++) {
          segs.push({ d: 0.20 + frnd() * 0.26, v: 0.22 + frnd() * 0.40 });
          segs.push({ d: 0.24 + frnd() * 0.34, v: 1 });
        }
        var total = 0;
        for (var j = 0; j < segs.length; j++) total += segs[j].d;
        return { t0: after + 5.6 + frnd() * 7.2, dur: total, segs: segs };
      }
      function level(t) {
        if (!ev) ev = nextEvent(4.2);
        while (t > ev.t0 + ev.dur) ev = nextEvent(ev.t0 + ev.dur);
        if (t < ev.t0) return 1;
        var u = t - ev.t0, prev = 1;
        for (var i = 0; i < ev.segs.length; i++) {
          var s = ev.segs[i];
          if (u < s.d) {
            var p = u / s.d;
            p = p * p * (3 - 2 * p);
            return prev + (s.v - prev) * p;
          }
          u -= s.d; prev = s.v;
        }
        return 1;
      }

      function resize() {
        var w = Math.round(board.clientWidth), h = Math.round(board.clientHeight);
        if (!w || !h) return false;
        if (w === W && h === H) return false;
        W = w; H = h;
        cv.width = W; cv.height = H;
        bake();
        composed = false;
        compose(reduce ? 1 : level(clock));
        return true;
      }

      var raf = 0, last = 0, visible = true, shown = true;
      function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
      function tick(now) {
        raf = requestAnimationFrame(tick);
        var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
        last = now;
        clock += dt;
        var f = level(clock);
        if (Math.abs(f - lastF) > 0.008) compose(f);
      }
      function start() {
        if (reduce || raf || !visible || !shown) return;
        last = 0;
        raf = requestAnimationFrame(tick);
      }

      if (!resize()) {
        requestAnimationFrame(function () { resize(); });
      }

      var rt = 0;
      window.addEventListener('resize', function () {
        clearTimeout(rt);
        rt = setTimeout(function () { if (resize()) {} }, 180);
      });

      document.addEventListener('visibilitychange', function () {
        shown = !document.hidden;
        if (shown) start(); else stop();
      });

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) {
          visible = es[0].isIntersecting;
          if (visible) start(); else stop();
        }, { threshold: 0.01 });
        io.observe(board);
      } else {
        start();
      }
      if (!reduce) start();
    })();
  <\/script>
</body>
</html>
`;

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\julian-vance-nebula.html.js
var n12 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Julian Vance \u2014 Digital Craftsman</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@1,6..72,300;1,6..72,400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#09090b] text-white antialiased bg-fixed" style="font-family:'Inter',ui-sans-serif,system-ui,sans-serif;">

  <!-- WebGL Nebula Background -->
  <canvas id="bg-canvas" class="fixed inset-0 w-full h-full pointer-events-none" style="z-index:0;"></canvas>

  <!-- Grain overlay -->
  <div class="fixed inset-0 pointer-events-none" style="z-index:1; opacity:0.08; mix-blend-mode:overlay; background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');"></div>

  <!-- Soft readability vignette -->
  <div class="fixed inset-0 pointer-events-none" style="z-index:1; background:radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(9,9,11,0.65) 100%);"></div>

  <!-- Page -->
  <main class="relative flex flex-col justify-between" style="z-index:10; min-height:140vh;">

    <!-- Header containing Nav, CTA, Tagline, and Subheading -->
    <header class="px-6 sm:px-12 pt-8 sm:pt-10 flex flex-col gap-10 sm:gap-14">
      
      <!-- Header Navigation & CTA -->
      <div class="flex items-center justify-between w-full">
        <nav aria-label="Primary navigation" class="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium uppercase tracking-widest text-neutral-300">
          <span class="inline-flex overflow-hidden"><a href="#" class="header-word inline-block will-change-transform hover:text-indigo-400 transition-colors" style="transition-duration:150ms;">Work</a></span>
          <span class="inline-flex overflow-hidden"><a href="#" class="header-word inline-block will-change-transform hover:text-indigo-400 transition-colors" style="transition-duration:150ms;">Experiments</a></span>
          <span class="inline-flex overflow-hidden"><a href="#" class="header-word inline-block will-change-transform hover:text-indigo-400 transition-colors" style="transition-duration:150ms;">Journal</a></span>
        </nav>

        <div class="inline-flex overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-indigo-500/40 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] header-word will-change-transform">
          <a href="#" class="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-b from-[#2a2a2e] to-[#09090b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.6)] text-xs sm:text-sm font-medium text-white hover:from-[#323236] hover:to-[#121216] transition-colors flex items-center gap-1.5 sm:gap-2 drop-shadow-sm">
            Start Project
            <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
          </a>
        </div>
      </div>

      <!-- Tagline & Subheading -->
      <div class="flex flex-col gap-3">
        <p id="tagline-container" class="text-xs sm:text-sm font-light text-neutral-200 leading-relaxed max-w-xs">
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">Creative</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">developer,</span></span>
          <br>
          <em style="font-family:'Newsreader',serif;" class="italic">
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">crafting</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">digital</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">spaces</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">with</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">intent,</span></span>
          </em>
          <br>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">merging</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">form</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">and</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">function.</span></span>
        </p>

        <p id="subheading-container" class="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed max-w-sm mt-2">
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">Specializing</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">in</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">kinetic</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">interfaces</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">and</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">highly</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">interactive</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">web</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">experiences.</span></span>
        </p>
      </div>
    </header>

    <!-- Giant name -->
    <section aria-label="Introduction" class="flex-1 flex items-end sm:items-center">
      <h1 class="w-full flex flex-col lg:flex-row lg:items-baseline lg:justify-between px-6 sm:px-12 gap-2 lg:gap-8 select-none tracking-tight">
        <span class="block overflow-hidden pb-2 lg:pb-6">
          <span id="name-first" class="block font-normal text-neutral-100 will-change-transform" style="font-size:clamp(4rem,16vw,15rem); line-height:0.95;">Julian</span>
        </span>
        <span class="block overflow-visible">
          <span class="block overflow-hidden pb-4 lg:pb-8 -mb-4 lg:-mb-8">
            <span id="name-last" class="block italic pr-2 will-change-transform" style="font-family:'Newsreader',serif; font-weight:300; font-size:clamp(4.25rem,17vw,16rem); line-height:0.95; background:linear-gradient(100deg,#818cf8 0%,#c084fc 45%,#e2e8f0 80%); -webkit-background-clip:text; background-clip:text; color:transparent;">Vance<span style="background:linear-gradient(100deg,#cbd5e1,#f1f5f9); -webkit-background-clip:text; background-clip:text; color:transparent;">.</span></span>
          </span>
        </span>
      </h1>
    </section>

    <!-- Bottom bar with Gradient Border -->
    <footer class="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
      <div class="flex flex-col sm:flex-row items-center sm:items-center justify-between px-6 sm:px-12 py-5 sm:py-6 gap-4 sm:gap-0">

        <div class="flex items-center gap-2 text-xs sm:text-sm font-medium uppercase" style="letter-spacing:0.1em;">
          <span class="inline-flex overflow-hidden"><iconify-icon icon="solar:arrow-right-linear" width="16" height="16" aria-hidden="true" class="footer-word block will-change-transform"></iconify-icon></span>
          <span class="inline-flex overflow-hidden"><span class="footer-word inline-block will-change-transform">V8.0</span></span>
        </div>

        <nav aria-label="Social links" class="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium uppercase text-neutral-200" style="letter-spacing:0.1em;">
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Github</span>
          </a>
          <span class="text-neutral-600 font-light inline-flex overflow-hidden">
            <span class="footer-word inline-block will-change-transform">/</span>
          </span>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Twitter</span>
          </a>
          <span class="text-neutral-600 font-light inline-flex overflow-hidden">
            <span class="footer-word inline-block will-change-transform">/</span>
          </span>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">LinkedIn</span>
          </a>
        </nav>

        <nav aria-label="Secondary links" class="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium uppercase" style="letter-spacing:0.1em;">
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Home</span>
          </a>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Archive</span>
          </a>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Contact</span>
          </a>
        </nav>

      </div>
    </footer>
  </main>

  <script>
    // ---------- WebGL indigo nebula background ----------
    (function () {
      const canvas = document.getElementById('bg-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
      };

      const fragmentShader = \`
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;

        vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
        vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
        vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
          vec2 i = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        float fbm(vec2 p){
          float v = 0.0; float a = 0.55;
          for(int i=0;i<4;i++){ v += a*snoise(p); p *= 2.05; a *= 0.5; }
          return v;
        }

        void main(){
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 p = uv;
          p.x *= u_resolution.x / u_resolution.y;

          float t = u_time * 0.05;
          vec2 drift = (u_mouse - 0.5) * 0.12;

          // warp coordinates for fluid motion
          vec2 st = p * 0.85 + drift;
          st += vec2(fbm(st + t), fbm(st - t)) * 0.35;

          vec3 col = vec3(0.005, 0.005, 0.012); // deep zinc base

          // main indigo mass, weighted to the right / upper-right
          vec2 c1 = vec2(u_resolution.x / u_resolution.y * 0.62, 0.85) + drift;
          float d1 = length(p - c1);
          float n1 = fbm(st * 1.4 + t * 2.0);
          float mass = smoothstep(1.15, 0.05, d1 + n1 * 0.32);

          // vertical sweeping tongue of light
          float tongue = smoothstep(0.55, 0.02, abs(p.x - (u_resolution.x/u_resolution.y*0.58) - n1*0.22)) * smoothstep(1.2, 0.1, abs(uv.y - 0.55));

          // secondary far-right glow
          vec2 c2 = vec2(u_resolution.x / u_resolution.y * 1.05, 0.5);
          float d2 = length(p - c2);
          float mass2 = smoothstep(0.9, 0.0, d2 + fbm(st*1.1 - t)*0.25);

          vec3 deepIndigo = vec3(0.05, 0.02, 0.15);
          vec3 purple = vec3(0.2, 0.1, 0.6);
          vec3 hotViolet = vec3(0.5, 0.3, 1.0);

          col = mix(col, deepIndigo, clamp(mass*0.9 + mass2*0.7, 0.0, 1.0));
          col = mix(col, purple, clamp(mass*mass*1.1 + mass2*0.55, 0.0, 1.0));
          col += hotViolet * tongue * mass * 0.85;

          // breathing pulse
          float pulse = 0.92 + 0.08 * sin(u_time * 0.4);
          col *= pulse;

          // vignette
          float vig = smoothstep(1.6, 0.35, length(uv - vec2(0.45, 0.5)));
          col *= mix(0.55, 1.0, vig);

          // keep left side dark for the sans name
          col *= mix(0.35, 1.0, smoothstep(0.0, 0.55, uv.x));

          gl_FragColor = vec4(col, 1.0);
        }
      \`;

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: 'void main(){ gl_Position = vec4(position, 1.0); }',
        fragmentShader: fragmentShader
      });

      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

      const mouseTarget = { x: 0.5, y: 0.5 };
      window.addEventListener('pointermove', function (e) {
        mouseTarget.x = e.clientX / window.innerWidth;
        mouseTarget.y = 1.0 - e.clientY / window.innerHeight;
      });

      window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      });

      const clock = new THREE.Clock();
      (function animate() {
        requestAnimationFrame(animate);
        uniforms.u_time.value = clock.getElapsedTime();
        uniforms.u_mouse.value.x += (mouseTarget.x - uniforms.u_mouse.value.x) * 0.03;
        uniforms.u_mouse.value.y += (mouseTarget.y - uniforms.u_mouse.value.y) * 0.03;
        renderer.render(scene, camera);
      })();
    })();

    // ---------- GSAP entrance choreography & ScrollTrigger ----------
    (function () {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set('#name-first, #name-last', { yPercent: 110 });
      gsap.set('.header-word, .tagline-word, .subheading-word, .footer-word', { yPercent: 110 });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Header Navigation and CTA reveal immediately on load, followed by the Name
      tl.to('.header-word', { yPercent: 0, duration: 1.0, stagger: 0.04 }, 0.1)
        .to('#name-first', { yPercent: 0, duration: 1.4 }, 0.2)
        .to('#name-last', { yPercent: 0, duration: 1.4 }, 0.38);

      // Masked staggered word reveal on scroll (Tagline)
      gsap.to('.tagline-word', {
        scrollTrigger: {
          trigger: '#tagline-container',
          start: 'top 95%'
        },
        yPercent: 0,
        duration: 1.0,
        stagger: 0.04,
        ease: 'power4.out'
      });

      // Masked staggered word reveal on scroll (Subheading)
      gsap.to('.subheading-word', {
        scrollTrigger: {
          trigger: '#subheading-container',
          start: 'top 95%'
        },
        yPercent: 0,
        duration: 1.0,
        stagger: 0.03,
        ease: 'power4.out'
      });

      // Masked staggered word reveal on scroll (Footer)
      gsap.to('.footer-word', {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 95%'
        },
        yPercent: 0,
        duration: 0.9,
        stagger: 0.03,
        ease: 'power4.out'
      });
    })();
  <\/script>
</body>
</html>`;

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\kinetic-lathe-certificate.html.js
var n13 = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Kinetic Lathe</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --ground: #ded6c2;
      --ground2: #d3cab3;
      --sheet: #f5efdf;
      --sheet2: #efe7d3;
      --ink: #1f3a30;
      --ink-6: rgba(31, 58, 48, 0.62);
      --ink-4: rgba(31, 58, 48, 0.44);
      --rule: rgba(31, 58, 48, 0.22);
    }

    * { box-sizing: border-box; }

    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background:
        radial-gradient(118% 92% at 50% 0%, #e6dfcd 0%, var(--ground) 52%, var(--ground2) 100%);
      color: var(--ink);
      font-family: "Cormorant Garamond", Didot, "Times New Roman", serif;
      -webkit-font-smoothing: antialiased;
    }

    main {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      padding: clamp(12px, 3vmin, 28px);
    }

    #cert {
      position: relative;
      width: min(100%, 720px);
      aspect-ratio: 1.08 / 1;
      max-height: min(100%, 720px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: clamp(10px, 2.4vmin, 18px);
      padding: clamp(16px, 4vmin, 36px);
      border-radius: 3px;
      background:
        repeating-linear-gradient(0deg, rgba(31, 58, 48, 0.045) 0 0.5px, transparent 0.5px 6px),
        linear-gradient(168deg, #f8f3e6 0%, var(--sheet) 40%, var(--sheet2) 100%);
      box-shadow:
        0 0 0 1px rgba(31, 58, 48, 0.13),
        0 1px 0 rgba(255, 255, 255, 0.55) inset,
        0 30px 60px -34px rgba(22, 38, 28, 0.62),
        0 3px 8px rgba(22, 38, 28, 0.09);
    }

    #plate {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      border-radius: inherit;
      pointer-events: none;
    }

    .face {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(10px, 2.2vmin, 16px);
      width: min(100%, 420px);
      text-align: center;
    }

    .mark {
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: clamp(9px, 1.7vmin, 11px);
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--ink-4);
    }

    h1 {
      margin: 0;
      font-size: clamp(22px, 4.8vmin, 34px);
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 1;
    }

    h1 em {
      font-style: normal;
      color: var(--ink-6);
    }

    #medal {
      position: relative;
      width: min(58vmin, 280px);
      height: min(58vmin, 280px);
      border-radius: 50%;
      flex: none;
    }

    #rosette,
    #drift {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    }

    .caption {
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: clamp(9px, 1.7vmin, 11px);
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-4);
    }

    @media (max-width: 520px), (max-height: 560px) {
      #cert {
        aspect-ratio: auto;
        height: 100%;
        max-height: none;
      }

      #medal {
        width: min(62vmin, 240px);
        height: min(62vmin, 240px);
      }
    }
  </style>
</head>
<body>
  <main>
    <article id="cert" aria-label="Kinetic Lathe certificate">
      <canvas id="plate" aria-hidden="true"></canvas>
      <div class="face">
        <div class="mark">Kinetic Lathe</div>
        <figure id="medal">
          <canvas id="rosette" aria-hidden="true"></canvas>
          <canvas id="drift" aria-hidden="true"></canvas>
        </figure>
        <h1>Matrix 92 \xB7 Cam <em id="barName">C</em></h1>
        <div class="caption">Primary cam \xB7 <span id="capBar">C</span></div>
      </div>
    </article>
  </main>
<script>
(() => {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const TAU = Math.PI * 2;
  const INK = "rgba(31,58,48,";
  const ink = (a) => INK + a + ")";
  const SUB = "#f5efdf";

  const cert = document.getElementById("cert");
  const medal = document.getElementById("medal");
  const cPlate = document.getElementById("plate");
  const cRose = document.getElementById("rosette");
  const cDrift = document.getElementById("drift");
  const ctxP = cPlate.getContext("2d");
  const ctxR = cRose.getContext("2d");
  const ctxD = cDrift.getContext("2d");
  if (!ctxP || !ctxR || !ctxD) return;

  const BARS = [
    { id: "A", m: 7, m2: 13, m3: 9 },
    { id: "B", m: 9, m2: 15, m3: 12 },
    { id: "C", m: 11, m2: 19, m3: 14 },
    { id: "D", m: 15, m2: 23, m3: 18 },
  ];
  let sel = 2;

  function fit(canvas, ctx, w, h) {
    const S = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.max(2, Math.round(w * S));
    const H = Math.max(2, Math.round(h * S));
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W;
      canvas.height = H;
    }
    ctx.setTransform(S, 0, 0, S, 0, 0);
    ctx.clearRect(0, 0, w, h);
  }

  function circleOutline(cx, cy, r, samples) {
    const pts = new Array(samples);
    for (let i = 0; i < samples; i++) {
      const th = (i / samples) * TAU;
      pts[i] = [cx + Math.cos(th) * r, cy + Math.sin(th) * r];
    }
    return pts;
  }

  function rectOutline(x, y, w, h, r) {
    const pts = [];
    const push = (px, py) => {
      const l = pts[pts.length - 1];
      if (l && Math.abs(l[0] - px) < 1e-4 && Math.abs(l[1] - py) < 1e-4) return;
      pts.push([px, py]);
    };
    const seg = (x0, y0, xe, ye) => {
      const n = Math.max(2, Math.round(Math.hypot(xe - x0, ye - y0) / 4));
      for (let i = 0; i <= n; i++) push(x0 + ((xe - x0) * i) / n, y0 + ((ye - y0) * i) / n);
    };
    const arc = (cx, cy, a0, a1) => {
      const n = Math.max(7, Math.round((Math.abs(a1 - a0) * r) / 1.6));
      for (let i = 0; i <= n; i++) {
        const a = a0 + ((a1 - a0) * i) / n;
        push(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
    };
    const x1 = x + w;
    const y1 = y + h;
    const HP = Math.PI / 2;
    seg(x + r, y, x1 - r, y);
    arc(x1 - r, y + r, -HP, 0);
    seg(x1, y + r, x1, y1 - r);
    arc(x1 - r, y1 - r, 0, HP);
    seg(x1 - r, y1, x + r, y1);
    arc(x + r, y1 - r, HP, Math.PI);
    seg(x, y1 - r, x, y + r);
    arc(x + r, y + r, Math.PI, Math.PI * 1.5);
    return pts;
  }

  function rail(pts, M) {
    const nP = pts.length;
    const cum = new Float64Array(nP + 1);
    for (let i = 1; i <= nP; i++) {
      const p = pts[i % nP];
      const q = pts[i - 1];
      cum[i] = cum[i - 1] + Math.hypot(p[0] - q[0], p[1] - q[1]);
    }
    const L = cum[nP];
    const out = new Array(M);
    let j = 0;
    for (let i = 0; i < M; i++) {
      const target = (i / M) * L;
      while (j < nP - 1 && cum[j + 1] < target) j++;
      const seg = cum[j + 1] - cum[j] || 1;
      const u = (target - cum[j]) / seg;
      const p = pts[j];
      const q = pts[(j + 1) % nP];
      out[i] = [
        p[0] + (q[0] - p[0]) * u,
        p[1] + (q[1] - p[1]) * u,
        (q[1] - p[1]) / seg,
        -(q[0] - p[0]) / seg,
      ];
    }
    return out;
  }

  function band(ctx, r, o) {
    const M = r.length;
    ctx.lineWidth = o.lw;
    ctx.strokeStyle = ink(o.alpha);
    ctx.beginPath();
    for (let k = 0; k < o.K; k++) {
      const ph = (o.phase || 0) + (k / o.K) * TAU;
      for (let i = 0; i <= M; i++) {
        const p = r[i % M];
        const u = (i % M) / M;
        const off = o.amp * Math.sin(o.waves * u * TAU + ph);
        const x = p[0] + p[2] * off;
        const y = p[1] + p[3] * off;
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
    }
    ctx.stroke();
  }

  function railLine(ctx, r, off, alpha, lw) {
    const M = r.length;
    ctx.lineWidth = lw;
    ctx.strokeStyle = ink(alpha);
    ctx.beginPath();
    for (let i = 0; i <= M; i++) {
      const p = r[i % M];
      const x = p[0] + p[2] * off;
      const y = p[1] + p[3] * off;
      if (i) ctx.lineTo(x, y);
      else ctx.moveTo(x, y);
    }
    ctx.stroke();
  }

  function rosette(ctx, cx, cy, o) {
    const n = o.n;
    const pts = o.pts;
    const m = o.m;
    const d = o.d;
    const dir = o.dir || 1;
    const shrink = o.shrink === undefined ? 0.06 : o.shrink;
    ctx.lineWidth = o.lw;
    ctx.strokeStyle = ink(o.alpha);
    ctx.lineJoin = "round";
    ctx.beginPath();
    for (let k = 0; k < n; k++) {
      const f = k / n;
      const phi = (o.phase || 0) + dir * f * TAU;
      const a = o.A * (1 - shrink * f);
      for (let i = 0; i <= pts; i++) {
        const t = (i / pts) * TAU;
        const x = cx + a * Math.cos(t) + d * Math.cos(m * t + phi);
        const y = cy + a * Math.sin(t) - d * Math.sin(m * t + phi);
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
    }
    ctx.stroke();
  }

  function waveField(ctx, w, h) {
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = ink(0.075);
    const pitch = 6.2;
    const N = Math.ceil(h / pitch) + 2;
    const step = 7;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const y0 = i * pitch - 3;
      const ph = i * 0.44;
      for (let x = 0; x <= w; x += step) {
        const y =
          y0 +
          3.3 * Math.sin(x * 0.0139 + ph) +
          1.9 * Math.sin(x * 0.0327 - ph * 1.7) +
          0.9 * Math.sin(x * 0.0715 + ph * 0.6);
        if (x) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
    }
    ctx.stroke();
  }

  function rand32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function drawPlate() {
    const w = cert.clientWidth;
    const h = cert.clientHeight;
    if (!w || !h) return;
    fit(cPlate, ctxP, w, h);
    ctxP.fillStyle = SUB;
    ctxP.fillRect(0, 0, w, h);

    let g = ctxP.createRadialGradient(w * 0.28, h * 0.16, 8, w * 0.28, h * 0.16, Math.max(w, h) * 0.95);
    g.addColorStop(0, "rgba(255,252,240,.85)");
    g.addColorStop(1, "rgba(255,252,240,0)");
    ctxP.fillStyle = g;
    ctxP.fillRect(0, 0, w, h);
    g = ctxP.createRadialGradient(w * 0.88, h * 0.94, 8, w * 0.88, h * 0.94, Math.max(w, h) * 0.85);
    g.addColorStop(0, ink(0.06));
    g.addColorStop(1, ink(0));
    ctxP.fillStyle = g;
    ctxP.fillRect(0, 0, w, h);

    const rnd = rand32(4409);
    for (let i = 0; i < 1100; i++) {
      ctxP.fillStyle = ink(0.018 + rnd() * 0.05);
      ctxP.fillRect(rnd() * w, rnd() * h, 1, rnd() < 0.12 ? 2 : 1);
    }

    waveField(ctxP, w, h);

    const narrow = w < 520;
    const inset = narrow ? 7 : 10;
    const half = narrow ? 3.1 : 3.8;
    const br = rail(
      rectOutline(inset + half, inset + half, w - 2 * (inset + half), h - 2 * (inset + half), narrow ? 5 : 7),
      narrow ? 760 : 1240,
    );
    band(ctxP, br, { amp: half, waves: narrow ? 54 : 116, K: 9, alpha: 0.3, lw: 0.5 });
    railLine(ctxP, br, -half - 1.9, 0.34, 0.6);
    railLine(ctxP, br, half + 1.9, 0.3, 0.5);
    railLine(ctxP, br, half + 4.4, 0.13, 0.5);
  }

  function drawRosettes() {
    const w = medal.clientWidth;
    const h = medal.clientHeight;
    if (!w || !h) return;
    fit(cRose, ctxR, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const R = Math.min(w, h) / 2;
    const bar = BARS[sel];
    const small = R < 130;

    const g = ctxR.createRadialGradient(cx, cy, R * 0.06, cx, cy, R);
    g.addColorStop(0, "rgba(249,245,234,.92)");
    g.addColorStop(0.76, "rgba(249,245,234,.84)");
    g.addColorStop(1, "rgba(249,245,234,0)");
    ctxR.fillStyle = g;
    ctxR.beginPath();
    ctxR.arc(cx, cy, R, 0, TAU);
    ctxR.fill();

    const ring = rail(circleOutline(cx, cy, R * 0.93, 640), small ? 460 : 620);
    band(ctxR, ring, { amp: R * 0.036, waves: (bar.m + 1) * 5, K: 7, alpha: 0.3, lw: 0.5 });
    railLine(ctxR, ring, -R * 0.036 - 1.8, 0.34, 0.6);
    railLine(ctxR, ring, R * 0.036 + 1.8, 0.28, 0.5);

    rosette(ctxR, cx, cy, {
      A: R * 0.655,
      d: R * 0.215,
      m: bar.m,
      n: small ? 44 : 58,
      pts: small ? 340 : 470,
      alpha: 0.42,
      lw: 0.5,
      shrink: 0.035,
      phase: 0.2,
    });
    rosette(ctxR, cx, cy, {
      A: R * 0.335,
      d: R * 0.115,
      m: bar.m2,
      n: small ? 34 : 44,
      pts: small ? 280 : 380,
      alpha: 0.38,
      lw: 0.5,
      dir: -1,
      shrink: 0.05,
      phase: 0.9,
    });

    ctxR.beginPath();
    ctxR.arc(cx, cy, R * 0.07, 0, TAU);
    ctxR.fillStyle = "rgba(249,245,234,.86)";
    ctxR.fill();
    ctxR.lineWidth = 0.6;
    ctxR.strokeStyle = ink(0.32);
    ctxR.stroke();
    ctxR.beginPath();
    ctxR.arc(cx, cy, R * 0.04, 0, TAU);
    ctxR.strokeStyle = ink(0.24);
    ctxR.lineWidth = 0.5;
    ctxR.stroke();
  }

  let phase = 0;
  function drawDrift() {
    const w = medal.clientWidth;
    const h = medal.clientHeight;
    if (!w || !h) return;
    fit(cDrift, ctxD, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const R = Math.min(w, h) / 2;
    const bar = BARS[sel];
    const small = R < 130;
    rosette(ctxD, cx, cy, {
      A: R * 0.515,
      d: R * 0.165,
      m: bar.m3,
      n: small ? 26 : 34,
      pts: small ? 240 : 320,
      alpha: 0.3,
      lw: 0.5,
      shrink: 0.03,
      phase,
    });
  }

  const elBarName = document.getElementById("barName");
  const elCapBar = document.getElementById("capBar");

  function paintLabels() {
    const b = BARS[sel];
    elBarName.textContent = b.id;
    elCapBar.textContent = b.id;
  }

  function drawAll() {
    drawPlate();
    drawRosettes();
    drawDrift();
  }

  paintLabels();
  drawAll();

  let timer = 0;
  let onScreen = true;
  let camTimer = 0;

  function tick() {
    timer = 0;
    phase += 0.019;
    if (phase > TAU) phase -= TAU;
    drawDrift();
    schedule();
  }

  function schedule() {
    if (timer || reduce || !onScreen || document.hidden) return;
    timer = setTimeout(tick, 140);
  }

  function halt() {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
  }

  function cycleCam() {
    if (reduce || document.hidden || !onScreen) return;
    sel = (sel + 1) % BARS.length;
    paintLabels();
    drawRosettes();
    drawDrift();
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        onScreen = entries[0].isIntersecting;
        if (onScreen) schedule();
        else halt();
      },
      { threshold: 0.02 },
    ).observe(cert);
  } else {
    schedule();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) halt();
    else schedule();
  });
  window.addEventListener("pagehide", halt);

  let rt = 0;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(drawAll, 120);
  });

  if (!reduce) camTimer = setInterval(cycleCam, 4200);
  schedule();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawAll).catch(() => {});
  }
})();
<\/script>
</body>
</html>
`;

// official-js:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\node_modules\@designcodeio\threeui\lib-dist\shaders\neuform-isolated\sources\lumina-weavers-cloth.html.js
var n14 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Lumina Weavers \xB7 Kinetic Textiles, Kyoto</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="text-[#e8dcc4] overflow-hidden antialiased selection:bg-[#b02330] selection:text-white font-serif" style="background: radial-gradient(120% 100% at 50% 30%, #2a1113 0%, #1a0a0c 55%, #0f0607 100%); height: 100dvh; width: 100vw;">

    <!-- Aura Asset Background -->
    <div class="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-[0.15] mix-blend-screen" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Stage / Background -->
    <div class="fixed inset-0 overflow-hidden z-0">
        <canvas id="cloth" class="absolute inset-0 w-full h-full block pointer-events-none"></canvas>
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(90% 80% at 50% 46%, transparent 55%, rgba(10,5,6,.72) 100%);"></div>
    </div>

    <!-- UI Overlay -->
    <div class="absolute inset-0 z-10 flex flex-col p-6 md:p-12 pointer-events-none font-sans">
        
        <!-- Header -->
        <header class="flex justify-between items-center w-full pointer-events-auto">
            <div class="overflow-hidden">
                <div class="reveal-item opacity-0 translate-y-8 text-xs tracking-[0.28em] uppercase text-[#b99a8f] font-medium">
                    Est. 2024 \xB7 Kyoto, Japan
                </div>
            </div>
            <nav class="hidden md:flex gap-8">
                <div class="overflow-hidden">
                    <a href="#library" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Material Library</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#trade" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Partnerships</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#mill" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">The Studio</a>
                </div>
            </nav>
        </header>

        <!-- Footer / Content -->
        <div class="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pointer-events-auto w-full">
            
            <div class="max-w-md space-y-6">
                <div>
                    <p class="word-reveal text-sm md:text-base leading-relaxed text-[#e8dcc4]/90">
                        <strong class="text-white font-semibold block mb-1 text-base md:text-lg tracking-tight font-serif">Kinetic textiles, rendered to order.</strong>
                        Every meter is simulated on bespoke kinetic engines. Digital threads, authentic physics, designed for infinite virtual environments.
                    </p>
                </div>
                
                <div class="overflow-hidden pt-2">
                    <div class="reveal-item opacity-0 translate-y-8 inline-block rounded-sm p-[1px] bg-gradient-to-b from-white/30 via-[#e03848]/30 to-[#7c1622]/10 shadow-[0_10px_30px_rgba(124,22,34,0.4)] transition-transform duration-300 hover:-translate-y-0.5 group">
                        <a href="#commission" class="flex items-center gap-3 bg-[#b02330] group-hover:bg-[#961c27] text-white px-6 py-3 rounded-[1px] text-sm font-semibold tracking-wide transition-colors relative overflow-hidden">
                            <span class="relative z-10">Commission a textile</span>
                            <iconify-icon icon="solar:arrow-right-linear" width="18" class="relative z-10 transition-transform group-hover:translate-x-1"></iconify-icon>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-left sm:text-right mt-8 sm:mt-0">
                <div class="word-reveal text-xs tracking-[0.24em] uppercase text-[#b99a8f] leading-[1.9] font-medium">
                    Vector &amp; matrix<br>
                    No. 42 azure thread<br>
                    Node 7 \xB7 Grid 2024
                </div>
            </div>

        </div>
    </div>

    <script>
        // --- GSAP Animation ---
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Standard reveals
            gsap.to(".reveal-item", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // Masked Word Reveal implementation
            document.querySelectorAll('.word-reveal').forEach(node => {
                function wrapWords(el) {
                    const childNodes = Array.from(el.childNodes);
                    childNodes.forEach(child => {
                        if (child.nodeType === 3) {
                            const words = child.nodeValue.split(/(\\s+)/);
                            const fragment = document.createDocumentFragment();
                            words.forEach(word => {
                                if (word.trim().length > 0) {
                                    const wrapper = document.createElement('span');
                                    wrapper.className = 'inline-flex overflow-hidden pb-1 -mb-1';
                                    const inner = document.createElement('span');
                                    inner.className = 'word-anim translate-y-[110%] opacity-0 inline-block';
                                    inner.textContent = word;
                                    wrapper.appendChild(inner);
                                    fragment.appendChild(wrapper);
                                } else {
                                    fragment.appendChild(document.createTextNode(word));
                                }
                            });
                            el.replaceChild(fragment, child);
                        } else if (child.nodeType === 1) {
                            wrapWords(child);
                        }
                    });
                }
                wrapWords(node);

                // ScrollTrigger staggered reveal
                gsap.to(node.querySelectorAll('.word-anim'), {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.02,
                    ease: "power4.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: node,
                        start: "top 95%",
                    }
                });
            });
        });

        // --- Three.js Cloth Simulation ---
        (() => {
            const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
            const canvas = document.getElementById('cloth');
            if (!window.THREE) return;

            // Generate Woven Texture
            function makeClothTexture() {
                const W = 1280, H = 800;
                const c = document.createElement('canvas'); 
                c.width = W; 
                c.height = H;
                const x = c.getContext('2d');
                
                // Ivory ground gradient
                const g = x.createLinearGradient(0, 0, 0, H);
                g.addColorStop(0, '#efe6d4'); 
                g.addColorStop(0.5, '#e9dfca'); 
                g.addColorStop(1, '#e3d7bf');
                x.fillStyle = g; 
                x.fillRect(0, 0, W, H);

                // Crimson hem border
                x.strokeStyle = '#a5202c'; 
                x.lineWidth = 10;
                x.strokeRect(46, 46, W-92, H-92);
                x.lineWidth = 3; 
                x.strokeStyle = '#7c1622';
                x.strokeRect(66, 66, W-132, H-132);

                // Typography
                x.fillStyle = '#a5202c';
                x.font = 'bold 78px Georgia, "Times New Roman", serif';
                x.textAlign = 'center'; 
                x.textBaseline = 'middle';
                x.fillText('L\u2009W', W/2, 190);
                
                x.font = 'normal 20px "Helvetica Neue", Arial, sans-serif';
                x.fillStyle = '#7c1622';
                x.fillText('\xB7 KYOTO \xB7', W/2, 246);

                x.fillStyle = '#9e1e2a';
                x.font = 'bold 118px Georgia, "Times New Roman", serif';
                x.fillText('LUMINA', W/2, 400);
                x.fillText('WEAVERS', W/2, 520);

                x.fillStyle = '#7c1622';
                x.font = '600 30px "Helvetica Neue", Arial, sans-serif';
                x.fillText('K I N E T I C   T E X T I L E S   \xB7   2 0 2 4', W/2, 626);

                // Weave overlay (Thread grid)
                x.globalAlpha = 1;
                for(let yy=0; yy<H; yy+=3){
                    x.strokeStyle = 'rgba(60,30,20,0.05)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(0,yy+.5); x.lineTo(W,yy+.5); x.stroke();
                }
                for(let xx=0; xx<W; xx+=3){
                    x.strokeStyle = 'rgba(255,250,235,0.06)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(xx+.5,0); x.lineTo(xx+.5,H); x.stroke();
                }

                // Fabric Slub Noise
                const id = x.getImageData(0, 0, W, H), d = id.data;
                for(let i=0; i<d.length; i+=4){
                    const n = (Math.random()*2-1)*10;
                    d[i]+=n; d[i+1]+=n; d[i+2]+=n;
                }
                x.putImageData(id, 0, 0);

                const tex = new THREE.CanvasTexture(c);
                tex.anisotropy = 4; 
                tex.colorSpace = THREE.SRGBColorSpace;
                return tex;
            }

            // Scene Setup
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            let camera;

            const BW = 4.4, BH = 2.75; 
            const GX = 40, GY = 26;
            const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);
            const mat = new THREE.MeshPhongMaterial({
                map: makeClothTexture(), 
                side: THREE.DoubleSide,
                shininess: 6, 
                specular: 0x2a1410, 
                color: 0xffffff
            });
            const mesh = new THREE.Mesh(geo, mat); 
            scene.add(mesh);

            // Lighting
            scene.add(new THREE.AmbientLight(0xffe9d0, 0.62));
            const key = new THREE.DirectionalLight(0xfff0dc, 1.15); 
            key.position.set(-3, 3.5, 3.2); 
            scene.add(key);
            const rim = new THREE.DirectionalLight(0xb02330, 0.42); 
            rim.position.set(3, -1.5, 2.0); 
            scene.add(rim);

            // Verlet Physics Data
            const pos = geo.attributes.position;
            const N = (GX + 1) * (GY + 1);
            const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
            const pinned = new Uint8Array(N);
            
            for(let i=0; i<N; i++){
                const ax = pos.getX(i), ay = pos.getY(i), az = 0;
                cur[i*3] = prev[i*3] = rest[i*3] = ax;
                cur[i*3+1] = prev[i*3+1] = rest[i*3+1] = ay;
                cur[i*3+2] = prev[i*3+2] = rest[i*3+2] = az;
            }
            
            for(let ix=0; ix<=GX; ix++){ pinned[ix] = 1; }
            const idx = (ix, iy) => ix + iy * (GX + 1);

            const restH = BW / GX, restV = BH / GY;
            const GRAV = -3.1, DAMP = 0.985, DT = 0.016;

            function wind(ix, iy, t) {
                const cx = ix / GX, cy = iy / GY;
                const travel = t * 1.7 - cy * 4.2;
                const gust = 0.6 + 0.42 * Math.sin(t * 0.6) + 0.18 * Math.sin(t * 1.9 + 1.3);
                const amp = 4.3 * cy;
                const fz = (Math.sin(travel + cx * 3.3) + 0.5 * Math.sin(travel * 1.7 + cx * 6.0)) * amp * gust;
                const fx = Math.sin(t * 0.9 + cy * 2.2) * 0.6 * cy;
                const fy = -0.4 * cy;
                return [fx, fy, fz];
            }

            function step(t) {
                for(let iy=0; iy<=GY; iy++){
                    for(let ix=0; ix<=GX; ix++){
                        const i = idx(ix, iy);
                        if(pinned[i]) continue;
                        const [fx, fy, fz] = wind(ix, iy, t);
                        for(let k=0; k<3; k++){
                            const j = i * 3 + k;
                            const a = (k===0 ? fx : k===1 ? (fy+GRAV) : fz);
                            const v = (cur[j] - prev[j]) * DAMP;
                            prev[j] = cur[j];
                            cur[j] = cur[j] + v + a * DT * DT;
                        }
                    }
                }
                
                for(let it=0; it<3; it++){
                    for(let iy=0; iy<=GY; iy++){
                        for(let ix=0; ix<GX; ix++){ solve(idx(ix,iy), idx(ix+1,iy), restH); }
                    }
                    for(let iy=0; iy<GY; iy++){
                        for(let ix=0; ix<=GX; ix++){ solve(idx(ix,iy), idx(ix,iy+1), restV); }
                    }
                }
                
                for(let ix=0; ix<=GX; ix++){
                    const i = ix;
                    cur[i*3] = rest[i*3]; cur[i*3+1] = rest[i*3+1]; cur[i*3+2] = rest[i*3+2];
                    prev[i*3] = rest[i*3]; prev[i*3+1] = rest[i*3+1]; prev[i*3+2] = rest[i*3+2];
                }
            }

            function solve(a, b, rl) {
                const ax = cur[a*3], ay = cur[a*3+1], az = cur[a*3+2];
                const bx = cur[b*3], by = cur[b*3+1], bz = cur[b*3+2];
                let dx = bx - ax, dy = by - ay, dz = bz - az;
                const d = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1e-6;
                const diff = (d - rl) / d * 0.5;
                dx *= diff; dy *= diff; dz *= diff;
                
                const pa = pinned[a], pb = pinned[b];
                if(!pa && !pb){ 
                    cur[a*3]+=dx; cur[a*3+1]+=dy; cur[a*3+2]+=dz; 
                    cur[b*3]-=dx; cur[b*3+1]-=dy; cur[b*3+2]-=dz; 
                }
                else if(pa && !pb){ cur[b*3]-=dx*2; cur[b*3+1]-=dy*2; cur[b*3+2]-=dz*2; }
                else if(!pa && pb){ cur[a*3]+=dx*2; cur[a*3+1]+=dy*2; cur[a*3+2]+=dz*2; }
            }

            function commit() {
                for(let i=0; i<N; i++){ pos.setXYZ(i, cur[i*3], cur[i*3+1], cur[i*3+2]); }
                pos.needsUpdate = true;
                geo.computeVertexNormals();
            }

            function fit() {
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(w, h, false);
                const aspect = w / h;
                camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
                const vFit = (BH/2) / Math.tan(42 * Math.PI / 360);
                const hFit = (BW/2) / Math.tan(42 * Math.PI / 360) / aspect;
                camera.position.set(0, 0.05, Math.max(vFit, hFit) * 1.16 + 0.4);
                camera.lookAt(0, 0, 0);
            }
            
            window.addEventListener('resize', fit); 
            fit();

            let running = false, raf = 0, t = 0;
            function loop() {
                if(!running) return;
                t += DT; 
                step(t); 
                commit();
                renderer.render(scene, camera);
                raf = requestAnimationFrame(loop);
            }
            
            function start() { if(running)return; running=true; raf=requestAnimationFrame(loop); }
            function stop() { running=false; cancelAnimationFrame(raf); }

            if(reduce) {
                for(let s=0; s<220; s++) step(s*DT);
                commit(); 
                renderer.render(scene, camera);
            } else {
                for(let s=0; s<40; s++) step(s*DT);
                t = 40 * DT;
                start();
                document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
            }
        })();
    <\/script>
</body>
</html>`;

// raw:C:\Omkar\Hackathons\Nebius x NVIDIA Global AI Hackathon\Cited WebApp\vendor\threeui\src\shaders\neuform-isolated\sources\nexus-unified-flow.html
var nexus_unified_flow_default = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus - Unified Ecosystem</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen overflow-x-hidden antialiased selection:bg-red-500/30 flex flex-col relative" style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

    <!-- WebGL Background -->
    <canvas id="glcanvas" class="fixed inset-0 w-full h-full -z-20"></canvas>

    <!-- Overlay structural lines to match reference -->
    <div class="fixed inset-0 pointer-events-none -z-10 w-full h-full">
        <!-- Thin angled lines behind logo area -->
        <div class="absolute top-0 left-0 w-[600px] h-[600px] border-l border-t border-white/5 origin-top-left rotate-[15deg] translate-x-[-100px] translate-y-[-100px]"></div>
        <div class="absolute top-0 left-0 w-[800px] h-[800px] border-l border-white/5 origin-top-left rotate-[-25deg] translate-x-[200px] translate-y-[-50px]"></div>
        <!-- Horizontal grid line -->
        <div class="absolute top-[20%] w-full border-t border-white/5"></div>
    </div>

    <!-- Main Content Layout -->
    <div class="flex-1 flex flex-col relative z-10 w-full max-w-[1600px] mx-auto min-h-screen border-l border-r border-white/10">
        
        <!-- Hero Section -->
        <main class="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between px-8 sm:px-16 lg:px-24 py-24 lg:py-0 relative">
            
            <!-- Left: Logo & Title -->
            <div class="flex items-center gap-6 group cursor-default w-full lg:w-1/2 mb-20 lg:mb-0">
                <!-- Abstract Geometric Icon -->
                <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white transform group-hover:scale-105 transition-transform duration-500 ease-out" style="flex-shrink: 0;">
                    <path d="M10 20 L50 40 L90 10 L80 50 L95 85 L50 60 L15 90 L25 50 Z" fill="currentColor"/>
                    <path d="M50 40 L50 60" stroke="black" stroke-width="2"/>
                    <path d="M10 20 L50 60" stroke="black" stroke-width="2"/>
                </svg>
                
                <!-- Masked Reveal Title -->
                <h1 class="text-7xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter lowercase leading-none flex flex-wrap gap-x-4 gap-y-2 reveal-text">
                    <span class="inline-block overflow-hidden pt-2">
                        <span class="reveal-word inline-block translate-y-[120%] pb-2">nexus</span>
                    </span>
                    <span class="inline-block overflow-hidden pt-2">
                        <span class="reveal-word inline-block translate-y-[120%] pb-2">flow</span>
                    </span>
                </h1>
            </div>

            <!-- Right: Input & Social Proof -->
            <div class="w-full lg:w-1/2 flex flex-col items-start lg:items-end relative">
                <!-- Offset Input Container -->
                <div class="relative group w-full max-w-md">
                    <!-- Stylized Shadow/Offset with subtle gradient -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#A63A29] to-[#732215] translate-x-3 translate-y-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    
                    <!-- Input Box with Premium Gradient Border Treatment -->
                    <div class="relative z-10 p-[1px] bg-gradient-to-r from-white/40 via-white/10 to-white/30">
                        <div class="bg-white flex items-center justify-between p-1 w-full h-[60px] sm:h-[72px]">
                            <input type="email" placeholder="Join the waitlist..." class="w-full h-full bg-transparent text-black outline-none px-6 text-base sm:text-lg font-medium placeholder:text-gray-500 placeholder:font-normal" />
                        </div>
                    </div>
                </div>

                <!-- Users Proof -->
                <div class="flex flex-row items-center gap-4 mt-10 mr-2">
                    <span class="text-sm font-medium tracking-wide">5,102+ early adopters</span>
                    <div class="flex -space-x-3">
                        <!-- Avatars with Gradient Borders -->
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg" alt="User avatar">
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <!-- Structural Horizontal Divider -->
        <div class="w-full border-t border-white/20"></div>

        <!-- Footer Section -->
        <footer class="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
            
            <!-- Footer Left: Brand & Desc -->
            <div class="lg:col-span-4 p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col gap-6">
                <div class="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white">
                        <path d="M10 20 L50 40 L90 10 L80 50 L95 85 L50 60 L15 90 L25 50 Z" fill="currentColor"/>
                    </svg>
                    <span class="text-base font-semibold tracking-tight">Nexus</span>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                    Your unified ecosystem to synchronize thoughts, maintain momentum, and build effortlessly.
                </p>
            </div>

            <!-- Footer Right: Links -->
            <div class="lg:col-span-8 p-8 sm:p-12 lg:p-16 grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8">
                <!-- Column 1 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Product</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Capabilities</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Mechanism</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Plans</a>
                </div>
                
                <!-- Column 2 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Company</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Our Story</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Join Us</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Get in Touch</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Media</a>
                </div>

                <!-- Column 3 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Resources</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Support</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Changelog</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Documentation</a>
                </div>
            </div>

        </footer>
    </div>

    <!-- Scripts -->
    <script>
        // --- WebGL Background Animation ---
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        if (!gl) {
            console.error('WebGL not supported');
        } else {
            // Resize handler
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            // Vertex Shader
            const vsSource = \`
                attribute vec4 aVertexPosition;
                void main() {
                    gl_Position = aVertexPosition;
                }
            \`;

            // Fragment Shader (Halftone Flow)
            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;

                mat2 rot(float a) {
                    float s = sin(a), c = cos(a);
                    return mat2(c, -s, s, c);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                    vec2 p = uv * 2.0 - 1.0;
                    p.x *= u_resolution.x / u_resolution.y;

                    vec2 flow_uv = p;
                    float time = u_time * 0.4;
                    
                    for(float i = 1.0; i < 4.0; i++) {
                        flow_uv *= rot(time * 0.1);
                        flow_uv.x += sin(flow_uv.y * 2.0 * i + time) * 0.5;
                        flow_uv.y += cos(flow_uv.x * 1.5 * i - time * 0.8) * 0.5;
                    }

                    float intensity = sin(flow_uv.x * 2.0 + flow_uv.y * 3.0) * 0.5 + 0.5;
                    
                    vec3 col_dark = vec3(0.02, 0.0, 0.0);
                    vec3 col_red = vec3(0.8, 0.1, 0.05);
                    vec3 col_bright = vec3(1.0, 0.6, 0.2);
                    
                    vec3 fluid_color = mix(col_dark, col_red, smoothstep(0.2, 0.6, intensity));
                    fluid_color = mix(fluid_color, col_bright, smoothstep(0.7, 1.0, intensity));

                    float gridSize = 6.0; 
                    vec2 grid_uv = gl_FragCoord.xy / gridSize;
                    vec2 cell_uv = fract(grid_uv) - 0.5;
                    
                    float dist = length(cell_uv);
                    float radius = intensity * 0.45; 
                    float dot_mask = smoothstep(radius, radius - 0.1, dist);
                    
                    vec3 final_color = mix(vec3(0.0), fluid_color, dot_mask);
                    final_color += fluid_color * 0.15;

                    gl_FragColor = vec4(final_color, 1.0);
                }
            \`;

            function compileShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error(gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positions = new Float32Array([
                -1.0,  1.0,
                 1.0,  1.0,
                -1.0, -1.0,
                 1.0, -1.0,
            ]);
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");

            let startTime = Date.now();
            function render() {
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(timeLocation, (Date.now() - startTime) / 1000.0);
                
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            render();
        }

        // --- GSAP ScrollTrigger Masked Word Reveal ---
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 90%",
                }
            });
        });
    <\/script>
</body>
</html>`;

// vendor/threeui/src/shaders/neuform-isolated/NeuformCraftEffects.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var NEUFORM_CRAFT_DEFAULTS = {
  hue: 0,
  saturation: 1,
  brightness: 1
};
var EFFECTS2 = {
  neon: {
    title: "Animated neon typography",
    source: n11,
    background: (mode) => mode === "light" ? "#f4f4f2" : "#090909",
    targets: [{ selector: "#board", role: "ui", width: "1040px" }],
    presentation: "animated-typography"
  },
  luminaWeaversCloth: {
    title: "Woven Cloth kinetic textile",
    source: n14,
    background: "#16090b",
    targets: [{ selector: "body > div.fixed.inset-0.overflow-hidden.z-0", role: "background" }],
    presentation: "woven-cloth-label"
  },
  julianVanceNebula: {
    title: "Julian Vance nebula background",
    source: n12,
    background: "#09090b",
    targets: [{ selector: "#bg-canvas", role: "background" }]
  },
  fluid: {
    title: "Aura UI fluid background",
    source: t3,
    background: "#030306",
    targets: [{ selector: "#bg-canvas", role: "background" }]
  },
  nexusUnifiedFlow: {
    title: "Nexus unified halftone flow",
    source: nexus_unified_flow_default,
    background: "#000000",
    targets: [{ selector: "#glcanvas", role: "background" }]
  },
  emberStorm: {
    title: "Aeonix ember storm",
    source: e4,
    background: "#080503",
    targets: [{ selector: "#gl", role: "background" }]
  },
  engravedCertificate: {
    title: "Kinetic Lathe certificate",
    source: n13,
    background: "#ded6c2",
    targets: [{ selector: "#cert", role: "ui", width: "720px" }]
  }
};
function clamp2(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}
function replaceRequired(source, authored, focused) {
  if (!source.includes(authored)) {
    throw new Error(`Neuform source adapter could not find: ${authored}`);
  }
  return source.replace(authored, focused);
}
function animatedTypographySource(source) {
  return [
    [
      "return { t0: after + 5.6 + frnd() * 7.2, dur: total, segs: segs };",
      "return { t0: after + 1.25 + frnd() * 1.75, dur: total, segs: segs };"
    ],
    ["if (!ev) ev = nextEvent(4.2);", "if (!ev) ev = nextEvent(0.55);"],
    [
      "cap = Math.min((W - W * 0.12) / blockW, (H - H * 0.18) / blockH);",
      "cap = Math.min((W - W * 0.20) / blockW, (H - H * 0.28) / blockH);"
    ],
    ["var y0 = (H - blockH * cap) * 0.48;", "var y0 = (H - blockH * cap) / 2;"]
  ].reduce(
    (adapted, [authored, focused]) => replaceRequired(adapted, authored, focused),
    source
  );
}
function wovenClothLabelSource(source) {
  return [
    ["x.fillText('L\u2009W', W/2, 190);", "x.fillText('W\u2009C', W/2, 190);"],
    ["x.fillText('\xB7 KYOTO \xB7', W/2, 246);", "x.fillText('\xB7 WOVEN CLOTH \xB7', W/2, 246);"],
    ["x.fillText('LUMINA', W/2, 400);", "x.fillText('WOVEN', W/2, 400);"],
    ["x.fillText('WEAVERS', W/2, 520);", "x.fillText('CLOTH', W/2, 520);"],
    [
      "x.fillText('K I N E T I C   T E X T I L E S   \xB7   2 0 2 4', W/2, 626);",
      "x.fillText('T E X T I L E   S I M U L A T I O N', W/2, 626);"
    ]
  ].reduce(
    (adapted, [authored, focused]) => replaceRequired(adapted, authored, focused),
    source
  );
}
function resolveBackground2(definition, mode) {
  return typeof definition.background === "function" ? definition.background(mode) : definition.background;
}
function buildFocusedDocument2(definition, mode) {
  const targetJson = JSON.stringify(definition.targets).replace(/</g, "\\u003c");
  const background = resolveBackground2(definition, mode);
  const monochromeFilter = mode === "light" ? "grayscale(1) invert(1) contrast(1.08)" : "grayscale(1) contrast(1.08)";
  const presentationStyle = definition.presentation === "animated-typography" ? `
@keyframes sf-neon-type-breathe {
  0%, 100% { transform: translate3d(0, 3px, 0) scale(0.988); opacity: 0.88; }
  45% { transform: translate3d(0, -3px, 0) scale(1); opacity: 1; }
  68% { transform: translate3d(0, 0, 0) scale(0.996); opacity: 0.96; }
}
#board { overflow: visible !important; }
#neon {
  transform-origin: 50% 52%;
  animation: sf-neon-type-breathe 5.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  filter: ${monochromeFilter};
  will-change: transform, opacity;
}
@media (prefers-reduced-motion: reduce) {
  #neon { animation: none !important; transform: none !important; opacity: 1 !important; }
}
` : "";
  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${background} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${presentationStyle}
</style>`;
  const focusScript = `<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${targetJson};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;
  const presentedSource = definition.presentation === "animated-typography" ? animatedTypographySource(definition.source) : definition.presentation === "woven-cloth-label" ? wovenClothLabelSource(definition.source) : definition.source;
  return presentedSource.replace(/<\/head>/i, `${focusStyle}</head>`).replace(/<\/body>/i, `${focusScript}</body>`);
}
function NeuformCraftEffect({
  definition,
  mode = "dark",
  hue = NEUFORM_CRAFT_DEFAULTS.hue,
  saturation = NEUFORM_CRAFT_DEFAULTS.saturation,
  brightness = NEUFORM_CRAFT_DEFAULTS.brightness,
  className,
  style
}) {
  const safeMode = mode === "light" ? "light" : "dark";
  const background = resolveBackground2(definition, safeMode);
  const source = useMemo2(() => buildFocusedDocument2(definition, safeMode), [definition, safeMode]);
  const safeHue = clamp2(hue, -180, 180);
  const safeSaturation = clamp2(saturation, 0, 2);
  const safeBrightness = clamp2(brightness, 0.35, 1.65);
  const filter = safeHue === 0 && safeSaturation === 1 && safeBrightness === 1 ? void 0 : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;
  return /* @__PURE__ */ jsx4(
    "iframe",
    {
      className,
      "data-mode": safeMode,
      title: definition.title,
      srcDoc: source,
      sandbox: "allow-scripts",
      loading: "eager",
      style: {
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        filter,
        ...style
      }
    }
  );
}
function createEffectComponent2(definition) {
  return function EffectComponent(props) {
    return /* @__PURE__ */ jsx4(NeuformCraftEffect, { ...props, definition });
  };
}
var NeonTypography = createEffectComponent2(EFFECTS2.neon);
var WovenCloth = createEffectComponent2(EFFECTS2.luminaWeaversCloth);
var NebulaBackground = createEffectComponent2(EFFECTS2.julianVanceNebula);
var FluidFieldBackground = createEffectComponent2(EFFECTS2.fluid);
var HalftoneFlow = createEffectComponent2(EFFECTS2.nexusUnifiedFlow);
var EmberStorm = createEffectComponent2(EFFECTS2.emberStorm);
var EngravedCertificate = createEffectComponent2(EFFECTS2.engravedCertificate);

// <stdin>
init_NeuformBatchEffects();
export {
  FlowField,
  HalftoneFlow,
  PredictiveArcCanvas
};
