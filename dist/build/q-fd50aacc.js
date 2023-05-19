(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("build/q-a4416d7c.js")
    );
  })().catch(console.error);

})();
