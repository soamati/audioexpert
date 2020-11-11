import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Concept from "./pages/ConceptPage/Concept";
import Usage from "./pages/UsagePage/Usage";
import Made from "./pages/MadePage/Made";
import Rec from "./pages/RecPage/Rec";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/concept" exact component={Concept} />
        <Route path="/usage" exact component={Usage} />
        <Route path="/made" exact component={Made} />
        <Route path="/recommend" exact component={Rec} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
