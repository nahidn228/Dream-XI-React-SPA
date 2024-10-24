const SelectedPlayers = ({ handleIsActive, isActive }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-6">
        <div>
          <h2 className="text-xl font-bold">Selected Players</h2>
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
            Selected
          </button>
        </div>
      </div>

      <button onClick={() => handleIsActive(true)} className="btn hover:bg-[#E7FE29] border-4  border-orange-600 m-4 text-base font-bold">
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayers;
