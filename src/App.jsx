import { useState } from "react";
import "./App.css";
import image1 from "./pattern-circles.svg";


function App() {
  const [length, setLength] = useState(8);
  const [pageview, setPageView] = useState(10);
  const [isYearly, setIsYearly] = useState(false);
 const [darkMode, setDarkMode] = useState(false);

  const calculatePageViews = () => {
    if (length <= 10) {
      return 10;
    } else if (length <= 20) {
      return 50;
    } else if (length <= 30) {
      return 100;
    } else if (length <= 35) {
      return 500;
    } else {
      return 1000;
    }
  };

  const calculatePrice = () => {
    const pageviews = calculatePageViews();
    const monthlyPrice = {
      10: 8,
      50: 12,
      100: 16,
      500: 24,
      1000: 36,
    }[pageviews];
    const yearlyPrice = (monthlyPrice * 12) - (monthlyPrice * 0.25 * 12);
    return isYearly ? yearlyPrice : monthlyPrice;
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
    setPageView(calculatePageViews());
  };

  const toggleBillingPeriod = () => {
    setIsYearly((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        id="pricingComponent"
        className="xl:w-[1440px] w-[660px] pt-20 h-[500px] flex justify-center items-center
        xl:h-[400px] xl:rounded-bl-[220px] xl:ml-10  rounded-bl-[220px]  bg-[#eaeefb]  "
      >
        {/* <button className={`w-[80px] h-[50px]  bg-${darkMode ? "white" : "black"} text-${darkMode ? "black" : "white"} mt-10 rounded-l-full rounded-r-full`} onClick={toggleDarkMode}>
          {darkMode ? "Light" : "Dark"}
        </button> */}
        <div
          id="mainContent"
          className="grid grid-cols-1 w-[375px] xl:w-[1440] ml-0 mt-60 xl:-ml-10 xl:mt-40 place-items-center place-self-center "
        >
          <div
            id="part1"
            className="col-span1 place-content-center w-[375px] xl:w-[500px] mt-40 xl:h-[200px] xl:mt-0 "
            style={{
              backgroundImage: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "180px",
              backgroundPositionY: "-20px",
              
            }}
          >
            <h3 className="flex justify-center -mt-10 xl:-mt-20 font-ManropeBold font-extrabold xl:text-[30px] text-[25px] ">
              Simple, traffic-based pricing
            </h3>
            <h5 className="flex text-center ml-20 xl:ml-0 justify-center font-ManropeSemiBold font-normal text-[15px] w-[200px] xl:w-full">
              Sign-up for our 30-day trial. No credit card required
            </h5>
          </div>
          <div
            id="part2"
            className="w-[375px] h-[450px]  mt-20 xl:mt-0 col-span-1 bg-white shadow-2xl shadow-[#eaeefb]  
            rounded-[10px] ring-1 ring-black ring-opacity-5 ring-offset-4 ring-offset-y-4 ring-offset-x-4 
            xl:w-[500px] xl:h-[300px]"
          >
            <div id="onChange" className="grid grid-col-1 xl:flex xl:justify-between ">
              <div
                id="view"
                className="
                col-span-1 text-[20px] ml-20 p-10 xl:ml-0 
                xl:w-[200px] xl:h-[70px] font-ManropeSemiBold text-[#858fad] xl:text-[15px] xl:flex xl:justify-center xl:items-center"
              >
                {pageview}k PAGEVIEW
              </div>
              <div
                id="price"
                className="
                col-span-1 
                xl:w-[200px] xl:flex xl:justify-center   xl:items-center"
              >
                <span className="xl:text-2xl  text-[30px] ml-28  xl:ml-0  font-bold mr-2">
                  ${calculatePrice()}.00
                </span>
                /{isYearly ? "year" : "month"}
              </div>
            </div>

            <div
              id="range"
              className="xl:w-[500px] -mt-16  ml-5 p-2 xl:h-[50px]  xl:-mt-5 xl:flex xl:justify-center xl:itmes-center"
            >
              <input
                type="range"
                min={8}
                max={36}
                value={length}
                
                onChange={handleLengthChange}
                className="xl:w-[240px] w-[320px] bg-[#eaeefb] custom-slider-thumb"
              />
            </div>
            <div id="type" className="flex gap-2 justify-center items-center xl:mt-0 mt-20">
              <button
                
                onClick={toggleBillingPeriod}
              >
                <span>Month</span>
              </button>
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={toggleBillingPeriod}
                 
                  className="h-5 w-5 ml-5 rounded-md border-2 border-gray-300 focus:ring-gray-500"
                />
                <span>Year</span>
              </label>
              <span className="text-[12px] ml-2 font-bold text-[#ff8c66] bg-[#feece7] p-2 rounded-full w-[150px] h-[45px] flex justify-center items-center">
                25% discount
              </span>
            </div>
            <div id="planInfo" className=" ml-0 text-center mt-10  xl:flex xl:justify-around xl:mt-10 xl:border-t-2 xl:pt-8">
              <div id="details">
                <h2>
                  {" "}
                  <span>✅</span> Unlimited websites
                </h2>
                <h2>
                  {" "}
                  <span>✅</span> 100% data ownership
                </h2>
                <h2>
                  {" "}
                  <span>✅</span> Email reports
                </h2>
              </div>
              <div id="startButton">
                <h2 className="w-[150px] h-[35px] mt-5 ml-28 xl:mt-0 flex justify-center items-center rounded-l-full rounded-r-full text-[15px] pl-2 text-[#bdccff] bg-[#293356]">
                  Start my trial
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
