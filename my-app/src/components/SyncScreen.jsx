import { useLocation } from 'react-router-dom';
import './SyncScreen.css';

function SyncScreen() {
  const location = useLocation();
  const { videos } = location.state || { videos: [] };

  return (
    <div className="sync-screen-container">
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
