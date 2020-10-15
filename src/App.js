import React, { useState } from 'react';

import './App.css';

import Button from './components/button/Button';
import Toast from './components/toast/Toast';

import warningIcon from './assets/warning.svg';
import dangerIcon from './assets/danger.svg';
import successIcon from './assets/success.svg';
import infoIcon from './assets/info.svg';



const BUTTON_PROPS = [   //creating array of button properties
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 3,
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];

const App = () => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState('Select Position');
  let toastProperties = null;

  const selectPosition = (position) => {
    setPosition(position.target.value);
    setList([]);
  }

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'Hurrey !! its a success',
          backgroundColor: '#5cb85c',
          icon: successIcon
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'Danger Ahead Be prepared !',
          backgroundColor: '#d9534f',
          icon: dangerIcon
        }
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'yeah i am the info',
          backgroundColor: '#5bc0de',
          icon: infoIcon
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'thats a wrning',
          backgroundColor: '#f0ad4e',
          icon: warningIcon
        }
        break;

        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }

  return (
    <div className="app">
      <div className="app-header">
        <p>React Toast Component</p>
        <div className="toast-buttons">
          {
            BUTTON_PROPS.map(prop => 
              <Button 
                key={prop.id}
                className={`${position === 'Select Position' ? `${prop.className} btn-disable` : `${prop.className}`}`}
                label={prop.label}
                handleClick={() => showToast(prop.type)}
              />
            )
          }
        </div>

        <div className="select">
          <select
            name="position"
            value={position}
            onChange={selectPosition}
            className="position-select"
          >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>
      </div>

      <Toast
        toastList={list}
        position={position}      
      />
    </div>
  );
}

export default App;