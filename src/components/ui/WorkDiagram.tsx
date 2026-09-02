const NODE = "fill-surface stroke-border-strong";
const NODE_ACCENT = "fill-surface stroke-accent";
const EDGE = "stroke-border-strong";
const DOT = "fill-accent";

export type WorkDiagramVariant = "modernization" | "architecture" | "cloud" | "pipeline";

function ModernizationDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="h-full max-h-40 w-full max-w-56" aria-hidden="true">
      <rect x="16" y="56" width="60" height="48" rx="4" className={NODE} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M80 80h28" className={EDGE} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <rect x="112" y="24" width="52" height="34" rx="4" className={NODE_ACCENT} strokeWidth="1.5" />
      <rect x="112" y="64" width="52" height="34" rx="4" className={NODE_ACCENT} strokeWidth="1.5" />
      <rect x="112" y="104" width="52" height="34" rx="4" className={NODE_ACCENT} strokeWidth="1.5" />
      <path d="M108 41h4M108 81h4M108 121h4" className={EDGE} strokeWidth="1.5" />
      <path d="M180 41h32M180 81h44M180 121h32" className={EDGE} strokeWidth="1.5" />
      <circle cx="216" cy="41" r="3" className={DOT} />
      <circle cx="228" cy="81" r="3" className={DOT} />
      <circle cx="216" cy="121" r="3" className={DOT} />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0l6 4-6 4" className={EDGE} strokeWidth="1.5" fill="none" />
        </marker>
      </defs>
    </svg>
  );
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="h-full max-h-40 w-full max-w-56" aria-hidden="true">
      <rect x="94" y="62" width="52" height="36" rx="4" className={NODE_ACCENT} strokeWidth="1.5" />
      <rect x="16" y="16" width="60" height="34" rx="4" className={NODE} strokeWidth="1.5" />
      <rect x="164" y="16" width="60" height="34" rx="4" className={NODE} strokeWidth="1.5" />
      <rect x="16" y="110" width="60" height="34" rx="4" className={NODE} strokeWidth="1.5" />
      <rect x="164" y="110" width="60" height="34" rx="4" className={NODE} strokeWidth="1.5" />
      <path d="M76 40l30 27M164 40l-30 27M76 120l30-27M164 120l-30-27" className={EDGE} strokeWidth="1.5" fill="none" />
      <circle cx="120" cy="80" r="3" className={DOT} />
    </svg>
  );
}

function CloudDiagram() {
  const steps = [24, 88, 152, 216];
  return (
    <svg viewBox="0 0 240 160" className="h-full max-h-40 w-full max-w-56" aria-hidden="true">
      {steps.map((x, i) => (
        <g key={x}>
          <rect x={x - 20} y="70" width="40" height="40" rx="4" className={i === 2 ? NODE_ACCENT : NODE} strokeWidth="1.5" />
          {i < steps.length - 1 && (
            <path d={`M${x + 20} 90h24`} className={EDGE} strokeWidth="1.5" markerEnd="url(#arrow2)" />
          )}
        </g>
      ))}
      <path d="M24 70v-30h192v30" className={EDGE} strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0l6 4-6 4" className={EDGE} strokeWidth="1.5" fill="none" />
        </marker>
      </defs>
    </svg>
  );
}

function PipelineDiagram() {
  const positions = [
    { x: 60, y: 30 },
    { x: 180, y: 30 },
    { x: 180, y: 130 },
    { x: 60, y: 130 },
  ];
  return (
    <svg viewBox="0 0 240 160" className="h-full max-h-40 w-full max-w-56" aria-hidden="true">
      <path
        d="M60 30h120M180 30v100M180 130H60M60 130V30"
        className={EDGE}
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#arrow3)"
      />
      {positions.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="14" className={i === 0 ? NODE_ACCENT : NODE} strokeWidth="1.5" />
      ))}
      <defs>
        <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0l6 4-6 4" className={EDGE} strokeWidth="1.5" fill="none" />
        </marker>
      </defs>
    </svg>
  );
}

const DIAGRAMS: Record<WorkDiagramVariant, () => React.JSX.Element> = {
  modernization: ModernizationDiagram,
  architecture: ArchitectureDiagram,
  cloud: CloudDiagram,
  pipeline: PipelineDiagram,
};

export function WorkDiagram({ variant }: { variant: WorkDiagramVariant }) {
  const Diagram = DIAGRAMS[variant];
  return <Diagram />;
}
