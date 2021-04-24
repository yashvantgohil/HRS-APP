import React from "react";
import {
  AppBar,
  Badge,
  Button,
  Grid,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CommentIcon from "@material-ui/icons/Comment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useDispatch, useSelector } from "react-redux";
import { userLoggout } from "../../store/auth/actions";
import PeopleIcon from "@material-ui/icons/People";

const Header = () => {
  const count = useSelector((state) => state.hacker.hackers.length);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(userLoggout());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          {/* <Grid item>
            <InputBase></InputBase>
          </Grid>
          <Grid item sm></Grid> */}
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              endIcon={
                <Badge badgeContent={count} color="error">
                  <PeopleIcon />
                </Badge>
              }
            >
              Hackers
            </Button>
            <IconButton hidden>
              <Badge badgeContent={count} color="secondary">
                <NotificationsIcon></NotificationsIcon>
              </Badge>
            </IconButton>
            <IconButton hidden>
              <Badge badgeContent={count} color="secondary">
                <CommentIcon></CommentIcon>
              </Badge>
            </IconButton>
            <IconButton className="ml-3" onClick={logout}>
              <PowerSettingsNewIcon
                style={{ color: "white" }}
              ></PowerSettingsNewIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
