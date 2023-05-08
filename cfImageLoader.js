export default function cfImageLoader({ src, width, quality }) {
    //const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    //return `https://tfm-nextjs-cloudflare.pages.dev/cdn-cgi/image/${params.join(',')}/${src}`
    return `images.ctfassets.net/${src}?w=${width}&q=${quality || 75}`;
}
