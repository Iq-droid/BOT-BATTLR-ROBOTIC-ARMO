import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  const addBotToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  const removeBotFromArmy = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== id));
        setArmy(army.filter((bot) => bot.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Bot Army Manager</h1>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      <YourBotArmy army={army} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;