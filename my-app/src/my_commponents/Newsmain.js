import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from './Newsitem';
import { useEffect } from "react";
import axios from 'axios';
import Spinner from './Spinner';
// import Spinnerclimb from './Spinnerclimb';


// import gif from './48x48.gif'

function Newsmain({ nartipage, category, progressload }) {
  const [api, setapi] = useState([])
  //  let totpage = 
  const [progress, setprogress] = useState(0)
  progressload(progress)
  const [load, setload] = useState(false)
  const [loadem, setloadem] = useState(true)
  // const [disab, setdisab] = useState(false)
  const [totpage, settotpage] = useState(0)
  const [pageno, setpageno] = useState(0);
  // const [disable, setdisable] = useState(true)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {

    // console.log("start of spinner");
    setprogress(20)
    const pageon = 1;
    setload(true)
    setapi([])
    let apiurl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7d8b21c342a0416185e69fee154f56aa&page=${pageon}&pagesize=${nartipage}`
    setprogress(40)
    axios.get(apiurl)
      .then(res => {
        console.log(res);
        setprogress(70)
        // console.log("end of spinner");
        setapi(res.data.articles)
        
        settotpage(res.data.totalResults)
        setpageno(2)
        document.title = capitalizeFirstLetter(category) + " - NewsMonkey"
        setprogress(100)
        setloadem(false)
        setload(false)
        setprogress(0)
      })
  }, [nartipage, category])

  useEffect(() => {
    <Spinner/>
  }, [])
  // For buttons
  // let count = Math.ceil(totpage / nartipage.nartipage)

  // const back = () => {

  //   if (pageno - 1 === 1) {
  //     setdisable(true)
  //     setpageno(pageno - 1)

  //   }
  //   if (pageno - 1 >= 2) {
  //     setdisable(false)
  //     setpageno(pageno - 1)
  //   }
  //   if (pageno - 1 < 0) {
  //     setdisable(true)
  //   }
  //   if (pageno - 1 < count) {
  //     setdisab(false)
  //   }
  // }
  // const ford = () => {

  //   if (count - pageno === 1) {
  //     setdisab(true)
  //     setpageno(pageno + 1)
  //   }
  //   if (count - pageno > 1) {
  //     setdisab(false)
  //     setpageno(pageno + 1)
  //     setdisable(false)
  //   }
  //   if (count - pageno < 1) {
  //     setdisab(true)
  //   }
  // }

  const fetchMoreData = () => {
    setpageno(pageno + 1)
    console.log(pageno);
    let apiurl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7d8b21c342a0416185e69fee154f56aa&page=${pageno}&pagesize=${nartipage}`
    axios.get(apiurl)
      .then(res => {
        // let newdata = (res.data.articles)
        // console.log((res.data.articles));
        setapi(api.concat(res.data.articles));
        settotpage(res.data.totalResults)
        document.title = capitalizeFirstLetter(category) + " - NewsMonkey"
        // setapi(api.concat(newdata))
      })
  }
  return (
    <>
      <div className="container my-4">
        <h2 className='text-center'style={{margin:"71px auto 12px"}}>Top Headlines from {capitalizeFirstLetter(category)}- NewsMonkey </h2>
        {load===true? <Spinner/>:
        <InfiniteScroll
          dataLength={api.length}
          next={fetchMoreData}
          hasMore={api.length !== totpage}
          loader={<Spinner />}
        >
          {loadem && <Spinner />}
          {<div className="container">
            <div className="row infinite" >{
              api.map((element, i) => (
                <div className="col-md-4 my-2" key={i}>
                  {/* {console.log(element)} */}
                  <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} read={element.url} source={element.source.name} />
                </div>
              ))
            }
            </div>
          </div>}
        </InfiniteScroll>
        /* <span>
          <button className="btn btn-dark" disabled={disable} onClick={back} > &#8592;Previous</button>
        </span>
        <span>
          <button className="btn btn-dark text-right" style={{ float: "right" }} disabled={disab} onClick={ford}>Next&#8594;</button>
        </span> */}
      </div>

    </>
  )
}

export default Newsmain;
