import React,{createContext,useState} from "react";
export const SearchContext = createContext();

export const SearchProvider =({children})=>{
    const [searchQuery,setSearchQuery] =useState('');
    const handleSearchChange =(event)=>{
        setSearchQuery(event.target.value);
    }  
  const value = {
    searchQuery,
    onSearchChange: handleSearchChange,
  };
    return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}