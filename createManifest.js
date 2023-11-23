import { writeFile } from 'fs';

const manifestData = {
  name: 'Qwik app',
  version: '1.0',
  description: 'A generic Qwik app',
  permissions: ['activeTab', 'tabs'],
  browser_action: {
    default_popup: 'index.html',
  },
  manifest_version: 2,
};

const outputPath = 'dist/manifest.json';

writeFile(outputPath, JSON.stringify(manifestData, null, 2), (err) => {
  if (err) {
    console.error('Error writing manifest.json:', err);
  } else {
    console.log('manifest.json has been created successfully!');
  }
});