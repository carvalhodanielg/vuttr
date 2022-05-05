import { Cards } from "../Card/Card"
import { ContainerStyle } from "./ContainerStyle"


export const MainContainer = ({tools}) => {
   
   
    return(
        
        <ContainerStyle>
            
            <Cards tools={tools}></Cards>
        </ContainerStyle>
    )

}