import { useRef, useEffect } from "react";

/**
 * Click-and-drag horizontal scrolling for MOUSE users, with inertia.
 *
 * Attach the returned ref to an overflow-x scroll container. On desktop the
 * user grabs the row and drags it sideways; on release it keeps gliding and
 * eases to a stop — smooth, no snapping / jumping. Touch and pen are left
 * alone so native swipe + momentum keep working. It is a no-op while the
 * element is not horizontally overflowing (e.g. rows that become a grid at lg+).
 *
 * It does NOT hijack the mouse wheel — vertical wheel keeps scrolling the page.
 */
export default function useDragScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canScroll = () => el.scrollWidth > el.clientWidth + 1;
    const setIdleCursor = () => {
      el.style.cursor = canScroll() ? "grab" : "";
    };
    setIdleCursor();

    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0; // pointer px per ms, last sample
    let rafId = null;

    const stopGlide = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const atEdge = () =>
      el.scrollLeft <= 0 ||
      el.scrollLeft >= el.scrollWidth - el.clientWidth - 0.5;

    // Inertia: keep scrolling after release, decaying smoothly to a stop.
    const glide = () => {
      let v = -velocity * 16; // scroll moves opposite to the pointer, ~16ms/frame
      const friction = 0.94;
      const step = () => {
        v *= friction;
        if (Math.abs(v) < 0.4 || atEdge()) {
          rafId = null;
          return;
        }
        el.scrollLeft += v;
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };

    const onPointerDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0 || !canScroll()) return;
      stopGlide();
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      lastX = e.clientX;
      lastT = performance.now();
      velocity = 0;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onPointerMove = (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startScroll - dx;

      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) {
        velocity = (e.clientX - lastX) / dt;
        lastX = e.clientX;
        lastT = now;
      }
    };

    const onPointerUp = (e) => {
      if (!down) return;
      down = false;
      el.style.userSelect = "";
      setIdleCursor();
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
      // Only glide if the pointer was still moving at the moment of release
      // (a pause before releasing means the user wanted to stop there).
      if (moved && performance.now() - lastT < 60 && Math.abs(velocity) > 0.02) {
        glide();
      }
    };

    // Swallow the click that immediately follows a real drag so it doesn't
    // activate buttons/links sitting inside the row.
    const onClick = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    const onDragStart = (e) => e.preventDefault(); // block native image ghost-drag

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("dragstart", onDragStart);
    window.addEventListener("resize", setIdleCursor);

    return () => {
      stopGlide();
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("resize", setIdleCursor);
    };
  }, []);

  return ref;
}
