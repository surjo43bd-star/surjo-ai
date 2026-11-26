-- Supabase SQL Editor-এ একবার চালাও।
create table if not exists public.chat_logs (
  id bigint generated always as identity primary key,
  question text not null,
  answer text not null,
  created_at timestamptz not null default now()
);
alter table public.chat_logs enable row level security;
-- কোনো public/anon policy তৈরি কোরো না। কেবল server-side service-role key দিয়ে API access করবে।
