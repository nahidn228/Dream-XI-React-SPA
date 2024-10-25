import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import SelectedPlayers from "./components/SelectedPlayers";

function App() {
  const [credit, setCredit] = useState(0);
  // const [isActive, setIsActive] = useState({
  //   player: true,
  //   status: "Available player",
  // });

  const [isActive, setIsActive] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayers = (player) => {
    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);

    if (isExist) {
      return alert("This Player already exist");
    } else {
      const newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer);
    }
  };
  //console.log(selectedPlayers);

  const addCredit = () => {
    setCredit(credit + 60000000);
  };

  //Toggle button function

  const handleIsActive = (status) => {
    // if (status == 'player') {
    //   setIsActive({
    //     player: true,
    //     status: "Available player",
    //   });
    // } else {
    //   setIsActive({
    //     status: "Selected player",
    //     player: false,
    //   });
    // }

    if (status) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  //console.log(isActive);

  return (
    <>
      <div className="w-11/12 md:max-w-screen-xl mx-auto space-y-10">
        <div className="md:mb-60 space-y-10">
          <Header credit={credit}></Header>
          <Banner addCredit={addCredit}></Banner>

          {isActive ? (
            <Players
              selectedPlayers={selectedPlayers}
              handleSelectedPlayers={handleSelectedPlayers}
              isActive={isActive}
              handleIsActive={handleIsActive}
            ></Players>
          ) : (
            <SelectedPlayers
            handleSelectedPlayers={handleSelectedPlayers}
              selectedPlayers={selectedPlayers}
              isActive={isActive}
              handleIsActive={handleIsActive}
            ></SelectedPlayers>
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
