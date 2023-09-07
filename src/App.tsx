// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import HousePage from './pages/house';

function App() {

  let housePages = [];
  const houseAmount = 20 as number; // change to import from csv len

  for (let houseNum = 1 as number; houseNum <= houseAmount; houseNum++) {
    let urlString = "house" as string;
    let numLen = 2 - String(houseNum).length as number;
    
    for(let i = 0; i < numLen; i++) {
        urlString += "0";
    }

    urlString += String(houseNum);
    housePages.push({
      pageid: houseNum,
      houseid: urlString
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        {housePages.map((page) => (
          <Route path={`/${page.houseid}`} key={page.pageid} element={<HousePage houseNumber = {page.pageid}/>} />
        ))}
      </Routes>
    </BrowserRouter>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
