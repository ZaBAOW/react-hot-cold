import React from 'react';
import { shallow } form 'enzyme';

import guessCount from './guess-count';

describe('<guessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<guessCount />);
    });
        
    it('Renders the correct guess count', () => {
        const value = 5;
        const wrapper = shallow(<GuessCount guessCount={value} />);
        expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});