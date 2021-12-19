import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '프로젝트 만들기',
    body: () => (
      <p>
        아직 Vite 프로젝트를 설정하지 않은 경우 새 Vite 프로젝트를 만드는 것부터 시작하십시오. 가장
        일반적인 방법은{' '}
        <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite#readme">
          Create Vite
        </a>
        를 사용하는 것입니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm init vite my-project\ncd my-project',
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
      code: 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p',
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
>     "./index.html",
>     "./src/**/*.{vue,js,ts,jsx,tsx}",
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
        <code>./src/index.css</code> 파일을 생성한 후 각 Tailwind’s layers 의 <code>@tailwind</code>{' '}
        지시문을 추가합니다.
      </p>
    ),
    code: {
      name: 'index.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'CSS 파일 불러오기',
    body: () => (
      <p>
        새로 만든 <code>./src/index.css</code> 파일을 <code>./src/main.js</code> 파일에서
        불러옵니다.
      </p>
    ),
    code: {
      name: 'main.js',
      lang: 'js',
      code: `  import { createApp } from 'vue'
  import App from './App.vue'
> import './index.css'

  createApp(App).mount('#app')`,
    },
  },
  {
    title: '빌드 프로세스 시작',
    body: () => (
      <p>
        빌드 프로세스를 <code>npm run dev</code>로 실행합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run dev',
    },
  },
  {
    title: '프로젝트에서 Tailwind 시작',
    body: () => <p>Tailwind의 유틸리티 클래스를 사용하여 콘텐츠 스타일을 지정합니다.</p>,
    code: {
      name: 'App.vue',
      lang: 'html',
      code: `  <template>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </template>`,
    },
  },
]

export default function UsingVite({ code }) {
  return (
    <FrameworkGuideLayout
      title="Vue 3 및 Vite와 함께 Tailwind CSS를 설치합니다."
      description="Vue 3 및 Vite 프로젝트에서 Tailwind CSS를 설정합니다."
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

UsingVite.layoutProps = {
  meta: {
    title: '설치: Tailwind CSS 와 Vue 3 그리고 Vite',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
