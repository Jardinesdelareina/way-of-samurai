# React

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

>npx create-react-app my-app

>cd my-app

>npm start

##### Sass
>npm i node-sass

VS Code: Ctrl+Shift+P (Вызов поисковой строки - settings.json)
liveSassCompile.settings.formats:
"savePath": "~/../css/" или любой другой, по умолчанию null

##### Расширения Chrome:
* React Developer Tools
* JSON Formatter
* Redux DevTools

##### Deploy:
1.  "homepage": "https://myusername.github.io/my-app" в файл package.json
2.  npm install --save gh-pages
3.  "scripts": {
    + "predeploy": "npm run build",
    + "deploy": "gh-pages -b main -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
4.  npm run deploy
5.  Убедиться, что параметр GitHub Pages в настройках проекта GitHub настроен на использование ветки gh-pages
