import './App.css';
import { useState, useEffect } from 'react'

import {api} from './services/api'

import Header from './components/Header';
import Comands from './components/Comands';
import MainContainer from './components/Container';
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper';
import { Modal } from './components/Modal/Modal';

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

}, [toolsGet]);

  return (
    <div className="App">
      
            {toolsAdd &&
                <Modal toolsAdd={toolsAdd} setToolsAdd={setToolsAdd} setToolsGet={setToolsGet} ></Modal>
            }
         <ContentWrapper>
              <Header></Header>
              <Comands toolsAdd={toolsAdd} setToolsAdd={setToolsAdd}></Comands>
              {toolsGet !== undefined &&
              <MainContainer tools={toolsGet}></MainContainer>
              }
        </ContentWrapper>
        
    </div>
  );
}

export default App;
