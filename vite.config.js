
export default {
  root: import.meta.dirname,
  environments: {
    rsc: {
      resolve: {
        conditions: ['react-server'],
        noExternal: true,
      },
      dev: {
        optimizeDeps: {
          include: [
            'react',
            'react/jsx-runtime',
            'react/jsx-dev-runtime',
            'react-server-dom-webpack/server',
            'react-server-dom-webpack/server.edge',
          ],
        },
      },
      build: {
        outDir: 'dist/rsc',
        sourcemap: true,
        ssr: true,
        emitAssets: true,
        manifest: true,
        rollupOptions: {
          input: {
            index: '/rsc.js'
          },
        },
      },
    }
  }
}