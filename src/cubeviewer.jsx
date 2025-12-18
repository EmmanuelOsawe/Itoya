import { useState, useRef, useEffect } from "react";

const CubeViewer = ({
    images = [
        "/assets/images/pricing/price-1.jpg",
        "/assets/images/pricing/price-2.jpg",
        "/assets/images/pricing/price-3.jpg",
        "/assets/images/pricing/price-4.jpg",
        "/assets/images/pricing/price-5.jpg",
        "/assets/images/pricing/price-6.jpg",
    ],
    title = "Excavator HMX8296 300 Watts",
    description = "High-performance equipment built for precision, durability, and efficiency.",
}) => {
    const [rotation, setRotation] = useState({ x: -10, y: 10 }); // Adjusted rotation values
    const [isDragging, setIsDragging] = useState(false);
    const lastPos = useRef({ x: 0, y: 0 });
    const requestRef = useRef();

    // ===== Auto-rotation =====
  const animate = () => {
    if (!isDragging) {
      setRotation((prev) => ({
        x: prev.x,
        y: prev.y + 0.5, // rotate speed
      }));
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging]);

  const getPoint = (e) => {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const handleStart = (e) => {
    setIsDragging(true);
    lastPos.current = getPoint(e);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const current = getPoint(e);
    const dx = current.x - lastPos.current.x;
    const dy = current.y - lastPos.current.y;

    setRotation((prev) => ({
      x: prev.x - dy * 0.5,
      y: prev.y + dx * 0.5,
    }));

    lastPos.current = current;
  };

  const handleEnd = () => setIsDragging(false);

  return (
    <div
      className="cubeviewer-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="cube-container"
        style={{
          width: "400px",
          height: "400px",
          perspective: "1200px",
          marginBottom: "20px",
        }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          className="cube"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? "none" : "transform 0.1s linear",
          }}
        >
          <div
            className="cube-face front"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "rotateY(0deg) translateZ(200px)",
            }}
          >
            <img src={images[0]} alt="Front" style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="cube-face back"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "rotateY(180deg) translateZ(200px)",
            }}
          >
            <img src={images[1]} alt="Back" style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="cube-face right"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "rotateY(90deg) translateZ(200px)",
            }}
          >
            <img src={images[2]} alt="Right" style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="cube-face left"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "rotateY(-90deg) translateZ(200px)",
            }}
          >
            <img src={images[3]} alt="Left" style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="cube-face top"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "rotateX(90deg) translateZ(200px)",
            }}
          >
            <img src={images[4]} alt="Top" style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="cube-face bottom"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: "rotateX(-90deg) translateZ(200px)",
            }}
          >
            <img src={images[5]} alt="Bottom" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>

      {/* Description */}
      <div
        className="description-wrapper"
        style={{
          maxWidth: "400px",
          textAlign: "center",
          marginTop: "120px", 
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CubeViewer;
