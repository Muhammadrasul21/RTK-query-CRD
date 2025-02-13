import React, {lazy} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux'
import { BrowserRouter } from 'react-router-dom'
import { SuspenseContainer } from './utils'
const App = lazy(()=> import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <SuspenseContainer>
          <App />
        </SuspenseContainer>
      </BrowserRouter>
    </Provider>
)
