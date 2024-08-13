

# Mystery Room Finder Game

### Introduction

Welcome to the Mystery Room Finder Game repository! This interactive, web-based game challenges players to find hidden items within various themed rooms under a time constraint. Designed to test observation skills and speed, the game provides a dynamic and engaging user experience. Built with JavaScript, HTML, and CSS, it offers immersive gameplay with a focus on object-oriented programming principles.

Game: [Mystery Room Finder](https://htmlpreview.github.io/?https://github.com/Katterina71/Mystery-Room-Finder/blob/main/index.html)

### Technology Stack

- **HTML**: Structures the game's frontend interface.
- **CSS**: Styles the visual elements, ensuring a responsive and visually appealing layout.
- **JavaScript**: Powers the game's logic, event handling, and dynamic content generation.

### Features

- **Dynamic Room Generation**: Utilizes JavaScript classes to create varied game environments.
- **Real-time Item Searching**: Challenges players to find items quickly, with a timer counting down.
- **Score Tracking**: Calculates scores based on how quickly players find items, with bonuses for speed.
- **Responsive Design**: Ensures the game is playable on various devices and screen sizes.
- **Interactive UI Elements**: Players interact through clicks and taps, with visual feedback for actions.

### Game Components

- `Room`: Class that defines the properties of a room, including name and associated items.
- `RoomList`: Manages all room instances within a house, allowing dynamic creation and retrieval of rooms.
- `Player`: Handles player data, including scores, found items, and total playtime.

### Setup and Installation

1. **Clone the repository:**
    
    ```bash
    bashCopy code
    git clone https://github.com/yourusername/mystery-room-finder.git
    
    ```
    
2. **Navigate to the project directory:**
    
    ```bash
    bashCopy code
    cd mystery-room-finder
    
    ```
    
3. **Open the game:**
Open the `index.html` file in your browser to start playing.

### How to Play

- **Start the Game**: Click the "Start Game" button to enter the first room.
- **Find Items**: Look for items listed at the top of the screen. Click on items within the room image that match the description.
- **Score Points**: The faster you find items, the more points you earn.
- **Advance to Next Room**: After finding all items in a room, proceed to the next room by clicking "Next Room".
- **Game Over**: The game ends when all rooms are cleared or when the timer runs out.

### API Documentation

This project does not connect to external APIs but manages its internal state and data through JavaScript classes and local storage for session persistence.

### Contributing

We welcome contributions to the Mystery Room Finder Game! Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

### License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

### Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

This structured description aims to provide a comprehensive overview of the game while making it easy for other developers to understand, set up, and contribute to the project.
