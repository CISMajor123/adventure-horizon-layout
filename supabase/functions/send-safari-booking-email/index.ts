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

    // Format date for display
    const formattedDate = new Date(arrivalDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

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
        subject: `🦁 New Custom Safari Request - ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #f5f0e8;">
            <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #5a4a3a 0%, #8b7355 50%, #c9a86c 100%); padding: 30px 40px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: normal; letter-spacing: 2px;">GRANT EXPEDITION LTD</h1>
                <p style="color: #e8dfd4; margin: 10px 0 0 0; font-size: 14px; letter-spacing: 1px;">New Custom Safari Booking Request</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px;">
                <div style="background: #faf8f5; border-left: 4px solid #c9a86c; padding: 20px; margin-bottom: 30px;">
                  <h2 style="color: #5a4a3a; margin: 0 0 5px 0; font-size: 20px;">New Inquiry Received</h2>
                  <p style="color: #8b7355; margin: 0; font-size: 14px;">A potential client has submitted a custom safari request</p>
                </div>
                
                <h3 style="color: #5a4a3a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e8dfd4; padding-bottom: 10px;">Client Information</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 12px 0; color: #8b7355; font-size: 14px; width: 40%;">Full Name</td>
                    <td style="padding: 12px 0; color: #3d3d3d; font-size: 14px; font-weight: bold;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
                  </tr>
                  <tr style="background: #faf8f5;">
                    <td style="padding: 12px; color: #8b7355; font-size: 14px;">Email Address</td>
                    <td style="padding: 12px; color: #3d3d3d; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #5a4a3a;">${escapeHtml(email)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #8b7355; font-size: 14px;">Phone Number</td>
                    <td style="padding: 12px 0; color: #3d3d3d; font-size: 14px;">${escapeHtml(phone)}</td>
                  </tr>
                  <tr style="background: #faf8f5;">
                    <td style="padding: 12px; color: #8b7355; font-size: 14px;">Nationality</td>
                    <td style="padding: 12px; color: #3d3d3d; font-size: 14px;">${escapeHtml(nationality)}</td>
                  </tr>
                </table>
                
                <h3 style="color: #5a4a3a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e8dfd4; padding-bottom: 10px;">Trip Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 12px 0; color: #8b7355; font-size: 14px; width: 40%;">Arrival Date</td>
                    <td style="padding: 12px 0; color: #3d3d3d; font-size: 14px; font-weight: bold;">${formattedDate}</td>
                  </tr>
                  <tr style="background: #faf8f5;">
                    <td style="padding: 12px; color: #8b7355; font-size: 14px;">Number of Adults</td>
                    <td style="padding: 12px; color: #3d3d3d; font-size: 14px;">${adults}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #8b7355; font-size: 14px;">Number of Children</td>
                    <td style="padding: 12px 0; color: #3d3d3d; font-size: 14px;">${children}</td>
                  </tr>
                  <tr style="background: #faf8f5;">
                    <td style="padding: 12px; color: #8b7355; font-size: 14px;">Budget (USD)</td>
                    <td style="padding: 12px; color: #3d3d3d; font-size: 14px; font-weight: bold;">${escapeHtml(budget)}</td>
                  </tr>
                </table>
                
                ${additionalInfo ? `
                  <h3 style="color: #5a4a3a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e8dfd4; padding-bottom: 10px;">Additional Information</h3>
                  <div style="background: #faf8f5; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
                    <p style="color: #3d3d3d; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(additionalInfo)}</p>
                  </div>
                ` : ''}
                
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${escapeHtml(email)}" style="display: inline-block; background: linear-gradient(135deg, #5a4a3a, #8b7355); color: #ffffff; text-decoration: none; padding: 15px 40px; font-size: 14px; letter-spacing: 1px; text-transform: uppercase;">Reply to Client</a>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #5a4a3a; padding: 25px 40px; text-align: center;">
                <p style="color: #c9a86c; margin: 0; font-size: 12px; letter-spacing: 1px;">GRANT EXPEDITION LTD</p>
                <p style="color: #8b7355; margin: 8px 0 0 0; font-size: 11px;">Tanzania Safari & Kilimanjaro Trekking Specialists</p>
              </div>
            </div>
          </body>
          </html>
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
        subject: "Your Custom Safari Adventure Awaits - Grant Expedition Ltd",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #f5f0e8;">
            <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #5a4a3a 0%, #8b7355 50%, #c9a86c 100%); padding: 40px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: normal; letter-spacing: 3px;">GRANT EXPEDITION LTD</h1>
                <p style="color: #e8dfd4; margin: 15px 0 0 0; font-size: 14px; letter-spacing: 2px;">YOUR GATEWAY TO AFRICAN ADVENTURES</p>
              </div>
              
              <!-- Welcome Section -->
              <div style="padding: 50px 40px 30px 40px; text-align: center;">
                <h2 style="color: #5a4a3a; font-size: 26px; font-weight: normal; margin: 0;">Jambo, ${escapeHtml(firstName)}!</h2>
                <p style="color: #8b7355; font-size: 16px; line-height: 1.8; margin: 20px 0 0 0;">
                  Thank you for choosing Grant Expedition Ltd to craft your dream African safari adventure. We are thrilled to help you experience the magic of Tanzania!
                </p>
              </div>
              
              <!-- Booking Summary -->
              <div style="padding: 0 40px 40px 40px;">
                <div style="background: linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%); border-radius: 8px; padding: 30px; border: 1px solid #e8dfd4;">
                  <h3 style="color: #5a4a3a; font-size: 18px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 25px 0; text-align: center; border-bottom: 2px solid #c9a86c; padding-bottom: 15px;">Your Request Summary</h3>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 15px 0; color: #8b7355; font-size: 14px; border-bottom: 1px solid #e8dfd4;">Arrival Date</td>
                      <td style="padding: 15px 0; color: #3d3d3d; font-size: 14px; font-weight: bold; text-align: right; border-bottom: 1px solid #e8dfd4;">${formattedDate}</td>
                    </tr>
                    <tr>
                      <td style="padding: 15px 0; color: #8b7355; font-size: 14px; border-bottom: 1px solid #e8dfd4;">Group Size</td>
                      <td style="padding: 15px 0; color: #3d3d3d; font-size: 14px; font-weight: bold; text-align: right; border-bottom: 1px solid #e8dfd4;">${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}</td>
                    </tr>
                    <tr>
                      <td style="padding: 15px 0; color: #8b7355; font-size: 14px;">Budget</td>
                      <td style="padding: 15px 0; color: #3d3d3d; font-size: 14px; font-weight: bold; text-align: right;">${escapeHtml(budget)} USD</td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <!-- What's Next -->
              <div style="padding: 0 40px 40px 40px;">
                <h3 style="color: #5a4a3a; font-size: 18px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 20px 0; text-align: center;">What Happens Next?</h3>
                
                <div style="display: table; width: 100%;">
                  <div style="display: table-row;">
                    <div style="display: table-cell; width: 50px; vertical-align: top; padding: 15px 0;">
                      <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #c9a86c, #8b7355); border-radius: 50%; text-align: center; line-height: 36px; color: #ffffff; font-weight: bold;">1</div>
                    </div>
                    <div style="display: table-cell; vertical-align: top; padding: 15px 0 15px 15px;">
                      <h4 style="color: #5a4a3a; margin: 0 0 5px 0; font-size: 15px;">Expert Review</h4>
                      <p style="color: #666; margin: 0; font-size: 13px; line-height: 1.5;">Our safari specialists will review your request and preferences</p>
                    </div>
                  </div>
                  <div style="display: table-row;">
                    <div style="display: table-cell; width: 50px; vertical-align: top; padding: 15px 0;">
                      <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #c9a86c, #8b7355); border-radius: 50%; text-align: center; line-height: 36px; color: #ffffff; font-weight: bold;">2</div>
                    </div>
                    <div style="display: table-cell; vertical-align: top; padding: 15px 0 15px 15px;">
                      <h4 style="color: #5a4a3a; margin: 0 0 5px 0; font-size: 15px;">Personalized Itinerary</h4>
                      <p style="color: #666; margin: 0; font-size: 13px; line-height: 1.5;">We'll craft a custom itinerary tailored to your interests</p>
                    </div>
                  </div>
                  <div style="display: table-row;">
                    <div style="display: table-cell; width: 50px; vertical-align: top; padding: 15px 0;">
                      <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #c9a86c, #8b7355); border-radius: 50%; text-align: center; line-height: 36px; color: #ffffff; font-weight: bold;">3</div>
                    </div>
                    <div style="display: table-cell; vertical-align: top; padding: 15px 0 15px 15px;">
                      <h4 style="color: #5a4a3a; margin: 0 0 5px 0; font-size: 15px;">Personal Contact</h4>
                      <p style="color: #666; margin: 0; font-size: 13px; line-height: 1.5;">Expect to hear from us within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Experiences -->
              <div style="background: #faf8f5; padding: 40px; text-align: center;">
                <h3 style="color: #5a4a3a; font-size: 18px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px 0;">Our Signature Experiences</h3>
                <p style="color: #8b7355; font-size: 14px; margin: 0 0 25px 0;">Discover what makes Grant Expedition special</p>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px; text-align: center; width: 33%;">
                      <p style="color: #c9a86c; font-size: 24px; margin: 0;">🦁</p>
                      <p style="color: #5a4a3a; font-size: 13px; margin: 8px 0 0 0; font-weight: bold;">Serengeti Safari</p>
                    </td>
                    <td style="padding: 10px; text-align: center; width: 33%;">
                      <p style="color: #c9a86c; font-size: 24px; margin: 0;">⛰️</p>
                      <p style="color: #5a4a3a; font-size: 13px; margin: 8px 0 0 0; font-weight: bold;">Kilimanjaro Trek</p>
                    </td>
                    <td style="padding: 10px; text-align: center; width: 33%;">
                      <p style="color: #c9a86c; font-size: 24px; margin: 0;">🏝️</p>
                      <p style="color: #5a4a3a; font-size: 13px; margin: 8px 0 0 0; font-weight: bold;">Zanzibar Beach</p>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Contact Info -->
              <div style="padding: 40px; text-align: center;">
                <p style="color: #8b7355; font-size: 14px; margin: 0 0 20px 0;">Have questions? We're here to help!</p>
                <p style="color: #5a4a3a; font-size: 14px; margin: 0;">
                  <strong>Email:</strong> info@grantexpedition.com<br>
                  <strong>WhatsApp:</strong> +255 123 456 789
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background: #5a4a3a; padding: 30px 40px; text-align: center;">
                <p style="color: #c9a86c; margin: 0; font-size: 14px; letter-spacing: 2px; font-weight: bold;">GRANT EXPEDITION LTD</p>
                <p style="color: #8b7355; margin: 10px 0 0 0; font-size: 12px;">Tanzania Safari & Kilimanjaro Trekking Specialists</p>
                <p style="color: #666; margin: 15px 0 0 0; font-size: 11px;">© ${new Date().getFullYear()} Grant Expedition Ltd. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const customerEmailData = await customerEmailResponse.json();
    
    if (!customerEmailResponse.ok) {
      console.error("Failed to send customer confirmation:", customerEmailData);
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
