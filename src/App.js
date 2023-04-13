import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  const [progress, setProgress] = useState(10);
  let news_api_key = '277df992a6ce404ebdabd13d4d1c93a1';
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route
              key="business"
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              key="entertainment"
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              key="general"
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              key="health"
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              key="science"
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              key="sports"
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              key="technology"
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  itemsPerPage={6}
                  country="in"
                  news_api_key={news_api_key}
                  category="technology"
                  key="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  
}

export default App;
