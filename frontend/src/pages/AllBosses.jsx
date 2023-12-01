import React from "react";

import { useLoaderData } from "react-router-dom";

function AllBosses() {
  const souls = useLoaderData();
  return (
    <div className="list">
      {souls.map((soul) => (
        <div className="img">
          <img src={soul.image} alt={soul.title} />
        </div>
      ))}
    </div>
  );
}

export default AllBosses;
