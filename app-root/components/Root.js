import React from 'react';
import { Region } from 'frint-react';
import { Button } from 'ui-kit';

export default React.createClass({
  render() {
    return (
      <div>
        <p>I am Root App!</p>

        <p>
          Button from ui-kit in root:

          <Button text="Root" />
        </p>

        <p>Region below:</p>

        <Region name="sidebar" />
      </div>
    );
  }
});
