import React from 'react'
import { Image, Repeater, types, Link } from 'react-bricks/frontend'

const Header: types.Brick = () => {
  return (
    <section>
      <nav className="py-5 px-5 sm:mx-[5.55555%] xl:mx-[11.1111%] flex justify-start items-center">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-1.5 px-2 mr-6"
        >
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName="block w-32 h-7 object-contain object-left"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <Repeater propName="menuItems" />
        </div>
        <div className="ml-auto">
          <Link
            href="/admin"
            className="inline-block whitespace-nowrap text-center py-3 px-6 rounded-full text-sm font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5 min-w-[120px] bg-cyan-500 text-white hover:bg-cyan-600"
          >
            Edit content
          </Link>
        </div>
      </nav>
    </section>
  )
}

Header.schema = {
  name: 'header',
  label: 'Header',
  category: 'layout',
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'header-menu-item',
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [],
  getDefaultProps: () => ({
    menuItems: [
      {
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
  }),
}

export default Header
