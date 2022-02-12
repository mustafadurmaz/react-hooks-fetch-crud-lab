import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,deleteQuestion}) {
  
  const queslist=questions.map((question)=>{
    return <QuestionItem key={question.id} question={question} deleteQuestion={deleteQuestion}  />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{queslist}</ul>
    </section>
  );
}

export default QuestionList;
