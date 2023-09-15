import './pageStyles/house/house.css';
import exampleImg from './pageImages/placeholderHouse.png';
import loadingImg from './pageImages/example.jpg';
import jsonData from '../assets/fullData';

function HousePage(props: any) {

    let houseInfo : any = jsonData[props.houseNumber - 1]
    
    let houseInfoArr : any[] = []
    Object.keys(houseInfo).forEach(key => {
        houseInfoArr.push({
            field: key,
            val: houseInfo[key]
        })
    });
    
    return (
        <div id="houseDiv">

            <div id="houseDisplay">
                <h1>House {props.houseNumber}</h1>
                <img src={exampleImg}></img>


                <div className="container">
                    <a className="button">
                        <div className="button__line"></div>
                        <div className="button__line"></div>
                        <span className="button__text">PREDICT</span>
                        <div className="button__drow1"></div>
                        <div className="button__drow2"></div>
                    </a>
                </div>
            </div>

            <div id="predictionInfo">
                <h3>SageMaker Prediction</h3>
                <img src={loadingImg}/>
                <p>$100,000</p>
            </div>
            
            <h2>Home Data</h2>
            <div id="homeInfo">
                {houseInfoArr.map((info : any) => (
                    <p>{info.field + ": " + info.val}</p>
                ))}
            </div>
        </div>
    )
}

export default HousePage;