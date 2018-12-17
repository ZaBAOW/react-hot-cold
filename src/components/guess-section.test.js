import React from 'react';
import { shallow } from 'enzyme';

import guessSection from './guess-section';

describe('<guessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<guessSection />);
    });
});