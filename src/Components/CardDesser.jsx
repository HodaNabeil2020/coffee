import { useState } from "react";


import '../style/carddessert.css'
import { useDispatch } from "react-redux";
import Card, {  AddDessertToCart } from "../Store/Slices/Card";
import { addToFavorites } from "../Store/Slices/FavoritesSlice";



function CardDesser({product}) {
  const dispatch= useDispatch()
  const [activeColor, setActiveColor] =useState(false);
  const [price, setPrice] = useState(null)

  const [selectSize,setSelectSize] = useState({});
  const[selectProduct,setSelectProduct]= useState({});


  const handleSelectProduct = (productId,size) => {
    setSelectProduct({
      id:productId,
      name:size.name,
      image:size.image,
      price:size.price,
      selectSize: size.id
    })
    setSelectSize({
      ...selectSize,
      [productId]:size.id,
    })

  }


  return (
    <div 
        className=" box-dessert  bg-[#fefae0] p-[10px] rounded-[6px]  relative ">
      <button className=" absolute icon-favorite">
        <i style={{display:"flex"}}
          onClick={()=>{
            setActiveColor(!activeColor);
            dispatch(addToFavorites(product))
          }
            
            
            }
          className={`  bg-[#de9f65] text-[#220100]  
          cursor-pointer rounded-[50px] text-[14px] sm:text-[16px] w-[30px] h-[30px]  sm:w-[40px] sm:h-[40px] 
          element-center  text-center  fa-regular fa-heart 
          ${activeColor && 'fa-solid'}`}>
        </i>
      </button>
      <div 
        className=" image relative my-[10px]  element-center ">
        <img
          className="  relative  h-[220px]   sm:w-full   rounded-[6px]  object-cover"
          src={product.image} alt={product.name} />
      </div>
      <div className=" px-[5px]" >
        <h3 
          className=" mainColor font-bold  text-[18px] sm:text-[20px]  uppercase  font_2 "
          >
            {product.name}
        </h3>
        <p className=" font-bold font_2 mainColor text-[18px] sm:text-[22px] my-[10px]">Size</p>
      </div>
      <div
       className=" px-[5px] flex    gap-x-2 sm:gap-x-4 md:gap-x-[5px]
       element-center lg:element-between ">
        {
          product.sizes.map((size ,index)=> {
            return (
              <div  
                className={` my-[10px]   text-[#250902]  text-[15px] sm:text-[17px]  `}
                onClick={()=> {
                  handleSelectProduct(product.id,size);
                  setPrice(size.price)
                }}
                key={index}
                > 
                <p 
                  className={
                    `cursor-pointer element-center  font-medium 
                     w-[50px] sm:w-[60px]  lg:w-[80px]  h-[35px] capitalize 
                    mb-[4px] rounded-[4px]  border-[#250902] border-[1px] border-solid
                  
                  ${selectSize[product.id]=== size.id ? 
                    " text-[#fefae0]  bg-[#250902] border-[#fff]" 
                    :
                    " "}
                  
                  `
                  }
                >
                    {size.id}
                </p>
              </div>
            )
          })
        }
      </div>
      <div   className=" relative px-[5px]  element-between my-[10px]">
        <p 
          className=" font-bold text-[19px]  mainColor">
          price : <span className="  text-[15px] sm:text-[17px]">
            {price > 0? `${price}$` :" _ " }
            </span>
        </p>
        <button 
          className={`  add-card mt-[10px]
                  w-[30px] h-[30px]    sm:w-[40px]  sm:h-[35px] rounded-[4px] text-[#fefae0]  font-bold 
          
          ${price > 0 ? " cursor-pointer bg-[#250902]" : "pointer-events-none bg-[#de9f65]   " }
          `}
          onClick={()=> {
            dispatch(   AddDessertToCart( {
              ...product,
              selectSize:selectSize[product.id],
              price:selectProduct.price
            }))
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      
    </div>
  )
}

export default CardDesser
