import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Sling as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import "./Header.scss";

export default function HeaderDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  // language dropdown

  const { t, i18n } = useTranslation();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        // width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        borderTop: "1px solid #ccc",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Close button */}
      <Box
        className="close_button"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <span></span>
        <Button
          onClick={toggleDrawer(anchor, false)}
          variant="text"
          color="#60697b"
        >
          <span
            role="img"
            aria-label="close"
            className="anticon anticon-close drawer_close"
          >
            <span
              role="img"
              aria-label="close"
              className="anticon anticon-close drawer_close_inline"
            >
              <svg
                fill-rule="evenodd"
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
              </svg>
            </span>
          </span>
        </Button>
      </Box>
      <Divider />
      <List className="drawer_list">
        {/* header list */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Align items in column
            alignItems: "center",
            gap: 2,
          }}
          className="header_nav drawer_nav"
        >
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" activeClassName="active">
                {t("collection")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about_us" activeClassName="active">
                {t("about_us")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                {t("contact")}
              </NavLink>
            </li>
          </ul>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      {/* Hamburger component with onClick to open the drawer */}
      <Hamburger
        toggled={state.right}
        toggle={toggleDrawer("right", true)}
        size={20}
      />

      {/* Drawer for the right side */}
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
