import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Labs/store";

export default function App() {
 return (
  <HashRouter>
    <Provider store={store}>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kanbas"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
   </div>
   </Provider>
  </HashRouter>
);}

