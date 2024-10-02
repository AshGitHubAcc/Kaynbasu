import Kanbas from "./Kaynbasu";
import Labs from "./Labs";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";



export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kaynbasu"/>}/>
     <Route path="/Kaynbasu/*" element={<Kanbas />} />
     <Route path="/Labs/*" element={<Labs />} />
    </Routes>
   </div>
  </HashRouter>
);}

