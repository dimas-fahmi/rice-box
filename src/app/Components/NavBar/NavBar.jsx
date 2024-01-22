import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-none fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="d-block m-auto">
          <img
            src="./resources/images/logos/rice_box_logo.png"
            alt="Rice Box Logo"
            className="nb_navbar-brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="quicksand">
          <Nav className="me-auto">
            <Nav.Link href="#home">Paket</Nav.Link>
            <Nav.Link href="#link">Pemesanan</Nav.Link>
            <Nav.Link href="#link">Pengaduan</Nav.Link>
            <Nav.Link href="#home">Kontak</Nav.Link>
            <Nav.Link href="#link">Tentang</Nav.Link>
            <Nav.Link href="#link">Kebijakan</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              href="https://api.whatsapp.com/send?phone=62895391011797&text=Hai%2C%20Rice%20Box.%20%0ASaya%20Ingin%20berkonsultasi%20terkait%20Nasi%20Kotak%20dan%20Ingin%20Mengetahui%20Paket%20dan%20Rentang%20Harga%20yang%20Tersedia."
              target="_blank"
              className="nb-bg-accent-secondary text-light rounded-3 px-3"
            >
              Pesan Sekarang
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
