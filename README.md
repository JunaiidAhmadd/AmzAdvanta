# AmzAdvanta - Amazon PPC Management Agency

A professional, interactive, and visually stunning website for an Amazon PPC Management Agency built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Pages
- **Home Page**: Hero section with animations, service highlights, and client success metrics
- **Services Page**: Detailed breakdown of Amazon PPC services with interactive hover effects
- **Case Studies Page**: Client success stories with performance metrics and testimonials
- **Free Audit Page**: Comprehensive form for audit requests with validation
- **Contact Page**: Contact form, business information, and FAQ section

### Technical Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Form Validation**: React Hook Form with Zod schema validation
- **API Routes**: Backend API endpoints for form submissions
- **SEO Optimized**: Meta tags, sitemap, and robots.txt configuration
- **Modern UI**: Dark theme with orange accent colors and gradient effects

## 🛠 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amzadvanta
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
amzadvanta/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form API
│   │   └── audit/         # Audit request API
│   ├── services/          # Services page
│   ├── case-studies/      # Case studies page
│   ├── free-audit/        # Free audit page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and data
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f97316)
- **Background**: Black (#000000)
- **Surface**: Gray-900 (#111827)
- **Text**: White (#ffffff), Gray-400 (#9ca3af)

### Typography
- **Font Family**: Inter
- **Headings**: Bold, large sizes with gradient effects
- **Body**: Regular weight with good readability

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📈 SEO Features

- **Meta Tags**: Optimized titles and descriptions for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🔧 Form Handling

The website includes two main forms:
1. **Contact Form**: General inquiries
2. **Audit Form**: Free audit requests

Forms are validated using Zod schemas and submitted to API routes.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for Amazon sellers looking to scale their business with expert PPC management.
