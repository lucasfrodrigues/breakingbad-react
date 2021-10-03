import React, { useEffect, useState } from "react";
import './App.css';
import BBApi from "./BBApi";
import Chars from "./components/Chars";
import Header from "./components/Header";
import Search from "./components/Search";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

export default () => {

  const [charsList, setCharsLit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadAll = async () => {
      let list = await BBApi.getCharactersList(query);
      setCharsLit(list);
      setIsLoading(false);
    }

    loadAll();
  }, [query]);

  return isLoading ? (

    <Loading />

  ) : (
    <div className="page">

      <Header />

      <Search getQuery={(q) => setQuery(q)} />

      <Chars items={charsList} />

      <Footer />

    </div>
  );
}