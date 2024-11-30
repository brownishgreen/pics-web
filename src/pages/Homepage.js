import React, { useState, useEffect } from 'react'
import Search from "../components/Search"
import Picture from "../components/Picture"
import axios from 'axios'
import "../styles/style.css"

const Homepage = () => {
  const auth = "U6FphwSC0LRrqLDJmonS5xB5aqD6a_XtkIy6kI4LjFI"
  let [data, setData] = useState([]) // 放 Unsplash API 獲取的圖片
  const [loading, setLoading] = useState(false); // 載入狀態
  const [error, setError] = useState(""); // 錯誤訊息

  // 獲取隨機精選照片
  const fetchRandomPhotos = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await axios.get(`https://api.unsplash.com/photos/random`, {
        params: {
          client_id: auth,
          count: 10, // 每次載入 10 張
        },
      });
      setData((prevData) => [...prevData, ...result.data]); // 新照片追加到原有照片數據中
    } catch (err) {
      setError("無法獲取隨機照片，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  // 定義搜索函數
  const search = async (query) => {
    setLoading(true);
    setError("");
    try {
      const result = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: query, // 使用傳入的 query 進行搜索
          client_id: auth,
          page: 1,
          per_page: 10,
        },
      });
      setData(result.data.results); // 只顯示搜索結果
    } catch (error) {
      setError("無法獲取搜索結果，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  // 在組件首次載入時執行
  useEffect(() => {
    fetchRandomPhotos();
  }, []);

  return (
    <div style={{ minHeight: "75vh" }}>
      <Search search={search} /> {/* 將 search 函數作為 props 傳遞 */}
      <div className='pictures'>
        {loading && <p>載入中...</p>}
        {error && <p className="error">{error}</p>}
        {data &&
          data.map((item) => (
            <Picture key={item.id} data={item} /> // 傳遞每張圖片數據到 Picture 組件
          ))}
      </div>
      <div className='more-picture'>
        <button onClick={fetchRandomPhotos} disabled={loading}>
          {loading ? "載入中..." : "More Pictures"}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
