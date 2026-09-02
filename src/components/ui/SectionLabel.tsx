export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[13px] tracking-[0.1em] text-accent">
      {children}
    </div>
  );
}
