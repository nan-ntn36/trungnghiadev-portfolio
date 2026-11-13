// Original SVG scene, constructed from individually shaded planes rather than a borrowed image.
export default function Geometry({ compact = false }: { compact?: boolean }) {
  const suffix = compact ? "small" : "hero";
  return <div className={compact ? "geometry geometry-compact" : "geometry"} aria-hidden="true"><svg viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="xMidYMid slice"><defs>
    <linearGradient id={`top-${suffix}`} x1="580" y1="280" x2="900" y2="450" gradientUnits="userSpaceOnUse"><stop stopColor="#3a3e52"/><stop offset=".6" stopColor="#79604e"/><stop offset="1" stopColor="#e29649"/></linearGradient>
    <linearGradient id={`left-${suffix}`} x1="555" y1="350" x2="735" y2="630" gradientUnits="userSpaceOnUse"><stop stopColor="#544343"/><stop offset=".5" stopColor="#a06749"/><stop offset="1" stopColor="#3e303a"/></linearGradient>
    <linearGradient id={`right-${suffix}`} x1="840" y1="400" x2="740" y2="650" gradientUnits="userSpaceOnUse"><stop stopColor="#242333"/><stop offset="1" stopColor="#100f1b"/></linearGradient>
    <radialGradient id={`light-${suffix}`} cx=".32" cy=".25" r=".8"><stop stopColor="#fff4b1"/><stop offset=".4" stopColor="#ffcf85"/><stop offset="1" stopColor="#ee8f7b"/></radialGradient>
    <radialGradient id={`aura-${suffix}`}><stop stopColor="#ffd78c" stopOpacity=".3"/><stop offset="1" stopColor="#ffd78c" stopOpacity="0"/></radialGradient>
    <linearGradient id={`back-${suffix}`} x1="470" y1="150" x2="660" y2="345" gradientUnits="userSpaceOnUse"><stop stopColor="#233644"/><stop offset="1" stopColor="#4e3030"/></linearGradient>
    <linearGradient id={`lower-${suffix}`}><stop stopColor="#3a2c36"/><stop offset="1" stopColor="#11151d"/></linearGradient>
  </defs>
  <ellipse cx="745" cy="824" rx="185" ry="22" fill="#08090b" opacity=".55"/>
  <g className="polyhedron polyhedron-left"><path d="m452 182 155-38 79 136-154 56Z" fill={`url(#back-${suffix})`}/><path d="m607 144 97 37-18 99-79 56Z" fill="#4c332e"/><path d="m452 182 80 154 75 39-161-48Z" fill="#1c2b36"/><path d="m532 336 154-56 18 47-97 48Z" fill="#70452d"/></g>
  <g className="polyhedron polyhedron-right"><path d="m585 358 181-105 170 105-184 113Z" fill={`url(#top-${suffix})`}/><path d="m585 358 167 113-9 192-160-113Z" fill={`url(#left-${suffix})`}/><path d="m752 471 184-113-11 195-182 110Z" fill={`url(#right-${suffix})`}/><path d="m585 358 167 113 184-113" stroke="#dcb6a0" strokeOpacity=".12"/></g>
  <g className="polyhedron polyhedron-top"><circle cx="837" cy="238" r="100" fill={`url(#aura-${suffix})`}/><circle cx="837" cy="238" r="25" fill={`url(#light-${suffix})`}/></g>
  <g className="polyhedron polyhedron-bottom"><path d="m764 658 118-64 108 169-120 77Z" fill="#11131b"/><path d="m764 658-65 126 171 56Z" fill={`url(#lower-${suffix})`}/><path d="m699 784 76 70 95-14Z" fill="#24202a"/><path d="m882 594 108 169-120 77" stroke="#564651" strokeOpacity=".22"/></g>
  </svg></div>;
}
