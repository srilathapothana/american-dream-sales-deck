"use client";

interface Props {
  src: string;
  opacity?: number;
  position?: string;
}

export default function BgImage({ src, opacity = 0.07, position = "center" }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: position,
        opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
