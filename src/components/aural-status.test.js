import React from 'react';
import { shallow } from 'enzyme';

import auralStatus from './aural-status';

describe('<auralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<auralStatus />);
    });

    it('Renders an aural status update', () => {
        let TEST_STATUS = 'You are listening to a game!';

        let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS} />);
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});