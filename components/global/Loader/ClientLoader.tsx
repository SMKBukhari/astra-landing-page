"use client";

import { useEffect } from "react";
import Loader from "./Loader";
import { useLoader } from "@/context/LoaderContext";

export default function ClientLoader() {
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  const handleComplete = () => {
    setIsLoading(false);
  };

  return <>{isLoading && <Loader onComplete={handleComplete} />}</>;
}
