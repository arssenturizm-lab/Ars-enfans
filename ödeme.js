import { useState } from "react";

const FakePayment = () => {
  const [loading, setLoading] = useState(false);

  const fakePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Ödeme başarılı görünüyor 💳 (sahte)");
    }, 3000);
  };

  return (
    <div>
      <button onClick={fakePay}>Sahte Ödeme Yap</button>
      {loading && <p>Ödeme işleniyor...</p>}
    </div>
  );
};

export default FakePayment;
