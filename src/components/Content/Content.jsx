import { Link } from "react-router-dom";
import "./index.css"
const Content = () => {
    return(
        <div className="content_pages">
        <div className="content_img">
            <img src="./images/Content/pigeon.png"/>
        </div>
        <div className="content_text">
            <h1>Реплики картин</h1>
            <Link to="Collection"><button>ПРОДУКЦИЯ</button></Link>
            
        </div>
        </div>
    )
}
export default Content;