import { Container } from "@material-ui/core";
import Header from "../Header/Header";
import style from "./layout.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import HackerDetails from "../Hacker/HackerDetails";
import Hacker from "../Hacker/Hacker";
import HackerGrid from "../Hacker/HackerGrid";
import HackerForm from "../Hacker/HackerForm";
import { useSelector } from "react-redux";

const Layout = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <div className={style.Layout}>
      <Header></Header>
      <Container>
        <Switch>
          <Redirect from="/" to="/hackers" exact />
          <Route path="/hackers/new" component={HackerForm} />
          <Route path="/hackers/edit/:id" component={HackerForm} />
          <Route path="/hackers/:id" component={HackerDetails} />
          {isAdmin && <Route path="/hackers" component={HackerGrid} />}
          {!isAdmin && <Route path="/hackers" component={Hacker} />}
          <Redirect path="**" to="/" />
        </Switch>
      </Container>
    </div>
  );
};

export default Layout;
