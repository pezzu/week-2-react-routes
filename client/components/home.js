import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'

import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route path="/dashboard/profile/:user">
              <Profile />
            </Route>
            <Route path="/dashboard/main">
              <Main />
            </Route>
            <Route path="/dashboard/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
