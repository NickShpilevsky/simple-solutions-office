import React from 'react';
import {Divider} from "primereact/divider";

export const Results = (props) => {
  const {resultRef, economicImpact, doingBusiness} = props;
  const economicImpactSpheres = ['Доходи громадян', 'Доходи державного бюджету', 'Капітальні інвестиції', 'Антикорупційний ефект'];

  const increaseArrows = (increase) => {
    let increaseArray = [];
    for(let i = 0; i < increase; i++) {
      increaseArray.push(i);
    }
    return increaseArray;
  };

  return (
    <div className="resultSection" ref={resultRef}>
      <Divider align="center" type="dotted" style={{background: '#01518e', color: 'white'}}>
        <h1>Результати</h1>
      </Divider>
      <div className="row">
        <div className="card economicImpactCard">
          <h2>Економічний вплив, млрд грн.</h2>
          <div className="resultSectionRow">
            <div className="resultLineTitle"/>
            <div className="resultLineDigit">1 рік</div>
            <div className="resultLineDigit">5 років</div>
          </div>
          <div className="divider"/>
          {
            Object.values(economicImpact).map((sphere, index) => (
              <div key={index}>
                <div className="resultSectionRow">
                  <div className="resultLineTitle">{economicImpactSpheres[index]}</div>
                  <div className="resultLineDigit">{sphere.year1}</div>
                  <div className="resultLineDigit">{sphere.year5}</div>
                </div>
                <div className="divider"/>
              </div>
            ))
          }
        </div>

        <div className="card doingBusinessCard">
          <h2>Зростання України в рейтингу Doing Business за окремими складовими</h2>
          {
            doingBusiness.length ? (
              doingBusiness.map((sphere) => (
                <div key={sphere.title}>
                  <div className="resultSectionRow">
                    <div className="resultLineTitle">{sphere.title}</div>
                    <div className="resultSectionRow" style={{float: 'right'}}>
                      {
                        increaseArrows(sphere.increase).map((item) => (
                          <div key={sphere.title + item}><span className="pi pi-arrow-up" /></div>
                        ))
                      }
                    </div>
                  </div>
                  <div className="divider"/>
                </div>
              ))
            ) : (
              <span className="doingBusinessCardImage pi pi-chart-line" />
            )
          }
        </div>

      </div>
    </div>
  );
};