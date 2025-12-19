import { initFederation } from '@angular-architects/native-federation';

initFederation('ecom-remotes.json')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
