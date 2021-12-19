import NextLink from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'
import { black } from 'tailwindcss/colors'
import { theme } from 'tailwind.config'

let steps = [
  {
    title: 'Play CDN 스크립트를 HTML에 추가합니다.',
    body: () => (
      <p>
        <code>{'<head>'}</code> 태그에 Play CDN 스크립트를 추가하세요. 그 후에 Tailwind의 유틸리티
        클래스를 활용하여 당신의 content를 스타일 해 보세요.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
  {
    title: '설정 커스터마이징 하기',
    body: () => (
      <p>
        <code>tailwind.config</code> 를 편집하여{' '}
        <NextLink href="/docs/configuration">당신만의 디자인 토큰을 커스텀</NextLink> 하세요.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
>   <script>
>     tailwind.config = {
>       theme: {
>         extend: {
>           colors: {
>             clifford: '#da373d',
>           }
>         }
>       }
>     }
>   </script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline **text-clifford**">
      Hello world!
    </h1>
  </body>
  </html>`,
    },
  },
  {
    title: '사용자 정의 CSS를 추가해 보세요.',
    body: () => (
      <p>
        <code>type="text/tailwindcss"</code> 을 사용해서 Tailwind의 모든 CSS 기능을 지원하는 사용자
        지정 CSS를 추가합니다.
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>/* ... */</script>
>   <style type="text/tailwindcss">
>     @layer utilities {
>       .content-auto {
>         content-visibility: auto;
>       }
>     }
>   </style>
  </head>
  <body>
>   <div class="lg:content-auto">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
]

export default function PlayCdn({ code }) {
  return (
    <InstallationLayout>
      <div className="relative z-10 prose mb-16 max-w-3xl">
        <p>
          Play CDN을 사용하여 빌드 단계 없이 브라우저에서 Tailwind를 사용해 보십시오. Play CDN은
          개발 목적으로만 설계되었으며 생산에 가장 적합한 선택은 아닙니다.
        </p>
      </div>
      <Steps steps={steps} code={code} />
    </InstallationLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        let isArray = Array.isArray(code)
        code = isArray ? code : [code]
        code = code.map((code) => {
          if (code.lang && code.lang !== 'terminal') {
            return highlightCode(code.code, code.lang)
          }
          return code.code
        })
        return isArray ? code : code[0]
      }),
    },
  }
}

PlayCdn.layoutProps = {
  meta: {
    title: '설치: Play CDN',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
