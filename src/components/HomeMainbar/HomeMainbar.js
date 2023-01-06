import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
//  import Questions from './Questions'

const HomeMainbar = () => {
  const location = useLocation()
  const user = null;
  const navigate = useNavigate();


  var questionsList = [{
    _id: 1,
    votes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function",
    questionBody: "It mean to be",
    questionTags: ['java', 'nodejs', 'reactjs', 'mongodb', 'expressjs'],
    userPosted: 'shashi',
    time: 'jan1',
    answer: [{
      answerBody: 'Answer',
      userAnswered: 'kumar',
      answeredOn: 'Jan 2',
      UserID: 2,

    }]
  }, {
    _id: 2,
    votes: 2,
    noOfAnswers: 3,
    questionTitle: "What is CSS",
    questionBody: "It mean to be",
    questionTags: ['java', 'nodejs', 'reactjs', 'mongodb', 'expressjs'],
    userPosted: 'shashi',
    time: 'jan1',
    answer: [{
      answerBody: 'Answer',
      userAnswered: 'kumar',
      answeredOn: 'Jan 2',
      UserID: 2,

    }]
    },
  {
      _id: 3,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is JavaScript",
      questionBody: "It mean to be",
      questionTags: ['java', 'nodejs', 'reactjs', 'mongodb', 'expressjs'],
      userPosted: 'shashi',
    time: 'jan1',
    answer: [{
      answerBody: 'Answer',
      userAnswered: 'kumar',
      answeredOn: 'Jan 2',
      UserID: 2,

    }]
    }]


  const checkAuth = () => {
    if (user === null) {
      alert('login or signup to ask a question')
      navigate('/Auth')
    } else {
      navigate('./AskQuestions')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
    location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
      }
      <Link to='/AskQuestions' onClick={checkAuth} className='ask-btn'>Ask Questions</Link>
      </div>
      <div>
        {
          questionsList===null?
          <h1>Loading..</h1>:
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList}/>
        </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
