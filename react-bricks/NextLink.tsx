import Link from 'next/link'
import { useRouter } from 'next/router'
import { types } from 'react-bricks/frontend'

const NextLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  children,
}) => {
  const router = useRouter()

  let anchorClassName = ''

  if (router.asPath === href) {
    anchorClassName = activeClassName || className
  } else {
    anchorClassName = className
  }

  return (
    <Link href={href} className={anchorClassName}>
      {children}
    </Link>
  )
}

export default NextLink
