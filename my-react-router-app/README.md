# Meal Planner Frontend

A React-based meal planning application built with React Router v7, TypeScript, and Tailwind CSS. This application allows users to view and manage weekly meal plans with breakfast, lunch, and dinner options, including rating functionality.

## Features

- 📅 Weekly meal plan overview
- 🍽️ Displays breakfast, lunch, and dinner for each day


## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router v7.7.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.1.4
- **Build Tool**: Vite 6.3.3
- **Package Manager**: npm

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A backend server running on `http://localhost:8080` that serves meal data

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-react-router-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:5173` (or another available port).

## API Integration

The application expects a backend API running on `http://localhost:8080` that returns meal data in the following format:

```typescript
interface DayOfMeals {
  breakfast: string;
  lunch: string;
  dinner: string;
  rating: number;
  dayoftheweek: string;
}
```

Example API response:
```json
[
  {
    "breakfast": "Oatmeal with berries",
    "lunch": "Grilled chicken salad",
    "dinner": "Pasta with marinara",
    "rating": 4.5,
    "dayoftheweek": "Monday"
  },
  // ... more days
]
```

## Project Structure

```
my-react-router-app/
├── app/
│   ├── components/
│   │   └── meal-plan-outline.tsx    # Main meal plan display component
│   ├── routes/
│   │   └── home.tsx                 # Home page with meal data and sorting
│   ├── app.css                      # Global styles
│   ├── root.tsx                     # Root component
│   └── routes.ts                    # Route definitions
├── public/
│   └── favicon.ico                  # Site favicon
├── Dockerfile                       # Docker configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
└── README.md                        # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Component Overview

### Home Component (`app/routes/home.tsx`)
- Fetches meal data from the backend API
- Manages meal state using React hooks
- Provides sorting functionality by rating
- Renders the meal plan outline component

### MealPlanOutline Component (`app/components/meal-plan-outline.tsx`)
- Displays meals in a responsive grid layout
- Shows day of the week, breakfast, lunch, dinner, and ratings
- Uses Tailwind CSS for styling

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
# Build the Docker image
docker build -t meal-planner-frontend .

# Run the container
docker run -p 3000:3000 meal-planner-frontend
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Backend Requirements

Make sure you have a backend server running that:
- Serves meal data at `GET http://localhost:8080/`
- Returns an array of meal objects with the expected structure
- Handles CORS for frontend requests

## Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Ensure your backend server is running on `http://localhost:8080`
   - Check that CORS is properly configured on your backend

2. **Build Errors**
   - Run `npm run typecheck` to identify TypeScript issues
   - Ensure all dependencies are installed with `npm install`

3. **Styling Issues**
   - Tailwind CSS classes should work out of the box
   - Check the browser console for any CSS-related errors

### Development Tips

- Use React Developer Tools for debugging component state
- Check the browser's Network tab to monitor API calls
- Use `console.log` statements to debug data flow (already implemented in the code)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. The meal planner uses Tailwind classes for responsive grid layouts and interactive elements like buttons and cards.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
