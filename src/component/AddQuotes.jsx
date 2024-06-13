import React, { useState } from 'react'
import NavBar from './NavBar'

const AddQuotes = () => {
    const[data,setdata]=useState(
        {
            "quotes":"",
            "author":"",
            "description":""
            

        }
    )
    const inputHandler =(event)=>{
        setdata({...data,[event.target.name]: event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
    }
  return (
    <div>
        <h1><center>ADD QUOTES</center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">QUOTES </label>
                    <input type="text" className="form-control" name='quotes' value={data.quotes} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">AUTHOR</label>
                    <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">DESCRIPTION</label>
                    <input type="text" className="form-control"  name='description' value={data.description} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>ADD</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddQuotes