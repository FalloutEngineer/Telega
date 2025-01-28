import React from "react"
import styles from "./sidebar.module.css"
import SidebarList from "./sidebar-list/SidebarList"
import Search from "./search/Search"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Search />
      <SidebarList />
    </div>
  )
}
