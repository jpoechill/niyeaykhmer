'use client'
import { useState } from 'react'

export default function Home() {
  let [pets, updatePets] = useState([
    {
      name: '',
      owner: ''
    }
  ])

  const callAPI = async () => {
    try {
      const res = await fetch(
        `/api/get-pets`
      );
      const data = await res.json();
      updatePets(data.pets.rows)
      console.log(data.pets.rows);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <button onClick={callAPI}>Make API Call</button>
      {
        pets.map((p, index) =>
          <div key={index}>
            {p.name} | {p.owner}
          </div>
        )
      }
    </main >
  );
}
