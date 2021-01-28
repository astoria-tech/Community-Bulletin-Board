/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const addScript = url =>{
    const script = document.createElement('script')
    script.src=url
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry=()=>{
    window.onload=()=>{
        addScript('https://static.airtable.com/js/embed/embed_snippet_v1.js')
    }
}