import { ComandStyle } from "./ComandsStyle"


export const Comands = () => {
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
                        <button>+ Add</button>
                    </div>
                </div>
              
            </ComandStyle>
                

        </section>
    )

}