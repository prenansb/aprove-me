import { defineConfig } from 'orval'

export default defineConfig({
  client: {
    input: '../api/swagger.json',
    output: {
      mode: 'split',
      target: './src/http/client/api.ts',
      client: 'react-query',
      httpClient: 'fetch',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },

        mutator: {
          path: './src/http/client.ts',
          name: 'http',
        },
      },
    },
  },
})
