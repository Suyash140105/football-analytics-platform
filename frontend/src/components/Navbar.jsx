import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold">
        Football Analytics
      </h2>

      <ul className="flex gap-6 list-none">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/players">Players</Link>
        </li>

        <li>
          <Link to="/teams">Teams</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;