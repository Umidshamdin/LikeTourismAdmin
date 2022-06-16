import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  
  BarChart,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          
          {/* <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul> */}
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/slidertable" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Slider
              </li>
            </Link>
            <Link to="/famouscitytable" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Famouscity
              </li>
            </Link>

            <Link to="/hotellisttable" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                HotelList
              </li>
            </Link>
           
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
     
      </div>
    </div>
  );
}
