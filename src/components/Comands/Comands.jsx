import { ComandStyle } from "./ComandsStyle"


export const Comands = ({toolsAdd, setToolsAdd}) => {

    

    const toogle = ()=>{
        console.log(toolsAdd)
        setToolsAdd(!toolsAdd)
    }


    return(
        <section>
 
            <ComandStyle>
                <div className="comands-wrapper">
                    <div>
                        <input type="text" placeholder="search"/>
                        <input type="checkbox" name="searchCheckbox"/>
                        <label htmlFor="searchCheckbox">search in tags only</label>
                    </div>

                    <div>
                        <button onClick={toogle}>+ Add</button>
                    </div>
                </div>
              
            </ComandStyle>
                

        </section>
    )

}