import { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import NavBar from "./app/Components/NavBar/NavBar";
import Homepage from "./app/Layouts/Homepage/Homepage";
import DisclaimerModal from "./app/Components/DisclaimerModal/DisclaimerModal";

function App() {
  const [modalShow, setModalShow] = useState(true);

  const closeModalHandler = () => setModalShow(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/rice-box/" element={<Homepage />} />
      </Routes>
      <DisclaimerModal show={modalShow} onClick={closeModalHandler} />
    </>
  );
}

export default App;
