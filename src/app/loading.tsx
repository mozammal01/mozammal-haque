"use client";
import { useEffect, useState } from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Delay for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        {/* 🔄 Replace this with your actual loading animation */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white" />
      </div>
    );
  }
  return <>{children}</>;
}
