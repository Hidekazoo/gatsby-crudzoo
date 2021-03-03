import React from "react"
import { Link } from "gatsby"
import cn from "classnames"

import styles from "../styles/components/HomeRecentArticlesSidebar.module.css"

const SidebarItem: React.FC = props => {
  return <div className={cn(styles.sidebarItem)}>{props.children}</div>
}

const Series = () => {
  return (
    <div>
      <SidebarTitle title={`シリーズもお勧めです`} />
      <div>
        例えば、React、ロードバイクといった関連する記事を、読みやすい順番で並べて一覧にしています
      </div>
      <button>シリーズ一覧</button>
    </div>
  )
}

const Tags = () => {
  return (
    <div>
      <SidebarTitle title={`Tags`} />
      <ul>
        <TagListItem>React</TagListItem>
        <TagListItem>JavaScript</TagListItem>
        <TagListItem>UI/UX</TagListItem>
        <TagListItem>Gatsby</TagListItem>
        <TagListItem>ロードバイク</TagListItem>
      </ul>
    </div>
  )
}
const TagListItem: React.FC = ({ children }) => {
  return (
    <li className={cn(styles.sidebarTagListItem)}>
      <Link to={`/`}>{children}</Link>
    </li>
  )
}

export const SidebarTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h3 className={cn(styles.sidebarTitle)}>{title}</h3>
}

interface HomeRecentArticlesSidebarProps {
  items: React.ReactNode[]
}
export const HomeRecentArticlesSidebar: React.FC<HomeRecentArticlesSidebarProps> = ({
  items = [<Series />, <Tags />],
}) => {
  return (
    <div>
      {items.map((item, index) => {
        return <SidebarItem key={index}>{item}</SidebarItem>
      })}
    </div>
  )
}