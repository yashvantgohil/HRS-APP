import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export function AuthRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
