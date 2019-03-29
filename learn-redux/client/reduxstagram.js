import React from 'react'
import {render} from 'react-dom'
import css from './styles/style.styl'
import Main from './components/Main.js'
import Photogrid from './components/Photogrid';
import Single from './components/Single';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid} />
      <Route path="/view/:postId" component={Single}/>
    </Route>
  </Router>
)

render(router, document.getElementById('root'))