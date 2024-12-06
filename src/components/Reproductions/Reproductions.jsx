import "./index.css"
const Reproductions = () => {
    return(
        <div className="page">
            <div className="content_nuv">
                <h1>РЕПРОДУКЦИИ</h1>
                <a href="#">Франция</a>
                <a href="#">Германия</a>
                <a href="#">Англия</a>
            </div>
            <div>
            <div className="content_img1">
                <div>
                    <img src="./images/Reproductions/Cupid.jpg"/>
                    <p>Марсель Руссо</p>
                    <h3>Охота Амура</h3>
                    <p>Холст, масло (50х80)</p>
                    <span>14874</span>
                    <button>В корзину</button>
                </div>
                <div>
                <img src="./images/Reproductions/ladyDog.jpg"/>
                <p>Анри Селин</p>
                <h3>Дама с собачкой</h3>
                <p>Акрил, бумага (50х80)</p>
                <span>19658</span>
                <button>В корзину</button>
                </div>
                <div>
                <img src="./images/Reproductions/procedure.jpg"/>
                <p>Франсуа Дюпон</p>
                <h3>Процедура</h3>
                <p>Цветная литография (40х60) </p>
                <span>45210</span>
                <button>В корзину</button>
                </div>
                </div>
                <div className="content_img1">
                <div>
                <img src="./images/Reproductions/rose.jpg"/>
                <p>Луи Детуш</p>
                <h3>Роза</h3>
                <p>Бумага, акрил (50х80)</p>
                <span>25369</span>
                <button>В корзину</button>
                </div>
                <div>
                <img src="./images/Reproductions/birds.jpg"/>
                <p>Франсуа Дюпон</p>
                <h3>Птичья трапеза</h3>
                <p>Цветная литография (40х60)</p>
                <span>13258</span>
                <button>В корзину</button>
                </div>
                <div>
                <img src="./images/Reproductions/fishLandscape.jpg"/>
                <p>Пьер Моранж</p>
                <h3>Пейзаж с рыбой</h3>
                <p>Цветная литография (40х60) </p>
                <span>22301</span>
                <button>В корзину</button>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Reproductions;