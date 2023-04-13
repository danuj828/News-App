import React, { Component,useState,useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  // articles = [];
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  const [articles, setArticles] = useState([])
  const [totalArticles, setTotalArticles] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  
  const updateNews= async (page)=>
  {
    
    let url= `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.news_api_key}&page=${
      page
    }&pageSize=${props.itemsPerPage}`
    
    let news_api = await fetch( url
    );
    
    
    let news_response = await news_api.json();
    if(!(articles in news_response))
      setArticles(articles.concat(news_response.articles))
    setTotalArticles(news_response.totalResults)
    setPage(page)
     
  }
  const  f= async()=>
  {
    props.setProgress(60)
      await updateNews(1);    
      setLoading(false)
      props.setProgress(100);
  }
  useEffect(async() => {
      document.title=`News Monkey - ${capitalizeFirstLetter(props.category)}`
      await f();
      // console.log("ended use effect");
  }, [])
  
  
  const fetchMoreData=async()=>
  {
    await updateNews(page+1);
  }
    return (
      <div className="text-center" >
        <h1 style={{marginTop:"10vh",padding:"5%"}}>Top Headlines - {capitalizeFirstLetter(props.category)}</h1>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalArticles}
          loader={<Spinner className="my-3" />}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    storyUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </InfiniteScroll>
      </div>
    );
  
}

export default News;
