import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'

import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import { ReactComponent as LaravelLogo } from '@/img/guides/laravel.svg'
import { ReactComponent as ViteLogo } from '@/img/guides/vite.svg'
import { ReactComponent as NuxtJsLogo } from '@/img/guides/nuxtjs.svg'
import { ReactComponent as GatsbyLogo } from '@/img/guides/gatsby.svg'
import { ReactComponent as CraLogo } from '@/img/guides/cra.svg'

export default function FrameworkGuides() {
  return (
    <InstallationLayout>
      <div className="prose mb-10 max-w-3xl dark:prose-dark">
        <p>
          많이 사용되는 환경에서 Tailwind CSS를 설치하는 권장되는 접근 방식을 다루는 프레임워크별
          가이드입니다.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            name: 'Next.js',
            slug: 'nextjs',
            description: '뛰어난 개발자 경험과 함께 모든 기능을 갖춘 Response 프레임워크입니다.',
            logo: () => <NextJsLogo className="dark:invert" />,
          },
          {
            name: 'Laravel',
            slug: 'laravel',
            description: '표현적이고 우아한 구문을 가진 PHP 웹 애플리케이션 프레임워크입니다.',
            logo: LaravelLogo,
          },
          {
            name: 'Vite',
            slug: 'vite',
            description: '빠르고 현대적인 개발 서버 및 빌드 도구입니다.',
            logo: ViteLogo,
          },
          {
            name: 'Nuxt.js',
            slug: 'nuxtjs',
            description: '범용 애플리케이션 구축을 위한 직관적인 Vue 프레임워크입니다.',
            logo: NuxtJsLogo,
          },
          {
            name: 'Gatsby',
            slug: 'gatsby',
            description:
              'React 및 GraphQL을 사용하여 정적 사이트를 구축하기 위한 프레임워크입니다.',
            logo: GatsbyLogo,
          },
          {
            name: 'Create React App',
            slug: 'create-react-app',
            description: '새로운 단일 페이지 React application을 비계화하는 CLI 도구입니다.',
            logo: CraLogo,
          },
        ].map(({ name, description, logo: Logo, slug }) => (
          <li key={name} className="relative flex flex-row-reverse">
            <div className="ml-6 flex-auto">
              <h3 className="mb-2 leading-6 text-gray-900 font-semibold dark:text-gray-200">
                <Link href={`/docs/guides/${slug}`}>
                  <a className="before:absolute before:inset-0">{name}</a>
                </Link>
              </h3>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">{description}</p>
            </div>
            <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-gray-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-gray-800 dark:highlight-white/5">
              <Logo />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-16 prose max-w-3xl dark:prose-dark">
        <p>
          선택한 프레임워크가 보이지 않나요? <Link href="/docs/installation">Tailwind CLI</Link>를
          사용하거나 Tailwind를{' '}
          <Link href="/docs/installation/using-postcss">PostCSS 플러그인</Link>으로 대신 설치해
          보세요.
        </p>
      </div>
    </InstallationLayout>
  )
}

FrameworkGuides.layoutProps = {
  meta: {
    title: '설치: 프레임워크 가이드',
    section: '시작하기',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
