import "./index.scss";
import Main from "./sites/Main.tsx";
import Header from "./sites/Header.tsx";
import Footer from "./sites/Footer.tsx";


function App(){
  return (
    <div className="container">
        <Header />
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
