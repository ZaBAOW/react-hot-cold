import React from 'react';
import { shallow } from 'enzyme';

import guessList from './guess-list';

describe('<guessList />', () => {
    it('Renders without crashing', () => {
        shallow(<guessList />);
    });
        
    it('Renders a list of guesses', () => {
        const values = [10, 24, 52];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
          expect(items.at(index).text()).toEqual(value.toString());
        });
  });
});