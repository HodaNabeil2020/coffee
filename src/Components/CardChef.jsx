import { useState } from "react";



function CardChef({img,name,email}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
};

const handleMouseLeave = () => {
  setIsVisible(false);
};
  return (
    <div className=" p-[10px] relative overflow-hidden">
          <div className="box-chef bg-[#faedcd] h-[220px] p-[10px] flex-col text-center rounded-[8px] relative">
            <p className=" text-[15px] md:text-[16px] min-color font-bold">
            {name}
              <span className=" block text-[#c9975e] text-center  ">senior chef </span>
            </p>
            <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            className=" relative ">
              <img 
                className="  w-[180px] h-[170px] absolute top-[30%] 
                left-[50%] translate-x-[-50%]  rounded-[8px] object-cover "
                src={img}
                alt={`${name}`}
              />
            </div>
          </div>
          <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            className={`information-chef       cursor-pointer
              absolute   top-[50%] left-[50%] translate-x-[-50%]
              duration-[0.3s] transition-all 
              ${isVisible ?" block " :" hidden"}
            `}>
            <h4 className=" text-sm  relative top-[-45px]  text-center text-[#c9975e] mb-[8px]">{email}</h4>
            <div className={`icon-team flex  relative top-[40px] element-center gap-x-[14px]`}>
              <i className="fa-brands fa-square-facebook "></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
  )
}

export default CardChef
