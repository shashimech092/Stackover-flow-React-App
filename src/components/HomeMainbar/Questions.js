import React from 'react'
import { Link } from 'react-router-dom'
// import QuestionList from './QuestionList'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{question.votes}</p>
        <p>Votes</p>
      </div>
    
    <div className='display-votes-ans'>
  <p>{question.noOfAnswers}</p>
        <p>answers</p>
  </div>
<div className='display-question-details'>
        <Link to={`/Questions/${question.id}`} className='question-title-link'>{question.questionTitle}</Link>
    <div className='display-tags-time'>
      <div className='display-tags'> 
      {
  question.questionTags.map((tag)=>{
    return <p key={tag}>{tag}</p>
  })}
          </div>
          <p className='display-time'>asked {question.time} {question.userPosted}</p>
    </div>
</div>
</div>

  )
}

export default Questions
