import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

import {api} from './services/api'

import Header from './components/Header';
import Comands from './components/Comands';
import MainContainer from './components/Container';

function App() {


const [toolsGet, setToolsGet] = useState();
const [toolsAdd, setToolsAdd] = useState(false);



useEffect(() => {
  const getData = async () => {
    await api.get("/tools")
      .then((response) => setToolsGet(response.data))
      .catch((err) => {
      console.error("Deu ruim" + err);
    });

  }
getData();

}, []);

  return (
    <div className="App">
      
      
        
        <Header></Header>
        <Comands toolsAdd={toolsAdd} setToolsAdd={setToolsAdd}></Comands>
        {toolsAdd &&
          <div className='modal'>

          </div>
        }


        {toolsGet !== undefined &&
        <MainContainer tools={toolsGet}></MainContainer>
        }

    </div>
  );
}

export default App;
