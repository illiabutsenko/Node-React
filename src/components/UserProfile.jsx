import { useContext } from "react";
import UserContext from "../context/user";

// function UserProfile({ user }) {
function UserProfile() {
  const user = useContext(UserContext);
  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <div style={{ color: "#453999" }}>User profile: {user.name}</div>
          <div style={{ color: "#453999" }}>Email: {user.email}</div>
        </div>
      ) : (
        <div style={{ color: "DarkRed" }}>User is not logged in</div>
      )}
    </div>
  );
}

export default UserProfile;
