import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {
  Paragraph,
  IconContainer,
  Caption,
  BigText,
  Link,
  Widont,
  InlineCode,
} from '@/components/home/common'
import { CodeWindow } from '@/components/CodeWindow'
import iconUrl from '@/img/icons/home/dark-mode.png'
import { addClassTokens } from '@/utils/addClassTokens'
import { Token } from '@/components/Code'
import clsx from 'clsx'
import { GridLockup } from '../GridLockup'
import { code, tokens } from '../../samples/dark-mode.html?highlight'

function Sun(props) {
  return (
    <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Moon(props) {
  return (
    <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DarkModeSwitch({ enabled, onChange }) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={clsx(
        'relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none',
        enabled
          ? 'bg-gray-700 text-gray-400 focus-visible:ring-gray-500'
          : 'bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600'
      )}
    >
      <span className="sr-only">{enabled ? 'Enable' : 'Disable'} dark mode</span>
      <Sun
        className={clsx(
          'transform transition-transform',
          enabled ? 'scale-100 duration-300' : 'scale-0 duration-500'
        )}
      />
      <Moon
        className={clsx(
          'ml-3.5 transform transition-transform',
          enabled ? 'scale-0 duration-500' : 'scale-100 duration-300'
        )}
      />
      <span
        className={clsx(
          'absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform',
          enabled ? 'translate-x-[2.625rem]' : ''
        )}
      >
        <Sun
          className={clsx(
            'flex-none transition duration-500 transform text-cyan-500',
            enabled ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          )}
        />
        <Moon
          className={clsx(
            'flex-none -ml-6 transition duration-500 transform text-gray-700',
            enabled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          )}
        />
      </span>
    </Switch>
  )
}

export function DarkMode() {
  const [enabled, setEnabled] = useState(false)

  return (
    <section id="dark-mode">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer>
          <img src={iconUrl} alt="" />
        </IconContainer>
        <Caption className="text-gray-500">Dark mode</Caption>
        <BigText>
          <Widont>이젠 다크모드도 함께.</Widont>
        </BigText>
        <Paragraph>
          사람들이 새벽 2시에 휴대전화로 웹사이트를 열면 눈을 멀게 하는 웹사이트 중 하나가 되고 싶지
          않습니까? 당신의 설정 파일에서 다크모드를 활성화 시킨 후{' '}
          <InlineCode>dark:</InlineCode> 를 컬러 유틸리티 앞에 붙히면 적용할 수 있습니다.{' '}
          다음에 적용됩니다. background colors, text colors, border colors, 심지어 gradients 까지.
        </Paragraph>
        <Link href="/docs/dark-mode" color="gray">
          더 배우기<span className="sr-only">, dark mode</span>
        </Link>
      </div>
      <GridLockup
        className="mt-10 xl:mt-2"
        beams={5}
        left={
          <div className="relative xl:mt-18">
            <DarkModeSwitch enabled={enabled} onChange={setEnabled} />
            <div
              className={clsx('mt-6 sm:mt-10 relative z-10 rounded-xl shadow-xl', {
                dark: enabled,
              })}
              dangerouslySetInnerHTML={{
                __html: code
                  .replace(/\(light\)/g, '')
                  .replace(/dark:/g, 'transition-all duration-500 dark:')
                  .replace(
                    'src="/full-stack-radio.png"',
                    `src="${require('@/img/full-stack-radio.png').default}" loading="lazy"`
                  ),
                // .replace(/<button type="button" class="/g, '<div class="cursor-pointer ')
                // .replace(/<\/button>/g, '</div>'),
              }}
            />
          </div>
        }
        right={
          <CodeWindow>
            <CodeWindow.Code
              tokens={tokens}
              tokenComponent={DarkModeToken}
              tokenProps={{ enabled }}
              transformTokens={addClassTokens}
            />
          </CodeWindow>
        }
      />
    </section>
  )
}

function DarkModeToken({ token, parentTypes, enabled, children }) {
  if (token[0] === 'class') {
    if (token[1].startsWith('dark:')) {
      return (
        <span
          className={clsx('code-highlight transition-colors duration-500', {
            'bg-code-highlight': enabled,
          })}
        >
          {children}
        </span>
      )
    }
    if (token[1].startsWith('(light)')) {
      return (
        <span className={clsx('transition-opacity duration-500', { 'opacity-50': enabled })}>
          {token[1].replace(/^\(light\)/, '')}
        </span>
      )
    }
  }

  return (
    <Token token={token} parentTypes={parentTypes}>
      {children}
    </Token>
  )
}
