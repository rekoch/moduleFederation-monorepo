export const environment = {
  production: true,
  microfrontends: {
    microOne: {url: "http://localhost:4200/remoteEntry.js", remoteName: "microOne"},
    microTwo: {url: "http://localhost:4201/remoteEntry.js", remoteName: "microTwo"},
  }
};
