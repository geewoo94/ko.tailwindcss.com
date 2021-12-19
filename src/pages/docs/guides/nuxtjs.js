import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '프로젝트 만들기',
    body: () => (
      <p>
        아직 Nuxt.js 프로젝트를 설정하지 않은 경우 새 Nuxt.js 프로젝트를 만드는 것부터 시작하십시오.
        가장 일반적인 접근 방식은{' '}
        <a href="https://nuxtjs.org/guides/get-started/installation">Create Nuxt App</a>을 사용하는
        것입니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx create-nuxt-app my-project\ncd my-project',
    },
  },
  {
    title: 'Tailwind CSS 설치',
    body: () => (
      <>
        <p>
          npm을 사용하여 <code>@nuxt/postcss8</code>뿐만 아니라 <code>tailwindcss</code> 및 피어
          종속성을 설치한 다음 init 명령을 실행하여 <code>tailwind.config.js</code> 파일을
          생성합니다.
        </p>
        <p className="mt-3 text-xs italic">
          Nuxt는 기본적으로 PostCSS v7 및 Autoprefixer v9를 설치하므로 <code>@latest</code>를
          사용해야 합니다.
        </p>
      </>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8\nnpx tailwindcss init',
    },
  },
  {
    title: 'Nuxt.js PostCSS 플러그인 설정',
    body: () => (
      <p>
        <code>nuxt.config.js</code> 파일에서 <code>@nuxt/postcss8</code> 플러그인을 활성화합니다.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    buildModules: [
>     '@nuxt/postcss8',
      // ...
    ],
  }`,
    },
  },
  {
    title: 'PostCSS 구성에 테일윈드를 추가',
    body: () => (
      <p>
        <code>nuxt.config.js</code> 파일에 <code>tailwindcss</code> 그리고 <code>autoprefixer</code>{' '}
        를 <code>build.postcss.plugins</code> 객체 안에 더해줍니다.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    build: {
>     postcss: {
>       plugins: {
>         tailwindcss: {},
>         autoprefixer: {},
>       },
>     },
    }
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
>     "./components/**/*.{js,vue,ts}",
>     "./layouts/**/*.vue",
>     "./pages/**/*.vue",
>     "./plugins/**/*.{js,ts}",
>     "./nuxt.config.{js,ts}",
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
        <code>./assets/css/main.css</code> 파일을 생성한 후 각 Tailwind’s layers 의{' '}
        <code>@tailwind</code> 지시문을 추가합니다.
      </p>
    ),
    code: {
      name: 'main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'CSS 파일 불러오기',
    body: () => (
      <p>
        새로 생성된 <code>./assets/css/main.css</code> 파일을 <code>nuxt.config.js</code> 파일의{' '}
        <code>css</code> 배열에 추가합니다.
      </p>
    ),
    code: {
      name: 'nuxt.config.js',
      lang: 'js',
      code: `  export default {
    css: [
>     '@/assets/css/main.css',
    ],
  }`,
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

export default function UsingNextJS({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with Nuxt.js"
      description="Setting up Tailwind CSS in a Nuxt.js project."
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

UsingNextJS.layoutProps = {
  meta: {
    title: '설치: Tailwind CSS 와 Nuxt.js',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
