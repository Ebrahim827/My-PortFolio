"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0f4346]">

      {/* TOP LEFT DARK FLOW */}
      <div
        className="absolute -top-[35%] -left-[20%] h-[900px] w-[900px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 34, 36, 0.95) 0%, rgba(2, 19, 21, 0.75) 35%, rgba(9,49,52,0.35) 65%, transparent 100%)",
        }}
      />

      {/* BOTTOM LEFT */}
      <div
        className="absolute -bottom-[28%] -left-[18%] h-[800px] w-[800px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(23,84,88,0.85) 0%, rgba(23,84,88,0.55) 40%, rgba(23,84,88,0.2) 70%, transparent 100%)",
        }}
      />

      {/* BOTTOM RIGHT */}
      <div
        className="absolute -bottom-[35%] -right-[25%] h-[950px] w-[950px] rounded-full blur-[170px] rotate-[-20deg]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,78,82,0.8) 0%, rgba(20,78,82,0.45) 45%, rgba(20,78,82,0.15) 70%, transparent 100%)",
        }}
      />

      {/* CENTER SOFT LIGHT */}
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[220px]"
        style={{
          background:
            "radial-gradient(circle, rgba(38,133,138,0.15) 0%, transparent 80%)",
        }}
      />

    </div>
  );
}