import Main from "./layouts/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Main>
        <div className="h-screen pt-[78px]">
          <Home />
        </div>
      </Main>
    </div>
  );
}

export default App;
