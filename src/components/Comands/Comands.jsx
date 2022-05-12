import { useState } from "react"
import { api } from "../../services/api";
import { ComandStyle } from "./ComandsStyle"
import addIcon from '../../assets/add-icon.svg'
import closeIcon from '../../assets/close-icon.svg'

export const Comands = ({toolsAdd, setToolsAdd, toolsGet, setToolsGet}) => {

    const [filteredTools, setFilteredTools] = useState();
    const [tagStatus, setTagStatus] = useState(false);
    
    const toogle = ()=>{
        setToolsAdd(!toolsAdd)
    }

    
    const filter = async(e)=>{
        
        if(tagStatus){
            
            await api.get(`/tools?tags_like=${e.target.value}`)
            .then((response) => setToolsGet(response.data))
            .catch((err) => {
            console.error("Deu ruim" + err);
          });

        }else{
            await api.get(`/tools?q=${e.target.value}`)
            .then((response) => setToolsGet(response.data))
            .catch((err) => {
            console.error("Deu ruim" + err);
          });

        }
    }


    return(
        <section>
            <ComandStyle>
                <div className="comands-wrapper">
                    <div>
                        <input type="text" placeholder="search" onChange={filter} />
                        <input type="checkbox" name="searchCheckbox" onChange={()=>setTagStatus(!tagStatus)} checked={tagStatus}/>
                        <label htmlFor="searchCheckbox">search in tags only</label>
                    </div>

                    <div>
                        <button onClick={toogle}> <img src={closeIcon} alt=" " /> Add</button>
                    </div>
                </div> 
            </ComandStyle>
        </section>
    )
}