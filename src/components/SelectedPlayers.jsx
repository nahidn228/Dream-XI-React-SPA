/* eslint-disable react/prop-types */
import { RiDeleteBin6Fill } from "react-icons/ri";

const SelectedPlayers = ({
  handleIsActive,
  isActive,
  selectedPlayers,
  handleDelete,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center px-6">
        <div>
          <h2 className="text-xl font-bold">
            Selected Players ({selectedPlayers.length}/6){" "}
          </h2>
        </div>
        <div className="join border-2 p-1">
          <button
            onClick={() => handleIsActive(true)}
            className={`btn px-8 text-base  ${
              isActive ? "bg-[#E7FE29]" : "bg-none"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActive(false)}
            className={`btn px-8 text-base  ${isActive ? "" : "bg-[#E7FE29]"}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedPlayers.map((player, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center border-2 p-2 rounded-xl my-4 "
        >
          <div className="flex items-center gap-2">
            <div>
              <img className="h-16 rounded-xl" src={player.image} alt="" />
            </div>
            <div>
              <p className="text-lg font-semibold"> {player.name} </p>
              <p className="text-sm font-medium text-gray-600">
                {" "}
                {player.batting_bowling_type}{" "}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleDelete(player.playerId)}
              className="btn text-orange-600 text-xl "
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={() => handleIsActive(true)}
        className="btn hover:bg-[#E7FE29] border-4  border-orange-600 m-4 text-base font-bold"
      >
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayers;
