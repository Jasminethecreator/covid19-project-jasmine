import React, {useState} from 'react'
import data from "../data/data.json"

import styled from 'styled-components';


export const TableData = styled.table`

border-collapse: collapse;
// width: 100%;

th {
    background-color: #EDEDF2;
     text-align:center;
    color: #111113;
  }



th,td {
    text-align: center;
    padding: 8px;
    font-size: 12px 15px;
    white-space: nowrap
  }


  td {
    border-bottom: 1px  solid rgb(18, 18, 19);
   
    }  

`
// import data , then import useState, initizie use state hook 
// (storing data in state with used state hook)
// render the table row with data - map function

function Examtable() {
const [exams, setExams] = useState(data);
  return (
    <div>
        <h1>Exam list</h1>
{/* // add exam list header in th element */}
        <table>
            <thead>
                <tr>
                    <th>Paitient ID</th>
                    <th>Exam ID</th>
                    <th>Image </th>
                    <th>Key Findings</th>
                    <th>Brixia Scores</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>BMI</th>
                    <th>Zipcode</th>
                </tr>
            </thead>

            <tbody>
            {/* enter exam content, enter 9 rows */}
            {/* map function */}
                 {exams.map ((exam)=> (
                     <tr>
                     <td id = "paitent-id">{exam.patientId}</td>
                     <td>{exam.examId}</td>
                     <td><img src={exam.xrayLink} width="180" hieght="180"/> </td>
                     <td> {exam.keyFindings}</td>
                     <td>{exam.latestHeight}</td>
                     <td>{exam.age}</td>
                     <td>{exam.sex}</td>
                     <td>{exam.latestBmi}</td>
                     <td>{exam.zipcode}</td>
                    
                 </tr>
                 
                ))}

                
            </tbody>
        </table>

    </div>
  
  )
}

export default Examtable;