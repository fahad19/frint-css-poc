import React from 'react';
import { Region } from 'frint-react';
import { Button } from 'ui-kit';

import ChildText from './ChildText';
import { childName } from '../styles/root.css';

export default React.createClass({
  render() {
    return (
      <div>
        <hr />

        <p>
          I am the <span className={childName}>Child</span>, colouring myself with theme's variable!
        </p>

        <p>
          I also have a button:

          <Button text="Hello" />
        </p>

        <ChildText text="Just custom text." />
      </div>
    );
  }
});
