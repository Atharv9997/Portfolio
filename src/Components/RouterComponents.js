import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardH } from './Dashboard'
import { HomeH } from './Home'
import { LoginH } from './Login'

export default class RouterComponents extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path='/' element={<HomeH/>}></Route>
            <Route path='/Dashboard' element={<DashboardH/>}></Route>
            <Route path='/Login' element={<LoginH/>}></Route>
        </Routes>
      </div>
    )
  }
}
