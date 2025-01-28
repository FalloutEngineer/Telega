import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./layout.module.css"
import ContentContainer from "./content-container/ContentContainer"

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </div>
  )
}
