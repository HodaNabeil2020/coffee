
import { Link } from "react-router-dom";
import '../style/heromenu.css'
function HeroMenu() {
  return (
      <div
        className=" container  hero-menu
            flex  justify-between items-center gap-x-[50px]
            py-[30px] pb-[50px] sm:pb-[70px]" >
          <div className=" w-[45%]">
            <h2
              className="  font_2  text-[50px] md:text-[60px] lg:text-[80px]">
                Signature <br /> Menu
            </h2>
            <p 
            className="font_3 text-[20px] 
             sm:text-[30px]   font-bold md:font-normal md:text-[50px]">Coffe Latte</p>
            <p className=" des-hero text-[14px]  sm:text-[15px]  md:text-[17px]  max-w-[400px]"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              dolorem aperiam perferendis?
            </p>
            <Link 
              className="mainbtn mt-[20px]  font_3 font-bold    md:mt-[30px]  tracking-[2px] inline-block  text-center w-[100px]"
              to='/card'> 
              Order 
          </Link>
        </div>

        <div  className=" hero-img-rigth w-[48%]  element-center ">
            <img src={require(`../IMg/small_left.png`)} alt="img" />
        </div>
      </div>
  

  );
}

export default HeroMenu;
