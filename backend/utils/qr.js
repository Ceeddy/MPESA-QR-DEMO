import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function generateQRCode(paybill, accountRef, amount) {
  try {
    // Step 1: Get OAuth token
    const auth = Buffer.from(
      `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
    ).toString("base64");

    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Request QR code
   const qrResponse = await axios.post(
  "https://sandbox.safaricom.co.ke/mpesa/qrcode/v1/generate",
  {
  MerchantName: "Sky Menu",
  RefNo: accountRef,         // e.g. "ORDER123"
  Amount: Number(amount),    // Make sure this is a number, not a string
  TrxCode: "PB",             // PB = Paybill
  CPI: "600000",             // Safaricom sandbox shortcode
  Size: "300"
},
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  }
);


    return qrResponse.data.QRCode;
  } catch (err) {
    console.error("❌ QR generation failed:", err.response?.data || err.message);
    throw err;
  }
}
