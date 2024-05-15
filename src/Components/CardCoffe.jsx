
import '../style/cardcoffe.css'
import Icon from './Icon'

import "../style/cardcoffe.css"

function CardCoffe({cofe}) {
  return (
    <div   className='card-cofe  '>
      <div className='image element-center '>
        <img src={cofe.image} alt={cofe.name} />
      </div>
      <div>
        <h4 className='min-color capitalize  mt-[8px]'>{cofe.name}</h4>
        <p className='second-color font_2 des text-[18px] py-2'>{cofe.description}</p>
      </div>
        <Icon  cofe={ cofe}/>

        <p className='price-btn font_2 '>{cofe.price}$</p>
    
  </div>
  )
}

export default CardCoffe
