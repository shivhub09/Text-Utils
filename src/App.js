import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
      <Navbar title="Shivam" aboutText="About Us"/>  
      <div className="container my-3">
        <TextForm title="Enter your Text" />
      </div>
      
    </>
  );
}

export default App;
