import { Link } from "react-router-dom";
import StyledNavbar, { Container } from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <nav>
          <div>
            <h1>COVID ID</h1>
          </div>
          <div>
            <ul>
              <li><Link to="/">Global</Link></li>
              <li><Link to="/indonesia">Indonesia</Link></li>
              <li><Link to="/provinces">Provinsi</Link></li>
              <li>About</li>
            </ul>
          </div>
        </nav>
      </Container>
    </StyledNavbar>    
  );
}

export default Navbar;
