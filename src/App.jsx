import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import SelectedPlayers from "./components/SelectedPlayers";

function App() {
  const [credit, setCredit] = useState(0);
  const [coin, setCoin] = useState(60000000);
  // const [isActive, setIsActive] = useState({
  //   player: true,
  //   status: "Available player",
  // });

  const [isActive, setIsActive] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCredit = () => {
    const newCredit = credit + 60000000;
    setCredit(newCredit);
  };

  const handleCredit = (playerPrice) => {
    setCoin(coin - playerPrice);
  };
  const handleDeletePrice = (id) => {
    const players = selectedPlayers.find((p) => p.playerId == id);
    setCoin(coin + players.bidding_price);
  };

  const handleDelete = (id) => {
    handleDeletePrice(id);
    const remainingPlayers = selectedPlayers.filter((p) => p.playerId !== id);
    setSelectedPlayers(remainingPlayers);
  };

  const handleSelectedPlayers = (player) => {
    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);
    let newPlayer = [];
    // if (!isExist) {
    //   handleCredit(player.bidding_price);
    //   newPlayer = [...selectedPlayers, player];
    //   setSelectedPlayers(newPlayer);
    // } else {
    //   return alert("This Player already exist");
    // }

    if (isExist) {
      return alert("This Player already exist");
    } else if (player.bidding_price > credit) {
      return alert("Not enough coin");
    } else {
      handleCredit(player.bidding_price);
      newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer);
    }

    //console.log(selectedPlayers);
    //console.log(credit);
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
          <Header coin={coin} credit={credit}></Header>
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
              handleDelete={handleDelete}
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
