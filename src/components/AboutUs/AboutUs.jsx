import "./index.css"

const AboutUs = () => {
    return(
        <div className="about">
        <div className="about_img">
            <img src="./images/About/picture.png"/>
            <div className="insideImg">
            <img src="./images/About/brushes.png"/>
            </div>
        </div>
        <div className="about_content">
            <div className="content">
                <h2>Наша команда</h2>
                <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
            </div>
            <div className="content_img">
                <img src="./images/About/Madam.png"/>
                <img src="./images/About/girl.jpg"/>
                <img src="./images/About/man.jpg"/>
            </div>
        </div>
        </div>
    )
}
export default AboutUs;