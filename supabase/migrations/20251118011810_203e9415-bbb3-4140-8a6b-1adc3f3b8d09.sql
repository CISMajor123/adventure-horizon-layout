-- Drop existing insecure policies on bookings
DROP POLICY IF EXISTS "Anyone can submit bookings" ON public.bookings;
DROP POLICY IF EXISTS "Service role can view all bookings" ON public.bookings;
DROP POLICY IF EXISTS "Only admins can view bookings" ON public.bookings;
DROP POLICY IF EXISTS "Only admins can insert bookings" ON public.bookings;
DROP POLICY IF EXISTS "Only admins can update bookings" ON public.bookings;
DROP POLICY IF EXISTS "Only admins can delete bookings" ON public.bookings;

-- Create secure policies for bookings (admin-only access)
CREATE POLICY "Only admins can view bookings"
ON public.bookings
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert bookings"
ON public.bookings
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update bookings"
ON public.bookings
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete bookings"
ON public.bookings
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop existing insecure policies on contact_inquiries
DROP POLICY IF EXISTS "Anyone can submit contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Service role can view all contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only admins can view contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only admins can insert contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only admins can update contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Only admins can delete contact inquiries" ON public.contact_inquiries;

-- Create secure policies for contact_inquiries (admin-only access)
CREATE POLICY "Only admins can view contact inquiries"
ON public.contact_inquiries
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert contact inquiries"
ON public.contact_inquiries
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update contact inquiries"
ON public.contact_inquiries
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete contact inquiries"
ON public.contact_inquiries
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));