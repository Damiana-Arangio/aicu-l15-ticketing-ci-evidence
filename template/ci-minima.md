# CI minima - L15

> Appendice facoltativa. Non compilare e non configurare durante la sessione combinata L15-L16.

## Scopo

```txt
Ripetere in PR lo stesso comando che gira in locale.
```

## Comando locale equivalente

```bash
pnpm test
```

## Workflow minimo

```yaml
name: quality

on:
  pull_request:
  push:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
```

## Cosa non fa

- deploy;
- matrix browser;
- release;
- gestione segreti;
- job lunghi.
