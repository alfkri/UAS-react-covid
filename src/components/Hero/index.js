import Container from "../Container";
import Button from "../UI/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <Container>
        <section>
          <div>
            <h2>COVID ID</h2>
            <h3>Monitoring Perkembangan Covid</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, nihil? Ab fugit quas aliquam laborum vel delectus aut dicta. Recusandae!</p>
            <Button>Vaccine</Button>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/vaccine-concept-illustration_114360-5361.jpg?t=st=1649950752~exp=1649951352~hmac=10af65241c269420da15a3a2c5a22f4c2c4f0f36141b16547827231dd1d5cb80&w=740" alt="" />
          </div>
        </section>
      </Container>
    </StyledHero>
  );
}

export default Hero;
