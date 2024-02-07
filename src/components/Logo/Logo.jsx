export const Logo = (props) => {
  return (
    <>
      <div className="logo">
        <div
          className={`logo__rhombus ${
            props.myProp
              ? props.myProp === "menu-logo"
                ? "header-menu-logo"
                : ""
              : "logo__footer-rhombus"
          }`}
        ></div>
        <div
          className={`logo__txt ${
            props.myProp ? props.myProp : "logo__footer-txt"
          }`}
        >
          Skilline
        </div>
      </div>
    </>
  );
};
