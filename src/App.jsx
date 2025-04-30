import React from "react";
import Profile from "./assets/components/Profile";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Perfis de Usuários</h1>
      <div >
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Profile
          nome="Ana Silva"
          idade={28}
          profissao="Desenvolvedora Front-End"
          foto="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <Profile
          nome="Carlos Mendes"
          idade={34}
          profissao="Product Manager"
          foto="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <Profile
          nome="Luciana Torres"
          idade={41}
          profissao="Designer UX/UI"
          foto="https://randomuser.me/api/portraits/women/65.jpg"
        />          
        </div>

      </div>
    </>
  );
}

export default App;
