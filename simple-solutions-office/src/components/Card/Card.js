import React from 'react';
import {useEffect, useState} from 'react';
import {Accordion, AccordionTab} from "primereact/accordion";
import {Checkbox} from 'primereact/checkbox';

export const Card = props => {
  const {id, title, description, link} = props.reform;
  const [checked, setChecked] = useState(Boolean(props.chosenReforms[id]));

  const onLinkClick = () => {
    window.open(link);
  };

  const clickCheckbox = () => {
    const { chosenReforms, setChosenReforms, setIsAll, reform } = props;
    setIsAll('some');

    return chosenReforms[id] ?
      setChosenReforms({ ...chosenReforms, [id]: null })
      :
      setChosenReforms({ ...chosenReforms, [id]: reform });
  };

  useEffect(() => {
    const { isAll } = props;

    if(isAll === 'all') {
      setChecked(true);
    } else if (isAll === 'no') {
      setChecked(false);
    }
  }, [props.isAll]);

  const accordionHeader = (
    <div className="row">
      <div>Коротка інформація про реформу</div>
      <div className="right">
        <div onClick={onLinkClick} style={{color: 'blue'}}>Детальніше про реформу</div>
      </div>
    </div>
  );

  return (
    <div className="card">
      <div className="row" style={{position: 'relative', alignItems: 'center'}}>
        <h2>{title}</h2>
        <div className="right">
          <Checkbox onChange={e => {setChecked(e.checked); clickCheckbox()}} checked={checked}/>
        </div>
      </div>
      <Accordion>
        <AccordionTab header={accordionHeader}>
          <div dangerouslySetInnerHTML={{__html: description}}/>
        </AccordionTab>
      </Accordion>
    </div>
  )
};