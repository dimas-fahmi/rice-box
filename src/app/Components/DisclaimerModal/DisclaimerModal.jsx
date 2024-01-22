import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function DisclaimerModal({ show, onClick = () => {} }) {
  return (
    <Modal show={show} onHide={onClick}>
      <Modal.Header closeButton>
        <Modal.Title>
          Pesan dari <span className="oswald fw-bold">RICE BOX</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Saat Ini Website masih dalam Pengerjaan, Beberapa Fitur masih belum
        berfungsi, Gambar masih menggunakan Plasebo. Namun kami sudah
        beroperasional, kamu bisa langsung Konsultasi dengan CS Kami
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClick}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            window.location.href =
              "https://api.whatsapp.com/send?phone=62895391011797&text=Hai%2C%20Rice%20Box.%20%0ASaya%20Ingin%20berkonsultasi%20terkait%20Nasi%20Kotak%20dan%20Ingin%20Mengetahui%20Paket%20dan%20Rentang%20Harga%20yang%20Tersedia.";
          }}
        >
          Konsultasi
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DisclaimerModal;
