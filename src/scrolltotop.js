import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollTo(0, 0);
    };

    // Attach the scroll handler on component mount
    scrollHandler();

    // Detach the scroll handler when the location changes
    const unlisten = () => {
      window.removeEventListener("scroll", scrollHandler);
    };

    // Clean up the event listener when the component unmounts
    return unlisten;
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
