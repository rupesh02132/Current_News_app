import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Sppiner from "./sppiner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
static defaultProps={
  country:'ch',
  pageSize:5,
 category:'general'
}
static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,

}
capitalizeFirst=(string)=> {
  return string[0].toUpperCase() + string.slice(1);
}
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading:true,
      page: 1,      
      totalResults:0                          
    };
    document.title=`${this.capitalizeFirst(this.props.category)} - News`;
  }

    //my ApIKey=https://newsapi.org/v2/top-headlines?country=us&apiKey=a471c2a7034d4c6990e8646a7f82a643      //this.props.pageSize      //${this.props.pageSize
  async updateNews(){
    this.props.setprogress(10)
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a471c2a7034d4c6990e8646a7f82a643&page=${
      this.state.page}&pagesize=${this.props.pageSize}`;
  
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setprogress(30)
    let parsedData = await data.json();
    this.props.setprogress(70)
    // console.log(parsedData)
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,               
      loading:true
    });
    this.props.setprogress(100)
  }
    // all comment for spinner
  async componentDidMount() {

    // let url = ` https://newsapi.org/v2/top-headlines?
    // country=${this.props.country}&category=${this.props.category}
    // &apiKey=a471c2a7034d4c6990e8646a7f82a643&page=${this.state.page}
    // &pagesize=${this.props.pageSize}`;
    // // this.setState({loading:true})                                                              
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   // loading:false
    // });
  
    this.updateNews()
   
  }
  handlePrevclick = async () => {
    // console.log("previous");
    // let url = ` https://newsapi.org/v2/top-headlines?
    // country=${this.props.country}&category=
    // ${this.props.category}&apiKey=
    // a471c2a7034d4c6990e8646a7f82a643&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pageSize}`
    ;
    // // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,     
    //   // loading:false
    // });
    this.setState ({page: this.state.page - 1})
   this.updateNews()
  };

  handleNextclick = async () => {
    // console.log("Next");
    // let url = ` https://newsapi.org/v2/top-headlines?
    // country=${this.props.country}&category=
    // ${this.props.category}&apiKey=
    // a471c2a7034d4c6990e8646a7f82a643&page=${
    // this.state.page + 1
    // }&pagesize=${this.props.pageSize} `;

    // // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   // loading:false
    // });
   this.setState ({page: this.state.page + 1})
    this.updateNews()
   };

   fetchMoreData =async () => {
    this.setState({page:this.state.page+1})
   let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a471c2a7034d4c6990e8646a7f82a643&page=${
    this.state.page}&pagesize=${this.props.pageSize}`;
  
  // this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log(parsedData)
  this.setState({
     totalResults: parsedData.totalResults,
    articles: this.state.articles.concat(parsedData.articles)
  });
  };

  render() {
    return (
      <div>
        <h2 className="text-center"style={{margin:'35px 0px',marginTop:'90px'}}>Current-News Top {this.capitalizeFirst(this.props.category)} Headlines</h2>
      
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Sppiner/>}
        >
          <div className="container">
            <div className="row">
          {this.state.articles.map((Element,index) =>{
              return (
                <div className="col-md-4" key={`${Element.url}-${index}`}>
                  <Newsitems
                   title={Element.title ? Element.title : ""}
                    author={Element.author}
                    description={Element.description ? Element.description : ""}
                    NewsUrl={Element.url}
                    imgurl={Element.urlToImage}
                    date={Element.publishedAt}
                    source={Element.source.name}
                  />
                </div>
              );
            })}
            </div>
        </div>
</InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults) / this.props.pageSize
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
