import { createSelector } from "reselect";
import { AppRootState } from "../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularSofas = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.popularSofas);

 export const retrieveNewSofas = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.newSofas);

export const retrieveTopUsers = createSelector(
    selectHomePage, 
    (HomePage) => HomePage.topUsers);