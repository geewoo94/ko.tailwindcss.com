import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '프로젝트 만들기',
    body: () => (
      <p>
        만약 당신이 아직 개츠비 프로젝트를 세팅하지 않았다면, 새로운 개츠비 프로젝트를 만드는 것부터
        시작하세요. 가장 일반적인 접근 방식은{' '}
        <a href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli">
          Gatsby CLI
        </a>
        를 사용하는 것입니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'gatsby new my-project\ncd my-project',
    },
  },
  {
    title: 'Tailwind CSS 설치',
    body: () => (
      <p>
        npm을 사용하여 <code>tailwindcss</code> 및 해당 피어 종속성과{' '}
        <code>gatsby-plugin-postcss</code>를 설치한 다음 init 명령을 실행하여{' '}
        <code>tailwind.config.js</code> 및 <code>postcss.config.js</code>를 모두 생성합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss\nnpx tailwindcss init -p',
    },
  },
  {
    title: 'Gatsby PostCSS 플러그인 사용 설정',
    body: () => (
      <p>
        <code>gatsby-config.js</code> 파일에서 <code>gatsby-plugin-postcss</code>를 사용하도록
        설정합니다. 자세한 내용은{' '}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/">플러그인의 설명서</a>를
        참조하십시오.
      </p>
    ),
    code: {
      name: 'gatsby-config.js',
      lang: 'js',
      code: `  module.exports = {
    plugins: [
>     'gatsby-plugin-postcss',
      // ...
    ],
  }`,
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
        <code>./src/styles/global.css</code> 파일을 생성한 후 각 Tailwind’s layers 의{' '}
        <code>@tailwind</code> 지시문을 추가합니다.
      </p>
    ),
    code: {
      name: 'global.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'CSS 파일 불러오기',
    body: () => (
      <p>
        프로젝트의 루트에 <code>gatsby-browser.js</code> 파일이 없는 경우 파일을 만들고 새로 만든
        <code>./src/styles/global.css</code> 파일을 가져옵니다.
      </p>
    ),
    code: {
      name: 'gatsby-browser.js',
      lang: 'css',
      code: `> import './src/styles/global.css'`,
    },
  },
  {
    title: '빌드 프로세스 시작',
    body: () => (
      <p>
        빌드 프로세스를 <code>gatsby develop</code>로 실행합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'gatsby develop',
    },
  },
  {
    title: '프로젝트에서 Tailwind 시작',
    body: () => <p>Tailwind의 유틸리티 클래스를 사용하여 콘텐츠 스타일을 지정합니다.</p>,
    code: {
      name: 'index.js',
      lang: 'jsx',
      code: `  export default function IndexPage() {
    return (
      <Layout>
>       <h1 className="text-3xl font-bold underline">
>         Hello world!
>       </h1>
      </Layout>
    )
  }`,
    },
  },
]

export default function UsingGatsby({ code }) {
  return (
    <FrameworkGuideLayout
      title="개츠비와 함께 테일윈드 CSS를 설치"
      description="개츠비 프로젝트에서 테일윈드 CSS를 설치하기."
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

UsingGatsby.layoutProps = {
  meta: {
    title: '설치: Tailwind CSS 와 Gatsby',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
