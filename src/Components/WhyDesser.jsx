


function WhyDesser() {
  return (
    <div className="  container bg-[#fefae0] py-[50px]">
      <h2 
        className="   min-color  element-center 
          pt-[40px] font_3   text-[20px] sm:text-[30px] md:text-[50px]  font-bold
          tracking-[1px]
        "
        >
        Why are we into 
        <span 
          className=" font_3  text-[30px] sm:text-[40px] md:text-[50px] tracking-[2px] text-[#de9f65]  ml-[7px] block"> 
          sweets
          </span>?
      </h2>

      <div 
          className="  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 py-[50px] gap-[30px] ">
          <div
            className=" bg-[#de9f65] p-[20px] relative rounded-[8px] 
            hover:translate-y-[-10px] duration-[0.4s] transition-all cursor-pointer hover:shadow-3xl">
            <div
              className=" element-center sm:p-[6px]">
              <img 
                className=" w-[45px] sm:w-[60px] md:w-[80px] mt-[10px]"
                src={require(`../IMg/icon_speed.png`)} alt="img" />
            </div>
            <div className=" mt-[15px]">
                <h3     className="   min-color  element-center 
                  md:pt-[15px] font_3 text-[27px] sm:text-[35px] lg:text-[40px]  font-bold
                  tracking-[1px]  ">
              
              Fast delivery</h3>
                <p  className=" font-medium md:text-[17px] text-[#000000c4]  leading-[1.7]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur doloremque id ex nihil dignissimos sint.
                </p>
              </div>
          </div>

          <div className=" bg-[#de9f65]  p-[20px] relative rounded-[8px]
            hover:translate-y-[-10px] duration-[0.4s] transition-all cursor-pointer hover:shadow-3xl">
            <div 
              className=" element-center p-[10px]">
              <img 
            className=" w-[45px] sm:w-[60px] md:w-[80px] mt-[10px]"
                src={require(`../IMg/icon_Quality.png`)} alt="img" />
            </div>
            <div>
                <h3 className="   min-color  element-center 
                  md:pt-[15px] font_3 text-[27px] sm:text-[35px] lg:text-[40px]  font-bold
                  tracking-[1px]  ">Quality</h3>
                <p className=" font-medium md:text-[17px] text-[#000000c4]  leading-[1.7]"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Aspernatur doloremque id ex nihil dignissimos sint.
                </p>
              </div>
          </div>

          <div 
            className=" bg-[#de9f65]  p-[20px] relative rounded-[8px] 
            hover:translate-y-[-10px] duration-[0.4s] transition-all cursor-pointer hover:shadow-3xl">
            <div
              className=" element-center p-[10px]">
              <img 
                className=" w-[45px] sm:w-[60px] md:w-[80px] mt-[10px]"
                src={require(`../IMg/icon_cupcake.png`)} alt="img" />
            </div>
            <div>
                <h3 className="   min-color  element-center 
                  md:pt-[15px] font_3 text-[27px] sm:text-[35px] lg:text-[40px]  font-bold
                  tracking-[1px]  ">Delicious taste</h3>
                <p className=" font-medium md:text-[17px] text-[#000000c4]  leading-[1.7]"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Aspernatur doloremque id ex nihil dignissimos sint.
                </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default WhyDesser
