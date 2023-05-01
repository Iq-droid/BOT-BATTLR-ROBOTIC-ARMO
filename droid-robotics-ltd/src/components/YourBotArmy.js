import React, { Component } from "react";

class YourBotArmy extends Component {
  handleRemoveBotFromArmy = (id) => {
    const { removeBotFromArmy } = this.props;
    removeBotFromArmy(id);
  };

  handleDischargeBot = (id) => {
    const { dischargeBot } = this.props;
    dischargeBot(id);
  };

  render() {
    const { army } = this.props;

    return (
      <div>
        <h2>Your Bot Army</h2>
        <div className="bot-collection">
          {army.map((bot) => (
            <div key={bot.id} className="bot-card">
              <img src={bot.avatar_url} alt={bot.name} />
              <h2>{bot.name}</h2>
              <p>{bot.catchphrase}</p>
              <button onClick={() => this.handleRemoveBotFromArmy(bot.id)}>
                Remove from Army
              </button>
              <button onClick={() => this.handleDischargeBot(bot.id)}>
                Discharge
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YourBotArmy;