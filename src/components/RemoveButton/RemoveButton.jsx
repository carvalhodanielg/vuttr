import { api } from "../../services/api"
import { RemoveButtonStyle } from "./RemoveButtonStyle"

export const RemoveButton = ({id}) => {
    
    
    const HandleRemoveButton = async () => {
        await api.delete(`/tools/${id}`)
          .then((response) => {console.log(response)})
          .catch((err) => {
          console.error("Deu ruim o delete" + err);
        });
}


    return(
        
        <RemoveButtonStyle onClick={HandleRemoveButton}>X Remove</RemoveButtonStyle>
        
    )
}