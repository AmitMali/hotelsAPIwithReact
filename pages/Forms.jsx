import { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${username} , ${usermail}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name="email"
          value={usermail}
          onChange={(e) => setUsermail(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <h1>values are </h1>
      {username} , {usermail}
    </div>
  );
};

export default Forms;
