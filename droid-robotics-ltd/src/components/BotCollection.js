import React from 'react';
import BotCard from "../components/BotCard";



function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => {
    return <BotCard bot={bot} action={action} removeCard={removeCard} />
  })

  return (
   <div id='card'>
      <div className="row">
        {displayBotCards}
      
      </div>
    </div>
  )
}
export default BotCollection;