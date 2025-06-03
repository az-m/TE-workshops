import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="flex justify-around">
      <a
        href="#"
        className="m-2 rounded-2xl border-2 p-4 border-amber-800 bg-amber-600 text-white hover:bg-amber-800"
      >
        Home
      </a>
      <a
        href="#"
        className="m-2 rounded-2xl border-2 p-4 border-blue-800 bg-blue-600 text-white hover:bg-blue-800"
      >
        About
      </a>
      <a
        href="#"
        className="m-2 rounded-2xl border-2 p-4 border-green-800 bg-green-600 text-white hover:bg-green-800"
      >
        Contact
      </a>
    </nav>
  );
}
