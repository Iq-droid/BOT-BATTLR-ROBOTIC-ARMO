import React, { Component } from "react";
import BotCollection from './BotCollection';
import BotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';
import "../components/Bot.css";


class BotsPage extends Component {
    state = {
    botCollection: [],
    filteredCollection: [],
    botArmy: [],
    collectionVisible: true,
    botSpecs: {},
  }

  componentDidMount() {
    fetch('https://bota.onrender.com/bots')
      .then(response => response.json())
      .then(bots => this.setState({ botCollection: bots, filteredCollection: bots }))
      .then(console.log("Bots Fetched!"))
  }

  addToArmy = (bot) => {
    const newCollection = this.state.filteredCollection.filter(card => card.bot_class !== bot.bot_class)
    this.setState({
      filteredCollection: newCollection,
      botArmy: [...this.state.botArmy, bot],
      collectionVisible: true,
    })
  }

  removeFromArmy = (bot) => {
    const newArmy = this.state.botArmy.filter(card => card.id !== bot.id)
    const armyClasses = newArmy.map(bot => bot.bot_class)
    const newCollection = this.state.botCollection.filter(bot => {
      console.log("Filter:", !armyClasses.includes(bot.bot_class))
      return !armyClasses.includes(bot.bot_class)
    })
    console.log("newCollection", newCollection)

    this.setState({ botArmy: newArmy, filteredCollection: newCollection })
  }

  removeBotPermanently = (bot) => {
    let newCollection = this.state.botCollection.filter(card => card !== bot)
    let newFilteredCollection = this.state.filteredCollection.filter(card => card !== bot)
    let newArmy = this.state.botArmy.filter(card => card !== bot)

    this.setState({ botCollection: newCollection, filteredCollection: newFilteredCollection, botArmy: newArmy })

    fetch(`https://bota.onrender.com/bots/${bot.id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(result => console.log(result))
  }

  displayBotSpecs = (bot) => {
    this.setState({ collectionVisible: false, botSpecs: bot })
  }

  displayBotCollection = () => {
    this.setState({ collectionVisible: true })
  }

  render() {
    const { filteredCollection, botArmy, botSpecs, collectionVisible } = this.state

    return (
        
      <div>
        <BotArmy
          bots={botArmy}
          action={this.removeFromArmy}
          removeCard={this.removeBotPermanently} />
        {collectionVisible
          ? < BotCollection
            botCollection={filteredCollection}
            action={this.displayBotSpecs}
            removeCard={this.removeBotPermanently} />
          : < BotSpecs
            bot={botSpecs}
            back={this.displayBotCollection}
            enlist={this.addToArmy} />
        }
      </div>
    )
  }
}

export default BotsPage;