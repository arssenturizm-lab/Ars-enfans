import Auth from "./components/Auth";
import Upload from "./components/Upload";
import Chat from "./components/Chat";
import SpotifyPlayer from "./components/SpotifyPlayer";
import GiftWheel from "./components/GiftWheel";
import FakePayment from "./components/FakePayment";
import Profile from "./components/Profile";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div>
      <h1>ArsşenFans 🎉</h1>
      <Auth />
      <Upload />
      <Chat />
      <SpotifyPlayer trackId="4uLU6hMCjMI75M1A2tKUQC" />
      <GiftWheel />
      <FakePayment />
      <Profile name="Arsşen" avatar="https://via.placeholder.com/80" />
      <AdminPanel />
    </div>
  );
}

export default App;
