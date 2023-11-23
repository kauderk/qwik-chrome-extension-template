# Qwik Chrome	Extension Template

This is a template for creating a Chrome extension using Qwik.

## use

[unpacked](/unpacked) contains the built extension. To use it:

```bash
navigate to chrome://extensions
enable developer mode
click "Load unpacked"
select the "unpacked" folder
```

## build

```bash
npm run build
```

## dev

```bash
npm run dev
```
## More

- [General Purpose Chrome Extension](https://github.com/kauderk/qwik-chrome-extension-template) - using the `@crxjs/vite-plugin`
- [Options Page Chrome Extension](https://github.com/kauderk/qwik-chrome-extension-template/tree/options-page) - simple configuration
- [Possible SSG Method](https://github.com/BuilderIO/qwik/issues/5148#issuecomment-1823960299)

## Known issues

- The command `vite build --watch` flag throws `@vite/client not	found`, avoid that	flag
- Qwik Apps don't know how to attach themselves to the Shadow DOM
