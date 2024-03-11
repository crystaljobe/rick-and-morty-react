import './App.css'
import { Outlet } from 'react-router-dom'
import MyNavbar from './Components/MyNavbar'

export default function App() {

  return (
    <>
      <MyNavbar />
      <Outlet/>
    </>
  )
}

