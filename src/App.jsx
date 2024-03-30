import { useState } from "react";

import "./App.css";
import image1 from "./pattern-circles.svg";

function App() {
  // const [backgroundColor, setBackgroundColor] = useState(white);

  // function setBackgroundColor () {
    
  // }

  return (
    <>
      <div
        id="pricingComponent"
        className="xl:w-[1440px] w-[375px] h-screen ml-20   "
      >
        <div
          id="mainContent"
          className="grid grid-cols-1  place-items-center place-self-center bg-hsl-174-86-45"
        >
          <button className="w-[80px] h-[50px] bg-black text-white mt-10 rounded-l-full rounded-r-full ">
            Dark
          </button>

          <div
            id="part1"
            className="col-span1  bg-red-300 place-content-center xl:w-[500px] xl:h-[200px] xl:mt-20"
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
            className="col-span-1 bg-red-600 xl:w-[500px] xl:h-[300px]"
          >

            <div id="onChange" className="flex justify-between ">

            <div id="view" className="w-[200px] h-[70px] bg-yellow-300 flex justify-center items-center">
              100K PAGEVIEW
             </div>
             <div id="price" className="w-[200px] bg-yellow-400 flex justify-center items-center">
              $16/month
             </div>
            </div>
             

             <div id="range" className="w-[500px] h-[50px] bg-green-200 flex justify-center itmes-center">
              <input type="range" min={10} max={50} className="w-[90px]"></input>
             </div>
             <div id="type" className="flex gap-2 justify-center">
              <h2 className="p-2">Monthly Billing</h2>
              <h2 className="ml-0">Yearly Billing</h2>
              <h2 className="w-[100px] text-[12px] ml-5 font-bold text-orange-700 bg-orange-200  p-1 rounded-l-full rounded-r-full flex items-center justify-center">25% discount</h2>
             </div>
             <div id="planInfo" className="flex justify-around mt-10">
              <div id="details">
                <h2> <span>✅</span>  Unlimited websites</h2>
                <h2> <span>✅</span>   100% data ownership</h2>
                <h2> <span>✅</span>  Email reports</h2>
              </div>
              <div id="startButton">
                <h2 className="w-[150px] h-[35px] flex justify-center items-center rounded-l-full rounded-r-full text-[15px] pl-2 bg-cyan-200">Start my trial</h2>
              </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
