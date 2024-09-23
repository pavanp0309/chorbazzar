import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import AuthContext from './store/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <>
   <BrowserRouter>
    <AuthContext>
    <App />
    <ToastContainer/>
    </AuthContext>
    </BrowserRouter>
    </>
)
