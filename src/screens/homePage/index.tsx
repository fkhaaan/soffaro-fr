import Statistics from "./Statistics";
import PopularSofas from "./PopularSofas";
import NewSofas from "./NewSofas";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../css/home.css"

export default function HomePage() {
return <div className="homepage">
  <Statistics/>
  <NewSofas/>
  <PopularSofas/>
  <Advertisement/>
  <ActiveUsers/>
  <Events/>
  </div>;
}