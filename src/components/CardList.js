import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    //when you do loops, always give it a unique prop
    //to minimize work done by the virtual DOM
    return(
        <div>
          {
            robots.map((user, i) => {
                return (
                    <Card 
                      key={i} 
                      id={robots[i].id} 
                      name={robots[i].name} 
                      email={robots[i].email}
                      />
                    );
                  })
          }
        </div>
    );
}

export default CardList;