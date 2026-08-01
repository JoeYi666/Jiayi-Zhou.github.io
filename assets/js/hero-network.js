/* Hero background: a living value-flow network.
   Nodes drift slowly; nearby nodes are linked; gold pulses travel along the
   links like value flowing through a payment/credit network. A few hub nodes
   glow brighter (preferential attachment / Matthew effect).
   Respects prefers-reduced-motion. */
(function () {
  var canvas = document.getElementById('hero-network');
  if (!canvas) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');
  var W, H, DPR;
  var nodes = [], pulses = [];
  var LINK_DIST = 150;
  var running = true;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function init() {
    resize();
    nodes = [];
    pulses = [];
    var count = Math.max(28, Math.min(70, Math.floor((W * H) / 22000)));
    for (var i = 0; i < count; i++) {
      var hub = Math.random() < 0.12;
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: hub ? 2.6 + Math.random() * 1.6 : 1.1 + Math.random() * 1.2,
        hub: hub
      });
    }
  }

  function step() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    var i, j, n, m, dx, dy, d;
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
    }

    // links
    for (i = 0; i < nodes.length; i++) {
      for (j = i + 1; j < nodes.length; j++) {
        n = nodes[i]; m = nodes[j];
        dx = n.x - m.x; dy = n.y - m.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          var a = (1 - d / LINK_DIST) * 0.35;
          ctx.strokeStyle = 'rgba(148, 178, 210,' + a.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();

          // occasionally spawn a value pulse along this edge
          if (Math.random() < 0.0012) {
            pulses.push({ a: n, b: m, t: 0, speed: 0.008 + Math.random() * 0.012 });
          }
        }
      }
    }

    // nodes
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      if (n.hub) {
        ctx.fillStyle = 'rgba(201, 162, 39, 0.9)';
        ctx.shadowColor = 'rgba(201, 162, 39, 0.8)';
        ctx.shadowBlur = 8;
      } else {
        ctx.fillStyle = 'rgba(180, 205, 230, 0.75)';
        ctx.shadowBlur = 0;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // pulses (value flows)
    for (i = pulses.length - 1; i >= 0; i--) {
      var p = pulses[i];
      p.t += p.speed;
      if (p.t >= 1) { pulses.splice(i, 1); continue; }
      var x = p.a.x + (p.b.x - p.a.x) * p.t;
      var y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(232, 190, 80,' + (0.9 * (1 - Math.abs(p.t - 0.5))).toFixed(3) + ')';
      ctx.fill();
    }
    if (pulses.length > 40) pulses.splice(0, pulses.length - 40);

    requestAnimationFrame(step);
  }

  // pause when hero is off-screen
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      if (visible && !running) { running = true; requestAnimationFrame(step); }
      else if (!visible) { running = false; }
    }).observe(canvas);
  }

  var timer;
  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(init, 150);
  });

  init();
  requestAnimationFrame(step);
})();
