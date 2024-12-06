import './index.css'

const Footer = () => {
    return(
        <div className="footer">
        <div>
        <ul>
            <li>
            <img src="./images/Footer/houseInk.png"/>
            </li>
            <li>
            <a href="tel:+7 (999) 543-54-54">+7 (999) 543-54-54</a>
            </li>
        </ul>
        <p>Мастерская</p>
        </div>
        <div className='footer_info'>
            <div>
            <ul>
                <li><a href="#">Репродукции</a></li>
                <li><a href="#">Германия</a></li>
                <li><a href="#">Франция</a></li>
                <li><a href="#">Англия</a></li>
            </ul>
            </div>
            <div>
            <ul>
                <li><a href="#">Новинки</a></li>
                <li><a href="#">2021</a></li>
                <li><a href="#">2020</a></li>
            </ul>
            </div>
            <div>
            <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Художники</a></li>
                <li><a href="#">Менеджеры</a></li>
            </ul>
            </div>
            
        </div>
        <div className='social'>
                <a href="#"><img src="./images/Footer/kr.png"/></a>
                <a href="https://www.youtube.com" target='_blank'><img src="./images/Footer/you.png"/></a>
                <a href="http://facebook.com"><img src="./images/Footer/face.png"/></a>
            </div>
        </div>
    )
}
export default Footer;