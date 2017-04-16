import React from 'react';
import { Region } from 'frint-react';
import { stylize } from 'frint-react-styles';

import styles from '../styles/root.css';

const Root = React.createClass({
  render() {
    return (
      <div>
        <p>
          I am the <span styleName="childName">Child</span>!
        </p>
      </div>
    );
  }
});

export default stylize(styles)(Root);
