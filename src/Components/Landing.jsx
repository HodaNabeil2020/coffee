import { Link } from 'react-router-dom'
import '../style/landing.css'


function Landing() {
    const icons= [
      <Link to={'/menu'}><i className='fa-solid fa-mug-saucer'></i></Link>,
      <Link to="dessert"><i className='fa-solid fa-poo'></i></Link>,
      <Link to={'menu'}>  <i className=' fa-solid fa-champagne-glasses'></i></Link>,
    <Link to={"dessert"}>  <i className=' fa-solid fa-cookie-bite'></i></Link>
    ]
  return (


    <div 
      className=" landing  container 
          flex  justify-between relative  md:h-[80vh] lg:h-[70vh]  ">
      <div className=' w-[48%]'>
        <h1 className='mainColor font_2  text-[30px] md:text-[45px]  font-bold'>
          Caffe <br/>
          The Best For You 
          
        </h1>
        <button 
          className="mainbtn   sm:my-[30px] text-[14px]   md:text-[18px] w-[160px] 
           transition duration-300  
            border-[2px] border-solid border-transparent   ">
  
              View Menu
        </button>
        <div  className=' flex
         absolute  top-[50%] left-[50%]  translate-x-[-50%]  translate-y-[-50%]
         md:relative 
         md:top-[0%] md:left-[0%]  md:translate-x-[0%]  md:translate-y-[0%]
            element-center   mt-[60px] md:mt-0 md:pt-[30px]  md:justify-start  gap-x-[20px] md:gap-x-[30px]'>
          {
            icons.map((icon,index)=> {
              return(
                <span key={index} 
                  className='text-[22px] sm:text-[25px] md:text-[30px] mianColor bg-[#e5e7eb36]  
                  cursor-pointer p-2 rounded-lg mainColor '>
                  {icon}
                </span>
              )
            })
          }
          
        </div>
      </div>
      <div className=' w-[48%]'>
        <img 
        className='  landing-img   md:max-w-[280px] lg:max-w-[400px]'
        src={require(`../IMg/landing.webp`)} alt="img_cofee" />
      </div>
    </div>


      


  )
}

export default Landing
