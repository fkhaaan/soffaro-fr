import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../lib/types/screen";

const initialState: HomePageState = {
    popularSofas: [],
    newSofas: [],
    topUsers: [],
};

const homePageSlice = createSlice({
name: "homePage",
initialState,
reducers: {
    setPopularSofas: (state, action) => {
        state.popularSofas = action.payload;
    },
    setNewSofas: (state, action) => {
        state.newSofas = action.payload;
    },
    setTopUsers: (state, action) => {
        state.topUsers = action.payload;
    }
}
});

export const { setPopularSofas, setNewSofas, setTopUsers} = 
homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;