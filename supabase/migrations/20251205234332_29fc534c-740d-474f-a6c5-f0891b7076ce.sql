-- Create table for Build Your Own Safari form submissions
CREATE TABLE public.safari_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  nationality TEXT NOT NULL,
  phone TEXT NOT NULL,
  arrival_date DATE NOT NULL,
  adults INTEGER NOT NULL DEFAULT 1,
  children INTEGER NOT NULL DEFAULT 0,
  budget TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.safari_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can submit inquiries (public form)
CREATE POLICY "Anyone can submit safari inquiries"
ON public.safari_inquiries
FOR INSERT
WITH CHECK (true);

-- Only admins can view inquiries
CREATE POLICY "Only admins can view safari inquiries"
ON public.safari_inquiries
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update inquiries
CREATE POLICY "Only admins can update safari inquiries"
ON public.safari_inquiries
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete inquiries
CREATE POLICY "Only admins can delete safari inquiries"
ON public.safari_inquiries
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));