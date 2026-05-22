  // Cursor
  const cur = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx+'px'; cur.style.top = my+'px';
  });
  (function loop(){
    rx += (mx-rx)*.1; ry += (my-ry)*.1;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a,button,.proj-card,.passion-item,.exp-card,.hero-stat,.stag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(2.2)';
      ring.style.width = ring.style.height = '52px';
      ring.style.opacity = '.18';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = ring.style.height = '32px';
      ring.style.opacity = '.35';
    });
  });

  // Nav border on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if(e.isIntersecting) {
        e.target.style.transitionDelay = (i * 0.08) + 's';
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
</script>
