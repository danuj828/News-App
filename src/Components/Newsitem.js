import React, { Component } from "react";

const Newsitem=(props)=> {
    const extracter=(text)=>
    {
        let x=text.indexOf("-")
        if(x!==-1)
        {
            return text.slice(0,x)
        }
        return text

    }

    const nullCheck=(title)=> {
      
    return title ? title : "demo";
  }
  
    let { title, description, image, storyUrl, author,date,source } = props;
    return (
      <div
        className="card d-md-flex flex-column align-items-center "
        style={{ margin: "2%" }}
      >
          
        <div
          className="d-flex flex-direction-column align-items-center "
          style={{
            height: "40%",
            maxWidth: "90%",
            margin: "3%",
            padding: "1%",
          }}
        >
            
          <img
            src={
              image
                ? image
                : "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/333200/333221.6.jpg"
            }
            className="card-img-top"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            alt="..."
          />
        </div>
        <div className="flex-fill d-flex flex-column align-items-center">
          <div
            className="card-body d-flex flex-column align-items-center flex-grow-1"
            style={{ textAlign: "center" }}
          >
            <h5 className="card-title">{extracter(nullCheck(title))} <span className="badge rounded-pill bg-dark">{source}</span> </h5>
            
            <p className="card-text flex-grow-1">{nullCheck(description)}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} - {new Date(date).toLocaleString()}</small></p>
          </div>
          <div className="card-body flex-column flex-justify-content-center mt-auto">
            <a
              href={storyUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
