function Home() {
  return (
    <div className="text-center mt-20">
      <h1>Football Analytics Platform</h1>

      <h2>Discover Football Insights</h2>

      <p>
        Analyze players, teams and performance statistics.
      </p>

      <button>Explore Players</button>

      <h2>Featured Players</h2>

   <div className="flex justify-center gap-6 mt-8">

    <div className="border p-4 rounded-lg">
  Lionel Messi
</div>

<div className="border p-4 rounded-lg">
  Cristiano Ronaldo
</div>

<div className="border p-4 rounded-lg">
  Kylian Mbappe
</div>
     </div>

    </div>
  );
}

export default Home;