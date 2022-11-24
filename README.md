# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```
react-study
├─ config
│  ├─ env.js
│  ├─ getHttpsConfig.js
│  ├─ jest
│  │  ├─ babelTransform.js
│  │  ├─ cssTransform.js
│  │  └─ fileTransform.js
│  ├─ modules.js
│  ├─ paths.js
│  ├─ webpack
│  │  └─ persistentCache
│  │     └─ createEnvironmentHash.js
│  ├─ webpack.config.js
│  └─ webpackDevServer.config.js
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ scripts
│  ├─ build.js
│  ├─ start.js
│  └─ test.js
├─ src
│  ├─ 01_Props
│  │  ├─ App.jsx
│  │  └─ Sub.jsx
│  ├─ 02_Slots
│  │  ├─ App.jsx
│  │  ├─ Sub.css
│  │  └─ Sub.jsx
│  ├─ 03_Context
│  │  ├─ App.jsx
│  │  ├─ Child.jsx
│  │  ├─ context
│  │  │  └─ AppContext.js
│  │  └─ Dad.jsx
│  ├─ 04_setState
│  │  └─ App.jsx
│  ├─ 05_scu_render
│  │  ├─ App.jsx
│  │  └─ Sub.jsx
│  ├─ 06_不可变数据
│  │  └─ App.jsx
│  ├─ 07_ref
│  │  ├─ App.jsx
│  │  └─ Forward.jsx
│  ├─ 08_受控&非受控
│  │  ├─ 1_受控
│  │  │  ├─ 1_1共用同个处理函数
│  │  │  │  └─ App.jsx
│  │  │  ├─ 1_2Checkbox
│  │  │  │  └─ App.jsx
│  │  │  └─ 1_3Select
│  │  │     └─ App.jsx
│  │  └─ App.jsx
│  ├─ 09_高阶组件
│  │  ├─ 1_高阶组件定义
│  │  │  ├─ App.jsx
│  │  │  └─ enhanceCpn.js
│  │  └─ 2_高阶组件应用
│  │     ├─ App.jsx
│  │     └─ enhanceCpn.js
│  ├─ 10_Portals
│  │  └─ App.jsx
│  ├─ 11_style_js
│  │  ├─ App.jsx
│  │  └─ style.js
│  ├─ 12_redux
│  │  ├─ App.jsx
│  │  ├─ components
│  │  │  ├─ LeftChild.jsx
│  │  │  └─ RightChild.jsx
│  │  └─ store
│  │     ├─ actionCreators.js
│  │     ├─ constants.js
│  │     ├─ index.js
│  │     └─ reducer.js
│  ├─ 13_react-redux
│  │  ├─ App.jsx
│  │  ├─ Home.jsx
│  │  ├─ Profile.jsx
│  │  └─ store
│  │     ├─ action.js
│  │     ├─ constant.js
│  │     ├─ index.js
│  │     └─ reducer.js
│  ├─ 14_redux-thunk
│  │  ├─ App.jsx
│  │  ├─ Home.jsx
│  │  ├─ Profile.jsx
│  │  └─ store
│  │     ├─ Home
│  │     │  ├─ action.js
│  │     │  ├─ constants.js
│  │     │  ├─ index.js
│  │     │  └─ reducer.js
│  │     ├─ index.js
│  │     └─ Profile
│  │        ├─ action.js
│  │        ├─ constants.js
│  │        ├─ index.js
│  │        └─ reducer.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ index.js
└─ yarn.lock

```