import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '프로젝트 만들기',
    body: () => (
      <p>
        아직 Laravel 프로젝트를 설정하지 않았다면 새로운 Laravel 프로젝트를 만드는 것부터
        시작하세요. 가장 일반적인 방법은{' '}
        <a href="https://laravel.com/docs/8.x#the-laravel-installer">Laravel Installer</a>를
        사용하는 것입니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'laravel new my-project\ncd my-project',
    },
  },
  {
    title: 'Tailwind CSS 설치',
    body: () => (
      <p>
        npm을 통해 <code>tailwindcss</code> 및 해당 피어 종속성을 설치한 다음 init 명령을 실행하여
        <code>tailwind.config.js</code> 및 <code>postcss.config.js</code>를 모두 생성합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init',
    },
  },
  {
    title: 'Laravel Mix 구성에 Tailwind를 추가',
    body: () => (
      <p>
        <code>webpack.mix.js</code> 파일에서 <code>tailwindcss</code>를 PostCSS 플러그인으로
        추가합니다.
      </p>
    ),
    code: {
      name: 'webpack.mix.js',
      lang: 'js',
      code: `  mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
>     require("tailwindcss"),
    ]);`,
    },
  },
  {
    title: '템플릿 경로 구성',
    body: () => (
      <p>
        <code>tailwind.config.js</code> 파일에 모든 템플릿 경로를 추가합니다.
      </p>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'js',
      code: `  module.exports = {
>   content: [
>     "./resources/**/*.blade.php",
>     "./resources/**/*.js",
>     "./resources/**/*.vue",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'CSS에 Tailwind 지시문을 추가합니다.',
    body: () => (
      <p>
        각 Tailwind’s layers 의 <code>@tailwind</code> 지시문을 당신의{' '}
        <code>./styles/globals.css</code>파일에 추가합니다.
      </p>
    ),
    code: {
      name: 'app.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '빌드 프로세스 시작',
    body: () => (
      <p>
        빌드 프로세스를 <code>npm run watch</code>로 실행합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run watch',
    },
  },
  {
    title: '프로젝트에서 Tailwind 시작',
    body: () => (
      <p>
        당신의 <code>{'<head>'}</code> 태그에 컴파일된 CSS가 포함되어 있는지 확인한 후 Tailwind의
        유틸리티 클래스를 사용하여 콘텐츠 스타일을 지정합니다.
      </p>
    ),
    code: {
      name: 'app.blade.php',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
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

export default function UsingLaravel({ code }) {
  return (
    <FrameworkGuideLayout
      title="Laravel과 함께 Tailwind CSS 설치"
      description="Laravel 프로젝트에서 Tailwind CSS를 설정합니다."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightCode } = require('../../../../remark/utils')

  return {
    props: {
      code: steps.map(({ code }) => {
        if (code.lang && code.lang !== 'terminal') {
          return highlightCode(code.code, code.lang)
        }
        return code.code
      }),
    },
  }
}

UsingLaravel.layoutProps = {
  meta: {
    title: '설치: Tailwind CSS 와 Laravel',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
