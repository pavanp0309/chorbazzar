import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import AuthContext from './store/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './store/ProductContext.jsx';


createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <AuthContext>
                <ProductProvider>
                    <App />
                </ProductProvider>
                <ToastContainer />
            </AuthContext>
        </BrowserRouter>
    </>
)
