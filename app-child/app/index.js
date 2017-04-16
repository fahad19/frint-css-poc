import { createApp } from 'frint';

import Root from '../components/Root';

export default createApp({
  name: 'Root',

  providers: [
    {
      name: 'component',
      useValue: Root,
    },
  ],
});
