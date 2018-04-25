import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it("has according className when rendered", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
  });
  it("has according className when called with orange", () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
    expect(wrapper.find('.orange')).toHaveLength(1);
  });
  it("has according className when called with wide", () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
    expect(wrapper.find('.wide')).toHaveLength(1);
  });
  it("it calls the function tied to the onClick property when clicked", () => {
    const func = sinon.spy();
    const wrapper = shallow(<Button clickHandler={func} />);
    wrapper.find('button').simulate('click');
    expect(func).toHaveProperty('callCount', 1);
  });
});