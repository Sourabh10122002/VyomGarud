export default function Marquee() {
  // Example client companies — replace with your actual client list
  const companies = [
    "HAL",
    "DRDO",
    "BEL",
    "ISRO",
    "Bharat Dynamics",
    "Mahindra Defence",
    "Tata Advanced Systems",
    "L&T Defence",
    "Adani Defence",
    "ideaForge",
    "Asteria Aerospace",
    "NewSpace Research",
    "Paras Defence",
    "Centum Electronics",
  ];
  return (
    <div className="marquee-container border-b border-white/10 bg-black/30">
      <div className="marquee-track">
        {companies.map((text, idx) => (
          <span key={idx} className="marquee-item font-heading text-sm text-white/50">
            {text}
            <span className="mx-6 inline-block h-1 w-6 -mb-0.5 rounded-full bg-[var(--accent)] align-middle" />
          </span>
        ))}
        {companies.map((text, idx) => (
          <span key={`d-${idx}`} className="marquee-item font-heading text-sm text-white/50">
            {text}
            <span className="mx-6 inline-block h-1 w-6 -mb-0.5 rounded-full bg-[var(--accent)] align-middle" />
          </span>
        ))}
      </div>
    </div>
  );
}