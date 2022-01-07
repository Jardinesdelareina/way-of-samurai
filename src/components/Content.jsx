import React from "react";

const Content = () => {
  return (
    <main className="content">
      <div className="content__image">
        <img src="background.jpg" />
      </div>
      <div className="content__head">
        <div className="ava">
          <img src="ava.png" />
        </div>
        <div className="description">
          <div class="description__name">Андрей Костюк</div>
          <div class="description__birthday">05.08.1992</div>
          <div class="description__city">Санкт-Петербург</div>
        </div>
      </div>
      <div className="content__post">
        <form className="post__form">
          <p>My post</p>
          <div className="mypost"></div>
          <input className="form__form" />
          <button className="form__button" href="#">
            Отправить
          </button>
        </form>
      </div>
      <div className="content__message"></div>
    </main>
  );
};

export default Content;