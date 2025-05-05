import React, { Component } from 'react'

export  class Newsitems extends Component {
  render() {
    let  {title , description ,imgurl,NewsUrl,author,date,source}= this.props;
    return (
      <div className='my-3'>
        <div  className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger">
    {source}
  </span>
  </div>
  <img src={!imgurl?"https://blog.tipranks.com/wp-content/uploads/2024/10/shutterstock_2518436723-750x406.jpg":imgurl} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}.. </h5>
      <p  className="card-text">{description}...</p>
       <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
        <a href={NewsUrl} className="btn btn-dark">Details</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems
