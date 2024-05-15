import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdessert } from "../Store/Slices/dessertSlice";
import ButtonDessert from "./ButtonDessert";
import CardDesser from "./CardDesser";

function DessertMenu() {
  const dessert = useSelector((state) => state.dessert.dessert);
  const dispatch = useDispatch();
  const [filteredDesserts,setFilteredDesserts] = useState(dessert);


  useEffect(() => {
    dispatch(fetchdessert());
  }, []);


  useEffect(() => {
    setFilteredDesserts(dessert);
  }, [dessert]);


  const filterDessertsByCategory = (category) =>  {
    const filterProduct =  category === "All" ? dessert : dessert.filter((product)=> product.category === category)
    setFilteredDesserts(filterProduct)
  
  }


  return (
    <div className=" dessert-menu  bg-[#220100] container ">
      <div  className="pt-[20px] pb-[40px] m-auto">
            <h2 
              className=" font_3  m-[20px] md:m-[30px] lg:m-[40px] element-center 
                tracking-[1px]  md:tracking-[2px] text-[24px]  
                sm:text-[30px]  md:text-[35px] lg:text-[45px] text-[#fff]">
              Enjoy delicious desserts
            </h2>
        <ButtonDessert filterDessertsByCategory ={filterDessertsByCategory}    setFilteredDesserts={setFilteredDesserts}   />
        <div className=" mt-[70px]   grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {
            filteredDesserts.map((product ,index)=> {
              return (
                <CardDesser key={index} product={product}/>
              )
            })
          }
      </div>
        
      </div>
    </div>
  );
}

export default DessertMenu;
