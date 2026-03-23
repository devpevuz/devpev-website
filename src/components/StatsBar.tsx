export default function StatsBar() {
  return (
    <div className="flex gap-6 mb-2">
      <button type="button" className="font-mono text-[12px] text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity">
        show stats
      </button>
      <button type="button" className="font-mono text-[12px] text-white hover:opacity-70 transition-opacity">
        donate$
      </button>
    </div>
  );
}
