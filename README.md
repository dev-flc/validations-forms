
<div id="top"></div>
<center>
  <h1 style="
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-family: $font-family;
  font-size: 50px;
  line-height: 75px;
  font-weight: 800;ls
  "> R E A C T -  T E M P L A T E </h1>
</center>
<br />
<div align="center">
  <a href="https://github.com/ferch01992/react_template">
    <img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" alt="Logo"  min-width="400px" max-width="400px" width="400px" height="300px">
  </a>
  <h3 align="center"> F.L.C </h3>

  <img height="50" alt="react" src="https://raw.githubusercontent.com/ferch01992/assets/ced3ee1a5c7c3c8a075a56248b75cd62172bb190/images/ferch01992/logo.svg">

  <br/>
  <p align="center">
    Una impresionante plantilla para impulsar sus proyectos!
    <br />
    <a href="https://github.com/ferch01992/template_webpack_5/blob/master/README.md"><strong>Explore los documentos »</strong></a>
    <br />
  </p>
</div>

<details>
  <summary style="color:#0078D4;font-size:20px">C O N T E N I  D O</summary>
  <ol>
    <li>
          <a href="#pre-requisitos">Pre-requisitos</a>
      <ul>
        <li><a href="#software-previo-y-requerido">Software previo y requerido</a></li>
        <li><a href="#plugins-previos-y-requeridos-para-vscode">Plugins previos y requeridos para VsCode</a></li>
      </ul>
    </li>
    <li>
      <a href="#librerias-generales-del-proyecto">Librerias generales del proyecto</a>
    </li>
    <li>
      <a href="#Configuracion-de-marcadores-de-linea-lf">Convención de commits</a>
    </li>
    <li>
      <a href="#instalacion-de-dependencias">Instalacion de dependencias</a>
    </li>
    <li>
      <a href="#configuración-de-eslint-y-prettier-en-vscode">Configuración de Eslint y Prettier en VSCode</a>
    </li>
    <li>
      <a href="#ejecución-del-proyecto-en-modo-desarrollo">Ejecución del proyecto en modo desarrollo</a>
    </li>
     <li>
          <a href="#estandar-general-de-desarrollo">Estandar general de desarrollo</a>
      <ul>
        <li><a href="#nombre-y-extenciones-de-archivos">Nombre y extenciones de archivos</a></li>
        <li><a href="#nombre-de-variables">Nombre de variables</a></li>
        <li><a href="#funciones-sin-eventos">Funciones sin eventos</a></li>
        <li><a href="#funciones-con-eventos">Funciones con eventos</a></li>
        <li><a href="#idemtación">Idemtación</a></li>
        <li><a href="#importación-y-exportación-de-componente">Importación y Exportación de componente</a></li>
        <li><a href="#store">Store</a></li>
      </ul>
    </li>

  </ol>
</details>
<br/>

## **Pre-requisitos**

--------------------------------------------------------------------------------

### **Software previo y requerido**

