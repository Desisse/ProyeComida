import React from "react"
import Menu from "./Menu"
import Login from "./login"
import { Routes, Route, Navigate } from "react-router-dom"



function Main() {
    return(
    <Routes>
        <Route path='/ProyeComida/public/' element={<Menu />}>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate replace to="/" />} />
        </Route>
    </Routes>
    )
}

export default Main;