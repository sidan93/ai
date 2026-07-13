import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../../.quartz/plugins"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    const privacyUrl = `https://${cfg.baseUrl}/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8`

    const coreStylesheet = css[0]?.content
    const coreScript = js.find(
      (r) => r.loadTime === "beforeDOMReady" && r.contentType === "external",
    )

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {coreStylesheet && <link rel="preload" href={coreStylesheet} as="style" />}
        {coreScript && coreScript.contentType === "external" && (
          <link rel="preload" href={coreScript.src} as="script" />
        )}
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
        <style>{`
          #cookie-banner{position:fixed;bottom:0;left:0;right:0;background:var(--light);border-top:1px solid var(--lightgray);padding:1rem 1.5rem;z-index:9999;font-size:.875rem;color:var(--darkgray);box-shadow:0 -2px 10px rgba(0,0,0,.1)}
          #cookie-banner.hidden{display:none}
          .cookie-wrap{max-width:800px;margin:0 auto;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;justify-content:space-between}
          .cookie-wrap p{margin:0;flex:1 1 300px;line-height:1.5}
          .cookie-wrap a{color:var(--secondary);text-decoration:underline}
          .cookie-btn{background:var(--secondary);color:#fff;border:none;padding:.5rem 1.5rem;border-radius:4px;cursor:pointer;font-size:.875rem;font-weight:600;white-space:nowrap}
          .cookie-btn:hover{opacity:.85}
        `}</style>
        <script>{`
          (function(){
            if(localStorage.getItem('cc'))return
            function init(){
              var b=document.createElement('div'),w=document.createElement('div'),p=document.createElement('p'),a=document.createElement('a'),btn=document.createElement('button')
              b.id='cookie-banner';w.className='cookie-wrap'
              p.appendChild(document.createTextNode('Этот сайт использует Яндекс.Метрику и cookie-файлы для аналитики. Продолжая использовать сайт, вы соглашаетесь с '))
              a.href='${privacyUrl}';a.textContent='политикой конфиденциальности';p.appendChild(a)
              btn.className='cookie-btn';btn.textContent='Принять'
              btn.onclick=function(){b.classList.add('hidden');localStorage.setItem('cc','1')}
              w.appendChild(p);w.appendChild(btn);b.appendChild(w);document.body.appendChild(b)
            }
            if(document.body)init();else document.addEventListener('DOMContentLoaded',init)
          })()
        `}</script>
        <script
          type="text/javascript"
          // preact-render-to-string HTML-escapes text children (< and " become entities),
          // which breaks inline JS — inject raw via dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(110162866,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true,trackHash:true})`,
          }}
        ></script>
        <noscript><div><img src="https://mc.yandex.ru/watch/110162866" style="position:absolute;left:-9999px" alt="" /></div></noscript>
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
