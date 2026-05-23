import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AdminPanel = () => {
  const addGift = async (giftName) => {
    await addDoc(collection(db, "gifts"), { name: giftName });
    alert("Hediye eklendi!");
  };

  return (
    <div>
      <h2>Admin Paneli</h2>
      <button onClick={() => addGift("Yeni Rozet")}>Yeni Hediye Ekle</button>
    </div>
  );
};

export default AdminPanel;
