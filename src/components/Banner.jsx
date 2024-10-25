/* eslint-disable react/prop-types */


const Banner = ({ addCredit }) => {
  const backgroundImage = {
    backgroundImage: "url('https://i.ibb.co.com/tsjyPDh/bg-shadow.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className=" min-h-full bg-black rounded-2xl" style={backgroundImage}>
        <div className="hero-content text-neutral-content text-center flex flex-col space-y-6 py-10">
          <img src={"https://i.ibb.co.com/xG3fwV8/banner-main.png"} alt="" />
          <div className="max-w-3/4">
            <h1 className="mb-5 text-4xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-gray-600 font-semibold text-xl">
              Beyond Boundaries Beyond Limits
            </p>
            <button
              onClick={addCredit}
              className="btn hover:bg-[#E7FE29] border-4  border-orange-600 m-4 text-base font-bold"
            >
              Claim Free Credit
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
