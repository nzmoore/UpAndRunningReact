'use strict';

import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style ={ { padding: '20px' } }>
    <h1>Component discovery</h1>

    <h2>Logo</h2>
    <div style= { { display: 'inline-block', background: 'purple'} } >
      <Logo />
    </div>

    <h2>Buttons</h2>
    <div>Button with onClick: <Button onClick={ () => alert('Ouch')}>Click Me</Button></div>
    <div>A link: <Button href="http://reactjs.com">Follow me</Button></div>
    <div>Custom class name: <Button className="custom">I do nothing</Button></div>

    <h2>Suggest</h2>
    <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>

    <h2>Rating</h2>
    <div>No initial value: <Rating /></div>
    <div>Initial value 4: <Rating defaultValue={4} /></div>
    <div>This one goes to 11: <Rating max={11} /></div>
    <div>Read Only: <Rating readonly={true} defaultValue={3} /></div>

    <h2>Form Inputs</h2>
    <table><tbody>
      <tr>
        <td>Vanilla Input</td>
        <td><FormInput /></td>
      </tr>
      <tr>
        <td>Prefilled</td>
        <td><FormInput defaultValue="Its is like a default"/></td>
      </tr>
      <tr>
        <td>Year</td>
        <td><FormInput type="year" /></td>
      </tr>
      <tr>
        <td>Rating</td>
        <td><FormInput type="rating" defaultValue={4}/></td>
      </tr>
      <tr>
        <td>Vanilla text</td>
        <td ><FormInput type="text"/></td>
      </tr>
      <tr>
        <td><FormInput
          type="suggest"
          options={['red', 'green', 'blue']}
          defaultValue="green" />
        </td>
      </tr>
    </tbody></table>

  </div>,
  document.getElementById('pad')
);
