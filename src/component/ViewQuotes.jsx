import React from 'react'
import NavBar from './NavBar'

const ViewQuotes = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>LIST OF QUOTES</center></h1>
        <br />
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">quotes</th>
      <th scope="col">author</th>
      <th scope="col">description</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
    <td>Thornton</td>
    <td>@fat</td>
    <td>@twitter</td>
    </tr>
  </tbody>
</table>
                    </div>
    </div>
  </div>
  </div>
  )
}


export default ViewQuotes