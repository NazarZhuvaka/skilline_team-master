import { NavLink } from "react-router-dom";
import { Logo } from "/src/components/Logo/Logo";

export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <p
        style={{
          color: "red",
          fontSize: "30rem",
          textAlign: "center",
          marginBottom: "100rem",
        }}
      >
        404 Page Not Found
      </p>
      <div
        style={{
          width: "140rem",
        }}
      >
        <NavLink
          className={(navData) => (navData.isActive ? "is-active" : "none")}
          to="/"
        >
          <div className="header__logo">
            <Logo myProp />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
