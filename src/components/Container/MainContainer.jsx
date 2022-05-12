import { Cards } from "../Card/Card"
import { ContainerStyle } from "./ContainerStyle"


export const MainContainer = ({tools, setToolsGet}) => {
   
    return(
        <ContainerStyle> 
            <Cards tools={tools} setToolsGet={setToolsGet}></Cards> 
        </ContainerStyle>
    )
}