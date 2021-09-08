import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarCustom = (props: any) => {
  
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className= "text-white " href="/"><span style={{fontWeight: "bold"}}>gmoot</span></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              {props.walletAddress && <Nav.Link className="text-white" onClick={props.clicked}>{props.balance} SOL: {props.walletAddress}</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;
