import { useEffect, useState } from "react";
import Table from "./components/table.component";
import axios from 'axios'
import MoviesData from './movies.json'

const App = () => {
  


  const [allMovieLength, setAllMovieLength] = useState(MoviesData.items.length)

  const [totalLength, setTotalLength] = useState(10)
  const [from,setFrom] = useState(0)
  const [to , setTo ] = useState(totalLength)

  
  const [data , setData ] = useState(MoviesData.items.slice(from,to))


  const changeLengthHandle = (event) => {
      let len = event.target.value

      if(len === "all"){
        setData(MoviesData.items.slice(from,allMovieLength))
        setTotalLength(allMovieLength)
      }else{
        setData(MoviesData.items.slice(from,len))
        setTotalLength(len)
      }
      
  }

  const dataFilterHandle = (event) => {
    let label = "id"
    let keyword = event.target.value
    if(keyword === ''){
      setData(MoviesData.items.slice(from,to))
      setAllMovieLength(MoviesData.items.length)
      setTotalLength(10)
    }else{
      let filterData = MoviesData.items.filter((obj) => obj[label] == keyword)
      setData(filterData.slice(from , to ))
      setAllMovieLength(filterData.length)
      setTotalLength(filterData.length)
    }
    
    
    
  }
  


  return (
    <div className="container mt-5">
      <div className="row ">
        <h3 className="text-center">Movies List</h3>
      </div>
      <div className="row ">
        <div className="col-6">
          <select onClick={changeLengthHandle}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={"all"}>All</option>
          </select>
        </div>

        <div className="col-6 ">
          <input type="text" onChange={dataFilterHandle}  className="float-end"/>
        </div>

      </div>
      <div className="row mt-5">
        <div className="col-md-12 mx-auto">
          <Table
            data = {data}
            columns = { 
                        [ 
                          {label : "Id", path:"id",content : (item,path) => <td key={item[path]} className="align-middle">{item[path]}</td>} ,
                          {label : "Image", path:"image",content : (item,path) => <td key={item[path]}><img src={item[path]} className="img-fluid" /></td>}, 
                          {label : "Title", path:"fullTitle",content : (item,path) => <td key={item[path]} className="align-middle">{item[path]}</td>} ,
                          {label : "Rating", path:"imDbRating",content : (item,path) => <td key={item[path]} className="align-middle">{item[path]}</td>} ,
                          {label : "Votes", path:"imDbRatingCount",content : (item,path) => <td key={item[path]} className="align-middle">{item[path]}</td>} ,
                        ]
                      }
          />
        </div>
        <div className="col-md-12">
          <p>Show {totalLength} in total {allMovieLength}</p>
        </div>
        <div className="col-md-12 mx-auto">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App;