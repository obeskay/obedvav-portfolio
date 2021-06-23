import React from "react";
import ProyectCard from "./ProyectCard";

const ProyectsGrid = () => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((x, i) => (
          <ProyectCard key="3" />
        ))}
      </div>
    </div>
  );
};

export default ProyectsGrid;
