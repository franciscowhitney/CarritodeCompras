import React from 'react'

const PageWrapper = (props) => {
  const maxWidth = props.maxWidth+'px' || 'unset';
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div style={{margin: "0 auto",maxWidth, paddingTop: "50px"}}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageWrapper