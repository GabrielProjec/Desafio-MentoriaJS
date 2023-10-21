import { useState } from "react";
import { postUser } from "../services";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    const payload = {
      username: name,
      password: password,
    };

    const response = await postUser(payload);
    if (typeof response === "string") {
      navigate("/user-list");
    } else {
      alert("Ops , Deu erro aqui");
    }
  };

  return (
    <div style={{ backgroundColor: "#292929", width: "100%", height: "100vh" }}>
      <h1 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>
        Bem Vindo a Pagina de Cadastro
      </h1>
      <form
        onSubmit={handleRegister}
        style={{
          width: "50%",
          border: "2px solid #CCC",
          margin: "auto auto",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label
          style={{
            color: "#CCC",
            padding: "10px",
            paddingLeft: "10px",
            fontSize: "1.1rem",
          }}
        >
          Nome
        </label>
        <input
          type="text"
          required
          placeholder="Digite seu usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            backgroundColor: "#383746",
            padding: "10px",
            borderRadius: "10px",
            width: "80%",
            color: "#CCC",
          }}
        />
        <label
          style={{
            color: "#CCC",
            padding: "10px",
            paddingLeft: "10px",
            fontSize: "1.1rem",
          }}
        >
          Password
        </label>
        <input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            backgroundColor: "#383746",
            padding: "10px",
            borderRadius: "10px",
            width: "80%",
            color: "#CCC",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#383746",
            padding: "10px",
            borderRadius: "10px",
            color: "#CCC",
            marginTop: "20px",
            marginBottom: "20px",
            width: "80%",
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
