import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  // Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  return (
    <>
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === "/" ? "active" : "nav-link"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SavedCandidates"
                className={
                  currentPage === "/SavedCandidates" ? "active" : "nav-link"
                }
              >
                Potential Candidates
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
