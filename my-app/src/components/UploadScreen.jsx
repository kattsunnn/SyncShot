import { useState } from 'react'
import { FolderOpen } from "lucide-react";
import './UploadScreen.css'

function UploadScreen() {
  const [videos, setVideos] = useState([])
  const [dragActive, setDragActive] = useState(false)

  return (
    
    <div className="app-container">

      <main className="main-content">
        <div 
          className={`upload-area ${dragActive ? 'drag-active' : ''}`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="upload-box">
            <input
              type="file"
              id="video-upload"
              multiple
              accept="video/*"
              className="file-input"
            />
            <label htmlFor="video-upload" className="upload-label">
              <div>
                <FolderOpen className="upload-icon" />
              </div>
              <div className="upload-text">
                <p>ドラッグ＆ドロップで動画をアップロード</p>
                <p>または</p>
                <button className="select-button">ファイルを選択</button>
              </div>
            </label>
          </div>
        </div>

        {videos.length > 0 && (
          <div className="video-list">
            <h2>アップロードされた動画</h2>
            <ul>
              {videos.map((video, index) => (
                <li key={index} className="video-item">
                  <span className="video-name">{video.name}</span>
                  <button className="remove-button">削除</button>
                </li>
              ))}
            </ul>
            <button className="next-button">次へ</button>
          </div>
        )}
      </main>
    </div>
  )
}

export default UploadScreen