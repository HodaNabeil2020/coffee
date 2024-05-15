import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchCoffeMenu } from '../Store/Slices/MenuCoffeSlice'


import '../style/menuCoffe.css'
import Header from '../Components/Header'
import HeroMenu from '../Components/HeroMenu'
import BtnFilter from '../Components/BtnFilter'
import CardCoffe from '../Components/CardCoffe'
import WhyUs from '../Components/WhyUs'
import Footer from '../Components/Footer'
import ScrollTopButton from '../Components/ScrollTopButton'


function CoffeMenu() {
  const dispatch= useDispatch()
  const coffemenu = useSelector((state)=> state.coffe.products);

  const [category, setCategory] = useState("americano")

  const [filter ,setFilter ] =useState(coffemenu);

  const filterProducts = 
  category === 'americano' 
  ?filter.filter((product)=>product.category === 'americano')
  :filter.filter((product)=>product.category ===  category)

  function filterType (cat) {
  const filtered= coffemenu.filter((type )=> type.category === cat);
  setFilter(filtered);
  } 

  useEffect(()=> {
    dispatch(fetchCoffeMenu())
  },[dispatch])


  useEffect(()=> {
    setFilter(coffemenu)
  },[coffemenu])

  return (
    <div className=' relative'>
    <div className='menu-backgouned menu-coffe  '>
      <div className='background-blur '>
        <Header />
        <HeroMenu/>
        <div className='container pt-[30px]'>
          <h2 
            className=' flex justify-center items-center 
            font_2 text-[28px] mt-[30px] sm:mt-0  md:text-[35px]  text-[#fff] mb-[20px] sm:mb-[50px]' >
              The best <span className='ml-[10px]  text-[#220100] font-bold font_3'>coffee</span>
          </h2>
          <BtnFilter setCategory={setCategory}  filterType= {filterType} setFilter={setFilter}/>
          <div className='container-menu   grid   grid-cols-2 md:grid-cols-3 pt-[40px]'>
            {
              filterProducts.map((cofe ,index) => {
                return <div  key={index} >
                              <CardCoffe   cofe={cofe}   />
                        </div>
              })
            }
          </div>
        </div>
      </div>
    </div>

    <WhyUs/>
    <div className='home_page'>
      <div className='background-blur'>
        <Footer/>
      </div>
    </div> 
    <ScrollTopButton/>
  </div>
  )
}

export default CoffeMenu
