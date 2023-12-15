
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Manejo from './pages/Manejo';
import Papers from './pages/Papers';
import Recursos from './pages/Recursos';
import Servicio from './pages/Servicio';
import Posologia from './pages/Posologia';
import Reacciones from './pages/Reacciones';
import Interacciones from './pages/Interacciones'



function App() {
  return (
    <div className="App ffBarlow">
      <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route path='/' element={<Inicio/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/manejo' element={<Manejo/>}/>
        <Route path='/papers' element={<Papers/>}/>
        <Route path='/recursos' element={<Recursos/>}/>
        <Route path='/servicio' element={<Servicio/>}/>
        <Route path='/posologia' element={<Posologia/>}/>
        <Route path='/reacciones' element={<Reacciones/>}/>
        <Route path='/interacciones' element={<Interacciones/>}/>
       </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
