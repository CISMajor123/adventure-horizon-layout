-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  arrival_date DATE NOT NULL,
  duration TEXT NOT NULL,
  adults INTEGER NOT NULL CHECK (adults > 0),
  children INTEGER NOT NULL DEFAULT 0 CHECK (children >= 0),
  budget TEXT NOT NULL,
  destination TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public form submissions)
CREATE POLICY "Anyone can submit bookings"
ON public.bookings
FOR INSERT
WITH CHECK (true);

-- Only allow viewing through service role (admin access via backend)
-- This protects PII in booking data
CREATE POLICY "Service role can view all bookings"
ON public.bookings
FOR SELECT
USING (false);

-- Create index for faster queries
CREATE INDEX idx_bookings_created_at ON public.bookings(created_at DESC);
CREATE INDEX idx_bookings_email ON public.bookings(email);