import NumberIncreaser from "./NumberIncreaser";
import "../style/about.css"

function CounterNumber() {
  return (
    <div

      className="  container-counter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-x-[40px] container "
    >
      <div className=" flex flex-col element-center p-[10px]  ">
        <i
          className="fa-solid fa-star
            text-[#c4975e] text-[40px] md:text-[45px]   p-[10px] 
            border  border-transparent duration-[0.3s] 
            transition-all cursor-pointer  border-solid hover:border-[#c4975e]    "
        ></i>
        <span
          className="  block mt-[10px] md:mt-[15px] 
        text-[20px] sm:text-[25px] md:text-[28px] 
        font-bold text-[#c4975e]"
        >
          <NumberIncreaser targetNumber={2567} />
        </span>
        <p
          className=" min-color text-center font-bold 
          text-[14px] sm:text-[17px] md:text-[19px] "
        >
          star Reviews sed perspis unde{" "}
        </p>
      </div>
      <div className=" flex flex-col element-center p-[10px] ">
        <i
          className="fa-solid fa-trophy     
          text-[#c4975e] text-[40px] md:text-[45px]   p-[10px] 
            border  border-transparent duration-[0.3s] 
            transition-all cursor-pointer  border-solid hover:border-[#c4975e]  "
        ></i>
        <span
          className="  block mt-[10px] md:mt-[15px] 
        text-[20px] sm:text-[25px] md:text-[28px] 
        font-bold text-[#c4975e]"
        >
          <NumberIncreaser targetNumber={2543} />
        </span>
        <p
          className=" min-color text-center font-bold 
          text-[14px] sm:text-[17px] md:text-[19px] "
        >
          Winning Awards sed respis unde
        </p>
      </div>
      <div className=" flex flex-col element-center p-[10px] ">
        <i
          className="fa-solid fa-mug-hot 
          text-[#c4975e] text-[40px] md:text-[45px]  p-[10px] 
            border  border-transparent duration-[0.3s] 
            transition-all cursor-pointer  border-solid hover:border-[#c4975e]  "
        ></i>
        <span
          className="  block mt-[10px] md:mt-[15px] 
        text-[20px] sm:text-[25px] md:text-[28px] 
        font-bold text-[#c4975e]"
        >
          <NumberIncreaser targetNumber={2536} />
        </span>
        <p
          className=" min-color text-center font-bold 
          text-[14px] sm:text-[17px] md:text-[19px] "
        >
          professional Chefs seed permis unde
        </p>
      </div>
      <div className=" flex flex-col element-center p-[10px] ">
        <i
          className="fa-solid fa-gem  
          text-[#c4975e] text-[40px] md:text-[45px]  p-[10px] 
            border  border-transparent duration-[0.3s] 
            transition-all cursor-pointer  border-solid hover:border-[#c4975e]  "
        ></i>
        <span
          className="  block mt-[10px] md:mt-[15px] 
        text-[20px] sm:text-[25px] md:text-[28px] 
        font-bold text-[#c4975e]"
        >
          <NumberIncreaser targetNumber={2536} />
        </span>
        <p
          className=" min-color text-center font-bold 
          text-[14px] sm:text-[17px] md:text-[19px] "
        >
          premium Clients sed perspisunde
        </p>
      </div>
    </div>
  );
}

export default CounterNumber;
