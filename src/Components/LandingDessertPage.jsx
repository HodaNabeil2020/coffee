import { Link } from "react-router-dom";
import "../style/landingpagedessert.css";
import Header from "./Header";

function LandingDessertPage() {
  return (
      <div className=" landing-sweets  bg-[#220100]  overflow-hidden  ">
        <div className="background-blure ">
        <Header/>
          <div 
            className=" container hero-dessert  top-[50px] relative  flex    justify-between  gap-x-[30px]">
            <div className="  top-[75px] sm:top-[60px]  relative left-3 w-[95%] sm:w-[48%] text-[#fff] " >
              <h2
                className="font_3  text-[28px] 
                sm:text-[40px]  md:text-[50px] lg:text-[60px]  rotate-[-6deg] ">
                The most delicious and 
                best sweets
              </h2>
              <Link to={'/dessert'} 
                className=" block font_3  relative bg-transparent    left-[50%]  
                translate-x-[-50%] sm:translate-x-0  pt-[4px] pb-[6px] px-[8px]   text-center
                w-[100px] sm:w-[120px] md:w-[160px]  text-[18px] sm:text-[20px] md:text-[25px]
                border-[#ffff] border-solid border  
                bottom-[-30px] sm:bottom-[-42px] md:bottom-[-46px]  lg:bottom-[-58px]  
                sm:left-[50px]  rounded-[50px] text-[#fff]  font-bold
                hover:bg-[#fff] hover:text-[#220100]  hover:tracking-[2px] translate-y-[5px] 
                    transition-all  duration-[0.3s]  tracking-[2px]">
                menu
              </Link>
            </div>
            <div className=" container-images relative   sm:w-[49%]   flex justify-end  gap-[30px]">
                <img 
                className=" relative object-cover top-[45px]
                sm:w-[200px] sm:h-[250px] 
                md:w-[250px] md:h-[300px]  lg:w-[300px] lg:h-[385px]  " 
                src={require(`../IMg/dessert-5.jpg`)} alt="img-dessert" 
                />
            </div>
          
          </div>

        </div>
      </div>

  );
}

export default LandingDessertPage;
