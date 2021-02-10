import "./App.css";
import Feed from "./components/body/Feed";
import Sidebar from "./components/body/Sidebar";
import Widgets from "./components/body/Widgets";
import Header from "./components/header/Header";
import LogIn from "./login/LogIn";
import { useStateValue } from "./middleware/StateProvider";

function App() {
  const [user, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <LogIn />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
