import React from 'react';
import Rnd from 'react-test-renderer/shallow';
import Learn from 'components/tc-communities/communities/wipro2/Learn';

const rnd = new Rnd();

test('Snapshot match', () => {
  rnd.render((
    <Learn />
  ));
  expect(rnd.getRenderOutput()).toMatchSnapshot();
});
