/* ================================================================
   VINOFYX — Fortune 500 Premium Interactive Experience
   ================================================================ */
(function () {
  'use strict';

  /* ════════════════════════════════════════════════════════════
     HERO PARTICLE CANVAS
  ════════════════════════════════════════════════════════════ */
  function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], mouse = { x: -999, y: -999 };

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function mkParticle() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.4,
      };
    }

    function spawn() {
      particles = [];
      const n = Math.min(Math.floor(W * H / 12000), 90);
      for (let i = 0; i < n; i++) particles.push(mkParticle());
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Connections between particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(212,175,55,${0.10 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        // Mouse attraction connection
        const mx = a.x - mouse.x, my = a.y - mouse.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < 160) {
          ctx.strokeStyle = `rgba(212,175,55,${0.20 * (1 - md / 160)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }

      // Particles
      particles.forEach(p => {
        ctx.fillStyle = 'rgba(212,175,55,0.55)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
    }

    function update() {
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
    }

    let raf;
    function loop() { update(); draw(); raf = requestAnimationFrame(loop); }

    canvas.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

    window.addEventListener('resize', () => { resize(); spawn(); });
    resize(); spawn(); loop();
  }

  /* ════════════════════════════════════════════════════════════
     ECOSYSTEM CANVAS DIAGRAM
  ════════════════════════════════════════════════════════════ */
  function initEcosystem() {
    const canvas = document.getElementById('ecoCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const SERVICES = [
      'Digital\nMarketing', 'Creative\nMedia', 'Software\nDev',
      'Data\nEngineering', 'AI &\nAutomation', 'Business\nConsulting',
      'Training &\nEducation', 'Publishing\n& Media', 'Printing &\nBranding',
      'Institutional\nSolutions', 'E-Commerce\nSolutions', 'Research &\nInnovation',
      'Trading &\nProcurement'
    ];

    let W, H, nodes = [], hub = {}, hoveredIdx = -1, pulse = 0;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      buildNodes();
    }

    function buildNodes() {
      const cx = W / 2, cy = H / 2;
      hub = { x: cx, y: cy };

      const r1 = Math.min(W, H) * 0.22;
      const r2 = Math.min(W, H) * 0.37;

      nodes = [];
      // Inner ring: 6 nodes
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        nodes.push({ x: cx + r1 * Math.cos(a), y: cy + r1 * Math.sin(a), label: SERVICES[i], idx: i });
      }
      // Outer ring: 7 nodes
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2 - Math.PI / 1.5;
        nodes.push({ x: cx + r2 * Math.cos(a), y: cy + r2 * Math.sin(a), label: SERVICES[6 + i], idx: 6 + i });
      }
    }

    function drawTextMultiline(text, x, y, lineH, style) {
      ctx.fillStyle = style;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const lines = text.split('\n');
      const totalH = (lines.length - 1) * lineH;
      lines.forEach((line, i) => {
        ctx.fillText(line, x, y - totalH / 2 + i * lineH);
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      pulse = (Math.sin(Date.now() / 900) + 1) / 2;

      const hubR = Math.min(W, H) * 0.085;
      const nodeR = Math.min(W, H) * 0.055;

      // Lines hub → node
      nodes.forEach((n, i) => {
        const hov = i === hoveredIdx;
        ctx.save();
        ctx.setLineDash([5, 10]);
        ctx.strokeStyle = hov ? `rgba(212,175,55,0.55)` : `rgba(212,175,55,${0.08 + pulse * 0.04})`;
        ctx.lineWidth = hov ? 1.5 : 0.8;
        ctx.beginPath(); ctx.moveTo(hub.x, hub.y); ctx.lineTo(n.x, n.y); ctx.stroke();
        ctx.restore();
      });

      // Nodes
      nodes.forEach((n, i) => {
        const hov = i === hoveredIdx;
        const r = nodeR;

        if (hov) {
          const g = ctx.createRadialGradient(n.x, n.y, r, n.x, n.y, r + 28);
          g.addColorStop(0, 'rgba(212,175,55,0.14)');
          g.addColorStop(1, 'transparent');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(n.x, n.y, r + 28, 0, Math.PI * 2); ctx.fill();
        }

        ctx.fillStyle = hov ? 'rgba(212,175,55,0.10)' : 'rgba(18,18,18,0.95)';
        ctx.strokeStyle = hov ? 'rgba(212,175,55,0.60)' : `rgba(212,175,55,${0.16 + pulse * 0.06})`;
        ctx.lineWidth = hov ? 1.5 : 1;
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

        ctx.font = `${Math.max(9, r * 0.38)}px Inter, sans-serif`;
        drawTextMultiline(n.label, n.x, n.y, r * 0.38 + 2, hov ? '#D4AF37' : 'rgba(244,244,244,0.75)');
      });

      // Hub glow
      const hg = ctx.createRadialGradient(hub.x, hub.y, 0, hub.x, hub.y, hubR + 50);
      hg.addColorStop(0, `rgba(212,175,55,${0.12 + pulse * 0.08})`);
      hg.addColorStop(1, 'transparent');
      ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(hub.x, hub.y, hubR + 50, 0, Math.PI * 2); ctx.fill();

      // Hub pulse rings
      [hubR + 12, hubR + 24].forEach((rr, ri) => {
        ctx.strokeStyle = `rgba(212,175,55,${(pulse * 0.4 - ri * 0.12)})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.arc(hub.x, hub.y, rr, 0, Math.PI * 2); ctx.stroke();
      });

      // Hub fill
      const hf = ctx.createRadialGradient(hub.x - hubR * 0.3, hub.y - hubR * 0.3, 0, hub.x, hub.y, hubR);
      hf.addColorStop(0, 'rgba(212,175,55,0.22)'); hf.addColorStop(1, 'rgba(8,8,8,0.98)');
      ctx.fillStyle = hf; ctx.strokeStyle = `rgba(212,175,55,0.55)`; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(hub.x, hub.y, hubR, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

      // Hub text
      ctx.font = `bold ${Math.max(11, hubR * 0.24)}px Inter, sans-serif`;
      ctx.fillStyle = '#D4AF37'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('VINOFYX', hub.x, hub.y - hubR * 0.14);
      ctx.font = `${Math.max(7, hubR * 0.15)}px Inter, sans-serif`;
      ctx.fillStyle = 'rgba(212,175,55,0.45)';
      ctx.fillText('ECOSYSTEM', hub.x, hub.y + hubR * 0.22);

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      const nodeR = Math.min(W, H) * 0.055;
      hoveredIdx = -1;
      nodes.forEach((n, i) => {
        const d = Math.hypot(mx - n.x, my - n.y);
        if (d < nodeR + 8) hoveredIdx = i;
      });
      canvas.style.cursor = hoveredIdx >= 0 ? 'pointer' : 'default';
    });
    canvas.addEventListener('mouseleave', () => { hoveredIdx = -1; canvas.style.cursor = 'default'; });

    window.addEventListener('resize', () => resize());
    resize(); draw();
  }

  /* ════════════════════════════════════════════════════════════
     GLOBE CANVAS (World Map Dots)
  ════════════════════════════════════════════════════════════ */
  function initGlobe() {
    const canvas = document.getElementById('globeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Locations: [longitude, latitude] → Mercator → [x%, y%]
    // India: 78°E, 21°N  |  UAE: 54°E, 24°N  |  London: 0°, 51°N  |  New York: -74°W, 41°N
    const locations = [
      { name: 'India',        lon: 78,   lat: 21,  primary: true },
      { name: 'Middle East',  lon: 54,   lat: 24,  primary: false },
      { name: 'Europe',       lon: 10,   lat: 51,  primary: false },
      { name: 'North America',lon: -96,  lat: 40,  primary: false },
    ];

    function mercator(lon, lat) {
      const x = (lon + 180) / 360;
      const latR = lat * Math.PI / 180;
      const y = (1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2;
      return { x, y };
    }

    let W, H, t = 0;
    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    // Simple dot-grid world map
    const WORLD_DOTS = [];
    function buildDots() {
      WORLD_DOTS.length = 0;
      for (let lon = -180; lon <= 180; lon += 4) {
        for (let lat = -60; lat <= 75; lat += 4) {
          if (isLand(lon, lat)) WORLD_DOTS.push(mercator(lon, lat));
        }
      }
    }

    // Simplified land test (very rough, good enough for decoration)
    function isLand(lon, lat) {
      // Africa
      if (lon >= -20 && lon <= 52 && lat >= -36 && lat <= 38) return true;
      // Europe
      if (lon >= -10 && lon <= 40 && lat >= 36 && lat <= 72) return true;
      // Asia
      if (lon >= 26 && lon <= 145 && lat >= 0 && lat <= 74) return true;
      // North America
      if (lon >= -170 && lon <= -52 && lat >= 15 && lat <= 73) return true;
      // South America
      if (lon >= -82 && lon <= -34 && lat >= -56 && lat <= 12) return true;
      // Australia
      if (lon >= 113 && lon <= 154 && lat >= -44 && lat <= -10) return true;
      return false;
    }

    buildDots();

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t++;

      // Draw world dots
      WORLD_DOTS.forEach(d => {
        const px = d.x * W, py = d.y * H;
        ctx.fillStyle = 'rgba(212,175,55,0.07)';
        ctx.beginPath(); ctx.arc(px, py, 1.2, 0, Math.PI * 2); ctx.fill();
      });

      // Draw location markers with pulse
      locations.forEach((loc, idx) => {
        const pos = mercator(loc.lon, loc.lat);
        const px = pos.x * W, py = pos.y * H;
        const pulse = (Math.sin(t / 40 + idx * 1.2) + 1) / 2;

        // Pulse ring
        ctx.strokeStyle = `rgba(212,175,55,${0.2 + pulse * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(px, py, 8 + pulse * 10, 0, Math.PI * 2); ctx.stroke();

        // Dot
        ctx.fillStyle = loc.primary ? '#D4AF37' : 'rgba(212,175,55,0.7)';
        ctx.beginPath(); ctx.arc(px, py, loc.primary ? 5 : 4, 0, Math.PI * 2); ctx.fill();

        // Label
        ctx.font = `bold 10px Inter, sans-serif`;
        ctx.fillStyle = 'rgba(212,175,55,0.8)';
        ctx.textAlign = 'center';
        ctx.fillText(loc.name, px, py - 14);
      });

      // Connection lines between locations
      const pts = locations.map(l => { const p = mercator(l.lon, l.lat); return { x: p.x * W, y: p.y * H }; });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          ctx.save();
          ctx.setLineDash([3, 8]);
          ctx.strokeStyle = 'rgba(212,175,55,0.12)';
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          ctx.restore();
        }
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => resize());
    resize(); draw();
  }

  /* ════════════════════════════════════════════════════════════
     COUNTER ANIMATION
  ════════════════════════════════════════════════════════════ */
  function animateCounter(el) {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const dur = 2000;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(e * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ════════════════════════════════════════════════════════════
     INTERSECTION OBSERVER SETUP
  ════════════════════════════════════════════════════════════ */
  function makeObs(cb, opts) {
    return new IntersectionObserver(cb, { threshold: 0.15, rootMargin: '0px 0px -48px 0px', ...opts });
  }

  // Generic reveal
  const revObs = makeObs(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = +(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('in-view'), delay);
      revObs.unobserve(e.target);
    });
  });
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

  // Counter trigger — hero stats
  const heroStatObs = makeObs(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      heroStatObs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroStatObs.observe(heroStats);

  // Counter trigger — metrics strip
  const metricObs = makeObs(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      metricObs.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  const metricsEl = document.querySelector('.metrics-inner');
  if (metricsEl) metricObs.observe(metricsEl);

  // Counter trigger — R&D cards
  const rndObs = makeObs(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      // animate bar
      e.target.querySelectorAll('.rsc-bar').forEach(bar => {
        const w = bar.dataset.width;
        bar.style.width = '0';
        requestAnimationFrame(() => setTimeout(() => { bar.style.width = w; }, 80));
      });
      rndObs.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  const rndRight = document.querySelector('.rnd-right');
  if (rndRight) rndObs.observe(rndRight);

  /* ════════════════════════════════════════════════════════════
     TECH STACK TABS
  ════════════════════════════════════════════════════════════ */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + btn.dataset.tab);
      if (panel) {
        panel.classList.add('active');
        // Stagger pill animation
        panel.querySelectorAll('.tech-pill').forEach((pill, i) => {
          pill.style.opacity = '0'; pill.style.transform = 'translateY(8px)';
          pill.style.transition = `opacity 0.3s ease ${i * 25}ms, transform 0.3s ease ${i * 25}ms`;
          requestAnimationFrame(() => {
            pill.style.opacity = '1'; pill.style.transform = 'translateY(0)';
          });
        });
      }
    });
  });

  /* ════════════════════════════════════════════════════════════
     NAVIGATION
  ════════════════════════════════════════════════════════════ */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 36);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    let open = false;
    hamburger.addEventListener('click', () => {
      open = !open;
      if (open) {
        Object.assign(navMenu.style, {
          display: 'flex', flexDirection: 'column',
          position: 'fixed', top: '74px', left: '0', right: '0',
          background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)', padding: '24px 44px 32px',
          borderBottom: '1px solid rgba(212,175,55,0.09)', gap: '6px', zIndex: '999',
        });
      } else { navMenu.style.display = 'none'; }
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { open = false; navMenu.style.display = 'none'; });
    });
  }

  /* ════════════════════════════════════════════════════════════
     SMOOTH SCROLL
  ════════════════════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ════════════════════════════════════════════════════════════
     SCROLL CUE FADE
  ════════════════════════════════════════════════════════════ */
  const scrollCue = document.getElementById('scrollCue');
  if (scrollCue) {
    window.addEventListener('scroll', () => {
      scrollCue.style.opacity = window.scrollY > 80 ? '0' : '1';
    }, { passive: true });
  }

  /* ════════════════════════════════════════════════════════════
     MOUSE GLOW — SOL / AI / WHY CARDS
  ════════════════════════════════════════════════════════════ */
  document.querySelectorAll('.sol-card, .ai-card, .why-card, .case-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width)  * 100;
      const y = ((e.clientY - r.top)  / r.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(212,175,55,0.05) 0%, var(--dark-card-h) 60%)`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = ''; });
  });

  /* ════════════════════════════════════════════════════════════
     INIT CANVASES
  ════════════════════════════════════════════════════════════ */
  initHeroCanvas();
  initEcosystem();
  initGlobe();

})();
