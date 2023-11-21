(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("build/q-c54d1bb3.js")
    );
  })().catch(console.error);

})();
