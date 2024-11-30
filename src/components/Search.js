import "../styles/style.css"
import React, { useState } from 'react'

const Search = ({ search }) => {
  const [query, setQuery] = useState("") // 管理輸入框的狀態

  const handleSearch = () => {
    if (query.trim() !== "") {
      search(query) // 調用父組件的 search 函數，並傳入輸入框的值
    }
  }

  return (
    <>
      <div className='search-area'>
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // 更新 query 的值
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  )
}

export default Search
