"use client";

import React from "react";

export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Top-left violet orb */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full animate-float opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />
      {/* Bottom-right cyan orb */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full animate-float-delayed opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Center-right pink orb */}
      <div
        className="absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full animate-float opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />
      {/* Mid-left smaller violet */}
      <div
        className="absolute top-1/3 -left-20 w-[300px] h-[300px] rounded-full animate-float-delayed opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
