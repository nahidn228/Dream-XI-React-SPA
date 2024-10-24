import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./components/Players";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-screen-xl mx-auto space-y-10">
        
        <div className='mb-60 space-y-10'>
        <Header></Header>
        <Banner></Banner>
        
        <Players></Players>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
