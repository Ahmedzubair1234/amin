"use client";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:5px_5px]" />
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] animate-spin">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      </div>
    </div>
  );
}