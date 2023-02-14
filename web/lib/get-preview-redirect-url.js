const remoteUrl = `https://noble-clon.vercel.app/`
const localUrl = `http://localhost:3000`

export function getPreviewRedirectUrl(req) {
  console.log(req?.query?.secret2);
  const baseUrl = req?.headers?.host?.includes('localhost')
    ? localUrl
    : remoteUrl

  return req?.query?.slug ? `${baseUrl}${req?.query?.slug}` : baseUrl
}
