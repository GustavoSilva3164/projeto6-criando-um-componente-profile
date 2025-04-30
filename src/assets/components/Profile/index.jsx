const profileStyle = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    margin: "12px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  photo: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    margin: "4px 0",
  },
};

function Profile({ nome, idade, profissao, foto }) {
  return (
    <>
      <>
        <div style={profileStyle.container}>
        <img src={foto} alt={`Foto de ${nome}`} style={profileStyle.photo} />
        <div style={profileStyle.name}>{nome}</div>
        <div style={profileStyle.info}>Idade: {idade}</div>
        <div style={profileStyle.info}>Profissão: {profissao}</div>            
        </div>
      </>
    </>
  );
}

export default Profile;
