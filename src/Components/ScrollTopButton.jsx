
import { useState,useEffect } from "react";


function ScrollTopButton() {

  const [scrollTop, setScrollTop] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll' , ()=> {
    if(window.scrollY > 100) {
      setScrollTop(true)
    }else {
      setScrollTop(false)
    }
    })
  },[]);

  const scroolUp =()=> {
    window.scrollTo({
      top:0 ,
      behavior:'smooth'
    })
  } 
  return (
    <div >
      {
        scrollTop &&  <i
        onClick={()=> scroolUp()}
        class="  scroll-top  text-center  fa-solid fa-arrow-up"></i>              
      
      }
    </div>
  )
}

export default ScrollTopButton
