import express from "express";
import dotenv from "dotenv";
import africastalking from "africastalking";
import { generateQRCode } from "./utils/qr.js";
import cors from "cors";

dotenv.config();
console.log("🔐 AT_API_KEY:", process.env.AT_API_KEY);
console.log("🔐 AT_USERNAME:", process.env.AT_USERNAME);


const app = express();
app.use(express.json());
app.use(cors());

// Africa's Talking init
const sms = africastalking({
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
}).SMS;

// API: Generate QR + send demo SMS
app.get("/api/demo-payment", async (req, res) => {
  const paybill = process.env.DEFAULT_PAYBILL; 
  const accountRef = "SKYMENU";
  const amount = 1;
  const phoneNumber = "+2547XXXXXXXX"; // replace with a test number

  try {
    // Generate QR from Safaricom sandbox
    const qrCode = await generateQRCode(paybill, accountRef, amount);

    // Send demo SMS (optional)
    await sms.send({
      to: [phoneNumber],
      message: `Thank you for dining with us at Sky Menu Restaurant. We've received your simulated payment of KES ${amount}. Bon Appétit! 🍽️`,
      from: "SKYMENU",
    });
    console.log("✅ Demo SMS sent successfully.");
    console.log("📦 QR Response:", qrCode);
    
    res.json({
      success: true,
      qrCode,
      amount,
      accountRef,
      paybill,
    });
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: "Failed to generate QR or send SMS",
    });
  }
});
// Callback for M-Pesa payments (sandbox simulation)
app.post("/api/payment-callback", (req, res) => {
  console.log("📩 Payment Callback Received:", req.body);

  // Here you could save to DB, update order status, send SMS, etc.
  // For demo we just log and return success

  res.json({ success: true });
});


// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Sandbox backend running on http://localhost:${PORT}`)
);
