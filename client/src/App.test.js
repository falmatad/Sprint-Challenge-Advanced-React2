import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import DisplayData from './components/DisplayData';
import * as rtl from '@testing-library/react';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  rtl.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Navbar Has the word women's", () => {
  const wrapper = rtl.render(<Navbar />);

    expect(wrapper.getByText(/women's/i).textContent).toMatch(/women's/i);
    //Set up Props

    //Bring in Component
    

    //Grab Node Element from Component
    

    //Assert 
   

})

test("DisplayData Has the word players", async () => {
  const wrapper = rtl.render(<DisplayData />);

    expect(await wrapper.getByText(/players/i).textContent).toMatch(/players/i);
    //Set up Props

    //Bring in Component
    

    //Grab Node Element from Component
    

    //Assert 

})
