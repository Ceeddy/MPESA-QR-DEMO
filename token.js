// token.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function getToken() {
  const auth = Buffer.from(
    `${process.env.DAR_CONSUMER_KEY}:${process.env.DAR_CONSUMER_SECRET}`
  ).toString("base64");

  const res = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  console.log("🔑 Access Token:", res.data.access_token);
}

getToken();
