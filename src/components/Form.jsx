function Form(props) {
  const { name, email, handleChange } = props;

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br></br>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <p style={{ color: "#453999" }}>
        Hello, {name || "stranger"}! Your email is {email || "unknown"}.
      </p>
    </form>
  );
}

export { Form };
