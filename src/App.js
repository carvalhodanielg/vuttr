import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

import {api} from './services/api'

import Header from './components/Header';
import Comands from './components/Comands';
import MainContainer from './components/Container';

function App() {


const [toolsGet, setToolsGet] = useState();
const [toolsPost, setToolsPost] = useState();
const [toolsDelete, setToolsDelete] = useState();

const deleteTool = (id) => {
  api
  .delete(`/tools/${id}`)
  .then((response) => setToolsDelete(response.data))
  .catch((err) => {
    console.error("Deu ruim no delete" + err);
  });

  console.log(toolsGet)
}


useEffect(() => {
  const getData = async () => {
    await api.get("/tools")
      .then((response) => setToolsGet(response.data))
      .catch((err) => {
      console.error("Deu ruim" + err);
    });


  }
getData();

      

  // api.post("/tools",
  // {
  //   "title": "hotel",
  //   "link": "https://github.com/typicode/hotel",
  //   "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
  //   "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
  // })
  //     .then((response)=>setToolsPost(response.data))
  //     .catch((err)=>{
  //       console.error("Erro no post"+err)
  //     });    

}, []);

  return (
    <div className="App">
      
      
        
        <Header></Header>
        <Comands></Comands>


        {toolsGet !== null &&
        <MainContainer tools={toolsGet}></MainContainer>
        }

      



    </div>
  );
}

export default App;
