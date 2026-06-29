import PlayerCard from "../components/PlayerCard";
import players from "../data/players";
import { useState } from "react";
function Players() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1 className="text-3xl text-center mt-6">
        Players
      </h1>
<input
  type="text"
  placeholder="Search Players..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 rounded w-80"
/>
      <div className="flex justify-center flex-wrap">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

export default Players;