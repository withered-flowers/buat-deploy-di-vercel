import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex gap-4">
        <Link className="text-blue-400 underline hover:text-blue-600" to={"/"}>
          Home Page
        </Link>
        <Link
          className="text-blue-400 underline hover:text-blue-600"
          to={"/second"}
        >
          Second Page
        </Link>
        <Link
          className="text-blue-400 underline hover:text-blue-600"
          to={"/third"}
        >
          Third Page
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
