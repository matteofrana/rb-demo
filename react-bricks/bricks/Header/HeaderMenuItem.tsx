import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Text, Repeater, types, Link } from 'react-bricks/frontend'
import useOnClickOutside from './useClickOutside'

interface HeaderMenuItemProps {
  linkPath: string
  submenuItems: any
  isActive: boolean
}

const HeaderMenuItem: types.Brick<HeaderMenuItemProps> = ({
  linkPath,
  submenuItems,
  isActive,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!submenuItems || !submenuItems.length) {
    return (
      <Link
        href={linkPath}
        className={classNames(
          'inline-flex justify-center items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out text-gray-600 dark:text-white hover:bg-sky-500/20 hover:text-sky-600',
          { 'text-sky-600 bg-sky-500/10': isActive }
        )}
      >
        <Text
          propName="linkText"
          placeholder="Type a text..."
          renderBlock={({ children }) => <span>{children}</span>}
        />
      </Link>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className={classNames(
          'text-gray-600 dark:text-white hover:bg-sky-500/20 hover:text-sky-600 inline-flex justify-center items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out',
          { 'bg-sky-500/20 text-sky-600': open }
        )}
        onClick={() => setOpen((current) => !current)}
      >
        <Text
          propName="linkText"
          placeholder="Type a text..."
          renderBlock={({ children }) => (
            <div
              className={classNames('', {
                'text-sky-600 bg-sky-500/10': isActive,
              })}
            >
              {children}
            </div>
          )}
        />
        {open ? (
          <svg
            viewBox="0 0 14 14"
            width="14px"
            height="14px"
            className="inline-block w-[10px] h-[10px] ml-[5px]"
          >
            <path
              d="m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 14 14"
            width="14px"
            height="14px"
            className="inline-block w-[10px] h-[10px] ml-[5px]"
          >
            <path
              d="m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z"
              fill="currentColor"
            ></path>
          </svg>
        )}
      </button>
      {open && (
        <div className="w-64 bg-white p-3 border rounded-lg shadow-lg absolute top-10 z-10">
          <Repeater propName="submenuItems" />
        </div>
      )}
    </div>
  )
}

HeaderMenuItem.schema = {
  name: 'header-menu-item',
  label: 'Menu Item',
  category: 'header',

  repeaterItems: [
    {
      name: 'submenuItems',
      itemType: 'header-menu-subitem',
    },
  ],

  getDefaultProps: () => ({
    linkPath: '/about-us',
    isActive: false,
    linkText: 'About us',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuItem
