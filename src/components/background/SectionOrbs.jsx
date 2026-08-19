export default function SectionOrbs({ config = [] }) {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {config.map((o, i) => (
        <div
          key={i}
          data-orb
          className="absolute"
          style={{
            top: o.top,
            left: o.left,
            width: `${o.size}px`,
            height: `${o.size}px`,
          }}
          >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "9999px",
              background: `radial-gradient(circle at 35% 35%, #EC4899 0%, transparent 68%)`,
              filter: "blur(30px)",
              opacity: `calc(${o.opacity} * var(--orb-i, 0.6))`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
