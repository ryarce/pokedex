// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_PRODUCT_API: 'https://platzi-store.herokuapp.com/products/',
  firebaseConfig:{
    apiKey: 'AIzaSyBjDXO8saRTlGiv-csAoze0QLVqn7ktqTQ',
    authDomain: 'ryd-platzi-store.firebaseapp.com',
    projectId: 'ryd-platzi-store',
    storageBucket: 'ryd-platzi-store.appspot.com',
    messagingSenderId: '357145235609',
    appId: '1:357145235609:web:6ad2c1ad43b1e6201a2808'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
