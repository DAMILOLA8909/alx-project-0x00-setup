import React from "react";
import Card from "@/components/Card";


const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Add Card components */}
      <div className="mt-4 flex flex-wrap gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
