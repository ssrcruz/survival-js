import React from 'react'

// Add prop known as children to push the control over Note rendering to Notes
export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
)
