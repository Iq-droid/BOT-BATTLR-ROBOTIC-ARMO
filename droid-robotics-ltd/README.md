<!-- Bot Battlr App -->
Welcome to Bot Battlr, the web app where you can build and manage your bot army. This is a React application that allows you to view a list of available bots and enlist them into your army. You can also release a bot from your army or delete it permanently.

<!-- Table of Contents -->
Technologies Used
Installation and Usage
Features
Contributing
License




<!-- Technologies Used -->
The technologies used to build this app include:

ReactJS
HTML
CSS
JavaScript



<!-- Installation and Usage -->
To get started with Bot Battlr, follow the instructions below:

Clone this repository by running the following command in your terminal:
bash
Copy code
git clone https://github.com/Iq-droid/bot-battlr.git
Install the dependencies:
Copy code
npm install
Start the development server:
sql
Copy code
npm start
In a separate terminal, run the following command to start the backend server:
css
Copy code
json-server --watch db.json
Test your server by visiting the following route in your browser:
bash
Copy code
http://localhost:8001/bots
This should display a JSON response containing a list of bots.

<!-- Features -->
As a user, you can:

View all the bots rendered in BotCollection
Add an individual bot to your army by clicking on it. The selected bot will render in the YourBotArmy component. The bot can be enlisted only once.
Release a bot from your army by clicking on it. The bot will disappear from the YourBotArmy component.
Discharge a bot from your service forever by clicking the red button marked "x", which will delete the bot both from the backend and from the YourBotArmy on the frontend.
Choose to view the detailed specifications of a bot by clicking on the bot card in BotCollection. This will display the BotSpecs component with a button to go back to the list view and another button to enlist that bot into your army.
Contributing
If you would like to contribute to the development of Bot Battlr, please contact the developer at iqra.ali@student.moringaschool.com. Suggestions and feedback are welcome.


<!-- License -->
This project is licensed under the MIT License.


<!-- Resources -->
React documentation
JSON Server documentation











































   




<!-- App.js with error handling function -->
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [filterType, setFilterType] = useState(null);

  const handleEnlistBot = (bot) => {
    const botClass = bot.class;
    const isClassAlreadyEnlisted = botArmy.some(b => b.class === botClass);

    if (!isClassAlreadyEnlisted) {
      setBotArmy([...botArmy, bot]);
    } else {
      alert(`You've already enlisted a bot from the ${botClass} class`);
    }
  };

  const handleRemoveBot = (bot) => {
    const updatedBotArmy = botArmy.filter(b => b.id !== bot.id);
    setBotArmy(updatedBotArmy);
  };

  const handleDeleteBot = async (bot) => {
    try {
      await fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' });
      handleRemoveBot(bot);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:8001/bots');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBots();
  }, []);

  const filteredBots = filterType
    ? bots.filter(bot => bot.class === filterType)
    : bots;

  const sortedBots = sortType
    ? filteredBots.sort((a, b) => b[sortType] - a[sortType])
    : filteredBots;

  return (
    <div className="App">
      <h1>Bot-O-Mat</h1>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onGoBack={handleGoBack} onEnlist={handleEnlistBot} />
      ) : (
        <>
          <FilterBar onFilter={handleFilter} />
          <SortBar onSort={handleSort} />
          <BotCollection bots={sortedBots} onBotSelect={setSelectedBot} onEnlist={handleEnlistBot} />
          <YourBotArmy botArmy={botArmy} onRemove={handleRemoveBot} onDelete={handleDeleteBot} />
        </>
      )}
    </div>
  );
}

export default App;



















<!-- Carousel -->
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg',
    'https://example.com/image7.jpg',
    'https://example.com/image8.jpg',
    'https://example.com/image9.jpg',
    'https://example.com/image10.jpg',
    'https://example.com/image11.jpg',
    'https://example.com/image12.jpg',
    'https://example.com/image13.jpg',
    'https://example.com/image14.jpg',
    'https://example.com/image15.jpg',
    'https://example.com/image16.jpg',
    'https://example.com/image17.jpg',
    'https://example.com/image18.jpg',
    'https://example.com/image19.jpg',
    'https://example.com/image20.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className={index === currentImage ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Carousel;


<!-- Carousel CSS -->
Here's an example of CSS code to achieve the requested effect:

.carousel img {
position: absolute;
top: 0;
left: 0;
opacity: 0;
transition: all 0.6s ease-in-out;
transform: scale(0.5) rotate(0deg);
}

.carousel img.active {
opacity: 1;
transform: scale(1.2) rotate(360deg);
}

This CSS code targets all images inside the .carousel container and sets them to position: absolute, so they can be positioned on top of each other. Then, it sets their opacity to 0 and adds a transition effect for all properties that will be changed when an image becomes active. The transform property sets the initial scale and rotation of the images.

When an image becomes active, the .active class is added to it. This class sets the opacity to 1 and changes the scale to 1.2 and the rotation to 360 degrees, resulting in a zoom-in and a 360-degree rotation effect.



<!-- Epic carousel effects -->
.carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.carousel img {
  width: 100%;
  height: auto;
  transition: transform 1s ease-in-out;
}

.carousel img.active {
  animation: zoom-rotate 1s ease-in-out;
  transform: scale(2);
}

.carousel .column1 img.active {
  filter: grayscale(100%);
}

.carousel .column2 img.active {
  filter: brightness(150%);
}

.carousel .column3 img.active {
  filter: contrast(150%);
}

.carousel .column4 img.active {
  filter: sepia(100%);
}

.carousel .column5 img.active {
  filter: hue-rotate(90deg);
}

@keyframes zoom-rotate {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(2) rotate(360deg);
  }
}




<!-- another carousel -->
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg',
    'https://example.com/image7.jpg',
    'https://example.com/image8.jpg',
    'https://example.com/image9.jpg',
    'https://example.com/image10.jpg',
    'https://example.com/image11.jpg',
    'https://example.com/image12.jpg',
    'https://example.com/image13.jpg',
    'https://example.com/image14.jpg',
    'https://example.com/image15.jpg',
    'https://example.com/image16.jpg',
    'https://example.com/image17.jpg',
    'https://example.com/image18.jpg',
    'https://example.com/image19.jpg',
    'https://example.com/image20.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className={index === currentImage ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Carousel;



<!-- The Card Full Component -->
also provide a css file to style the photos to fill in the card in a horizontal manner for the card component below, also update the card component: Here's an example of a Card component that contains the name of an e-commerce webapp and photos of happy customers who shop online:

ChatGPT
Sure, here's an updated Card component with CSS to style the photos in a horizontal manner to fill in the card:

Card.js:

javascript
Copy code
import React from 'react';
import './Card.css';

const Card = () => {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://example.com/customer1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://example.com/customer2.jpg',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      photo: 'https://example.com/customer3.jpg',
    },
    {
      id: 4,
      name: 'Alice Williams',
      photo: 'https://example.com/customer4.jpg',
    },
  ];

  return (
    <div className="card">
      <h2 className="title">Welcome to our e-commerce webapp!</h2>
      <div className="customer-photos">
        {customers.map((customer) => (
          <img
            key={customer.id}
            src={customer.photo}
            alt={`photo-${customer.id}`}
            className="customer-photo"
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
Card.css:

css
Copy code
.card {
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.customer-photos {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}

.customer-photo {
  width: calc(25% - 10px);
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 5px;
}
This CSS code will make the photos fill in the card in a horizontal manner with a gap of 10px between each photo, and each photo will have a border radius of 5px.




