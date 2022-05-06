import { ModalStyles } from "./ModalStyles"

export const Modal = ({toolsAdd, setToolsAdd})=> {


    const toogle = ()=>{
        console.log(toolsAdd)
        setToolsAdd(!toolsAdd)
    }

    return(
       <ModalStyles>

           <div className="modal-box">
                <h1>haahhaha</h1>
                <button onClick={toogle}>close</button>
           </div>
           
       </ModalStyles>
    )
}