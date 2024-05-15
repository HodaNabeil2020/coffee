import { useState } from "react";

import "../style/dessertpage.css"

function ButtonDessert({filterDessertsByCategory}) {

  const [activeButton, setActiveButton] = useState('All');

  const btns = [
    "All",
    "cheese cake",
    "brownies",
    "ice cream"
  ]
  const handleButtonClick = (category) => {
    setActiveButton(category)
    filterDessertsByCategory(category);
  
  };
  return (
  
    <div 
      className="  text-[#fff]  flex justify-center m-auto text-center">
      <div  
        className="  dessert-filter font_2    w-[380px] md:w-[400px] 
         shadow-[0px_0px_14px_1px_rgba(255,0,0)]
        bg-[#fff] min-color justify-center flex gap-x-[5px] sm:gap-x-[10px] 


        rounded-[50px] p-[10px] md:p-[12px] lg:p-[14px] ">
        {
          btns.map((btn ,index)=> {
            return <button 
            key={index}
            onClick={()=> {
              handleButtonClick(btn)
            }}
              className={` btn-filter block   text-[17px] sm:text-[20px] font-bold 
               sm:mx-[0px]
              ${activeButton === btn 
                ?
                " bg-[#220100]  px-[10px]  w-fit sm:h-[40px] rounded-[50px] text-[#fff]" 
                : 
                " "
              }`
              } 
              >
              {btn}
            </button>
          })
        }
      </div>
  

    </div>
      

  )
}

export default ButtonDessert
