

import '../style/whyus.css'
import CardWhy from './Card-why'

function WhyUs() {
  return (
    <div className="why bg-[#100908fa]  relative w-full pt-[80px] pb-[40px]">
      <div
        className=" header-why  relative flex justify-center items-center m-auto
          text-[#ffff] my-[30px] font_2  tracking-widest  
            text-[25px]  md:text-[30px]">
      Why choose our 
      <span className="text-[#ff7900] mx-2 font_3 text-[35px] md:text-[45px]">coffee? </span>
      <i className=" absolute top-[38px]  md:top-[53px] text-[20px]  fa-solid fa-mug-hot"></i>
    </div>
    <div className=' container px-[30px] grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 pt-[40px]  gap-x-7'>
      <CardWhy  title= 'Delicious taste'  img={require(`../IMg/img_w_4.jpg`)}/>
      <CardWhy  title= 'Coffee quality'img={require(`../IMg/img-w-2.jpg`)}/>
      <CardWhy  title= 'The best way to roast ' img={require(`../IMg/img-w-3.jpg`)}/>
    </div>
  
    </div>
  )
}

export default WhyUs
