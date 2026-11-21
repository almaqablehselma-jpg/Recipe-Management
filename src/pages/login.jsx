
function Login() {
  return (
    <main className="form-page">
      <h1>Welcome Back!</h1>
      <p>Login to discover your favorite recipes.</p>

      <form>
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
