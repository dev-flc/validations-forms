import React, { useState } from "react"
import { actionSetTitle } from "Actions/actionSetTitle.js"
import { actionSetModeIsDark } from "Actions/actionsTheme.js"
import { useStore } from "Hook/store/useStore.js"
import { convertTextUpperOrLower } from "Utils/utils.js"
import imageEslint from "Images/eslint.svg"
import imagePrettier from "Images/prettier.svg"
import imageReact from "Images/react.svg"
import imageRedux from "Images/redux.svg"
import imageSass from "Images/sass.svg"
import imageWebpack from "Images/webpack.svg"

import DarkModeIcon from "@mui/icons-material/DarkMode"
import IconButton from "@mui/material/IconButton"
import LightModeIcon from "@mui/icons-material/LightMode"

import TextRotateUpIcon from "@mui/icons-material/TextRotateUp"
import TextRotateVerticalIcon from "@mui/icons-material/TextRotateVertical"

import Container from "@mui/material/Container"

const Home = React.memo(() => {
  const [mapStateToProps, mapDispatchToProps] = useStore()
  const [isUpperCase, setisUpperCase] = useState(false)

  const { title, theme } = mapStateToProps

  const { modeIsDark } = theme

  const handleThemeMode = () => {
    mapDispatchToProps(actionSetModeIsDark(!modeIsDark))
  }

  const handleConvertText = () => {
    const { 0: text, 1: status } = convertTextUpperOrLower(title)
    setisUpperCase(status)
    mapDispatchToProps(actionSetTitle(text))
  }

  return (
    <Container maxWidth="sm" fixed>
      <div className="container">
        <div className="sub-section">
          <h1 className="title"> F.L.C </h1>
        </div>
        <div className="sub-section">
          <img src={imageReact} className="image image-animation" alt="React" />
          <img src={imageRedux} className="image image-animation" alt="Redux" />
          <img src={imageSass} className="image" alt="Sass" />
          <img src={imagePrettier} className="image" alt="Prettier" />
          <img
            src={imageEslint}
            className="image image-animation"
            alt="Eslint"
          />
          <img
            src={imageWebpack}
            className="image image-animation"
            alt="Webpack"
          />
        </div>
        <div>
          <IconButton
            onClick={handleConvertText}
            aria-label="Text"
            size="large"
          >
            {isUpperCase ? (
              <TextRotateUpIcon fontSize="inherit" />
            ) : (
              <TextRotateVerticalIcon fontSize="inherit" />
            )}
          </IconButton>
          <IconButton
            onClick={handleThemeMode}
            aria-label="mode theme"
            size="large"
          >
            {modeIsDark ? (
              <LightModeIcon fontSize="inherit" />
            ) : (
              <DarkModeIcon fontSize="inherit" />
            )}
          </IconButton>
        </div>
      </div>
    </Container>
  )
})

Home.displayName = "Home"

export { Home }
