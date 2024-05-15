
import "../style/contact.css"
import Footer from "../Components/Footer"
import ScrollTopButton from '../Components/ScrollTopButton'

function Cantact() {
  const icons = [
    <i className="fa-solid fa-phone-volume  text-[25px] sm:text-[35px] md:text-[50px]  text-[#fefae0] " ></i>,
    <i className="fa-solid fa-envelope           text-[25px] sm:text-[35px] md:text-[50px]  text-[#fefae0] "></i>,
    <i className="fa-brands fa-square-facebook   text-[25px] sm:text-[35px] md:text-[50px]  text-[#fefae0] "></i>,
    <i className="fa-solid fa-location-dot      text-[25px] sm:text-[35px] md:text-[50px]  text-[#fefae0]  "></i>
  ]


  return (
    <div className=" contact  relative   bg-[#fefae0]  ">
        <div className=" relative">
          <div className=" overly   relative">
            <img 
              className="image-hero"
              src={require(`../IMg/contact_landin.jpg`)} alt="img" />
          </div>

          <div className="  absolute  top-[50%]  left-[50%] translate-x-[-50%]  translate-y-[-50%]">
            <h2 
              className=" font_3 font-bold text-[30px] sm:text-[60px] md:text-[70px]  tracking-[2px] text-[#fff]">
              Contact Us
            </h2>
          </div>
        </div>
        
        <div 
          style={{padding:"40px 30px"}}
          className=" container container-icons 
           bg-[#220100]  relative  top-[-80px] sm:top-[-145px] w-[80%]
          flex  justify-between items-center   gap-x-1 sm:gap-[50px]">

          {
            icons.map((item ,index)=> {
              return <div    key={index}     
              className=" div-icon w-[250px] h-[50px]  sm:w-[180px] sm:h-[100px] md:w-[150px] 
              md:h-[150px] rounded-[8px] element-center  
              hover:shadow-2xl duration-[0.4s] transition-all" >
                {item}
                </div>
            })
          }
        </div>

        <div 
          style={{padding:"20px "} }
          className=" container  flex items-center  flex-col 
            sm:flex-row gap-[20px] md:gap-x-[50px]
              w-[80%] rounded-[8px] bg-[#220100]">
            <div >
              <img 
                className="  w-full sm:w-[250px] md:w-[300px]  rounded-[10px]"
                src={require(`../IMg/cofe-contact.jpg`)} alt="img-contact" />
            </div >
              <form 
                action="/" className=" w-full sm:w-[45%] ">
                <div className=" flex flex-col  mb-[10px]">
                  <label
                    className="text-[#fefae0]  font_2 md:text-[18px] mb-[5px] md:mb-[8px]"
                    htmlFor="name">Name </label>
                  <input 
                    className=" block p-[5px] text-[14px] 
                    md:text-[16px] md:px-[15px] md:py-[7px]  min-color 
                    rounded-[50px]  w-full  outline-none"
                    type="text" placeholder=" Name Full.." />
                </div>

                


                <div className=" flex flex-col  mb-[10px]">
                  <label
                    className="text-[#fefae0]  font_2 md:text-[18px] mb-[5px] md:mb-[8px]"
                    htmlFor="phone">Phone</label>
                  <input 
                    className=" block p-[5px] text-[14px] 
                    md:text-[16px] md:px-[15px] md:py-[7px]  min-color 
                    rounded-[50px]  w-full  outline-none"
                    type="number" placeholder=" Number" />
                </div>
                <div lassName=" flex flex-col  mb-[10px]">
                  <label 
                    className="text-[#fefae0]  font_2 md:text-[18px] mb-[5px] md:mb-[8px] "
                    htmlFor="email">Email</label>
                  <input 
                      className=" block p-[5px] mt-[2px] 
                      text-[14px] md:text-[16px] md:px-[15px] md:py-[7px]  
                      min-color rounded-[50px]  w-full  outline-none"
                    type="email" id="email" required  placeholder="Email"/>
                </div>
                <div className=" my-[20px] px-[10px]">
                  <textarea 
                    placeholder="Message"
                    className=" w-full outline-none rounded-[4px] 
                      text-[#220100] py-[10px] px-[15px]"></textarea>
                </div>

                <div 
                  className=" element-center  cursor-pointer bg-[#fefae0]
                    p-[7px]
                    md:py-[5px] md:px-[12px] rounded-[50px] min-w-fit">
                  <input
                    type="submit" value={'Send'} 
                    className=" cursor-pointer font_2 
                     md:text-[18px]  block  tracking-[2px] font-bold" />
                  <i className="fa-solid fa-paper-plane ml-[10px] "></i>
                </div>
              </form>
        </div>

        <div className=" pt-[50px]">
          <Footer/>
        </div>

        <ScrollTopButton/>
    </div>
  )
}

export default Cantact
