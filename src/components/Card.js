import React from 'react';

const Card = ({data}) => {
   
    return (
        <div>
            {data.map((item) => {
               return (
                   <div className="card">
                       <img src={item.logo} alt="logo"/>
                        <div className="innerCard">
                            <div className="company">
                                <p>{item.company}</p>
                            </div>
                            
                            <h2 className="position">{item.position}</h2>
                            <div className="lowerCard">
                                <p className="pcl">{item.postedAt}</p>
                                <p className="pcl">{item.contract}</p>
                                <p className="pcl">{item.location}</p>
                            </div>
                        
                        </div>
                        <div className="lang">
                            <p className="programlangs">{item.languages[0]}</p>
                            <p className="programlangs">{item.languages[1]}</p>
                            <p className="programlangs">{item.languages[2]}</p>
                            <p className="programlangs">{item.languages[3]}</p>
                        </div>
                        <div>
                            
                               
                            
                        </div>
               
                   </div>

               ) 
            })}

        </div>
        
    )
}

export default Card;