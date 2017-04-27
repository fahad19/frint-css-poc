import React from 'react';
import { Region } from 'frint-react';
import { stylize } from 'frint-react-styles';
import { Button } from 'ui-kit';

import ChildText from './ChildText';
import styles from '../styles/root.css';

const Root = React.createClass({
  render() {
    return (
      <div>
        <hr />

        <p>
          I am the <span styleName="childName">Child</span>, colouring myself with theme's variable!
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

export default stylize(styles)(Root);
