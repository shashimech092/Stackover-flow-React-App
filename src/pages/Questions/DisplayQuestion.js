import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetail from './QuestionDetail'

const DisplayQuestion = () => {
  return (
      <div className='home-container-1'>
          <LeftSidebar />
          <QuestionDetail />
          <div className='home-container-2'>
              
              <RightSidebar/>
          </div>
      
    </div>
  )
}

export default DisplayQuestion
