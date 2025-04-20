🚗 AutoVision AI – Intelligent Car Marketplace
AutoVision AI is a modern AI-powered car marketplace that lets users search for cars by uploading images, apply advanced filters, book test drives in real-time, and even calculate EMI before making a decision. Built with Next.js, shadcn/ui, and powered by Gemini 1.5 Flash API, this platform automates inventory management and streamlines the buyer’s journey.

🌟 Features
🔍 AI Image Search
Upload a car image to find similar cars in the marketplace.

Powered by Gemini 1.5 Flash API.

📊 Advanced Filtering
Filter by Make, Model, Fuel Type, Transmission, Body Type, and Price.

Shareable URLs with pre-applied filters.

🚘 Detailed Car Pages
Image galleries, full specifications, dealership details.

Interactive EMI calculator (down payment, interest, tenure).

✅ Test Drive Booking
Real-time slot availability.

Admin-side slot management.

Automated booking confirmations & cancellation.

🧠 AI Car Detail Extractor
Upload a car image to automatically extract specifications and description.

Saves time during inventory uploads.

❤️ Save & Favorite Cars
Save listings to your profile.

View all favorites in a separate page.

🔐 Authentication with Clerk
Secure login and session management using Clerk.

Role-based access (Admin/User) managed in middleware.js.

📦 Admin Dashboard
Analytics: car sold, conversion rates, test drives.

Car inventory management (add, edit, feature, mark sold).

Test drive status control (confirm, complete, cancel).

Dealership working hour settings.

Admin access control for users.

🛡️ Security & Rate Limiting
Integrated Arcjet for:

Bot protection

Rate limiting (10 req/hr/IP)

Email validation

Attack protection

Data redaction

🪣 Car Image Storage
Images stored in Supabase buckets.

Seamless upload from the admin panel.

📝 Waitlist Collection
Users can join a waitlist before app goes live.

Built using create.xyz platform.

🧱 Tech Stack

Layer	Technology
Frontend	Next.js, TailwindCSS, shadcn/ui
Backend	Node.js, Prisma ORM
AI Layer	Gemini 1.5 Flash API (for image search & data extraction)
Auth	Clerk
DB	PostgreSQL (via Prisma)
Storage	Supabase buckets
Security	Arcjet API
Deployment	Vercel (recommended)
🛠️ Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/aravindss2004/autovision-ai-car-marketplace.git
cd autovision-ai-car-marketplace
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Add environment variables
Create a .env.local file and add the following:

env
Copy
Edit
# DATABASE
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# CLERK
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLERK_SIGN_IN_URL=/sign-in
CLERK_SIGN_UP_URL=/sign-up

# GEMINI
GEMINI_API_KEY=your_gemini_api_key

# SUPABASE
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_BUCKET_NAME=your_bucket_name

# ARCJET
ARCJET_API_KEY=your_arcjet_key

# CREATE.XYZ (Optional - for waitlist)
CREATE_XYZ_API_KEY=your_create_xyz_key
🧪 Run Locally
bash
Copy
Edit
npm run dev
# or
yarn dev
🧩 Folder Structure (Simplified)
bash
Copy
Edit
/app
  - /api
  - /components
  - /dashboard
  - /hooks
  - /middleware
  - /utils
/prisma
  - schema.prisma
/public
  - assets
.env.local
.gitignore
next.config.js
🚀 Future Enhancements
Voice-powered car search with AI.

Dealer portal for uploading their own cars.

Advanced search relevance with vector embeddings.

Multi-language support.
