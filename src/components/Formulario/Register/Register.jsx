import { Fragment } from "react";
import { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      alert("¡Usuario Registrado!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("¡Las contraseñas no coinciden!");
    }

    setSubmitted(true);
    /*console.log(data);*/
  };

  return (
    <div className={styles.contenedor}>
      <h1>Registration Form</h1>

      <form action="#" onSubmit={handleRegister}>
        <div>
          <label htmlFor="userFirst">First Name</label>
          <input
            type="text"
            id="firstName"
            name="userinput"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Ej. Clara "
          />
          {FirstName.length === 1 ? (
            <p>¡El campo debe tener al menos 2 caracteres!</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="userLast">Last Name</label>
          <input
            type="text"
            id="firstName"
            name="userLast"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Ej. Rodriguez"
          />
          {LastName.length === 1 ? (
            <p>¡El campo debe tener al menos 2 caracteres!</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="Email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@gmail.com"
          />
          {Email.length < 4 && Email.length > 0 && (
            <div>
              <p>¡El campo debe tener al menos 5 caracteres!</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          {password.length < 8 && password.length > 0 && (
            <div>
              <p>¡Las contraseñas deben de tener al menos 8 caracteres!</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repite la contraseña"
          />
          {password != confirmPassword && <p>Las contraseñas con coinciden</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <h2>Your form data</h2>
      <div className={styles.detallesdelformulario}>
        <p>First Name: {FirstName}</p>
        <p>Last Name: {LastName}</p>
        <p>Email: {Email} </p>
        <p>Password: {password} </p>
        <p>ConfirmPassword: {confirmPassword} </p>
      </div>
    </div>
  );
};

export default Register;
