alter table public.student_portfolios
  add column if not exists theme_id text not null default 'aurora';

notify pgrst, 'reload schema';
