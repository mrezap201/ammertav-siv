import { useEffect, useRef } from 'react';

/*
 * AmbientBackground — mount ONCE near the root (e.g. inside MainLayout, as a
 * sibling of the page content). It provides three global things:
 *
 *   1. A fixed dot-grid layer behind everything (the static base the glass
 *      blurs when no orb is directly behind it).
 *   2. A HUD "reticle" custom cursor (corner brackets + crosshair + x/y coords,
 *      grows + shows a "VIEW →" label over [data-cursor="view"] elements).
 *   3. A single requestAnimationFrame loop that drives BOTH the cursor and the
 *      per-section orb parallax (it reads every [data-orb] rendered by
 *      <SectionOrbs/> and offsets it by mouse position + scroll progress).
 *
 * Respects `prefers-reduced-motion` and only enables the custom cursor on
 * fine pointers (desktop mouse). Touch devices keep the native cursor and
 * skip parallax.
 *
 * Requires the keyframes / CSS variables / cursor-hide rules from
 * index.css.snippet.css to be present in your global stylesheet.
 */
export default function AmbientBackground() {
  const frame = useRef(null);
  const dot = useRef(null);
  const coords = useRef(null);
  const tag = useRef(null);

  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine =
      !!(window.matchMedia && window.matchMedia('(pointer:fine)').matches);
    const cursorOn = fine && !reduced;
    if (cursorOn) document.body.setAttribute('data-cursor-on', '');

    const lerp = (a, b, t) => a + (b - a) * t;

    let px = window.innerWidth / 2, py = window.innerHeight / 2;
    let fx = px, fy = py, fw = 26, fh = 26, vis = 0, show = 1;
    let hover = null, kind = null;

    const onMove = (e) => {
      px = e.clientX; py = e.clientY;
    };
    const onOver = (e) => {
      const t =
        e.target.closest &&
        e.target.closest('[data-cursor="view"], a, button');
      hover = t || null;
      kind = t ? (t.matches('[data-cursor="view"]') ? 'card' : 'link') : null;
    };
    const onEnter = () => { show = 1; };
    const onLeave = () => { show = 0; };

    // Nothing to animate without the custom cursor (touch / reduced-motion):
    // skip all listeners + the rAF loop so the component stays fully idle.
    if (!cursorOn) return;

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    let raf = 0;
    const tick = () => {
      // ---- reticle cursor ----
      if (cursorOn && frame.current) {
        vis = lerp(vis, show, 0.12);
        const v = vis.toFixed(2);
        let tX = px, tY = py, tW = 26, tH = 26;
        if (hover && kind === 'link') {
          const r = hover.getBoundingClientRect();
          tX = r.left + r.width / 2; tY = r.top + r.height / 2;
          tW = r.width + 18; tH = r.height + 14;
        } else if (hover && kind === 'card') {
          tW = 54; tH = 54;
        }
        fx = lerp(fx, tX, 0.22); fy = lerp(fy, tY, 0.22);
        fw = lerp(fw, tW, 0.2);  fh = lerp(fh, tH, 0.2);
        const F = frame.current;
        F.style.width = fw.toFixed(1) + 'px';
        F.style.height = fh.toFixed(1) + 'px';
        F.style.transform =
          'translate(' + (fx - fw / 2).toFixed(1) + 'px,' + (fy - fh / 2).toFixed(1) + 'px)';
        F.style.opacity = v;
        if (dot.current) dot.current.style.opacity = hover ? '0' : '0.9';
        if (coords.current) {
          coords.current.textContent = 'x:' + Math.round(px) + '  y:' + Math.round(py);
          coords.current.style.transform =
            'translate(' + (px + 18).toFixed(1) + 'px,' + (py + 16).toFixed(1) + 'px)';
          coords.current.style.opacity = hover ? '0' : v;
        }
        if (tag.current) {
          tag.current.style.opacity = kind === 'card' ? v : '0';
          tag.current.style.transform =
            'translate(' + (px + 20).toFixed(1) + 'px,' + (py - 6).toFixed(1) + 'px)';
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.body.removeAttribute('data-cursor-on');
    };
  }, []);

  return (
    <>
      {/* Dot-grid + large grid lines now live on `body` (src/index.css) so they
          scroll with the page instead of being pinned to the viewport. */}

      {/* HUD reticle cursor */}
      <div
        className="fixed inset-0 z-[9999] pointer-events-none"
        aria-hidden="true"
      >
        <div
          ref={frame}
          className="absolute top-0 left-0 w-[26px] h-[26px] will-change-transform opacity-0"
        >
          <span className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-accent-pink" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-accent-pink" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-accent-pink" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-accent-pink" />
          <span
            ref={dot}
            className="absolute top-1/2 left-1/2 w-[3px] h-[3px] -mt-[1.5px] -ml-[1.5px] rounded-full bg-accent-pink"
          />
        </div>
        <div
          ref={coords}
          className="absolute top-0 left-0 font-mono text-[9.5px] tracking-[0.05em] text-accent-pink whitespace-nowrap opacity-0"
        >
          x:0 y:0
        </div>
        <div
          ref={tag}
          className="absolute top-0 left-0 font-mono text-[9px] font-semibold tracking-[0.14em] text-[#0a0014] bg-accent-pink px-2 py-[3px] rounded-[3px] whitespace-nowrap opacity-0"
        >
          VIEW →
        </div>
      </div>
    </>
  );
}
