import React from 'react';
import {Divider} from "primereact/divider";
import {Button} from "primereact/button";
import { ProgressSpinner } from 'primereact/progressspinner';

import {Card} from "../Card";

export const List = (props) => {
  const {unChooseAll, calculate, chooseAll, reforms, chosenReforms, setChosenReforms, isAll, setIsAll} = props;

  return (
    <div>
      <Divider align="center" type="none">
        <Button onClick={unChooseAll}>Зняти всі</Button>
        <Button onClick={calculate} className="p-button-success">Розрахувати</Button>
        <Button onClick={chooseAll}>Вибрати всі</Button>
      </Divider>
      {
        Object.values(reforms).length ? Object.values(reforms).map((reform) => (
            <Card key={reform.id}
                  reform={reform}
                  chosenReforms={chosenReforms}
                  setChosenReforms={setChosenReforms}
                  isAll={isAll}
                  setIsAll={setIsAll}/>
          )
        ) : (
          <ProgressSpinner/>
        )
      }
      <Divider align="center" type="none">
        <Button onClick={unChooseAll}>Зняти всі</Button>
        <Button onClick={calculate} className="p-button-success">Розрахувати</Button>
        <Button onClick={chooseAll}>Вибрати всі</Button>
      </Divider>
    </div>
  );
};