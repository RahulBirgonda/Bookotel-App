import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="bg-blue-800 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
          <Link to="/">Book Hotel</Link>
        </span>
        <nav className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="text-white text-sm sm:text-base px-3 py-2 font-bold hover:bg-blue-600 rounded-md"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="text-white text-sm sm:text-base px-3 py-2 font-bold hover:bg-blue-600 rounded-md"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-blue-600 text-sm sm:text-base px-3 py-2 font-bold hover:bg-gray-100 rounded-md"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
