import React from 'react';

import { someCssClass } from '../styles/childText.css';

export default function ChildText({ text }) {
  return (
    <p className={someCssClass}>{text}</p>
  );
}
