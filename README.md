# Incubizo Website

A modern, interactive website for Incubizo, a business incubator and innovation hub. This website showcases the services and features of Incubizo using modern web technologies.

## Technologies Used

- **Next.js 14**: React framework for server-side rendering and static site generation
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For utility-first styling
- **shadcn/ui**: For beautiful, accessible UI components
- **HTMX**: For interactive elements without heavy JavaScript
- **Three.js**: For 3D elements and animations
- **Framer Motion**: For smooth animations and transitions

## Features

- Modern, responsive design
- Interactive 3D hero section
- HTMX-powered interactive components
- Server-side rendering for improved performance
- Accessible UI components
- Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/incubizo-website.git
cd incubizo-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js app directory containing pages and API routes
- `components/`: React components
- `lib/`: Utility functions and helpers
- `public/`: Static assets

## API Routes

The website includes several API routes for HTMX interactions:

- `/api/features/[id]`: Returns details for a specific feature
- `/api/testimonials`: Returns testimonials
- `/api/testimonials/[index]`: Returns a specific testimonial
- `/api/contact`: Handles contact form submissions

## HTMX Integration

This project uses HTMX for interactive elements without heavy JavaScript. The HTMX integration is handled through:

- Custom utility functions in `lib/htmx-utils.ts`
- API routes that return HTML fragments
- Client-side initialization in components

## Deployment

The website can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Adding the Workspace Image

The website includes a workspace showcase section that displays an image of the Incubizo workspace with a laptop and branded mug. To add this image:

1. Save the image as `workspace-image.jpg` in the `public/images` directory
2. Alternatively, run the provided script to download the image:

```bash
./save-image.sh
```
