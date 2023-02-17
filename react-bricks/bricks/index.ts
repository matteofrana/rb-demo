import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Header from './Header/Header'
import HeaderMenuItem from './Header/HeaderMenuItem'
import HeaderMenuSubItem from './Header/HeaderMenuSubItem'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit,
  Header,
  HeaderMenuItem,
  HeaderMenuSubItem,
]

export default bricks
