import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader'

import App from './containers/App'

hot(module)(App)

ReactDom.render(<App />, document.querySelector('#root'))
