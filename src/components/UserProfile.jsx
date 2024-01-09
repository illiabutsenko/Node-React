function UserProfile({ user }) {
  return (
    <div>
      {user.isLoggedIn ? (
        <div style={{ color: "#453999" }}>Профіль користувача: {user.name}</div>
      ) : (
        <div style={{ color: "DarkRed" }}>Користувач не увійшов у систему</div>
      )}
    </div>
  );
}

export default UserProfile;
