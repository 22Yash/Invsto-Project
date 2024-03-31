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
        className="xl:w-[1440px] w-[375px]  xl:h-[400px] xl:rounded-bl-[220px] ml-10 h-screen  bg-[#eaeefb]  "
      >
        <button className={`w-[80px] h-[50px] bg-${darkMode ? "white" : "black"} text-${darkMode ? "black" : "white"} mt-10 rounded-l-full rounded-r-full`} onClick={toggleDarkMode}>
          {darkMode ? "Light" : "Dark"}
        </button>
        <div
          id="mainContent"
          className="grid grid-cols-1 ml-20 -mt-20 place-items-center place-self-center bg-hsl-174-86-45"
        >
          <div
            id="part1"
            className="col-span1 place-content-center xl:w-[500px] xl:h-[200px] xl:mt-20"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "180px",
              backgroundPositionY: "-20px",
            }}
          >
            <h3 className="flex justify-center -mt-20 font-ManropeBold font-extrabold text-[30px] ">
              Simple, traffic-based pricing
            </h3>
            <h5 className="flex justify-center font-ManropeSemiBold font-normal text-[15px]">
              Sign-up for our 30-day trial. No credit card required
            </h5>
          </div>
          <div
            id="part2"
            className="col-span-1 bg-white shadow-2xl shadow-[#eaeefb]  rounded-[10px] ring-1 ring-black ring-opacity-5 ring-offset-4 ring-offset-y-4 ring-offset-x-4 xl:w-[500px] xl:h-[300px]"
          >
            <div id="onChange" className="flex justify-between ">
              <div
                id="view"
                className="w-[200px] h-[70px] font-ManropeSemiBold text-[#858fad] text-[15px] flex justify-center items-center"
              >
                {pageview}k PAGEVIEW
              </div>
              <div
                id="price"
                className="w-[200px] flex justify-center  items-center"
              >
                <span className="text-2xl font-bold mr-2">
                  ${calculatePrice()}.00
                </span>
                /{isYearly ? "year" : "month"}
              </div>
            </div>

            <div
              id="range"
              className="w-[500px] h-[50px]  -mt-5 flex justify-center itmes-center"
            >
              <input
                type="range"
                min={8}
                max={36}
                value={length}
                onChange={handleLengthChange}
                className="w-[240px] bg-[#eaeefb]"
              />
            </div>
            <div id="type" className="flex gap-2 justify-center items-center">
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
                  style={{backgroundImage:`url`}}
                  className="h-5 w-5 ml-5 rounded-md border-2 border-gray-300 focus:ring-gray-500"
                />
                <span>Year</span>
              </label>
              <span className="text-[12px] ml-2 font-bold text-[#ff8c66] bg-[#feece7] p-2 rounded-full w-[150px] h-[45px] flex justify-center items-center">
                25% discount
              </span>
            </div>
            <div id="planInfo" className="flex justify-around mt-10 border-t-2 pt-8">
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
                <h2 className="w-[150px] h-[35px] flex justify-center items-center rounded-l-full rounded-r-full text-[15px] pl-2 text-[#bdccff] bg-[#293356]">
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
