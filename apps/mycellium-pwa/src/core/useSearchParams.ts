import { useState, useEffect } from "react";

function useSearchParam(key: string): string | null {
  const [param, setParam] = useState(() =>
    new URLSearchParams(window.location.search).get(key),
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setParam(new URLSearchParams(window.location.search).get(key));
    };

    // Listen for back/forward navigation
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [key]);

  return param;
}

export default useSearchParam;
