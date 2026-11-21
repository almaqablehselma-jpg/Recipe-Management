
function Register() {
  return (
    <main className="form-page">
      <h1>Create Your Account</h1>
      <p>Join Recipe House and explore delicious recipes.</p>

      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </main>
  );
}

export default Register;
