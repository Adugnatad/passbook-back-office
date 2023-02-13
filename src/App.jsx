import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Settings from './pages/Settings.pages';
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Settings />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
