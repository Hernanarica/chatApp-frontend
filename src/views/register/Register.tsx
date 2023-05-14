export function Register() {
  return (
    <form>
      <h2 className="text-2xl">Formulario de registro</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your name"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Your lastname"
          id="lastname"
        />
      </div>
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
      <button className="bg-purple-600 text-white px-2 py-1 rounded">Register</button>
    </form>
  );
}