import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment-regular.svg'
 import pen from '../../assests/pen-solid.svg'
// // import blackLogo from '../../assests/blackLogo.svg'

const Widget = () => {
  return (
      <div className='widget'>
          <h4>The Overflow Blog</h4>
          <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
              <img src={pen} alt="pen" width='18px' />
              <p>The next step in ecommerce? Replatform with APIs and micro frontends</p>
          </div>
          <div className='right-sidebar-div-2'>
              <img src={pen} alt="pen" width='18px' />
                  <p>Taking drag and drop tech stacks with Builder.io’s Steve Sewell</p>
              </div>
          </div>
          <h4>Featured on Meta</h4>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                  <img src={comment} alt="pen" width='18px' />
                  <p>Help us identify new roles for community members</p>
              </div>
              <div className='right-sidebar-div-2'>
                  <img src={comment} alt="pen" width='18px' />
                  <p>Navigation and UI research starting soon</p>
              </div>
              <div className='right-sidebar-div-2'>
                  <img src={comment} alt="pen" width='18px' />
                  <p>Navigation and UI research starting soon</p>
              </div>
          </div>
          <h4>Hot Meta Posts</h4>
          <div className='right-sidebar-div-1'>
              <div className='right-sidebar-div-2'>
                  <p>38</p>
                  <p>What is to the the way way of life to find th ask</p>
              </div>
              <div className='right-sidebar-div-2'>
                  <p>20</p>
                  <p>How navigate  the waythe the way of life task</p>
              </div>
              <div className='right-sidebar-div-2'>
                  <p>14</p>
                  <p>Is a link to  the jdjjdj jjdjd hhd"How to ask" help </p>
              </div>
          </div>
    </div>
  )
}

export default Widget
