import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import MainLayoutWrapper from '@/components/MainLayoutWrapper';
import { Course } from '@/types/database';

export const revalidate = 0;

export default async function Page() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {}
        },
      },
    }
  );

  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true });

  return <MainLayoutWrapper initialCourses={courses as Course[]} />;
}