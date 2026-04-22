"use client";
import React from "react";
// localhost:3000/clubs

type Club = {
  id: number;
  name: string;
  description: string;
};

export default function Clubs() {
  const [clubs, setClubs] = React.useState<Club[]>([]);
  React.useEffect(() => {
    fetch("/api/clubs-mock-data")
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);
  return (
    <div>
      <h1>Clubs Page</h1>
      <div className="">
        {
          clubs.map((club) => (
            <div key={club.id} className="border p-4 mb-4">
              <h2 className="text-xl font-bold">{club.name}</h2>
              <p>{club.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
