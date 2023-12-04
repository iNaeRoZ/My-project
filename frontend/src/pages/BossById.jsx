import React from "react";
import { useLoaderData } from "react-router-dom";

function BossById() {
  const souls = useLoaderData();
  return (
    <div>
      oui
      <div>
        <img src={souls.image} alt={souls.title} />;
      </div>
    </div>
  );
}

export default BossById;
