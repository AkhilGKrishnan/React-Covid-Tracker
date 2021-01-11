import React, { useEffect, useState}  from 'react';
import {Card} from 'react-bootstrap';
import State from './State';
import axios from 'axios';

function India() {
  const [data, setData] =  useState({});
  useEffect(()=>{ 
    axios.get("https://corona.lmao.ninja/v2/countries/india").then((response)=>{
      setData(response.data);
    });
  });

  return(
    <div className="row">
      <div className="col-md-12">
        <h3>INDIA</h3>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <Card className="badge badge-primary" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Card.Title>TOTAL CASES</Card.Title>
                <h3>{data.cases}</h3>
                <Card.Text>
          
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="badge badge-warning" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Card.Title>ACTIVE CASES</Card.Title>
                <h3>{data.active}</h3>
                <Card.Text>
              
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="badge badge-success" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Card.Title>RECOVERY CASES</Card.Title>
                <h3>{data.recovered}</h3>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="badge badge-danger" style={{ width: '18rem' }}>
              <Card.Body className="text-center">
                <Card.Title>DEATH CASES</Card.Title>
                <h3>{data.deaths}</h3>
                <Card.Text>
                
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <State/>
      </div>

    </div>
  );
}

export default India;