
import jsonData from '../assets/fullData';
import './pageStyles/home/home.css';
import houseImg from './pageImages/placeholderHouse.png';
import './utilities/hoverEffect';

function HomePage() {

    let cells = [];
    const RESTRICT: number = 0;

    for(let rowNum = 1; rowNum <= jsonData.length - RESTRICT; rowNum++) {

        let urlString: string = "house" as string;
        let numLen = 2 - String(rowNum).length as number;
        for(let i = 0; i < numLen; i++) {
        urlString += "0";
        }
        urlString += rowNum

        cells.push({
            houseid: urlString,
            pageid: rowNum,
            beds: jsonData[rowNum - 1]["BedroomAbvGr"],
            baths: jsonData[rowNum - 1]["FullBath"],
            lotArea: jsonData[rowNum - 1]["LotArea"]
        })
    }
    return (
        <div id="homeDiv">
            <h1>SageMaker</h1>
            <div id="itemList">
                {cells.map((cell) => (
                    <a className="houseButton" href={"./" + cell.houseid} key={cell.pageid}>
                        <img src={houseImg}/>
                        <p className="houseName">
                            {"HOUSE " + cell.pageid}
                        </p>
                        
                        <p className="houseInfo">
                            {cell.beds + " bds | " + cell.baths + " bths | lot area: " + cell.lotArea}
                        </p>
                        
                    </a>
                ))}
            </div>
            
        </div>
    )
}

export default HomePage;