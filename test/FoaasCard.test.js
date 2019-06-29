import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FoaasCard from '../src/index';

configure({ adapter: new Adapter() });

describe('Render component', () => {
  test('Ensure renders without crashing', () => {
    const wrapper = shallow(<FoaasCard />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Ensure card values', () => {
  test('Middlefinger is present', () => {
    const wrapper = shallow(<FoaasCard />);
    expect(wrapper.text()).toEqual('🖕');
  });

  test('Middlefinger is not present', () => {
    const wrapper = shallow(<FoaasCard middleFinger={false} />);
    expect(wrapper.text()).toBeFalsy();
  });
});
