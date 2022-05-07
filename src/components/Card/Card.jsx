import { CardStyle } from "./CardStyles"
import { WrapStyle } from "./WrapStyle"

export const Cards = ({tools}) => {
    return(           
        <WrapStyle>
                {
                    tools.map((element, item)=>{
                        return(
                            <CardStyle key={item}> 
                                <div className="card-title">
                                    <h1><a href={element.link} target="_blank">{element.title}</a></h1>
                                    <button id={element.id}>x remove</button>
                                </div>
        
                                <div className="card-description">
                                    <p>{element.description}</p>
                                </div>
                                    
                                <div className="card-tags">
                                    <p>{element.tags.map((tagItem)=> {return `#${tagItem} `})}</p>
                                </div>
                        </CardStyle>
                        )
                    })
                }
        </WrapStyle>
    )
}