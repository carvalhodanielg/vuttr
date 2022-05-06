import { useState } from "react"
import { ModalStyles } from "./ModalStyles"
import { api } from "../../services/api"

const nameInput = document.getElementById('toolName')
const linkInput = document.getElementById('toolLink')
const descriptionInput = document.getElementById('toolDescription')
const tagsInput = document.getElementById('toolTags')


export const Modal = ({toolsAdd, setToolsAdd, setToolsGet})=> {

    const [newTool, setNewTool] = useState({"title": "title 1"});

    const sendTools = async () => {
            await api.post("/tools", newTool)
              .then((response) => {console.log(response)})
              .catch((err) => {
              console.error("Deu ruim" + err);
            });
        
    }



    const toogle = ()=>{
         setToolsAdd(!toolsAdd);
    }


    const handleAddButton = (event) => {
        event.preventDefault();

        console.log(newTool);
        sendTools();
        toogle(); //fecha o modal
    }


    const handleChangeName = (event) => {
        setNewTool(newTool => ({...newTool, title: event.target.value}));
        // console.log(newTool);
    }

    const handleChangeLink = (event) => {
        setNewTool(newTool => ({...newTool, link: event.target.value}));
        // console.log(newTool);
    }
   

    const handleChangeDescription = (event) => {
        setNewTool(newTool => ({...newTool, description: event.target.value}));
        // console.log(newTool);
    }

    const handleChangeTags = (event) => {
        setNewTool(newTool => ({...newTool, tags: event.target.value.split(" ")}));
        // console.log(newTool);
    }


    return(
       <ModalStyles>

           <div className="modal-box">
                <div>
                    <h1>+ Add new tool</h1>
                </div>

                <div>
                    <form>
                        <label htmlFor="toolName">Tool Name</label>
                        <input type="text" name="toolName" id="toolName" placeholder="Notion" onChange={handleChangeName}/>

                        <label htmlFor="toolLink">Tool Link</label>
                        <input type="text" name="toolLink" id="toolLink" placeholder="https://..." onChange={handleChangeLink} />

                        <label htmlFor="toolDescription">Tool description</label>
                        <textarea type="text-area" name="toolDescription" id="toolDescription" rows= "5" cols="30" placeholder="https://..." onChange={handleChangeDescription} />

                        <label htmlFor="toolTags">Tags</label>
                        <input type="text" name="toolTags" id="toolTags" placeholder="node organizing time development ..." onChange={handleChangeTags} />

                        <button id="addButton" type="submit" onClick={handleAddButton}>Add tool</button>

                    </form>
                </div>
                
           </div>
           
       </ModalStyles>
    )
}