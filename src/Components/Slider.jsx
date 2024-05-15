import React, { useState } from 'react';

const Slider = ({ clients }) => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const nextClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const preClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="    p-[10px] sm:p-[20px] w-[90%]  sm:w-[70%] md:w-[50%] top-[10%]
      z-[50] relative bg-[#fefae0] my-[50px] mx-auto  element-between rounded-sm">
      <button 
          className=' btn  '
        onClick={preClient}>
        <i className="fa-solid fa-angles-left
        "></i>
      </button>

      <button 
        className=' btn  '
        onClick={nextClient}>
        <i className="fa-solid fa-angles-right
        "></i>
      </button>


      <div className="  element-center    flex-col p-[15px] m-auto">
        <img
          className="w-[100px] object-cover h-[100px] rounded-[50px]"
          src={clients[currentClientIndex].image}
          alt={clients[currentClientIndex].name}
        />
          <p className='  text-[#777]   text-[14px] sm:text-[15px] md:text-[16px]
              md:leading-[25px]   w-[180px] sm:w-[250px] m-[5px] sm:m-[20px] text-center '>
                {clients[currentClientIndex].description}
                
          </p>
            
            <h2 
              className='min-color my-[10px] font_3  text-[16px] sm:text-[18px] md:text-[22px]  font-extrabold' >
        
              {clients[currentClientIndex].name}

              <span className='  ml-[5px] text-[#c4975e] font-normal  text-sm sm:text-[16px]'>{clients[currentClientIndex].Job}</span>
            </h2>
          <div >
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star"></i>
              <i className="text-[#c4975e]     fa-solid fa-star-half-stroke"></i>
          </div>
      </div>
    
    </div>
  );
};

export default Slider;
