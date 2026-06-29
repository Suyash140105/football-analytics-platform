function PlayerCard({ player }) {
  return (
    <div className="border rounded-lg p-4 m-4 w-64 shadow-lg">
      <h2 className="text-xl font-bold">
        {player.name}
      </h2>

      <p>Club: {player.club}</p>

      <p>Position: {player.position}</p>

      <p>Country: {player.country}</p>

      <button className="mt-3 border px-3 py-1 rounded">
        View Details
      </button>
    </div>
  );
}

export default PlayerCard;