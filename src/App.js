import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import React, {useEffect, useState} from "react"
import { Card } from './components/Card/Card';
import { Search } from './components/Search/Search'



function App() {
  let [fetchedData, setFetchedData] = useState([]);
  let {info,results} = fetchedData
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("")
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchedData(data)
    })();
  }, [api])
  
  return (
    <div className = "App">
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
      <div className="row">
        Filter component will be placed here
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results = {results}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
