import CubeViewer from "./cubeviewer";

const EquipmentCubes = () => {
  return (
    <div style={{ display: "flex", gap: "200px", justifyContent: "center", flexWrap: "wrap" }}>
      <CubeViewer
        title="Excavator 320L"
        description="High-performance excavator for construction and industrial tasks."
        images={[
          "/assets/images/product/320L/back.jpg",
          "/assets/images/product/320L/front.jpg",
          "/assets/images/product/320L/left.jpg",
          "/assets/images/product/320L/right.jpg",
          "/assets/images/product/320L/front.jpg",
          "/assets/images/product/320L/front.jpg",
        ]}
      />
      <CubeViewer
        title="Grader 140G Heavy Duty"
        description="Reliable grader built for smooth road leveling and strong output."
        images={[
          "/assets/images/product/140g/back.jpg",
          "/assets/images/product/140g/front.jpg",
          "/assets/images/product/140g/front.jpg",
          "/assets/images/product/140g/right.jpg",
          "/assets/images/product/140g/othright.jpg",
          "/assets/images/product/140g/smfront.jpg",
        ]}
      />

      <CubeViewer
        title="Grader 140G Heavy Duty"
        description="Reliable grader built for smooth road leveling and strong output."
        images={[
          "/assets/images/product/320bl/back.jpg",
          "/assets/images/product/320bl/front.jpg",
          "/assets/images/product/320bl/left.jpg",
          "/assets/images/product/320bl/right.jpg",
          "/assets/images/product/320bl/front.jpg",
          "/assets/images/product/320bl/left.jpg",
        ]}
      />

      <CubeViewer
        title="D8K"
        description="Reliable immense pushing power in large-scale earthmoving, mining, and land-clearing operations."
        images={[
          "/assets/images/product/D8K/25.jpg",
          "/assets/images/product/D8K/26.jpg",
          "/assets/images/product/D8K/27.jpg",
          "/assets/images/product/D8K/28.jpg",
          "/assets/images/product/D8K/26.jpg",
          "/assets/images/product/D8K/28.jpg",
        ]}
      />
    </div>
  );
};

export default EquipmentCubes;
