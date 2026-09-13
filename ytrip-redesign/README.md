# YTrip redesign

The redesigned YTrip website is a React and Vite app deployed as a Cloudflare Worker with static assets.

- GitHub repository: https://github.com/thepixelwriter/travel-website-ui-ux
- Live website: https://ytrip-redesign.gaurav-motivation.workers.dev

## Local development

```bash
npm install
npm run dev
```

Build and validate the production output with:

```bash
npm run build
```

## Cloudflare deployment

Wrangler serves the built `dist` directory through the Worker defined in `src/worker.js`. The SPA fallback keeps the in-app informational pages working on direct requests.

For a first manual deployment, authenticate Wrangler and run:

```bash
npx wrangler login
npm run deploy
```

The Worker name is `ytrip-redesign`. The current public deployment is available at [ytrip-redesign.gaurav-motivation.workers.dev](https://ytrip-redesign.gaurav-motivation.workers.dev). A custom domain can be attached from the Cloudflare dashboard under **Workers & Pages** after deployment.

## Automatic GitHub deployment

The workflow at `.github/workflows/deploy.yml` runs on every push to `main` and can also be started manually. Add these repository secrets in GitHub under **Settings > Secrets and variables > Actions**:

- `CLOUDFLARE_API_TOKEN`: an API token with Workers Scripts edit permission for the account
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID that owns the Worker

After the repository is pushed to GitHub and those secrets are present, every change merged or pushed to `main` will build and deploy automatically.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
