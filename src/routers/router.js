import React from "react"
import { Route, Routes } from "react-router-dom"
import { ContainerGlobal } from "Containers/containerGlobal.js"
import { Home } from "View/home/home.js"

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
      <Route
        index
        path="*"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
    </Routes>
  )
}
export { Router }
