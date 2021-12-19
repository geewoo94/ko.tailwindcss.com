import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '프로젝트 만들기',
    body: () => (
      <p>
        아직 Next.js 프로젝트를 설정하지 않은 경우 새 프로젝트를 만드는 것부터 시작합니다. 가장
        일반적인 접근 방식은{' '}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>을
        사용하는 것입니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-next-app my-project\ncd my-project',
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
>     "./pages/**/*.{js,ts,jsx,tsx}",
>     "./components/**/*.{js,ts,jsx,tsx}",
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
      name: 'globals.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
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
      name: 'index.js',
      lang: 'jsx',
      code: `  export default function Home() {
    return (
>     <h1 className="text-3xl font-bold underline">
>       Hello world!
>     </h1>
    )
  }`,
    },
  },
]

export default function UsingNextJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Next.js와 함께 테일윈드 CSS를 설치하기"
      description="Next.js v10+ 프로젝트에서 Tailwind CSS 설정."
    >
      <div className="relative z-10 prose mb-16 max-w-3xl">
        <p>
          Next.js 프로젝트에서 Tailwind CSS 사용을 시작하는 가장 빠른 방법은 <a href="https://github.com/vercel/next.js/tree/4d4f3093019179b1928ec07c16f38882241c0375/examples/with-tailwindcss">Next.js + Tailwind CSS
          예제</a>를 사용하는 것입니다. 이렇게 하면 공식 Next.js 예제에 따라 테일윈드 설정이 자동으로
          구성됩니다. Tailwind를 수동으로 구성하려면 본 안내서의 나머지 부분을 계속 진행합니다.
        </p>
      </div>
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

UsingNextJS.layoutProps = {
  meta: {
    title: '설치: Tailwind CSS 와 Next.js',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
