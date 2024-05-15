




import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchdessert = createAsyncThunk(
  "dessertSlice/fetchdessert" , async() => {
    try {
      const res = await fetch("/dessertmenu.json");
      if(!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json()
      return data
    }catch (error) {
        console.error("Error fetching products:", error.message)
        throw error
    }
  }
)



export const  dessertSlice = createSlice({
  name:"dessertSlice",
  initialState:{
    dessert:[],
    status:'idel',
    error: null
  },
  reducers: {},
  extraReducers:(builder) => {
    builder
    .addCase(fetchdessert.pending ,(state) => { 
        state.status = "loading"   
      }
    )
    .addCase(fetchdessert.fulfilled , (state ,action) => {
      state.status = "succeeded";
      state.dessert = action.payload;
      }
    )
    .addCase(fetchdessert.rejected ,(state , action) => {
      state.status ="failed";
      state.error =action.error.message
    }) 

  }
})


export const actions = dessertSlice.actions

export default dessertSlice.reducer