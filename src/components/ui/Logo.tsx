const wordmark = {
  fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
  fontWeight: 600,
} as const;

type LogoProps = {
  tone: "light" | "dark";
  height: number | string;
};

export function Logo({ tone, height }: LogoProps) {
  const ink = tone === "light" ? "#FFFFFF" : "#151719";

  return (
    <svg
      className="ds-logo"
      width={311}
      height={60}
      viewBox="0 0 311 60"
      role="img"
      aria-label="Alderform Build Co."
      style={{ height, width: "auto", maxWidth: "none", aspectRatio: "311 / 60" }}
    >
      <g fill="none" stroke={ink} strokeWidth="3.4" strokeLinejoin="miter" strokeLinecap="butt">
        <path d="M32 4.5 3 55.5" />
        <path d="M32 4.5 61 55.5" />
        <path d="M14.2 36.2h35.6" />
      </g>
      <text x="76" y="33.5" fill={ink} style={{ ...wordmark, fontSize: 28 }} textLength={226} lengthAdjust="spacing">
        ALDERFORM
      </text>
      <text className="ds-logo-sub" x="76" y="51" fill={ink} style={wordmark} fontSize={10} textLength={138} lengthAdjust="spacing">
        BUILD CO.
      </text>
      <text
        className="ds-logo-sub-sm"
        x="76"
        y="54"
        fill={ink}
        style={{ ...wordmark, fontWeight: 700 }}
        fontSize={17}
        textLength={168}
        lengthAdjust="spacing"
      >
        BUILD CO.
      </text>
    </svg>
  );
}
