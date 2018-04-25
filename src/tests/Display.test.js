import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('returns a display with the className component-display', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.hasClass('component-display')).toBe(true);
  });
  it('renders the passed value', () => {
    const wrapper = shallow(<Display value='5' />);
    expect(wrapper.text()).toBe('5');
  });
});

// wrapper.find('input').simulate('change');