import { TbCoin } from "react-icons/tb";

const Header = ({ credit }) => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>

          <img src={"https://i.ibb.co.com/qkxHQdB/logo.png"} alt="" />
        </div>

        <div className="navbar-end gap-2">
          <ul className="menu menu-horizontal px-1 hidden lg:flex font-semibold">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <a className="btn text-lg font-semibold">
            {credit} Coin{" "}
            <span className="text-[#F39E09]">
              <TbCoin />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
