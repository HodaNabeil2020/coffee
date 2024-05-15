


function CardWhy({title , img}) {
  return (
    <div className=" card-why  p-[20px] border border-[#ff7900] border-solid  
      rounded-[8px]  mb-[25px] cursor-pointer 
      ">
      <img 
        className=" w-[150px]  rounded-[50%] p-[20px] block m-auto 
          duration-[0.3s] transition-all hover:rotate-[3deg] hover:scale-[1.1]"
        src={img} alt={title} />
      <div>
        <h3 className=" text-[#ffff] font_3 text-[22px]  tracking-[1px]">{title}</h3>
        <p className=" text-[#fff7] text-[17px] font-normal  tracking-[1px]  leading-[1.7] mt-[5px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate dolorum vero, assumenda ad nulla! Quibusdam fuga rerum eveniet aperiam!</p>
      </div>
    </div>
  )
}

export default CardWhy
