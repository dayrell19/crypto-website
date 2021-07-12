import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/CoinPage/:id" exact component={CoinPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
