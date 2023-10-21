import { useState, useEffect } from "react";
import axios from "axios";

function PageHome() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8800/");
      setUser(response.data);
    } catch (error) {
      console.log("erro ao buscar clientes", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#292929", width: "100%", height: "100vh" }}>
      <h1 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>
        Seja Bem Vindo a Pagina Home
      </h1>

      <div
        style={{
          width: "50%",
          border: "2px solid #CCC",
          margin: "auto auto",
          borderRadius: "20px",
        }}
      >
        <ul>
          {user.map((user) => {
            return (
              <li
                key={user.id}
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "5px",
                  color: "#CCC",
                  fontSize: "2rem",
                }}
              >
                {user.username}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PageHome;
