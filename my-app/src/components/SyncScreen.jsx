import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './SyncScreen.css';


function SyncScreen() {
  const location = useLocation();
  const { videos } = location.state || { videos: [] };
  const [referenceVideo, setReferenceVideo] = useState(null);
  const [syncVideo, setSyncVideo] = useState(null);

  const handleSetReference = (video) => {
    setReferenceVideo(video);
    console.log('参照動画として設定:', video.name);
  };

  const handleSetSync = (video) => {
    setSyncVideo(video);
    console.log('同期動画として設定:', video.name);
  };

  return (

    <div className="sync-screen-container">
      <div className="video-preview-container">
        <div className="reference-preview">
          {referenceVideo ? (
            <video controls className="preview-video">
              <source src={referenceVideo.url} type="video/mp4" />
              ブラウザが動画に対応していません。
            </video>
          ) : (
            <p className="preview-text">１．基準とする動画を選択し，同期点を決める</p>
          )}
        </div>
        <div className="sync-preview">
          {syncVideo ? (
            <video controls className="preview-video">
              <source src={syncVideo.url} type="video/mp4" />
              ブラウザが動画に対応していません。
            </video>
          ) : (
            <p className="preview-text">２．他の動画を選択し，基準に合わせて同期点を決める</p>
          )}
        </div>
      </div>
      {videos.length > 0 ? (
        <div className="video-list-container">
          <ul>
            {videos.map((video) => (
              <li key={video.id} className="video-item">
                <video controls>
                  <source src={video.url} type="video/mp4" />
                  ブラウザが動画に対応していません。
                </video>
                <span className="video-name">{video.name}</span>
                <button 
                  className="reference-button"
                  onClick={() => handleSetReference(video)}
                >
                  参照
                </button>
                <button 
                  className="sync-button"
                  onClick={() => handleSetSync(video)}
                >
                  同期
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>動画が渡されていません。</p>
      )}
    </div>
  );
}

export default SyncScreen;
