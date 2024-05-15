import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCoffeMenu=createAsyncThunk(
  'menuCoffeSlice/fetchCoffeMenu', async() => {

    try {
      const res = await fetch('/coffemenu.json');
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      return data; 
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
  }
)

export const menuCoffeSlice = createSlice({
  name: 'menucoffe',
  initialState:{
    products:[],
    status:'idle',
    error:null
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoffeMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchCoffeMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },

})


export const actions = menuCoffeSlice.actions

export default menuCoffeSlice.reducer