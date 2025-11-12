import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";



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
      <div className="flex flex-col items-center gap-4 mt-8">
        <Button title="Small Button" style="text-sm rounded-sm" />
        <Button title="Medium Button" style="text-base rounded-md px-5 py-2" />
        <Button title="Large Button" style="text-lg rounded-full px-6 py-3" />
      </div>

    </div>
  );
};

export default Landing;
