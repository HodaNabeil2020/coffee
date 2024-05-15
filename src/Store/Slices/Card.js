

import {createSlice} from '@reduxjs/toolkit';



function getItemLocalStorage () {
  const getItem= localStorage.getItem("card");
  return getItem ? JSON.parse(getItem) :[]
}

function setItemLocalStorage (card) {
localStorage.setItem("card" ,JSON.stringify(card))
}

export const productsSilce = createSlice({
  initialState:getItemLocalStorage(),
  name:"productsSilce ",
  reducers: {
    AddCoffeeToCart : (state, action) => {
      const finProduct = state.find((product)=> product.id === action.payload.id) 
      if(finProduct) {
        finProduct.quantity +=1 
      }else{
        const cloneproduct = {...action.payload , quantity: 1}
          state.push(cloneproduct)
      }
      return  setItemLocalStorage(state)
    },
    // deleteProduct: (state,action)=> {
    //   const updataCard=    state.filter((product)=> product.id !== action.payload.id)
    //   setItemLocalStorage([...updataCard])
    //   return updataCard
    // },
  
    // incrementQuantity: (state, action) => {
    //   const { productId } = action.payload;
    //   const product = state.find((product) => product.id === productId);
    //   if (product) {
    //     if (product.hasOwnProperty('qauntity')) {
    //       product.quantity += 1;
    //     } else {
    //       product.quantity = 1;
    //     }
    //   }
    //   setItemLocalStorage(state)
    // },
    // decreaseQuantity: (state, action) => {
    //   const { productId } = action.payload;
    //   const product = state.find((product) => product.id === productId);
    //   if (product && product.qauntity > 1 ) {
    //     if (product.hasOwnProperty('qauntity')) {
    //       product.quantity -= 1;
    //     } else {
    //       product.quantity = 1;
    //     }
    //   }
    //   setItemLocalStorage(state)
    // },

    
    AddDessertToCart:(state,action) => {
      const {id,name,image, selectSize,price} =action.payload;
      const finProduct = state.find(
        (product)=>product.id === id && product.selectSize === selectSize);
      if(finProduct) {
        finProduct.quantity +=1;
      }else {
          state.push(
            {
              id,
              image,
              name,
              selectSize,
              price:price,
              quantity:1,
            }
          )
      }
      setItemLocalStorage(state)
    },
    dessertDeleteFromCard: (state,action) => {
      const {selectSize,id} = action.payload
      const upDataCard=state.filter((product)=> !(product.id === id &&  product.selectSize === selectSize)) 

      setItemLocalStorage([...upDataCard])
      return upDataCard
    },
    dessertIncrementQuantity: (state,action) => {
      const {id,selectSize} = action.payload;
        const increaseProduct = state.find(
          (product)=> product.id === id && product.selectSize === selectSize
          )
          if(increaseProduct) {
            increaseProduct.quantity +=1;
          }
          setItemLocalStorage(state)
    },
    dessertDecreaseQuantity: (state,action) => {
      const {id,selectSize} =action.payload;
      const decreaseQuantity =state.find(
        (product) =>product.id === id && product.selectSize === selectSize
      )
      if(decreaseQuantity && decreaseQuantity.quantity > 1) {
        decreaseQuantity.quantity -=1;
      }
      setItemLocalStorage(state)
    },
    clearProduct: (state, action) => {
      localStorage.removeItem("card")
      return []
    
    },
  }
  
}

)






export const {
  AddCoffeeToCart 
  ,clearProduct
  ,deleteProduct
  ,incrementQuantity
  ,decreaseQuantity 
  ,  addProductDessert 
  ,  AddDessertToCart
,dessertDeleteFromCard 
,dessertDecreaseQuantity
,dessertIncrementQuantity



} = productsSilce.actions;
export default productsSilce.reducer






