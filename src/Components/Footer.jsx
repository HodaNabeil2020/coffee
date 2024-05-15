import Logo from "./Logo"

import '../style/footer.css'
function Footer() {
  return (
  <div className="home_page">
    <div className="background-blur">
      <div 
        style={{paddingTop:'20px '}}
        className=" container footer   grid  grid-cols-1 sm:grid-cols-2 
             md:grid-cols-4  w-full sm:gap-x-5 md:gap-x-7  ">
        <div >
          <Logo/>
          <div className=" flex  justify-start gap-x-[10px] items-center mt-[20px] sm:my-[40px]">
            <a href="/">
              <i className=" text-[30px]  cursor-pointer text-[#220100d4]  fa-brands fa-instagram"></i>
            </a>
            
            <a href="/"> 
                <i className=" text-[30px]  cursor-pointer text-[#220100d4]  fa-brands fa-square-facebook"></i>
            </a>
            <a href="/">
            <i className=" text-[30px]  cursor-pointer text-[#220100d4]  fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <div >
          <h3 >Our Services</h3>
            <ul>
              <li>
                <a href="/">pricing</a>
              </li>
              <li>
                <a href="/">Tracking</a>
              </li>
              <li>
                <a href="/">Reports Bug </a>
              </li>
              <li>
                <a href="/"> Terms of Services</a>
              </li>
            </ul>
        </div>
        <div >
          <h3 >Our Company</h3>
            <ul>
              <li>
                <a href="/">pricing</a>
              </li>
              <li>
                <a href="/">Tracking</a>
              </li>
              <li>
                <a href="/">Reports Bug </a>
              </li>
              <li>
                <a href="/"> Terms of Services</a>
              </li>
            </ul>
        </div>
        <div >
          <h3 >address</h3>
            <ul>
              <li>
                <a href="/">Engineers</a>
              </li>
              <li>
                <a href="/">Pyramid</a>
              </li>
              <li>
                <a href="/">Fifth pool</a>
              </li>
              <li>
                <a href="/"> Cairo</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer
