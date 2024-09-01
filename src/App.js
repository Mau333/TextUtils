import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setmode] = useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 3000);
  }
const removeBodyClass=()=>{
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-warning');
  
}
  //const [cl,setcl]=useState('light');
const toggleMode=(cls)=>{
  removeBodyClass();
  document.body.classList.add("bg-"+cls);
  if(mode === 'light'){
    setmode('dark');
    //setcl('light');
    document.body.style.backgroundColor='#0a3a40';
    showAlert("Dark mode has been enabled","success");

  }else{
    setmode('light');
    //setcl('dark');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
}
return (
<>
<Router>   
<Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
      <div className="container my-3">
              <Routes>
                <Route exact path="/about" element={<About mode={mode}/>}/>

                <Route path="/" element={<TextForm  mode={mode} showAlert={showAlert}/>}/>
                
              </Routes>
      </div>
</Router>
</>


  );
}

export default App;
