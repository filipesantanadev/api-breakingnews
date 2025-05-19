import bcrypt from "bcryptjs";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);

    if (!user) {
      return res.status(404).send({ message: "Invalid Email/Password" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send({ message: "Invalid Email/Password" });
    }

    res.send("Login OK");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { login };
