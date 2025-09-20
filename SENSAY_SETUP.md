# Sensay API Setup Instructions

## 🚨 Current Issue
Your app is configured but missing actual Sensay credentials. You're seeing these errors because the environment variables are still using placeholder values.

## ✅ What You Need to Do

### Step 1: Get Your Sensay Account
1. Go to [https://sensay.io](https://sensay.io)
2. Sign up for an account or log in
3. Navigate to your dashboard

### Step 2: Create a Replica
1. In your Sensay dashboard, create a new replica
2. Note down the **Replica ID** (UUID format like: `12345678-1234-1234-1234-123456789abc`)

### Step 3: Get Your API Credentials
Look for these values in your Sensay account:
- **Organization Secret** (API Key)
- **User ID** 
- **Replica ID** (from Step 2)

### Step 4: Update Your Environment File
Edit `/home/devpima/Desktop/sen/.env.local` and replace:

```env
# Replace these placeholder values with your actual Sensay credentials:
SENSAY_ORGANIZATION_SECRET=your_actual_organization_secret_here
SENSAY_REPLICA_ID=your_actual_replica_uuid_here  
SENSAY_USER_ID=your_actual_user_id_here
```

### Step 5: Restart Your Development Server
```bash
# Stop the current server (Ctrl+C) then restart:
npm run dev
```

## 🎯 How to Find Your Credentials

### In Sensay Dashboard:
1. **Replica ID**: Go to your replica settings - copy the UUID
2. **Organization Secret**: Look in API settings or developer section
3. **User ID**: Usually in account/profile settings

### Alternative Method:
- Check Sensay documentation at [docs.sensay.io](https://docs.sensay.io)
- Look for "API Keys" or "Developer Settings"
- Contact Sensay support if you can't find these values

## ✅ Once Configured Correctly:
- ✅ Knowledge base will work for fine-tuning
- ✅ Chat functionality will work 
- ✅ No more 401/500 errors
- ✅ Your replica will respond to conversations

## 🔍 Testing:
After updating the credentials:
1. Try adding knowledge base entries
2. Test the chat functionality
3. Check that errors are gone from console