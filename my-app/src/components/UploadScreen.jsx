import { useState } from 'react';
import { FolderOpen, UploadCloud } from 'lucide-react'; // UploadCloudアイコンも追加
import './UploadScreen.css'; // このCSSファイルにスタイルを記述します

function UploadScreen() {
  const [videos, setVideos] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  // ドラッグ&ドロップのハンドラー
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    processFiles(files);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    processFiles(files);
    e.target.value = ''; // 同じファイルを再度選択できるようにinputの値をクリア
  };

  // ファイルを処理する関数
  const processFiles = (files) => {
    const newVideos = Array.from(files).filter(file => file.type.startsWith('video/'));
    if (newVideos.length === 0) return; // 動画ファイルがなければ何もしない

    const videoData = newVideos.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file), // プレビュー用のURLを生成
      id: `${file.name}-${file.size}-${Date.now()}` // 一意のIDを生成（キー用）
    }));
    setVideos(prevVideos => [...prevVideos, ...videoData]);
  };

    // 動画を削除するハンドラー
  const handleRemoveVideo = (idToRemove) => {
    setVideos(prevVideos => prevVideos.filter(video => video.id !== idToRemove));
  };


  return (
    <div className="upload-screen-container">
      {/* UploadBox部分 */}
      <div
        className={`upload-box ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag} // このイベントハンドラを、より汎用的な`handleDrag`に統一
        onDrop={handleDrop}
      >
        <div className="upload-label"> {/* 新しいdivで内側のコンテンツを囲む */}
          <input
            type="file"
            id="video-upload"
            multiple
            accept="video/*"
            className="file-input-hidden" // ここで非表示にする
            onChange={handleFileChange}
          />
          <UploadCloud className="upload-icon" size={40} />
          <p>ここに動画をドラッグ＆ドロップ</p>
          <p>または</p>
          <button
            type="button"
            className="select-file-button"
            onClick={() => document.getElementById('video-upload').click()}
          >
            <FolderOpen className="button-icon" size={20} /> ファイルを選択
          </button>
        </div>
      </div>

      {/* アップロードされた動画のリスト */}
      {videos.length > 0 && (
        <div className="video-list-container">
          <h2>アップロードされた動画</h2>
          <ul>
            {videos.map((video) => (
              <li key={video.id} className="video-item">
                <span className="video-name">{video.name}</span>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveVideo(video.id)}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="next-button">次へ</button>
        </div>
      )}
    </div>
  );
}

export default UploadScreen;