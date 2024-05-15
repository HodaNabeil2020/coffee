






import Footer from '../Components/Footer'
import RightOrder from '../Components/RightOrder';
import LeftOrderPage from '../Components/LeftOrderPage';
import { clearProduct} from '../Store/Slices/Card';
import { useDispatch, useSelector } from 'react-redux';

import ScrollTopButton from "../Components/ScrollTopButton";


import '../style/order.css'

function Order() {
  const dispatch= useDispatch();
  const order =useSelector((state)=> state.order);
  
  return order.length === 0 ? (
    <div className=' empty-card relative  bg-[#220100] element-center w-[100%]   '>
      <h2 
        className=' text-[#f9d6b5] font_3 text-[25px]  sm:text-[35px]  md:text-[50px] -tracking-tighter ' 
        >
        Your shopping cart is empty
      </h2>
    </div>
  )
  : 
  (
    <div >
        <div  className=' container page-order    '>
            <h2
              className='  p-[30px] tracking-[2px] flex justify-center m-auto font_3 
                text-[#f9d6b5] text-[35px]  md:text-[40px]'>
                Your  <span className= 'font_3 text-[#fedcba] '> order </span> is read
            </h2>
            <button 
              className=' font_2 text-[#f9d6b5] text-[20px] my-[20px] mx-[15px]
              w-[100px] border-[2px] border-solid border-[#f9d6b5] rounded-[50px]'
              onClick={()=> {
                  dispatch(clearProduct())
              }
              }
              >
              Clear
            </button>
            <div className=' flex      flex-col    md:flex-row justify-between gap-x-7 '>
              <LeftOrderPage/>
              <RightOrder />
            </div>
        </div>
      <div className='home_page'>
        <Footer/>
      </div>
      <ScrollTopButton/>
    </div>
  )
}

export default Order
