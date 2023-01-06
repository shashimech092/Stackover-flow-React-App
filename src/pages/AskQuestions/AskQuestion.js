import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
    

  return (

      <div className='ask-question'>
          <div className='ask-ques-container'>
              <h1>Ask a public Question</h1>
              <form >
                  <div className='ask-form-conatiner'>
                      <label htmlFor="ask-ques-title">
                      <h4>Title</h4>
                      <p>Be specific and imagine you’re asking a question to another person.</p>
                          <input type="text" id='ask-ques-title' placeholder='is there an R function for finding the index of an element in a vector?' />
                      </label>
                      <label htmlFor="ask-ques-title">
                      <h4>Body</h4>
                          <p>Be specific and imagine you’re asking a question to another person.</p>
                          <textarea name="" id="ask-ques-body" cols="100" rows="5"></textarea>
                      </label>
                      <label htmlFor="ask-ques-title">
                      <h4>Tags</h4>
                      <p>Be specific and imagine you’re asking a question to another person.</p>
                          <input type="text" id='ask-ques-title' placeholder='is there an R function for finding the index of an element in a vector?' />
                      </label>
                  </div>
                  <input type="submit" value='Review your Question' className='review-btn'/>
              </form>
          </div>
                  
              </div>
          
    
  )
}

export default AskQuestion
