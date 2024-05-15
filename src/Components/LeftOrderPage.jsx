
import {useSelector,useDispatch} from 'react-redux'
import { decreaseQuantity,
    deleteProduct,
    dessertDecreaseQuantity,
    dessertDeleteFromCard, 
    dessertIncrementQuantity,
    incrementQuantity } from '../Store/Slices/Card';


function LeftOrderPage() {

  const order =useSelector((state)=> state.order);
  const dispatch= useDispatch()

  // const handleIncrementQuantity = (productId) => {
  //   dispatch(incrementQuantity({productId}));
  // };
  
  // const handledecreaseQuantity = (productId) => {
  //   dispatch(decreaseQuantity({productId}));
  // };
  return (
    <div className='flex-1 '>
    <div className='  relative  grid grid-cols-1  md:grid-cols-2 gap-[10px]'>
    {
      order.map((product,index)=> {
        return(
          <div  key={index} className=' card-order-left   relative  '>
              
            <div 
              className='imge  element-center m-auto w-[160px] h-[160px] '
              >
              <img src={product.image} alt={product.name} />
            </div>
              <p className=' quantity'>{product.quantity}</p>
              <div className='text-center main-Color '>
                <p
                  className=' text-center mainColor   font_3 
                  font-bold tracking-[2px] text-[30px]'>
                    {product.name}
                </p>
                <div 
                  className=' element-center  mainColor font-bold font_3 text-[20px] gap-x-[40px]  m-[10px]'>
                  <p className='  font-bold text-[25px] capitalize'>{product.selectSize}</p>
                  <p className='element-center'>{product.price}$</p>
                </div>
              </div>
              <div className='container-quantity'> 
                <p className=' cursor-pointer'
                  onClick={()=>{
                    dispatch(dessertIncrementQuantity({
                      id:product.id,
                      selectSize:product.selectSize,
                    }))
                }}>
                  <i className="fa-solid fa-plus"></i>
                </p>
                <p className=' increment  cursor-pointer relative'
                  onClick={()=>{
                  dispatch(dessertDecreaseQuantity({
                    id:product.id,
                    selectSize:product.selectSize
                  }))
                }}>
                  <i className="  fa-solid fa-minus"></i>
                </p>
              </div>
              <div 
                onClick={()=> console.log(dispatch(dessertDeleteFromCard({
                  id:product.id,
                  selectSize:product.selectSize,
                })))}
                className='delete-btn'>
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
          
          </div>
        )
      })
    }
    </div>

  </div>
  )
}

export default LeftOrderPage
