# 567 dance! 💃 

[Try the demo 🕺](https://raulmar0.github.io/567-dance/)

Hello! raulmar here :) I have developed this application with ♥️ for you to a blast learning and practicing your Latin rhythmic skills. You can contact me on raulmar.me

First, you have the instrument components, which consist of a mute/unmute switch and a volume slider, with the only exception of the voice component, as I have added counter buttons so you can choose the desired count. Also, at the bottom you have the rhythm controls to control the speed.

# Technical info
This app is built with
- ⚛️ React and vanilla CSS for the UI
- 🔒 TypeScript for type safety
- 🔈 Howler for audio manipulation
- ⚡️ Capacitor for native app build
- 🎣 React Hooks and context
- 🔨 GitHub Actions
- 📦 Vite as bundler

The main part of this project is what I call the rhythm engine, which is made of a setInterval that iterates over an array representing the 16 beats of the salsa rhythm (8 regular beats and 8 intermediate beats).

## Getting started
If you want to use the app locally run:
```
git clone https://github.com/raulmar0/567-dance.git
cd 567-dance
npm i
npm run dev
```

If you want to try the app on iOS or Android, first remove the base url in vite.config.js. Then:
```
git clone https://github.com/raulmar0/567-dance.git
cd 567-dance
npm i
npm run mobile:ios / npm run mobile:android
```
and when Android Studio or Xcode opens, click on run.

# Figma mockup vs final design
<div style="display: grid; grid-template-colums: 1fr 1fr; grid-template-rows: 20px auto; place-items: center;">
  <img width="372" height="750" alt="image" src="https://user-images.githubusercontent.com/20999942/194939400-99c3a894-bb14-4c82-85d4-be502f9a0730.png">
  <img width="372" height="750" alt="image" src="https://user-images.githubusercontent.com/20999942/194939461-061dcc73-9f71-4ec6-b1f1-b6f676b42808.png">
</div>
