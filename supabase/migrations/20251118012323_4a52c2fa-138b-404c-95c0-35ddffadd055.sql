-- Fix RLS policies to allow public inserts while maintaining admin-only reads

-- Drop overly restrictive insert policies
DROP POLICY IF EXISTS "Only admins can insert bookings" ON public.bookings;
DROP POLICY IF EXISTS "Only admins can insert contact inquiries" ON public.contact_inquiries;

-- Allow anyone to submit bookings (public-facing form)
CREATE POLICY "Anyone can submit bookings"
ON public.bookings
FOR INSERT
WITH CHECK (true);

-- Allow anyone to submit contact inquiries (public-facing form)
CREATE POLICY "Anyone can submit contact inquiries"
ON public.contact_inquiries
FOR INSERT
WITH CHECK (true);

-- Keep admin-only access for viewing, updating, and deleting
-- (The existing SELECT, UPDATE, DELETE policies already enforce this)