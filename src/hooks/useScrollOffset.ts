import { useEffect, useState } from "react";

export function useScrollOffset(maxOffset = 400) {
  const [offset, setScrolled] = useState(0);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset < maxOffset) setScrolled(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { offset };
}
