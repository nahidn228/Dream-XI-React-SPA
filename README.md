# BPL-DREAM 11

## Live Link: [BPL-DREAM 11](https://dream-xi.surge.sh/)


BPL-DREAM 11 is a React-based web application where users can manage and select their dream cricket team. Built this app replicates the thrill of forming a cricket team within a budget by enabling users to choose players, track budget in coins, and validate each selection based on team composition rules.

## 📖 Project Overview

This project provides a platform to assemble a cricket team from a list of available players while managing a limited budget (coins). The design matches a pre-defined Figma layout and includes user-friendly features for selection, validation, and feedback.

## 🚀 Technologies Used

- **React** for building the user interface
- **React Toastify** for enhanced alert and notification handling
- **JavaScript (ES6)** for logic and interactivity
- **Tailwind CSS** for styling consistency
- **Daisy UI** for styling navbar, card, footer

## ✨ Key Features

1. **Player Selection with Coin Management**: Users can select players within a budget, view detailed player info, and receive validation feedback based on their selections.
2. **Selection Validation**: Alerts for duplicate players or max player limit using React Toastify ensure users adhere to selection rules.
3. **Interactive Design**: Toggle between available and selected players, and use an "Add More Players" option to revisit player selection.

## ⚠️ Challenges & Learnings

While building this project, I encountered a few notable challenges:

1. **Dynamic Coin Display in Navbar**: I initially used two states to manage the coin count, which led to synchronization issues in dynamically updating the coin balance in the navbar. I learned how to consolidate states and improve state management in React.

2. **Updating Coin Balance After Player Deletion**: Ensuring that removing a player added back their bidding price to the available coins in the navbar required careful attention to state updates.

3. **Customizing React Toastify**: Configuring custom notifications to make React Toastify alerts visually cohesive with the app's style took extra effort, but it greatly enhanced user experience.

## 📋 Detailed Requirements

### Navbar

- Displays user coins starting at 0, with the ability to add coins via the banner button called "Claim free credit".

### Banner

- Interactive button that adds coins to the user's budget for player purchases.

### Main Section

- Buttons to toggle between **Available** and **Selected** players.
- Dynamic count of selected players displayed.

### Player Cards

- Players are displayed in cards (3-column layout) with details including name, country, role, type, and bidding price.
- **Choose Player** button on each card to add players based on coin availability.

### Selected Players

- Shows selected players with a **Remove** button, allowing players to be removed from the team.

### Newsletter and Footer

- Designed to match the Figma layout for a consistent UI experience.

### Challenges and Validation

- Duplicate player selection, max team size alerts, and React Toastify for notifications..
