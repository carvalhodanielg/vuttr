import { api } from "../../services/api"
import { RemoveButtonStyle } from "./RemoveButtonStyle"

export const RemoveButton = ({id, setToolsGet}) => {

  const getData = async () => {
    await api.get("/tools")
    .then((response) => setToolsGet(response.data))
    .catch((err) => {
    console.error("Deu ruim" + err);
    }); 
}

const HandleRemoveButton = async () => {
    await api.delete(`/tools/${id}`)
    .then((response) => {
    console.log(response)
    getData();
    })
    .catch((err) => {
    console.error("Deu ruim o delete" + err);
    });    
}

    return(
        <RemoveButtonStyle onClick={HandleRemoveButton}>X Remove</RemoveButtonStyle>
    )
}