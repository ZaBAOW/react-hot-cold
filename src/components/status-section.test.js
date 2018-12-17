import React from 'react';
import { shallow } from 'enzyme';

import statusSection form './status-section';

describe('<statusSection />', () => {
    it('Renders without crashing', () => {
        shallow(<statusSection />);
    });
});