import React from 'react';
import { shallow, mount, render } from 'enzyme';
//import * as Enzyme from 'enzyme';
//import { configure } from 'enzyme';
//import * as Adapter from 'enzyme-adapter-react-16';



import Login from './Forms.js'// describe what we are testing

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

//enzyme.configure({ adapter: new Adapter() });

const sampledata ={
  username:'qwe',
  hpassword:'password'
}

describe('Login Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<Login/>).find('form.Login-form').exists()).toBe(true)
 })
})

describe('renders a password input', () => {
   // expect(shallow(<Login />).find('mypassword').length).toEqual(1)

    expect(shallow(<Login/>).find('mypassword')).toHaveLength(1)

    //expect(shallow(<Login />).contains('Password')).toBe(true)
    //expect(shallow(<Login />).find('hpassword').to.have).lengthOf(1);
   })

   /*
   it('should render submit button', () => {
    expect(wrapper.find('SubmitInput').length).toBe(1);
  });
  
  it('should render a placeholder',()=>{
    const placeholder_text = 'type anything here';
    const wrapper = shallow(<Input placeholder={placeholder_text} />);
    expect(wrapper.prop('placeholder')).toEqual(placeholder_text);

  })
  */

 it('should contains the words "Forgot Password"', () => {
  const loginComponent = shallow(<Login />);
  expect(loginComponent.contains('Forgot Password')).toBe(true);
});

/*
it('check the type of password',()=>{
  const comp = shallow(<Login />);
  const input = comp.find('input[hpassword="hpassword"]');
  expect(input).toHaveLength(1);

  expect(input.prop('type')).toEqual('password');


})

*/
it('check the type of username',()=>{
  const comp = shallow(<Login />);
  const input = comp.find('input[username="username"]');

  expect(input).toHaveLength(1);

  expect(input.prop('type')).toEqual('text');


})


it('checking for password',() => {

  const wrapper = shallow(<Login />);
  expect(wrapper.state('hpassword')).toEqual('');

  //expect(wrapper.state('hpassword').fields.hpassword).toEqual('');
  

  const input = wrapper.find('input[hpassword="hpassword"]');
  
  
  input.simulate('onChange',{
  
  target:{
  
  hpassword:'hpassword',
  
  value:sampledata.hpassword
  
  }
  
  })
  
  expect(wrapper.state('hpassword')).toEqual(sampledata.hpassword);
  
  })