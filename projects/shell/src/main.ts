import {loadRemoteEntry} from "@angular-architects/module-federation";
import {environment} from "./environments/environment";

Promise.all([
  loadRemoteEntry(environment.microfrontends.microOne.url, environment.microfrontends.microOne.remoteName),
  loadRemoteEntry(environment.microfrontends.microTwo.url, environment.microfrontends.microTwo.remoteName),
  loadRemoteEntry(environment.microfrontends.microThree.url, environment.microfrontends.microThree.remoteName),
])
  // todo: needs better handling for production code
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
