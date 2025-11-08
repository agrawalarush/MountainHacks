# Sleep Mood Tasker

## Overview
Sleep Mood Tasker is a web application designed to help users manage their tasks based on their sleep patterns and mood. By inputting their sleep hours and mood, users can receive tailored task suggestions to optimize their productivity and well-being.

## Features
- Input for sleep hours and mood
- Dynamic task assignment based on user input
- User-friendly interface
- Local storage for task management
- Sample tasks for testing and demonstration

## Project Structure
```
sleep-mood-tasker
├── src
│   ├── index.html          # Main HTML document
│   ├── css
│   │   └── styles.css      # Styles for the application
│   ├── js
│   │   ├── app.js          # Main application logic
│   │   ├── ui.js           # User interface functions
│   │   ├── tasks.js        # Task management functions
│   │   └── storage.js      # Data storage and retrieval
│   └── data
│       └── sample-tasks.json # Sample task data
├── package.json            # npm configuration file
├── .gitignore              # Files to ignore in version control
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd sleep-mood-tasker
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Open `src/index.html` in your web browser.
2. Enter your sleep hours and mood in the provided input fields.
3. Click the "Get Tasks" button to receive task suggestions based on your input.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.