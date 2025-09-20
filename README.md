# Sendesk

Sendesk is a modern customer support chat interface built with Next.js and React. It provides a clean, responsive chat experience that integrates with the Sensay API for intelligent customer support responses.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Features

- **Real-time Chat Interface**: Modern chat UI with message history and loading states
- **AI-Powered Responses**: Integration with Sensay API for intelligent customer support
- **Responsive Design**: Mobile-first design that works across all devices
- **TypeScript Support**: Full TypeScript implementation for type safety
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast development

## Prerequisites

Before setting up Sendesk, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **pnpm**: Version 8.0 or higher (recommended package manager)
- **Sensay API Access**: Valid organization secret and user credentials

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sen
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables** (see [Configuration](#configuration) section)

## Configuration

Create a `.env.local` file in the root directory with the following environment variables:

```env
# Sensay API Configuration
SENSAY_ORGANIZATION_SECRET=your_organization_secret_here
SENSAY_USER_ID=your_user_id_here
SENSAY_REPLICA_ID=your_replica_id_here
SENSAY_BASE_URL=https://api.sensay.io

# Optional: Development settings
NODE_ENV=development
```

### Environment Variables Explained

| Variable | Required | Description |
|----------|----------|-------------|
| `SENSAY_ORGANIZATION_SECRET` | Yes | Your Sensay organization secret key |
| `SENSAY_USER_ID` | Yes | Your Sensay user ID |
| `SENSAY_REPLICA_ID` | No | Specific replica ID (defaults to demo replica) |
| `SENSAY_BASE_URL` | No | Sensay API base URL (defaults to https://api.sensay.io) |

## Development

### Starting the Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build production application |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |

### Development Features

- **Hot Reload**: Automatic page refresh on file changes
- **Turbopack**: Fast bundling for improved development experience
- **TypeScript**: Full type checking during development
- **Biome**: Fast linting and formatting

## API Documentation

### Chat Endpoint

**POST** `/api/chat`

Processes chat messages and returns AI-generated responses from the Sensay API.

#### Request Body

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello, I need help with my account"
    }
  ]
}
```

#### Request Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `messages` | Array | Yes | Array of message objects |
| `messages[].role` | String | Yes | Message role: "user", "assistant", or "system" |
| `messages[].content` | String | Yes | Message content text |

#### Response Schema

**Success Response (200)**:
```json
{
  "content": "Hello! I'm Sendesk, your customer support assistant. How can I help you today?",
  "conversation_id": "conv_123456",
  "replica_id": "replica_789",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

**Error Response (4xx/5xx)**:
```json
{
  "error": "Sendesk encountered an error. Please try again.",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `content` | String | AI-generated response text |
| `conversation_id` | String | Unique conversation identifier |
| `replica_id` | String | Replica that generated the response |
| `timestamp` | String | ISO timestamp of response |
| `error` | String | Error message (error responses only) |

#### Error Handling

The API implements simplified error handling with user-friendly messages:

- **400 Bad Request**: Invalid request format or missing required fields
- **500 Internal Server Error**: API processing errors or Sensay API issues
- **502 Bad Gateway**: Sensay API unavailable or HTTP errors
- **504 Gateway Timeout**: Request timeout (30 seconds maximum)

## Project Structure

```
sen/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── blocks/
│   │   └── chat.tsx              # Main chat interface
│   └── ui/                       # Reusable UI components
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── chat-container.tsx
│       ├── loader.tsx
│       ├── message.tsx
│       ├── prompt-input.tsx
│       └── tooltip.tsx
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

### Key Components

#### ChatInterface (`components/blocks/chat.tsx`)
- Main chat component with message history
- Handles user input and message sending
- Displays loading states and error messages
- Implements auto-scrolling to new messages

#### Chat Container (`components/ui/chat-container.tsx`)
- Scrollable container for chat messages
- Implements stick-to-bottom scrolling behavior
- Responsive layout for different screen sizes

#### Message Component (`components/ui/message.tsx`)
- Individual message display with role-based styling
- Copy functionality for messages
- Markdown rendering support
- Avatar display for user and assistant

## Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**:
   - Import your Git repository in Vercel dashboard
   - Configure environment variables in Vercel settings

2. **Set environment variables**:
   - Add all required environment variables in Vercel project settings
   - Ensure `SENSAY_ORGANIZATION_SECRET` and `SENSAY_USER_ID` are set

3. **Deploy**:
   - Vercel will automatically deploy on push to main branch
   - Build command: `pnpm build`
   - Output directory: `.next`

### Manual Deployment

1. **Build the application**:
   ```bash
   pnpm build
   ```

2. **Start production server**:
   ```bash
   pnpm start
   ```

3. **Configure reverse proxy** (nginx example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t sendesk .
docker run -p 3000:3000 --env-file .env.local sendesk
```

## Troubleshooting

### Common Issues

#### Build Errors

**TypeScript errors during build**:
```bash
# Check for type errors
pnpm build
```
- Ensure all environment variables are properly typed
- Check for missing imports or type definitions

#### API Connection Issues

**Sensay API authentication errors**:
- Verify `SENSAY_ORGANIZATION_SECRET` is correct
- Ensure `SENSAY_USER_ID` is valid
- Check Sensay API status and quota limits

**Network timeout errors**:
- Verify internet connectivity
- Check if Sensay API endpoint is accessible
- Consider firewall or proxy configurations

#### Development Issues

**Hot reload not working**:
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

**Package installation issues**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Debug Mode

Enable detailed logging by setting environment variables:

```env
NODE_ENV=development
DEBUG=true
```

This will show detailed API request/response logs in the console.

### Performance Issues

**Slow initial load**:
- Ensure Turbopack is enabled in development
- Check network connectivity to Sensay API
- Monitor browser dev tools for performance bottlenecks

**Memory usage**:
- Limit chat message history in production
- Implement message cleanup for long conversations
- Monitor server resources during high usage

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Biome for code formatting
- Write descriptive commit messages
- Test changes locally before submitting
- Update documentation for new features

## License

This project is private and confidential. All rights reserved.