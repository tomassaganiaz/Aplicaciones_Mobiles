# Aplicacion React Native

This is a React Native application with TypeScript that has two screens:

- **Home Screen**: Allows the user to enter their name.
- **Greeting Screen**: Displays a greeting with the entered name and a button to go back.

## Features

- First screen: Input field for name and button to navigate to greeting.
- Second screen: Greeting message and back button.

## Installation

1. Ensure you have Node.js (>=16) and npm installed.
2. Install dependencies:
   ```
   npm install
   ```

## Running the App

### For Android
1. Ensure you have Android Studio and an emulator or device set up.
2. Run:
   ```
   npm run android
   ```

### For iOS (macOS only)
1. Ensure you have Xcode installed.
2. Run:
   ```
   npm run ios
   ```

### Start Metro Bundler
```
npm start
```

## Dependencies

- React Native
- React Navigation (for navigation between screens)
- TypeScript

## Project Structure

- `App.tsx`: Main app component with navigation setup.
- `src/screens/HomeScreen.tsx`: First screen for name input.
- `src/screens/GreetingScreen.tsx`: Second screen for greeting.