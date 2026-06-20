function PlayerCard({ name, club, position }) {
  return (
    <div className="border rounded-lg p-4 m-4 w-64">
      <h2 className="text-xl font-bold">{name}</h2>

      <p>Club: {club}</p>

      <p>Position: {position}</p>

      <button className="mt-3 border px-3 py-1 rounded">
        View Details
      </button>
    </div>
  );
}

export default PlayerCard;