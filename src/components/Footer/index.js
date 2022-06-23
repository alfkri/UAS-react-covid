import { Link } from "react-router-dom";
import StyledFooter, { Container } from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <footer>
          <div className="footer__left">
            <h1>COVID ID</h1>
            <p>Developed by alfikri</p>
          </div>
          <div>
            <ul>
              <li><Link to="/">Global</Link></li>
              <li><Link to="/indonesia">Indonesia</Link></li>
              <li><Link to="/provinces">Provinsi</Link></li>
              <li>About</li>
            </ul>
          </div>
        </footer>
      </Container>  
    </StyledFooter>  
  );
}

export default Footer;
