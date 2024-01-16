import { useContext } from "react";
import ThemeContext from "../context/theme";

function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "dimgray" : "lightcyan",
        height: "300px",
        color: "darkturquoise",
      }}
    >
      Active theme: {theme}
    </div>
  );
}

export default Toolbar;
