import React, { useEffect, useState } from 'react';
import axios from 'axios';

function World() {
  const [data, setData] = useState([]);
  useEffect(()=>{ 
    axios.get("https://corona.lmao.ninja/v2/countries").then((response)=>{
      setData(response.data);
    });
  })

  return(
    <div className="row">
    
      <div className="col-md-12">
        <table className="table table-primary table-bordered table-striped">
          <thead>
            <tr>
              <td>Country</td>
              <td>Total Cases</td>
              <td>Recovered</td>
              <td>Death</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,key)=>{
                return(
                  <tr>
                    <td>{item.country}
                      <img alt="" style={ {width:'64px', marginLeft: '10px'} } src={item.countryInfo.flag}/>
                    </td>
                    <td>{item.cases}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default World;