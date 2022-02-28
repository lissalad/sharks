import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-300 p-4 flex flex-col justify-left">
      <a className="w-fit text-3xl" href="/">
        Sharks
      </a>
      <p className="w-fit indent-8">there are SO MANY!</p>
    </header>
  );
}
export default Header;
