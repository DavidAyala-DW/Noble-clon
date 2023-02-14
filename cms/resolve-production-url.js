// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "test"

const urls = {
  "casaMadera": "https://noble-clon.vercel.app/",
  "sparrow": "https://noble33-sparrow.netlify.app/",
  "noble33": "https://noble33.netlify.app/"
}

const remoteUrl = `https://noble33.netlify.app/`
const localUrl = `http://localhost:3000`

export default function resolveProductionUrl(doc) {
  
  const site = doc?.site ?? "noble33"

  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : urls[site]

  const previewUrl = new URL(baseUrl)

  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`secret`, previewSecret)
  previewUrl.searchParams.append(`slug`,  `/`)
  previewUrl.searchParams.append(`secret2`,  doc?.site ?? "noble33" )

  return previewUrl.toString()
}
