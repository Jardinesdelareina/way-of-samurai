import React from 'react';

const Header = () => { 
    return (
      <header className="header">
        <div className="header__logo">
          <a href="#">
            <img src="logo192.png" />
          </a>
        </div>
        <div className="header__menu">
          <a href="#" className="header__link">
            О сайте
          </a>
          <a href="#" className="header__link">
            Контакты
          </a>
        </div>
        <div className="header__button">
          <button href="#" className="button__enter">
            Вход
          </button>
          <button href="#" className="button__reg">
            Регистрация
          </button>
        </div>
      </header>
    );
}

export default Header;