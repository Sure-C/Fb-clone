import "./App.css";
import Feed from "./components/body/Feed";
import NewPost from "./components/body/NewPost";
import Sidebar from "./components/body/Sidebar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/*body component */}
      {/*else component */}
    </div>
  );
}

export default App;
