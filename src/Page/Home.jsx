
import Header from '../Components/Header'
import Landing from '../Components/Landing'
import TypeCofe from '../Components/TypeCofe'
import '../style/Home.css'

import ScrollTopButton from '../Components/ScrollTopButton'

function Home() {
  return (
    <div className="home_page   ">
      <div className='background-blur'>
        <Header/>
        <Landing/>
        <TypeCofe/>
        
      </div>
      <ScrollTopButton/>
    </div>
  )
 }
 
 export default Home
 