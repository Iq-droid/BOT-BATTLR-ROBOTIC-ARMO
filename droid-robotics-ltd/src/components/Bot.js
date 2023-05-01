import React from "react";

function Bot({ bot, addBotToArmy }) {
const handleAddBotToArmy = () => {
addBotToArmy(bot);
};

return (
<div className="bot-card">
<img src={bot.avatar_url} alt={bot.name} />
<h2>{bot.name}</h2>
<p>{bot.catchphrase}</p>
<button onClick={handleAddBotToArmy}>Enlist</button>
</div>
);
}

export default Bot;