import React, { useState } from "react";
import { useSelector } from "react-redux";


import '../style/menuCoffe.css'
function BtnFilter({ filterType,setCategory }) {
  const coffemenu = useSelector((state) => state.coffe.products);
  const [activeButton, setActiveButton] = useState('americano');

  const handleButtonClick = (type) => {
    filterType(type);
    setActiveButton(type);
    setCategory(type)
  };

  return (
    <div className="container-btn">
      <button
        onClick={() => handleButtonClick('americano')}
        className={activeButton === 'americano' ? 'active' : ''}
      >
        americano
      </button>
      <button
        onClick={() => handleButtonClick('cappuccino')}
        className={activeButton === 'cappuccino' ? 'active' : ''}
      >
        cappuccino
      </button>
      <button
        onClick={() => handleButtonClick('turkish')}
        className={activeButton === 'turkish' ? 'active' : ''}
      >
        turkish
      </button>
    </div>
  );
}

export default BtnFilter;
