import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-screen-xl mx-auto space-y-10">
        
        <div className='mb-60'>
        <Header></Header>
        <Banner></Banner>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
