import { useState } from "react";
import { supabase } from "../utils/supabase";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your password"
        />
        <button
          onClick={async () => {
            const { error } = await supabase.auth.signUp({
              email,
              password,
            });

            if (error) alert(error.message);
            alert("Check your email for the login link!");
            setForm(initialState);
          }}
          className={styles.button}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signup;
