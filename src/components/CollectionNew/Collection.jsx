import { Link } from "react-router-dom";
import "./index.css"
const Collection =()=>{
    return(
        <div className="collection">
        <div className="collection_content">
            <div className="newCollection">
                <img src="./images/Collection/Star.png"/>
                <h2>Новая коллекция французских авторов</h2>
            </div>
            <div>
                <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. 
                Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
            </div>
            <Link to="/Franc">
            <button>ОЗНАКОМИТЬСЯ</button>
            </Link>
            </div>
        </div>
    )
}
export default Collection;