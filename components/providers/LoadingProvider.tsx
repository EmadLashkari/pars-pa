"use client";
import Loading from "@/app/loading";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

function LoadingProvider({ children }: { children: ReactNode }): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
}

export default LoadingProvider;
