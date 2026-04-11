import Statistics from "./Statistics";
import PopularSofas from "./PopularSofas";
import NewSofas from "./NewSofas";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../css/home.css"
import { Dispatch } from "@reduxjs/toolkit";
import { setNewSofas, setPopularSofas, setTopUsers } from "./slice";
import { Product } from "../../lib/types/product";
import { Member } from "../../lib/types/member";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../app/services/ProductService";
import MemberService from "../../app/services/MemberService";

/**redux slice and selector */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularSofas: (data: Product[]) => dispatch(setPopularSofas(data)),
  setNewSofas: (data: Product[]) => dispatch(setNewSofas(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {

  const {setPopularSofas, setNewSofas, setTopUsers} = actionDispatch(useDispatch());

  useEffect(() => {
    //backend data fetch
    const product = new ProductService;
    product.getProducts({
      page:1,
      limit: 4,
      order: "productViews",
    }).then((data) => {
      setPopularSofas(data);
    }).catch((err) => console.log(err));

    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
    }).then((data) => {
      setNewSofas(data);
    }).catch((err) => console.log(err));

    const member = new MemberService;
    member.getTopUsers()
      .then((data) => {
        setTopUsers(data);
      })
      .catch((err) => console.log(err));


  }, []);


return <div className="homepage">
  <Statistics/>
  <NewSofas/>
  <PopularSofas/>
  <Advertisement/>
  <ActiveUsers/>
  <Events/>
  </div>;
}