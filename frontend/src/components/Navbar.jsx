function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <h2 className="text-2xl font-bold">
        Football Analytics
      </h2>

      <ul className="flex gap-6 list-none">
        <li>Home</li>
        <li>Players</li>
        <li>Teams</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;