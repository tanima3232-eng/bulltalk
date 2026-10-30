type IconName = "market" | "book" | "chart" | "briefcase" | "bank" | "coins" | "network" | "building";

const paths: Record<IconName, React.ReactNode> = {
  market: <><path d="M3 3v18h18M6 15l4-5 4 3 6-8" /><path d="M16 5h4v4" /></>,
  book: <><path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Z" /><path d="M12 5v15" /></>,
  chart: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 16v-4m5 4V8m5 8v-6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0m-9 1v4" /></>,
  bank: <><path d="m3 8 9-5 9 5H3Zm0 13h18M5 10v8m5-8v8m4-8v8m5-8v8" /></>,
  coins: <><ellipse cx="9" cy="6" rx="6" ry="3" /><path d="M3 6v8c0 4 12 4 12 0V6M3 10c0 4 12 4 12 0M15 10c8-1 8 6 0 6m0-2v6c7 1 7-3 6-7" /></>,
  network: <><circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="4" cy="20" r="2" /><circle cx="20" cy="20" r="2" /><path d="m6 7 4 3m4 0 4-3M6 18l4-4m4 0 4 4" /></>,
  building: <><path d="M3 21h18M5 21V4h9v17m0-11h5v11M8 8h3m-3 4h3m-3 4h3" /></>,
};

export default function BrandIcon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
