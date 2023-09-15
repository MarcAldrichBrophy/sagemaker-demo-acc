import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import HousePage from './pages/house';

import jsonData from './assets/fullData';

function App() {
  
  let housePages: any[] = [];
  for(let rowNum = 1; rowNum <= jsonData.length; rowNum++) {

    let urlString: string = "house" as string;
    let numLen = 2 - String(rowNum).length as number;
    for(let i = 0; i < numLen; i++) {
      urlString += "0";
    }
    urlString += rowNum

    housePages.push({
      pageid: rowNum,
      houseid: urlString,
      beds: jsonData[rowNum - 1]["BedroomAbvGr"],
      baths: jsonData[rowNum - 1]["FullBath"]
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        {housePages.map((page) => (
          <Route 
          path={`/${page.houseid}`} 
          key={page.pageid} 
          element={
          <HousePage 
            houseNumber = {page.pageid} 
            beds = {page.beds} 
            baths = {page.baths}/>}/>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
