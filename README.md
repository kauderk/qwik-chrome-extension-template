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

## Known issues

- The command `vite build --watch` flag throws `@vite/client not	found`, avoid that	flag
- Qwik Apps don't know how to attach themselves to the Shadow DOM
- There are some files throwing 404 when loading the content script