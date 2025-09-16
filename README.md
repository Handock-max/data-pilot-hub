## Data Pilot Hub

Application React + Vite + TypeScript, UI shadcn + Tailwind CSS.

### Démarrage local

```sh
npm i
npm run dev
```

### Build

```sh
npm run build
npm run preview
```

### Déploiement GitHub Pages

- Le projet est configuré pour GitHub Pages (Vite `base` + `HashRouter`).
- Un workflow GitHub Actions publiera automatiquement la branche `gh-pages`.

Étapes:
1. Activez GitHub Pages sur la branche `gh-pages` (Settings > Pages > Build and deployment > Deploy from a branch > gh-pages / root).
2. Poussez sur `main`; le workflow va builder et publier.

URL finale: `https://<votre-compte>.github.io/data-pilot-hub/`

### Environnements et variables

Créez un fichier `.env` (ou utilisez GitHub Secrets) à partir de `.env.example` quand vous aurez vos clés Supabase.

### Supabase (préparé)

Un client Supabase est prêt dans `src/lib/supabaseClient.ts`. Les formulaires contiennent des commentaires expliquant comment envoyer les données vers Supabase quand les clés seront disponibles.
