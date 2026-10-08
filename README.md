# Unstopable Backoffice Wiki

Separate documentation site for the backoffice.

## Stack

- Astro 5
- Starlight

## Goals

- role-based internal documentation
- safe operational guides
- sanitized UI cutouts
- no secrets, tokens, or internal access instructions

## Local run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Render

`render.yaml` includes a separate static service:

- `unstopable-backoffice-wiki`

Set `WIKI_URL` on `unstopable-withdraw-api` to the deployed wiki URL so the admin header link opens the separate docs site.
