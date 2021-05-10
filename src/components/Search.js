import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeoutId = setTimeout(()=>{
        if (term) {
            search();
          }else{
              setResults([]);
          }
    },500);
   return ()=>{
       clearTimeout(timeoutId);
   }
  }, [term]);

  const renderedResults = results.map((item) => {
      return (
          <div className="item" key={item.pageid}>
              <div className="right floated content">
                  <a className="ui button" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
              </div>
              <div className="content">
                  <div className="header">
                      {item.title}
                  </div>
                  <span dangerouslySetInnerHTML={{__html:item.snippet}}></span>
              </div>
          </div>
      )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(event) => handleOnChange(event)}
          />
        </div>
      </div>
      <div className="ui celled list">
          {renderedResults}
      </div>
    </div>
  );
};

export default Search;
