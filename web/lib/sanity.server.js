import { createClient } from 'next-sanity'
import { config } from './sanity-config'

const configObject = {
  ...config,
  token: process.env.SANITY_API_TOKEN ?? "skSCSQiOTU2fjAaCpZSXCPvescBlEEtc1d59BEC5MEQN6IqRaPMn5fQaJaMKVfpMDMbneNN057s2wcakdH6Q9xav4mWiUk6Bs9hwEMtX9YqSyEIP1lSLQRuLe5sfycCL4YhviRY6LmB8qybzeDaelDvknmUSQY1poeEJOFTd7AvmAcpBfOdM",
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(configObject)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN ?? "skSCSQiOTU2fjAaCpZSXCPvescBlEEtc1d59BEC5MEQN6IqRaPMn5fQaJaMKVfpMDMbneNN057s2wcakdH6Q9xav4mWiUk6Bs9hwEMtX9YqSyEIP1lSLQRuLe5sfycCL4YhviRY6LmB8qybzeDaelDvknmUSQY1poeEJOFTd7AvmAcpBfOdM",
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient
