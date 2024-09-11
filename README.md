# PKU Clab Documentation

This is the documentation for PKU Clab. 

## Building site

The project is built with [VitePress](https://vitepress.dev), with root directory at `./`

Run `pnpm install` to install dependencies, `pnpm run docs:build` to build the documentation.

This repo is shipped with a [GitHub Action](https://github.com/lcpu-club/clab_docs/actions/workflows/upload_artifact.yaml) to continuously build and integrate with the production server.

## Contributing

To write documentation, you can PR to corresponding `.md` files. You can follow [VitePress Writing Guide](https://vitepress.dev/guide/markdown) for syntaxing. 

To update website structure, you need to modify `main/.vitepress/config.mts` and corresponding sections.

Run `pnpm run docs:dev` to start developing.

