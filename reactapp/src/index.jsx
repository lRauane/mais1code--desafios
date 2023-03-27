import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import "./styles/style.css";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setuser] = useState({nome: '', avatar: '', bio: ''});

  function handleAddStudent() {
    const newstudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newstudent]);
  }

   useEffect( () =>{
    fetch('https://api.github.com/users/lrauane')
    .then(response => response.json())
    .then(data => {
      setuser({
        nome: data.name,
        avatar: data.avatar_url,
        bio: data.bio
      })
    });
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <div className="user">
            <strong>{user.nome}</strong>
            <img src={user.avatar} alt="foto perfil"/>
          </div>
          <p>{user.bio}</p>
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
        required
        autoFocus
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student, index) => (
        <Cards key={index} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
