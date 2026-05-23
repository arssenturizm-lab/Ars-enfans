import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), { text, createdAt: Date.now() });
    setText("");
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => <p key={i}>{m.text}</p>)}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Gönder</button>
    </div>
  );
};

export default Chat;
