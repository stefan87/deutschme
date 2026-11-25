-- Run in Supabase SQL Editor. Never store passwords in study_progress.
create table if not exists public.study_progress (
 user_id uuid primary key references auth.users(id) on delete cascade,
 state jsonb not null default '{}'::jsonb,
 updated_at timestamptz not null default now()
);
alter table public.study_progress enable row level security;
revoke all on public.study_progress from anon;
grant select, insert, update on public.study_progress to authenticated;
drop policy if exists "read own progress" on public.study_progress;
drop policy if exists "create own progress" on public.study_progress;
drop policy if exists "update own progress" on public.study_progress;
create policy "read own progress" on public.study_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "create own progress" on public.study_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own progress" on public.study_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
