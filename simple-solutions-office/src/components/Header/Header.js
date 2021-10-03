import React from 'react';
import logo from "../../logo.svg";
import {Divider} from "primereact/divider";

export const Header = () => {

  const onLogoClick = () => {
    console.log('Here!');
    window.location = "https://simple.org.ua/";
  };

  return (
    <div className="header">
      <a href="https://simple.org.ua/" className="back-to-main-btn"><i className="pi pi-chevron-left"></i> Повернутися на головну</a>
      <div className="logo" onClick={onLogoClick}>
        <img src={logo} alt="logo"/>
        <h3>Офіс простих рішень та результатів</h3>
      </div>
      <h1>Онлайн-калькулятор впливу від реформ</h1>
      <div className="subtitle">
        <Divider type="dashed"/>
        <h4>Даний онлайн-калькулятор створено експертами ГО «Офіс простих рішень та результатів» для того, щоб кожен
          українець мав змогу побачити як реформи, що розробляються та імплементуються нашим Офісом, впливають на
          нього.</h4>
        <h4>Якщо Ви вважаєте, що ми маємо просуватися стрімкіше та розробляти більшу кількість реформ, то раді будемо
          отримати від вас благодійну підтримку. <a
            href="https://simple.org.ua/donation">simple.org.ua/donation</a></h4>
        <h4>Для запитань щодо роботи онлайн-калькулятора: direct@simple.org.ua</h4>
      </div>
    </div>
  );
};