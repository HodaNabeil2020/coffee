import { Link } from "react-router-dom";
import CardChef from "../Components/CardChef";
import CounterNumber from "../Components/CounterNumber";
import "../style/about.css";
import Slider from "../Components/Slider";

import ScrollTopButton from "../Components/ScrollTopButton";


import Footer from "../Components/Footer"
import client1 from '../IMg/client_1.jpg'
import  client2 from '../IMg/client_2.jpg'
import client3  from '../IMg/client_3.jpg'


function About() {

  const clients = [
    {
      name: 'Nada Mahmoud ',
      image: client1 ,
      Job:"Engineer",
      description: 'issimos nam voluptate et voluptates at debitis perspiciatis aspernatur libero maxime aperiam',
    },
    {
      name: 'Mahmoud',
      image: client2,
      Job:"Graphic Design",
      description: 'issimos nam voluptate et voluptates at debitis perspiciatis aspernatur libero maxime aperiam',
    },
    {
      name: "Mahmed Ahmed",
      image: client3,
      Job:"Back and ",
      description: 'issimos nam voluptate et voluptates at debitis perspiciatis aspernatur libero maxime aperiam',
    },
  ];

  return (
    <div
      className="   about relative bg-[#fefae0]  ">
      <div className="overly relative ">
        <img
          className=" h-[200px] w-full object-cover  "
          src={require(`../IMg/menucof.jpg`)}
          alt="img-about"
        />
      </div>
      <h3
        className=" font_2 absolute 
        text-[35px] sm:text-[40px] md:text-[45px] 
        top-[50px] text-[#fff]  left-[50%]  translate-x-[-50%] font-bold"
      >
        About Us
      </h3>
      <div
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
        className="container  flex    flex-col   md:flex-row justify-between items-center gap-[40px]  md:gap-[20px]"
      >
        <div className=" relative">
          <img
            className="  box-img-1 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] object-cover rounded-tr-[50px] rounded rounded-es-[50px] "
            src={require(`../IMg/cofe-contact.jpg`)}
            alt="about-img"
          />

          <img
            className="  box-img-2 absolute top-[64px] left-[160px]  w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[184px] md:h-[200px] object-cover rounded-tr-[50px] rounded rounded-es-[50px] "
            src={require(`../IMg/img-about_2.jpg`)}
            alt="about-img"
          />
        </div>

        <div className=" header-about w-full md:w-[48%]">
          <h2 className=" font_3 tracking-[1px] text-[30px] min-color  font-bold">
            New <span className=" font_3 text-[#8b5112]">coffee</span> founded
            for extraordinary
          </h2>
          <p className=" w-full sm:w-[350px]  lg:w-full text-[15px] text-[#382f2f]  mb-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, vero
            ipsum inventore quidem earum sint distinctio enim nemo facilis
            eligendi.
          </p>

          <div className="  mb-[20px] ">
            <h3 className=" text-[25px] font-bold font_2 min-color">
              Natura Coffe Beans
            </h3>
            <div className="flex items-center">
              <i className="fa-solid fa-mug-hot mr-3 text-[30px]  relative  text-[#c4975e]"></i>
              <p  className=" w-[300px] sm:w-[350px] md:w-[450px] lg:w-full text-[15px] text-[#382f2f]  mb-[15px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat aliquam soluta ab inventore aperiam optio omnis error
                explicabo itaque deleniti!
              </p>
            </div>
          </div>
          <div className="   ">
            <h3 className=" text-[25px] font-bold font_2 min-color">
              100 % ISO Certification
            </h3>
            <div className="flex items-center">
              <i className="fa-solid fa-cookie  mr-3 text-[30px] relative  text-[#c4975e]"></i>
              <p  className=" w-[300px] sm:w-[350px] md:w-[450px] lg:w-full text-[15px] text-[#382f2f]  mb-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                dolorem accusamus cum quos est laudantium fuga. Laudantium
                explicabo accusamus hic!
              </p>
            </div>
          </div>
        </div>
      </div>
      <CounterNumber />
          <div  className="  overly  container-video relative  w-full ">
            <video
                className=" w-full"
                muted loop autoPlay>
              <source  src={require(`../video/coffe.mp4`)} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <div 
              className=" absolute top-[50%] w-[800px] text-center  left-[50%] z-10
              translate-x-[-50%]  translate-y-[-50%]  font_3 tracking-[2px] 
              font-bold bg-[#fefae0] rounded  p-[20px] sm:p-[30px]">
                <h2 
                className="  sm:text-[25px] md:text-[30px] font_2 capitalize  mb-[15px] sm:mb-[20px] ">The finest types of 
                <span className=" font_2  text-[20px] sm:text-[25px]  md:text-[30px] min-color  min-color "> coffee</span> beans
                </h2>
                <Link to={"/menu"}
                  className=" font_3 text-[14px] md:text-[20px]  p-[8px] sm:py-[10px] sm:px-[12px] text-[#fefae0]
                  bg-[#220100]  rounded-[8px]">More</Link>
              </div>
          </div>

      <div className=" py-[50px] container  team">
        <div className=" element-center flex-col ">
          <h4 className=" font_2  font-extrabold text-[#c4975e] text-[18px]  md:text-[20px] mt-[20px] mb-[10px]">
            Experience Team Member
          </h4>
          <h2 className=" min-color font_2 font-extrabold text-[23px] md:text-[30px] mb-[20px]">
            Meet Our Professional Chefs
          </h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <CardChef img={require(`../IMg/chef_1.jpg`)} name={"  AnthonY.Bowmen"} email={" Anthon5@gail.come"}/>
          <CardChef img={require(`../IMg/chef_2.jpg`)} name={" KennyV.Gonzalez"} email={"Kenny5@gail.come"}/>
          <CardChef img={require(`../IMg/chef_3.jpg`)} name={" JpsephmM.Lawrence"} email={"JpsephmM@gail.come"}/>
          <CardChef img={require(`../IMg/chef_4.jpg`)} name={" CharlesK.smith"} email={"harlesK5@gail.come"}/>
        </div>
      </div>

        <div  className="  slider overly relative  ">
            
              <Slider clients={clients} />
        
        </div>
      
      <Footer/>

      <ScrollTopButton/>
    </div>
  );
}

export default About;
