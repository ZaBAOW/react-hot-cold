import React from 'react';
import { shallow } from 'enzyme';

import guessForm from './guess-form';

describe('<guessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<guessForm />);
    });
        
    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 10;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
  });

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});