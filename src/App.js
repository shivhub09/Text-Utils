import './App.css';
let name = "Shivam";

function App() {
  return (
    <div className="container">
       <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className='text'>
        <h1>Hello {name}</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eius! Ut dolores unde id alias dignissimos laudantium, debitis repellat iure neque ducimus?
      </div>
    </div>
  );
}

export default App;
