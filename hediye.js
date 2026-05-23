import { useState } from "react";

const gifts = ["Rozet", "Emoji Paketi", "Mini Oyun", "Profil Teması"];

const GiftWheel = () => {
  const [gift, setGift] = useState(null);

  const spinWheel = () => {
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    setGift(randomGift);
  };

  return (
    <div>
      <button onClick={spinWheel}>Çarkı Çevir 🎡</button>
      {gift && <p>Kazandığın hediye: {gift}</p>}
    </div>
  );
};

export default GiftWheel;
