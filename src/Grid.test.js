import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Grid from './Grid';

it('renders the correct amount divs for grid size', () => {
  const component = shallow(<Grid width={5} height={5} />);

  expect(component.find('div')).toHaveLength(56);

  console.log(component.html());
});

it('renders the range of a modifier', () => {
  const component = shallow(<Grid width={5} height={5} modifier={[3, 3, 1]}/>)

  expect(component.find('.modified')).toHaveLength(4);
});
