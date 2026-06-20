import PlayerCard from "../components/PlayerCard";

function players() {
  return (
    <div>
      <h1 className="text-3xl text-center mt-6">
        Players
      </h1>

      <div className="flex justify-center flex-wrap">
        <PlayerCard
          name="Lionel Messi"
          club="Inter Miami"
          position="Forward"
        />

        <PlayerCard
          name="Cristiano Ronaldo"
          club="Al Nassr"
          position="Forward"
        />

        <PlayerCard
          name="Kylian Mbappe"
          club="Real Madrid"
          position="Forward"
        />
      </div>
    </div>
  );
}

export default players;