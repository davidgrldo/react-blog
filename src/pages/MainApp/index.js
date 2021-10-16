import React from 'react'
import './mainApp.scss'
import Home from '../Home'
import CreatePost from '../CreatePost'
import DetailPost from '../DetailPost'
import { Footer, Header } from '../../components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-post">
              <CreatePost />
            </Route>
            <Route path="/detail-post">
              <DetailPost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp
