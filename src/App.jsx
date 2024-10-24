import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  const [credit, setCredit] = useState(0);

  const addCredit = () => {
    setCredit(credit + 60000000);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="mb-60 space-y-10">
          <Header credit={credit}></Header>
          <Banner addCredit={addCredit}></Banner>

          <Players></Players>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
