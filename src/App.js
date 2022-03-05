import './App.css';
import Examtable from './components/Examtable';
import styled from 'styled-components'; 
import { TableData } from './components/Examtable';


const MainWrapper = styled.div `

display: flex;
flex-direction: column;
gap: px;
padding: 1rem;

`

function App() {
  return (
    // <div className="app-container ">
      
<MainWrapper>
  <TableData>
          <Examtable/>
    </TableData>
</MainWrapper>
     

  );
}

export default App;
