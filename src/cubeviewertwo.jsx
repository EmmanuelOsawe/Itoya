import { useState, useRef } from "react";

const CubeViewertwo = ({
  front,
  back,
  left,
  right,
  top,
  bottom,
  name = "Excavator HMX8296 300 Watts", // equipment name
}) => {
  const [rotation, setRotation] = useState({ x: -15, y: 15 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const getPoint = (e) => {
    if (e.touches) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
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
    <div className="cubeviewer-wrapper">
      <div
        className="cube-container"
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
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="cube-face front">
            <img src={front || "assets/images/pricing/price-7.jpg"} alt="Front" />
          </div>
          <div className="cube-face back">
            <img src={back || "assets/images/pricing/price-8.jpg"} alt="Back" />
          </div>
          <div className="cube-face right">
            <img src={right || "assets/images/pricing/price-9.jpg"} alt="Right" />
          </div>
          <div className="cube-face left">
            <img src={left || "assets/images/pricing/price-8.jpg"} alt="Left" />
          </div>
          <div className="cube-face top">
            <img src={top || "assets/images/pricing/price-7.jpg"} alt="Top" />
          </div>
          <div className="cube-face bottom">
            <img src={bottom || "assets/images/pricing/price-9.jpg"} alt="Bottom" />
          </div>
        </div>
      </div>

      {/* ===== Description Section ===== */}
      <div className="description-wrapper" style={{ marginTop: "20px" }}>
        <h3 className="title">{name}</h3>
        <div className="content-box">
          <h4 className="title">Description</h4>
          <p>
            This equipment is engineered for <strong>high performance, durability, and precision</strong>, making it suitable for demanding construction and industrial tasks. Built with advanced technology, it delivers <strong>smooth operation, strong output, and reliable results</strong> even in tough working conditions. Its user-friendly design ensures <strong>easy handling, safety, and reduced downtime</strong>, helping operators work more efficiently.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul className="list">
                <li>Precision & Performance: Accurate and consistent operation</li>
                <li>Fast & Safe Operation: Modern safety features included</li>
                <li>Cost-Effective: Low maintenance and fuel efficiency</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list">
                <li>Durable Build: Long-lasting in tough conditions</li>
                <li>User-Friendly: Easy to handle and operate</li>
                <li>Reliable Output: Consistent performance every time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    

    
  );
};

export default CubeViewertwo;
