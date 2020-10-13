import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // TODO: Add check for back button click to home
  //       Need to scroll to top when clicking on home but not for back button

  useEffect(() => {
    if (pathname === '/') return;
    window.scrollTo({
       top: 0,
       left: 0,
       behavior: 'auto'
    });
  }, [pathname]);

  return null;
}