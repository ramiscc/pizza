import {createRoot} from "react-dom/client";
import 'app/styles/index.scss'
import App from "app/App";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'))

root.render(
   <BrowserRouter>
       <App/>
   </BrowserRouter>
)
