import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

return (
    isVisible && (
        <div
            className="scroll-to-top"
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "10px",
                right: "20px",
                cursor: "pointer",
                background: "#ff8000db",
                color: "#fff",
                padding: "30px",
                borderRadius: "50%",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <span className="icon fa fa-angle-up" />
        </div>
    )
);
}
