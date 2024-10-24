/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const Players = () => {
  const [Players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./Players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  });

  return (
    <div>
      <div className="flex justify-between items-center px-6">
        <div>
          <h2 className="text-xl font-bold">Available Players</h2>
        </div>
        <div className="join border-2 ">
          <button className="btn px-8 text-base">Available</button>
          <button className="btn px-8 text-base">Selected</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4">
        {Players.map((player) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className=" pt-10">
              <img
                src={player.image}
                alt={player.name}
                className="rounded-xl h-52 w-fit"
              />
            </figure>
            <div className="card-body text-sm font-semibold ">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <FaUserAlt /> {player.name}
              </p>
              <p className="flex items-center justify-between gap-2 mb-4 border-b-2 pb-2">
                <span className="flex items-center gap-1 text-gray-600">
                  <IoFlag /> {player.country}
                </span>
                <span className="btn btn-sm">All-Rounder</span>
              </p>

              <p>Rating</p>

              <p className="flex items-center justify-between gap-2 ">
                <span>Batting_bowling_type</span>
                <span className="flex items-center gap-1 text-gray-600">
                  {player.batting_bowling_type}
                </span>
              </p>
              <p className="flex items-center justify-between gap-2 ">
                <span>Price:${player.bidding_price}</span>
                <span className="flex items-center gap-1 ">
                  <button className="btn btn-md">Choose Player</button>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
