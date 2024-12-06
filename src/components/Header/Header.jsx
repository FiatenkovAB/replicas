import { Link } from "react-router-dom";
import "./index.css"

const Header = () => {
    return(
        <div className="header_page">
            <div className="header_img">
            <Link to="/">
                <img src="./images/Header/zvezda.png"/>
                <img src="./images/Header/InkHouse.png"/>
                </Link>
            </div>
            <div className="header_nuv">
            <ul>
                <li>
                    <Link to='./Reproductions'>Репродукции</Link>
                </li>
                <li>
                    <Link to='./Products'>Новинки</Link>
            </li>
            <li>
                    <Link to='./AboutUs'>О нас</Link>
            </li>
            </ul> 
            </div>
        </div>
    )
}
export default Header;