
import { Route, Routes } from 'react-router-dom';
import { ProductsView, LoginView, Home  } from './views';
import './App.css'

function App() {
  

  return (
    <>
      <div className='App'>
        <div className='container mx-auto bg-green-100'>
          <Routes>
            <Route  path='/' element={<Home />}/>
            <Route path='/products' element={<ProductsView />} />
            <Route path='/login' element={<LoginView />} />
          </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App
