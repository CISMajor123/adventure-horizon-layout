import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const safariBookingSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  nationality: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(50),
  arrivalDate: z.string().min(1),
  adults: z.number().min(1),
  children: z.number().min(0),
  budget: z.string().trim().min(1).max(100),
  additionalInfo: z.string().max(2000).optional(),
});

const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData = await req.json();
    console.log("Received safari booking request:", JSON.stringify(requestData));
    
    const validatedData = safariBookingSchema.parse(requestData);
    const { firstName, lastName, email, nationality, phone, arrivalDate, adults, children, budget, additionalInfo } = validatedData;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    // Send notification email to owner
    const ownerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["power2md@dukes.jmu.edu"],
        subject: `New Safari Booking Request from ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #5a4a3a, #8b7355); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Safari Booking Request</h1>
            </div>
            <div style="padding: 20px; background: #f9f7f4;">
              <h2 style="color: #5a4a3a;">Customer Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666;"><strong>Name:</strong></td><td>${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td><td>${escapeHtml(phone)}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Nationality:</strong></td><td>${escapeHtml(nationality)}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Arrival Date:</strong></td><td>${escapeHtml(arrivalDate)}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Adults:</strong></td><td>${adults}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Children:</strong></td><td>${children}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Budget:</strong></td><td>${escapeHtml(budget)}</td></tr>
              </table>
              ${additionalInfo ? `
                <h3 style="color: #5a4a3a; margin-top: 20px;">Additional Information</h3>
                <p style="background: white; padding: 15px; border-radius: 5px;">${escapeHtml(additionalInfo)}</p>
              ` : ''}
            </div>
          </div>
        `,
      }),
    });

    const ownerEmailData = await ownerEmailResponse.json();
    
    if (!ownerEmailResponse.ok) {
      console.error("Failed to send owner notification:", ownerEmailData);
      throw new Error(ownerEmailData.message || "Failed to send notification email");
    }

    console.log("Owner notification sent:", ownerEmailData);

    // Send confirmation email to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: [email],
        subject: "Your Safari Adventure Awaits! - Grant Expedition Ltd",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #5a4a3a, #8b7355); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You, ${escapeHtml(firstName)}!</h1>
              <p style="color: #e8dfd4; margin-top: 10px;">Your Custom Safari Request Has Been Received</p>
            </div>
            <div style="padding: 30px; background: #f9f7f4;">
              <p style="color: #5a4a3a; font-size: 16px; line-height: 1.6;">
                We're thrilled that you've chosen Grant Expedition Ltd to help craft your dream African safari adventure!
              </p>
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #5a4a3a; margin-top: 0;">Your Request Summary</h3>
                <p><strong>Arrival Date:</strong> ${escapeHtml(arrivalDate)}</p>
                <p><strong>Group Size:</strong> ${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}</p>
                <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
              </div>
              <p style="color: #5a4a3a; font-size: 16px; line-height: 1.6;">
                Our team of safari experts will review your request and get back to you within 24-48 hours with a personalized itinerary tailored to your preferences.
              </p>
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                If you have any questions in the meantime, feel free to reach out to us.
              </p>
            </div>
            <div style="background: #5a4a3a; padding: 20px; text-align: center;">
              <p style="color: #e8dfd4; margin: 0; font-size: 14px;">
                Grant Expedition Ltd - Your Gateway to African Adventures
              </p>
            </div>
          </div>
        `,
      }),
    });

    const customerEmailData = await customerEmailResponse.json();
    
    if (!customerEmailResponse.ok) {
      console.error("Failed to send customer confirmation:", customerEmailData);
      // Don't throw - owner was notified, just log the issue
    } else {
      console.log("Customer confirmation sent:", customerEmailData);
    }

    return new Response(JSON.stringify({ success: true, ownerEmail: ownerEmailData, customerEmail: customerEmailData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-safari-booking-email:", error.name, error.message);
    
    if (error.name === 'ZodError') {
      return new Response(
        JSON.stringify({ error: "Validation failed", message: error.errors[0].message }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
