import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full fixed top-0 bg-gradient-to-l from-cyan-500/60 to-blue-800/60 backdrop-blur-lg p-4 text-white flex flex-row z-50 items-center justify-between md:px-7">
      <div>
      <a className="title w-fit text-5xl" href="/">
        Sharks
      </a>
      <p className="w-fit indent-8 ">there are SO MANY!</p>
      </div>
      <div>
        <img className="w-32 ml-7 md:mx-4" src="/images/shark.png" alt="shark"/>
      </div>
    </header>
  );
}
export default Header;
