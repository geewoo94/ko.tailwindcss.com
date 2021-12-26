import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Cta } from '@/components/Cta'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Tailwind CSS 설치',
    body: () => (
      <p>
        npm을 통해 <code>tailwindcss</code> 및 해당 peer dependencies를 설치하고{' '}
        <code>tailwind.config.js</code> 파일을 만듭니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
    },
  },
  {
    title: 'PostCSS 설정에 Tailwind 추가하기',
    body: () => (
      <p>
        <code>tailwindcss</code> 그리고 <code>autoprefixer</code> 를 당신의{' '}
        <code>postcss.config.js</code> 파일 안에 추가해 주세요.
      </p>
    ),
    code: {
      name: 'postcss.config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: {
>     tailwindcss: {},
>     autoprefixer: {},
    }
  }`,
    },
  },
  {
    title: '당신의 template paths를 설정합니다.',
    body: () => (
      <p>
        <code>tailwind.config.js</code> 파일 안에 모든 template path를 추가합니다.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
>   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Tailwind 지시문을 CSS에 추가합니다.',
    body: () => (
      <p>
        각 Tailwind’s layers 의 <code>@tailwind</code> 지시문을 당신의 main CSS파일에 추가합니다.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '당신의 빌드 프로세스를 실행하세요.',
    body: () => (
      <p>
        <code>npm run dev</code> 로 당신의 빌드 프로세스를 실행하세요. 혹은{' '}
        <code>package.json</code> 파일 안에 있는 어떤 script도 상관 없습니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: 'HTML에서 Tailwind 사용합니다.',
    body: () => (
      <p>
        <code>{'<head>'}</code> 태그에 컴파일 된 CSS가 삽입 되었는지 확인해 주세요.{' '}
        <em>(아마 당신의 프레임 워크가 도와줄것 입니다)</em> 그 후에 Tailwind의 유틸리티 클래스를
        활용하여 당신의 content를 스타일 해 보세요.
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
    <link href="/dist/main.css" rel="stylesheet">
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
]

export default function UsingPostCss({ code }) {
  return (
    <InstallationLayout>
      <div className="relative z-10 prose mb-16 max-w-3xl dark:prose-dark">
        <p>
          Tailwind CSS를 PostCSS 플러그인으로 설치하는 것은 webpack, Rollup, Vite 및 Parcel과 같은
          빌드 도구와 통합하는 가장 완벽한 방법입니다.
        </p>
      </div>
      <Steps level={3} steps={steps} code={code} />
      <Cta
        label="프레임워크 가이드 확인하기"
        href="/docs/installation/framework-guides"
        description={
          <>
            <strong className="text-gray-900 font-semibold dark:text-gray-200">막혔나요?</strong> PostCSS로 Tailwind를
            설정하는 것은 빌드 도구에 따라 약간 다를 수 있습니다. 특정 설정에 대한 보다 구체적인
            지침이 있는지 알아보려면 프레임워크 가이드를 확인하세요.
          </>
        }
      />
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

UsingPostCss.layoutProps = {
  meta: {
    title: '설치: PostCSS를 사용하기',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
