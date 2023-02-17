import React from 'react'
import { Text, types, Link } from 'react-bricks/frontend'
import classNames from 'classnames'

interface HeaderMenuSubItemProps {
  linkPath: string
}

const HeaderMenuSubItem: types.Brick<HeaderMenuSubItemProps> = ({
  linkPath,
}) => {
  return (
    <Link href={linkPath} className="block group p-3">
      <Text
        propName="linkText"
        placeholder="Type a text..."
        renderBlock={({ children }) => (
          <div
            className={classNames(
              'text-sm font-bold mb-1 transition-colors ease-out text-gray-900 dark:text-white group-hover:text-sky-600'
            )}
          >
            {children}
          </div>
        )}
      />
      <Text
        propName="linkDescription"
        placeholder="Type a text..."
        renderBlock={({ children }) => (
          <div
            className={classNames(
              'text-sm transition-colors ease-out text-gray-600 dark:text-white'
            )}
          >
            {children}
          </div>
        )}
      />
    </Link>
  )
}

HeaderMenuSubItem.schema = {
  name: 'header-menu-subitem',
  label: 'Submenu Item',
  category: 'header',

  getDefaultProps: () => ({
    linkText: 'Changelog',
    linkDescription: 'Release notes for all React Bricks versions',
    linkPath: '/',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuSubItem
