import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        id="rectangle"
        style={{
          position: "fixed",
          bottom: 0,
          height: "40%",
          width: "100%",
          background: "hsl(195deg, 20%, 86%)",
        }}
      />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
