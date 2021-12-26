import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '프로젝트 만들기',
    body: () => (
      <p>
        아직 구성하지 않은 경우{' '}
        <a href="https://create-react-app.dev/docs/getting-started">Create React App v5.0+</a>으로 새
        React 프로젝트를 생성하여 시작합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-react-app my-project\ncd my-project',
    },
  },
  {
    title: 'Tailwind CSS 설치',
    body: () => (
      <p>
        npm을 사용하여 <code>tailwindcss</code> 및 해당 피어 종속성을 설치한 다음 init 명령을
        실행하여 <code>tailwind.config.js</code> 및 <code>postcss.config.js</code>를 모두
        생성합니다.
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
>     "./src/**/*.{js,jsx,ts,tsx}",
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
        <code>./src/index.css</code> 파일에 각 Tailwind’s layers 의 <code>@tailwind</code> 지시문을
        추가합니다.
      </p>
    ),
    code: {
      name: 'index.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: '빌드 프로세스 시작',
    body: () => (
      <p>
        빌드 프로세스를 <code>npm run start</code>로 실행합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm run start',
    },
  },
  {
    title: '프로젝트에서 Tailwind 시작',
    body: () => <p>Tailwind의 유틸리티 클래스를 사용하여 콘텐츠 스타일을 지정합니다.</p>,
    code: {
      name: 'App.js',
      lang: 'jsx',
      code: `  export default function App() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingCRA({ code }) {
  return (
    <FrameworkGuideLayout
      title="Create React App을 사용하여 Tailwind CSS를 설치"
      description="Create React App 프로젝트에서 Tailwind CSS 설정합니다."
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

UsingCRA.layoutProps = {
  meta: {
    title: '설치: Tailwind CSS 와 Create React App',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
