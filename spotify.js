const SpotifyPlayer = ({ trackId }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}`}
      width="300"
      height="80"
      frameBorder="0"
      allow="encrypted-media"
    ></iframe>
  );
};

export default SpotifyPlayer;
