import logo from "../../assets/graphql.png";

function Header() {
  return (
    <header>
      <nav className="navbar bg-light mb-4 px-0 py-2">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className="d-flex">
              <img src={logo} alt="logo" width="30" height="30" className="mr-2" />
              <p className="m-0">Project MGMT</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;