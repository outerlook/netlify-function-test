to reproduce the issue
https://github.com/netlify/zip-it-and-ship-it/issues/637

```bash
pnpm install
pnpm build
pnpm serve // OR if you have globally installed
netlify functions:serve
```


errored output
```ansi
◈ Injected netlify.toml file env var: NPM_FLAGS
◈ Injected netlify.toml file env var: NODE_VERSION
◈ Loaded function test.
◈ Functions server is listening on 9999
◈ Failed reloading function test with error:
Cannot read property 'filter' of undefined
```