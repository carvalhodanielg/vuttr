import { CardStyle } from "./CardStyles"

export const Cards = ({tools}) => {




    return(

            <CardStyle> 
                <div className="card-title">
                    <h1>{tools[0].title}</h1>
                    <button>x remove</button>
                </div>

                <div className="card-description">
                    <p>All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.</p>
                </div>

                <div className="card-tags">
                    <p>#organization #planning #collaboration #writing #calendar</p>
                </div>
                
                
            </CardStyle>

    )

}