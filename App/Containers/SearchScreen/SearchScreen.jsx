import React, { useRef, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import HistoryList from './HistoryList/HistoryList';

function SearchScreen() {
  return (
    <>
      <SearchBar />
      <HistoryList />
    </>
  );
}

export default SearchScreen;
