async function getQRCode() {
  document.getElementById("status").innerText = "Generating QR and sending SMS...";
  
  const res = await fetch("http://localhost:3000/api/demo-payment");
  const data = await res.json();

  if (data.success) {
    document.getElementById("qr-container").innerHTML =
      `<img src="${data.qrCode}" alt="M-Pesa QR" />`;
    document.getElementById("status").innerText =
      `QR generated for ORDER ${data.accountRef}. SMS sent to client 📲`;
  } else {
    document.getElementById("status").innerText = "Error generating QR";
  }
}
