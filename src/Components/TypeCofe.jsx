

import   {Link}from 'react-router-dom';
import CardTypeCofe from './CardTypeCofe';
import { useState } from 'react';


import "../style/Home.css"

function TypeCofe() {

    const [productType,setProductType] =useState([
      {
        id:10,
        name:"Americano",
        des:"Lorem ipsum dolor sit amet consectetur",
        price:10,
        imge:"typec1.webp",
      },
      {
        id:11,
        name:"Cappuccino",
        des:"Lorem ipsum dolor sit amet consectetur",
        price:10,
        imge:"type2.webp",
      }
    ])
  return (
    <div className="  typecofe  container  md:mt-[40px]  ">
        <div  className=' grid sm:grid-cols-2 lg:grid-cols-3  md:pt-[60px] pb-[30px]  
          gap-5 relative '>
          {
            productType.map((product)=>{
              return (
                <CardTypeCofe  imge={product.imge} name={product.name} price={product.price}
                des={product.des} key={product.id} />
              )
            })
          }
          <div >
            <h2 className='mainColor text-[30px]  font-bold font_2 '>
              Lorem ipsum dolor sit amet consectetur adipisicin
            </h2>
            <p 
              className='max-w-[200px] text-[#000000e0] font-medium'
              >
              Lorem ipsum dolor sit amet consectetur adipisicinLorem ipsum dolor
              sit amet consectet
            </p>
            <Link to={'/menu'}
              className='mainbtn tracking-[1px]  
              text-center w-[110px] my-[15px]  block
              transition-all duration-[0.2s] 
              hover:tracking-[5px] hover:pl-[30px] font_2'
            >Menu
            </Link>
          </div>
        </div>
    </div>
  )
}

export default TypeCofe
