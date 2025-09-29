Sky Menu — QR-Powered Payment Demo

Sky Menu is a full-stack prototype built for restaurant and event activations. It features real-time API integration, a sleek frontend, and a backend ready for scale.

  

🚀 Live Demo

https://sky-menu.vercel.app

Scan, preview, and interact — no setup required.

🧩 Tech Stack

Frontend: Vercel + React

Backend: Node.js + Express

APIs: Safaricom M-Pesa QR, Africa's Talking SMS

✨ Features

QR-based ordering flow

SMS confirmation via Africa's Talking

M-Pesa payment integration

Responsive UI for mobile and desktop

📦 Structure

sky-menu/
├── frontend/   # React app deployed to Vercel
└── backend/    # Node.js server with API integrations

🛠 Setup

Clone the repo

Add your API keys to .env

Run npm install in both frontend/ and backend/

Start with npm run dev

🔐 .env.example

# Safaricom M-Pesa
MPESA_CONSUMER_KEY=your_key_here
MPESA_CONSUMER_SECRET=your_secret_here
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=https://yourdomain.com/callback

# Africa's Talking
AFRICASTALKING_API_KEY=your_api_key
AFRICASTALKING_USERNAME=your_username

# Server
PORT=5000

🤝 Contributor Guide

Fork the repo

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add feature')

Push to the branch (git push origin feature-name)

Open a pull request

⚙️ Vercel Auto-Deploy

This project is auto-deployed via GitHub integration:

Push to master → triggers Vercel build

Environment variables managed in Vercel dashboard

🎯 Use Cases

Investor demos

Client previews

Framer pitch embeds

🧠 Framer Embed Tips

To embed this demo in Framer:

Use an Embed block with the live URL

Add a call-to-action overlay (e.g., "Scan to Order")

Style with rounded corners and drop shadow for polish

💡 Next Steps

Add splash screen or animation

Prep pricing sheet or pitch deck

Expand to multi-vendor support

Built with love by Cedric. Let’s make ordering unforgettable.