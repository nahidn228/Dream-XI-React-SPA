

const Footer = () => {
 
  const backgroundImage = {
    backgroundImage: "url('https://i.ibb.co.com/tsjyPDh/bg-shadow.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className='relative'>
      <div className=' w-full md:w-4/6 border-2 border-slate-500 rounded-2xl p-8 bg-transparent  md:absolute md:left-56 md:-top-44 '>
        <div style={backgroundImage} className='flex flex-col items-center p-10 rounded-2xl bg-white '>
        <h1 className="mb-5 text-2xl font-bold">
        Subscribe to our Newsletter
            </h1>
            <p className="mb-5 text-gray-600 font-semibold text-lg">
            Get the latest updates and news right in your inbox!
            </p>
            <div className="md:join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button  className="btn text-white  join-item bg-orange-700">
                  Subscribe
                </button>
              </div>
        </div>
      </div>
      <footer className="footer bg-slate-900 text-white p-10 flex flex-col items-center pt-36">
        <div>
          <img src={"https://i.ibb.co.com/vms4Tsb/logo-footer.png"} alt="" />
        </div>
        <div className="footer px-10">
          <aside className="">
            <nav className="">
              <h6 className="footer-title">About Us</h6>
              <p>
                We are a passionate team dedicated to providing <br /> the best
                services to our customers.
              </p>
            </nav>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <form>
            <h6 className="footer-title">Subscribe</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Subscribe to our newsletter for the latest updates.
                </span>
              </label>
              <div className="md:join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button  className="btn text-white  join-item bg-orange-700">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
