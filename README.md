# Way of Samurai

## Социальная сеть на React
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

1.  Новый проект
>npx create-react-app my-app

2.  Перейти в директорию проекта
>cd my-app

3.  Старт проекта
>npm start

##### Подключить Sass
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

###### Обучающие материалы
[React JS - путь самурая](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)
