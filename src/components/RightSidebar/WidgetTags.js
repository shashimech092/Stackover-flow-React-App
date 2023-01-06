import React from 'react'

const tags=['c', 'css', 'express', 'firebase', 'html', 'python', 'react', 'matlab', 'angular', 'nodejs']

const WidgetTags = () => {
  return (
      <div className='widget-tags'>
          <h4>Watched Tags</h4>
          <div className='widget-tags-div'>
              {
                  tags.map((tag) => {
                      return <p key={tag}>{tag}</p>
                  })
              }
          </div>
      
    </div>
  )
}

export default WidgetTags
