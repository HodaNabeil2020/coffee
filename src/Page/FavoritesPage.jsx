import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../Store/Slices/FavoritesSlice";
import ScrollTopButton from "../Components/ScrollTopButton";
import Footer from "../Components/Footer";
import "../style/favorites.css";
import { useState } from "react";
import { dassertAddToCard, productsSilce } from "../Store/Slices/Card";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);
  const disptach = useDispatch();

  const [price, setPrice] = useState(null);


  const [selectSize, setSelectSize] = useState({});
  const [selectProduct, setSelectProduct] = useState({});



  const handleSelectProduct = (productId, size) => {
    setSelectProduct({
      id: productId,
      name: size.name,
      image: size.image,
      price: size.price,
      selectSize: size.id,
    });
    setSelectSize({
      ...selectSize,
      [productId]: size.id,
    });
  };

  const handleRemove = (item) => {
    disptach(removeFromFavorites(item));
  };

  return favorites.length > 0 ? (
    <div className="bg-[#fefae0]   favorites-container   ">
      <h3 className=" element-center min-color text-[30px] font_2 py-[40px] relative">
        Favorites
        <i className="fa-solid fa-heart  ml-[15px] min-color text-[20px]"></i>
      </h3>

      <div className=" container top-[20px]  relative grid gap-[30px] grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
        {favorites &&
          favorites.length > 0 &&
          favorites.map((item, index) => (
            <div
              key={index}
              className="bg-[#faedcd] relative rounded-[8px] p-[10px] flex-col element-center"
            >
              <div className="w-[170px] md:w-[200px]">
                <img
                  className="object-cover max-w-full m-auto h-[170px] md:h-[200px]"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h4 className="min-color font_2 text-[20px] my-[10px]">
                {item.name}
              </h4>
              {/* <div className=" flex   items-center gap-x-[15px] py-[20px]">
                {item.sizes &&
                  item.sizes.map((size, sizeIndex) => (
                    <div
                      onClick={() => {
                        handleSelectProduct(item.id, size);
                        setPrice(size.price);
                      }}
                      className={`cursor-pointer element-center  font-medium 
                              w-[50px] sm:w-[60px]  lg:w-[70px]  h-[30px] capitalize 
                              mb-[4px] rounded-[4px]  border-[#250902] border-[1px] border-solid


                              ${selectSize[item.id]===size.id || item !== item[size] ? "bg-[#de9f65] text-[#fefae0] border-[#de9f65] " : " "} 
                      `}
                      key={sizeIndex}
                    >
                      <h4>{size.id}</h4>
                      <h4 className="  hidden">{size.price}</h4>
                    </div>
                  ))}
              </div> */}
              <div className=" flex gap-x-3  my-[20px]
               absolute bottom-[-30px] translate-x-[-50%] left-[50%] ">
                <div
                  onClick={() => handleRemove(item)}
                  className="p-[10px]  rounded-[10px]
                   cursor-pointer w-[50px] h-[30px] bg-[#220100] element-center"
                
                >
                  <i className="fa-solid fa-xmark text-[#fefae0] text-[15px] cursor-pointer element-center"></i>
                </div>

                {/* <div
                  onClick={() => {
                    disptach(
                      dassertAddToCard({
                        ...item,
                        selectSize: selectSize[item.id],
                        price: selectProduct.price,
                      })
                    );
                  }}
                  className={`add-card
                    p-[10px] rounded-[10px] 
                    w-[50px] h-[30px] bg-[#220100] element-center
                         cursor-pointer
                      ${
                        selectSize[item.id] ? " pointer-events-auto bg-[#de9f65] text-[#fefae0] " : "  pointer-events-none"
                      }
          
                  `}
                >
                  <i 
                  className={` 
                  fa-solid fa-plus   text-[15px]  element-center text-[#fefae0]
                  `}></i>
                </div> */}
              </div>
            </div>
          ))}
      </div>

      <div className=" pt-[70px]  bg-[#fefae0]  ">
        <Footer />
      </div>
      <ScrollTopButton/>
    </div>
  ) : (
    <div className="bg-[#fefae0] main-height-screen  w-full   relative ">
      <h2
        className=" element-center  absolute font_2  text-[20px] sm:text-[30px] md:text-[40px] 
    top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-color"
      >
        Favorites list is empty
        <i className="fa-solid fa-heart  ml-[15px] min-color text-[20px]"></i>
      </h2>
    </div>
  );
}

export default FavoritesPage;
