import "./index.scss";
import Main from "./sites/Main.tsx";
import Header from "./sites/Header.tsx";


function App(){
  return (
    <div className="container">
        <Header />
        <Main/>
    </div>
  );
}

export default App;
