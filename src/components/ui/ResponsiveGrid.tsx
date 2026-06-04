"use client";
import { useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  cols?: number;        // desktop columns
  tabletCols?: number;  // tablet columns (default 1)
  gap?: string;
  style?: React.CSSProperties;
}

export default function ResponsiveGrid({
  children,
  cols = 2,
  tabletCols = 1,
  gap = "60px",
  style = {},
}: Props) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isTablet = width <= 1024;
  const isMobile = width <= 768;

  const activeCols = isMobile ? 1 : isTablet ? tabletCols : cols;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${activeCols}, 1fr)`,
      gap: isMobile ? "32px" : isTablet ? "40px" : gap,
      alignItems: "start",
      ...style,
    }}>
      {children}
    </div>
  );
}
