import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import FooterContainer from './components/Footer/FooterContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import ItemDetailContainer from './components/Detail/ItemDetailContainer'
import PropListContainer from './components/PropList/PropListContainer'
import SearchContextProvider from './context/SearchContext'


function App() {
  return(
    <div className="App">
    <BrowserRouter>
    <SearchContextProvider>

    <Routes>
      <Route element={<FooterContainer/>}>
      <Route element={<HeaderContainer/>}>
      <Route element={<Home/>} path='/'/>
      <Route element ={<PropListContainer/>} path='list'/>
      <Route element={<ItemDetailContainer/>} path='detail'/>
      </Route>
      </Route>
    </Routes>
    </SearchContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
