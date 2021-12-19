import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Tailwind CSS 설치',
    body: () => (
      <p>
        npm을 이용해 <code>tailwindcss</code>를 설치후 <code>tailwind.config.js</code> 파일을
        생성합니다.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npm install -D tailwindcss\nnpx tailwindcss init',
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
      name: 'src/input.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Tailwind CLI의 빌드 프로세스를 실행합니다.',
    body: () => <p>CLI tool을 실행하면 당신의 모든 template을 스캔하고 CSS를 빌드합니다.</p>,
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch',
    },
  },
  {
    title: 'HTML에서 Tailwind 사용합니다.',
    body: () => (
      <p>
        컴파일된 당신의 CSS 파일을 <code>{'<head>'}</code> 태그에 삽입해 줍니다.{' '}
        그 후에 Tailwind의 유틸리티 클래스를 활용하여 당신의 content를 스타일 해 보세요.
      </p>
    ),
    code: {
      name: 'src/index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <link href="/dist/output.css" rel="stylesheet">
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

export default function TailwindCli({ code }) {
  return (
    <InstallationLayout>
      <div className="relative z-10 prose mb-16 max-w-3xl">
        <p>
          Tailwind CSS를 처음부터 시작하고 실행하는 가장 간단하고 빠른 방법은 Tailwind CLI 도구를
          사용하는 것입니다.
        </p>
      </div>
      <Steps steps={steps} code={code} />
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="text-gray-900 font-semibold">
                This is only the beginning of what’s possible with the Tailwind CLI.
              </strong>{' '}
              To learn more about everything it can do, check out the Tailwind CLI documentation.
            </>
          }
        />
      */}
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

TailwindCli.layoutProps = {
  meta: {
    title: '설치: Tailwind CLI',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
