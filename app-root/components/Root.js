import React from 'react';
import { Region } from 'frint-react';

export default React.createClass({
  render() {
    return (
      <div>
        <p>I am Root App!</p>

        <Region name="sidebar" />
      </div>
    );
  }
});
