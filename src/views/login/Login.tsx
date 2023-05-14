export function Login() {

  return (
    <form>
      <h2 className="text-2xl">Formulario de Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Your email"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Your password"
          id="password"
        />
      </div>
      <button className="bg-purple-600 text-white px-2 py-1 rounded">SignIn</button>
    </form>
  );
}