# SURJO AI + Admin Dashboard

এই সংস্করণে chat পাঠানোর আগে প্রত্যেক ব্যবহারকারীকে স্পষ্টভাবে জানানো হয় যে প্রশ্ন ও AI-এর উত্তর সংরক্ষিত হবে এবং সাইটের মালিক Admin Dashboard-এ দেখতে পারবেন। সম্মতি ছাড়া API chat request গ্রহণ করে না। IP address বা পরিচয় সংগ্রহ করা হয় না।

## প্রয়োজনীয় সেটআপ
1. Node.js ইনস্টল করে `npm install` চালাও।
2. `.env.example` কপি করে `.env.local` বানাও; সব placeholder নিজের secret দিয়ে পূরণ করো।
3. Supabase-এ একটি project বানিয়ে SQL Editor-এ `supabase.sql` চালাও।
4. OpenAI API key যোগ করো। API ব্যবহারে খরচ হতে পারে; অভিভাবকের সাহায্য ও অনুমতি নিয়ে করো।
5. `npm run dev` চালিয়ে `http://localhost:3000` খোলো।
6. Admin পেজ: `http://localhost:3000/admin`। `.env.local`-এর ADMIN_PASSWORD দিয়ে লগ ইন করো।

## Vercel-এ প্রকাশ
GitHub-এ project upload করে Vercel-এ Import করো। Vercel Project Settings > Environment Variables-এ `.env.local`-এর চারটি variable যোগ করে Deploy করো। Vercel একটি public URL দেবে। Google-এ খুঁজে পাওয়ার জন্য Google Search Console-এ domain যোগ করে indexing request করতে হবে. Search result আসতে সময় লাগতে পারে.

## নিরাপত্তা / গোপনীয়তা
- API keys এবং Supabase service-role key শুধু server-side environment variables-এ রাখবে। GitHub-এ কখনো commit করবে না।
- Admin password শক্তিশালী ও আলাদা রাখবে; কারও সঙ্গে শেয়ার করবে না।
- ব্যবহারকারীদের স্পষ্ট সম্মতি ছাড়া তাদের প্রশ্ন সংরক্ষণ করবে না। অপ্রাপ্তবয়স্কদের জন্য অভিভাবকের তত্ত্বাবধান নাও।
- সংবেদনশীল তথ্য (পাসওয়ার্ড, ঠিকানা, ফোন, স্বাস্থ্য বা আর্থিক তথ্য) চ্যাটে না দিতে ব্যবহারকারীদের সতর্ক করো।
- এই starter-এ সর্বশেষ 100টি chat record দেখানো হয়। প্রয়োজন না হলে ডেটা মুছে ফেলো এবং retention policy নির্ধারণ করো।
