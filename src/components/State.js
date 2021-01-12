import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap';

function State() {
  const [statedata, setStateData] = useState({});

  useEffect(()=>{
    axios.get("https://api.covid19india.org/state_district_wise.json").then((response)=>{
      setStateData(response.data)
    })
  });
  let states = Object.keys(statedata)
  return(
    <div className="row">
      <div className="col-md-12">
        <Accordion defaultActiveKey="0">
          {
            states.map((state,k)=>{
              let districts = statedata[state].districtData;

              let total_active = 0;
              let total_confirmed = 0;
              let total_recovered = 0;
              let total_deaths = 0;

              let district_list = [];
              for(let x in districts){
                total_active += districts[x].active;
                total_confirmed += districts[x].confirmed;
                total_recovered += districts[x].recovered;
                total_deaths += districts[x].deceased;
                let ob = districts[x];
                ob["district_name"] = x;
                district_list.push(ob);
              }
              
              return(
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="primary" eventKey={k}>
                      {state} - <span className="btn-dark p-1 mr-2">Total Cases: {total_confirmed}</span> <span className="btn-dark p-1 mr-2">Active: {total_active}</span> <span className="btn-dark p-1 mr-2">Recovered: {total_recovered}</span> <span className="btn-dark p-1 mr-2">Deaths: {total_deaths}</span>  
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={k}>
                    <Card.Body>
                      <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <td>District</td>
                            <td>Confirmed</td>
                            <td>Active</td>
                            <td>Recovered</td>
                            <td>Death</td>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            district_list.map((itm,key)=>{
                              return(
                                <tr>
                                  <td>{itm.district_name}</td>
                                  <td>{itm.confirmed}</td>
                                  <td>{itm.active}</td>
                                  <td>{itm.recovered}</td>
                                  <td>{itm.deceased}</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })
          }
        </Accordion>
      </div>
    </div>
  );
}

export default State;