import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Tables from "pages/Tables";
import Maps from "pages/Maps";
import Footer from "components/Footer";
import Users from "pages/Users";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <>
      <Sidebar setSearchValue={setSearchValue} />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/maps" component={Maps} />
          <Route
            // params={{ searchval: searchValue }}
            exact
            path="/users"
            component={() => <Users searchValue={searchValue} />}
          />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
