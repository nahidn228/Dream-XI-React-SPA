import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