| Software | Versión                                                       | Documentación                                                                                                                                                       |
| -------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js  | <img src ="https://img.shields.io/badge/v14.x >= v16.x-blue"> | [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)                                  |
| Git      | <img src ="https://img.shields.io/badge/latest-brightgreen">  | [![Git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)                                                |
| VsCode   | <img src ="https://img.shields.io/badge/latest-brightgreen">  | [![VsCode](https://img.shields.io/badge/Visual_studio_code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/) |

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

### **Plugins previos y requeridos para VsCode**

#### **_Pligins:_**

- **EditorConfig for VS Code** [Documentación](https://editorconfig.org/)
- **Error lens** [Documentación](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens/)
- **ESLint** [Documentación](https://eslint.org/)
- **Prettier - Code formatter** [Documentación](https://prettier.io/)

**NOTA:** En caso de utilizar otro editor de código como
**_[Subliem text](https://www.sublimetext.com/)_** ó
**_[Vim](https://www.vim.org/), etc._** revisar la documentación de los plugin
para realizar la instalacion de manera correcta en su editor.

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Librerias generales del proyecto:**

| Libreria    | Versión                                                | Documentación                                                                                                                       |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| React       | <img src ="https://img.shields.io/badge/v18.2.0-blue"> | [![Git](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org/)        |
| Redux       | <img src ="https://img.shields.io/badge/v4.2.0-blue">  | [![Redux](https://img.shields.io/badge/Redux-7B42BC?style=for-the-badge&logo=redux&logoColor=white)](https://es.redux.js.org/)      |
| Webpack     | <img src ="https://img.shields.io/badge/v5.74.0-blue"> | [![Redux](https://img.shields.io/badge/Webpack-0081CB?style=for-the-badge&logo=webpack&logoColor=white)](https://webpack.js.org/)   |
| Babel       | <img src ="https://img.shields.io/badge/v7.18.10-blue"> | [![Redux](https://img.shields.io/badge/Babel-FFAD19?style=for-the-badge&logo=Babel&logoColor=white)](https://babeljs.io/)           |
| Material UI | <img src ="https://img.shields.io/badge/v5.10.1-blue">  | [![Redux](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/) |
| Sass        | <img src ="https://img.shields.io/badge/v1.54.4-blue">  | [![Redux](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)          |

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Convención de commits**

> Es importante tener en cuanta el estandar ya que si no cumples con el no podras realizar los commits.

[Documentación](https://www.conventionalcommits.org/en/v1.0.0/)

La confirmación contiene los siguientes elementos estructurales para comunicar la intención a los consumidores de su biblioteca:

- fix: un commit del tipo fix corrige un error en su base de código (esto se correlaciona con PATCH en Semantic Versioning).

- feat: un commit del tipo feat introduce una nueva característica en el código base (esto se correlaciona con MENOR en el control de versiones semántico).

- BREAKING CHANGE: un commit que tiene un pie de página BREAKING CHANGE:, o agrega un ! después del tipo/ámbito, introduce un cambio de API importante (que se correlaciona con PRINCIPAL en el control de versiones semántico).

- BREAKING CHANGE: puede ser parte de commits de cualquier tipo.
se permiten tipos distintos de fix: y feat:, por ejemplo @commitlint/config-conventional (basado en la convención Angular) recomienda build:, chore:, ci:, docs:, style:,

- refactor:, perf:, test: y otros: Se pueden proporcionar pies de página que no sean BREAKING CHANGE: <description> y seguir una convención similar al formato de tráiler de git.

- La especificación de commits convencionales no exige tipos adicionales y no tienen un efecto implícito en el control de versiones semántico (a menos que incluyan un CAMBIO IMPORTANTE). Se puede proporcionar un alcance al tipo de una confirmación, para proporcionar información contextual adicional y está contenido entre paréntesis, por ejemplo, hazaña (analizador): agregar capacidad para analizar matrices.


**Ejemplo:**
![contribution animation](https://github.com/ferch01992/assets/blob/master/images/template-webpack-5/conventional_commit.png?raw=true)
<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Instalación de dependencias**

> Ejecutar el siguiente comando para instalar las dependecias del proyecto.

```sh
npm i ó npm install
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Configuración de Eslint y Prettier en VSCode**

>Archivo `.vscode/settings.json` de VSCode.

```json
  // configuración de Eslint y Prettier
 "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "inlineFold.supportedLanguages": [
    "html",
    "svelte",
    "vue",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown"
  ],
```

**NOTA:** En caso de utilizar otro editor de código como
**_[Subliem text](https://www.sublimetext.com/)_** ó
**_[Vim](https://www.vim.org/), etc._** revisar la documentación de **_[ESLint](https://eslint.org/)_** y **_[Prettier](https://prettier.io/)_**

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Ejecución del proyecto en modo desarrollo**

> Ejecutar el siguiente comando en tu terminal.

_**SO Windows**_
```sh
npm run dev:win
```

_**SO Linux**_
```sh
npm run dev
```

_**URL de compilción:**_ [![localhost](https://img.shields.io/badge/127.0.0.1:8080-blue)](http://127.0.0.1:8080)

![alt text](https://github.com/ferch01992/assets/blob/master/images/template-webpack-5/react_templated.jpg?raw=true)

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Estandar general de desarrollo**

--------------------------------------------------------------------------------


### **Nombre y extenciones de archivos**

> Nombre del archivo : El nombre será acorde al contenido del archivo o clase del componente, y será en **_CamelCase_**, como se muestra en el siguiente ejemplo.

```sh
nameFileExample.js
```

> Tipos de extensiones :

```sh
.jsx ,   .js ,  .scss
```

> Si el contenido del archivo es JSX, la extensión será **.jsx**

> Si el contenido del archivo es JS la extensión será **.js**

> Si el contenido del archivo son estilos la extensión será **.scss**

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------


### **Nombre de variables**

> El nombre de la variable será escrito con CamelCase, como se muestra en el siguiente ejemplo :

```js
let nombreVariable = ";
```

> En caso de que la variable sea una constante será escrita con letras mayúsculas separada por guiones bajos, como se muestra en el ejemplo.

```js
const NOMBRE_VARIABLE = null;
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

### **Funciones sin eventos**

> Las funciones sin eventos serán llamadas acorde a la acción o funcionalidad que realizará la misma y será nombrada con **_CamelCase_**, como se muestra en el ejemplo.

```js
nombreFuncion( ) {
  console.log( " Hola Template Webpack 5 " )
}
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

### **Funciones con eventos**

> Ejemplo de eventos.

- onClick
- onChange
- etc...

> Las funciones con eventos propios de los componentes, tendrán al inicio la palabra handler y serán llamadas acorde a la acción o funcionalidad que realizará la misma y será nombrada con CamelCase, como se muestra en el ejemplo.

```js
handlerNombreFuncion( ) {
    console.log( " Hola Suscribe " )
}
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

### **Idemtación**

> La indentación del cada uno de los archivos será acorde al archivo de configuración [.editorconfig](https://editorconfig.org/), en el cual se encuentran las configuraciones de los archivos de acuerdo a su extensiones.

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

### **Importación y Exportación de componente**

> Los componentes serán exportados e importados, con el mismo nombre de su clase, ademas sera importado con rutas relativas como se muestra en el ejemplo.

```js
export default NameComponent.

import NameComponent from ‘./ruta/ruta’
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

### **Store**

> El store tendrá las siguientes características.

- Un máximo de tres niveles.
- Claves escritas **_CamelCase_**.
- No utilizar arreglos.

```js
const INITIAL_STATE = {
	claveA : {
			clave : { ... }
	},
	claveB : {
		claveBUno  : { ... },
		claveBDos  : { ... },
		claveBTres : {
			claveBTresA : { ... },
			claveBtresB : { ... },
			claveBtresC : { ... }
		}
	},
	claveC : { ... },
	claveD : { ... },
	claveE : { ... },
	...
}
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>
