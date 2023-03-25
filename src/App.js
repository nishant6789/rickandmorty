import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Card } from './components/Card/Card';
import { Search } from './components/Search/Search'
import { Pagination } from './components/Pagination/Pagination';
import { Filter } from './components/Filter/Filter'
import { Episodes } from './Pages/Episodes';
import { Location } from './Pages/Location';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let {info,results} = fetchedData
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchedData(data)
    })();
  }, [api])
  
  return (
    <>
    <div className = "App">
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
      <div className="row">
        <Filter pageNumber={pageNumber} status={status} setPageNumber={setPageNumber} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies}/>
        <div className="col-lg-8 col-16">
          <div className="row">
            <Card results = {results}/>
          </div>
        </div>
      </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />

    </div>
    </>
  );
}

export default App;
