/*
 * Copyright (c) 2017, Sowmya B A. All rights reserved.
 */

/* eslint-disable no-console */

function registerServiceWorker(path) {
  // Your service-worker.js *must* be located at the top-level directory relative to your site.
  // It won't be able to control pages unless it's located at the same level or higher than them.
  // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
  // See https://github.com/slightlyoff/ServiceWorker/issues/468
  navigator.serviceWorker.register(path).then(reg => {
    // updatefound is fired if service-worker.js changes.
    reg.onupdatefound = () => {
      // The updatefound event implies that reg.installing is set; see
      // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
      var installingWorker = reg.installing;

      installingWorker.onstatechange = () => {
        console.log(`${path}: ${installingWorker.state}`);

        switch (installingWorker.state) {
        case 'installed':
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and the fresh content will
            // have been added to the cache.
            // It's the perfect time to display a "New content is available; please refresh."
            // message in the page's interface.
            document.dispatchEvent(
              new CustomEvent(
                'serviceWorker', {
                  detail: { newContent: true }
                }
              )
            );
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a "Content is cached for offline use." message.
            document.dispatchEvent(
              new CustomEvent(
                'serviceWorker', {
                  detail: { offlineReady: true }
                }
              )
            );
          }
          break;

        case 'redundant':
          console.error('The installing service worker became redundant.');
          break;
        }
      };
    };
  }).catch((e) => {
    console.error('Error during service worker registration:', e);
  });
}

function polyfillCustomEvent() {
  if (typeof window.CustomEvent !== 'function') {
    let CustomEvent = (event, params) => {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      let evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
}

export default () => {
  polyfillCustomEvent();

  if ('serviceWorker' in navigator) {
    registerServiceWorker('OneSignalSDKWorker.js');
    registerServiceWorker('OneSignalSDKUpdaterWorker.js');
  }
};
