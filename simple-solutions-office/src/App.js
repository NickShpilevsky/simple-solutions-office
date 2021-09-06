import './fonts/e-UkraineHead-Regular-Woff.woff';
import './App.css';
import React from 'react';
import {useEffect, useState, useRef} from 'react';

import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import {Header} from './components/Header';
import {List} from './components/List';
import {Results} from "./components/Results";

function App() {
  const [reforms, setReforms] = useState({});
  const [chosenReforms, setChosenReforms] = useState({});
  const [isAll, setIsAll] = useState('no');
  const [doingBusiness, setDoingBusiness] = useState([
    {
      title: 'economic',
      increase: 5
    },
    {
      title: 'acsp',
      increase: 3
    },
    {
      title: 'jbwei',
      increase: 7
    }
  ]);
  const [economicImpact, setEconomicImpact] = useState({
    citizen_income: {
      year1: 0,
      year5: 0
    },
    state_budget_income: {
      year1: 0,
      year5: 0
    },
    capital_investment: {
      year1: 0,
      year5: 0
    },
    anti_corruption_effect: {
      year1: 0,
      year5: 0
    }
  });
  const resultRef = useRef(null);

  const chooseAll = () => {
    setIsAll('all');
    setChosenReforms((prevState) => {
      const newState = {...prevState};
      for (const inputName in newState) {
        newState[inputName] = reforms[inputName];
      }
      return newState;
    });
  };

  const unChooseAll = () => {
    setIsAll('no');
    setChosenReforms((prevState) => {
      const newState = {...prevState};
      for (const inputName in newState) {
        newState[inputName] = null;
      }
      return newState;
    });
  };

  const calculate = () => {
    const chosenReformsTitles = [];
    let citizen_income = {
      year1: 0,
      year5: 0
    }, state_budget_income = {
      year1: 0,
      year5: 0
    }, capital_investment = {
      year1: 0,
      year5: 0
    }, anti_corruption_effect = {
      year1: 0,
      year5: 0
    };

    Object.values(chosenReforms).forEach((reform) => {
      if (reform) {
        const {title, economic_impact} = reform;

        chosenReformsTitles.push(title);

        citizen_income.year1 += economic_impact.citizen_income.year1;
        citizen_income.year5 += economic_impact.citizen_income.year5;

        state_budget_income.year1 += economic_impact.state_budget_income.year1;
        state_budget_income.year5 += economic_impact.state_budget_income.year5;

        capital_investment.year1 += economic_impact.capital_investment.year1;
        capital_investment.year5 += economic_impact.capital_investment.year5;

        anti_corruption_effect.year1 += economic_impact.anti_corruption_effect.year1;
        anti_corruption_effect.year5 += economic_impact.anti_corruption_effect.year5;
      }
    });

    setEconomicImpact({
      citizen_income: citizen_income,
      state_budget_income: state_budget_income,
      capital_investment: capital_investment,
      anti_corruption_effect: anti_corruption_effect
    });

    // fetch('/api/doing-business', {
    //   method: 'POST',
    //   headers: new Header({
    //     Accept: 'application/json',
    //     'Content-type': 'application/json'
    //   }),
    //   body: JSON.stringify(chosenReformsTitles)
    // })
    //   .then((response) => {
    //       response.json();
    //     })
    //   .then((data) => setDoingBusiness(data));

    resultRef.current.scrollIntoView();
  };

  useEffect(() => {
    fetch('/api/reforms', {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }).then((response) => response.json())
      .then((data) => setReforms(data.reforms));
  }, []);

  return (
    <div className="App">
      <Header/>
      <List unChooseAll={unChooseAll}
            calculate={calculate}
            chooseAll={chooseAll}
            reforms={reforms}
            chosenReforms={chosenReforms}
            setChosenReforms={setChosenReforms}
            isAll={isAll}
            setIsAll={setIsAll}
      />
      <Results resultRef={resultRef}
               economicImpact={economicImpact}
               doingBusiness={doingBusiness}/>
    </div>
  );
}

export default App;
