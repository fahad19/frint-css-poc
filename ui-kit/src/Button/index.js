import React from 'react';

import { button } from './styles.css';

export default React.createClass({
  displayName: 'Button',

  render() {
    return (
      <button className={button}>
        {this.props.text}
      </button>
    );
  }
});
