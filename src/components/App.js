import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions]=useState([]);

  const API_URL="http://localhost:4000/questions";

  useEffect(()=>{
    fetch(API_URL)
        .then(response => response.json())
        .then(data => setQuestions(data));
  },[API_URL]);

  function addQuestions(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(id) {
    const updatedQuestions = questions.filter(oldQuestion => oldQuestion.id !== id)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestions={addQuestions} /> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} />}
    </main>
  );
}

export default App;
