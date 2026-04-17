# EmailJS Setup Guide

Follow these steps to enable email functionality on your portfolio:

## Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Get Your Public Key

1. After login, go to **Account** from the top menu
2. Under **API Keys**, copy your **Public Key**
3. Save it somewhere safe

## Step 3: Set Up Email Service

1. Go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (format: `service_xxxxxxxxxx`)

## Step 4: Create Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Set up the template with these variables:
   - **Name:** For example "Portfolio Contact Form"
   - **Subject:** `New Message from {{from_name}}`
   - **Template content:**

```
Hello,

You have received a new message from your portfolio:

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Copy the **Template ID** (format: `template_xxxxxxxxxx`)

## Step 5: Create .env.local File

In your project root directory, create a file named `.env.local` (note the dot at the beginning):

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxx
VITE_RECEIVER_EMAIL=skmothi19@gmail.com
```

Replace the values with your actual credentials.

## Step 6: Test It Out

1. Save the `.env.local` file
2. Restart your dev server: `npm run dev`
3. Go to the Contact section on your portfolio
4. Fill out the form and click "Send Message"
5. Check your email - you should receive the message!

## Step 7: Deploy to Vercel

Your `.env.local` is local only. For Vercel:

1. Go to your Vercel project settings
2. Navigate to **Settings > Environment Variables**
3. Add these environment variables:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_RECEIVER_EMAIL`
4. Set their values

## Troubleshooting

**"Configuration Error" message?**
- Check that `.env.local` file exists in project root
- Verify all three credentials are filled in
- Restart the dev server

**Email not arriving?**
- Check spam/promotions folder
- Verify the email service is properly connected in EmailJS
- Check EmailJS dashboard for any warnings

**Still getting errors?**
- Open browser console (F12) and check error details
- Check EmailJS dashboard > Messages to see if email was sent
- Verify email template syntax is correct

Need help? Contact EmailJS support at https://support.emailjs.com/
