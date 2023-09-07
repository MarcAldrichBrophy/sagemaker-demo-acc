import './pageStyles/house/house.css';
import exampleImg from './pageImages/example.jpg';

function HousePage(props: any) {
    return (
        <div id="houseDiv">

        <div id="houseDisplay">
            <h1>House {props.houseNumber}</h1>
            <img src={exampleImg}></img>


            <div className="container">
                <a href="#" className="button">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text">PREDICT</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                </a>
            </div>
        </div>

        <p id="info">
            3 bd | 2br
        </p>

        <div id="predictionInfo">
            <h3>Predicted Value: $XXX,XXX</h3>
            <h3>Actual Estimated Value: $XXX,XXX</h3>
        </div>

        </div>
    )
}

export default HousePage;