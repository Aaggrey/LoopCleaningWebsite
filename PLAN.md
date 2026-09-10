# Loop Cleaning Services Website - Final Implementation Plan

## Project Overview
Build a professional cleaning company website using Next.js 14 (App Router) with TypeScript and Tailwind CSS.

**Color Scheme:**
- Primary: `#0146cf` (Blue)
- White: `#ffffff`

---

## Pages & Content

### 1. Home Page (`app/page.tsx`)

#### Hero Slider (Placeholder Content)
- Slide 1: "Professional Cleaning Services in Kampala" / "We Make Your Space Sparkle"
- Slide 2: "Residential & Commercial Cleaning" / "Trusted by 500+ Clients"
- Slide 3: "Deep Cleaning Experts" / "Book Your Cleaning Session Today"

#### Services Section (8 Services)
| Service | Description |
|---------|-------------|
| Residential Cleaning | Homes & Apartments |
| Commercial & Office Cleaning | Workspaces & Offices |
| Post-Construction Cleaning | Renovation Cleanup |
| Deep Cleaning Services | Thorough Top-to-Bottom |
| Carpet & Upholstery Cleaning | Fabric Care Specialists |
| Window Cleaning | streak-free Windows |
| Move-in / Move-out Cleaning | Transition Cleaning |
| Sanitization & Disinfection | Health & Safety Focus |

#### Our Process (4 Steps)
1. **Book** - Schedule your cleaning session
2. **Clean** - Our team arrives on time
3. **Inspect** - Quality check walkthrough
4. **Done** - Your space sparkles

#### About Us Section
- Mission: "To provide exceptional cleaning services that transform spaces and exceed expectations"
- Vision: "To be Kampala's most trusted cleaning service provider"
- "More About Us" button

#### Why Choose Us (4 Reasons)
1. Professional & Trained Staff
2. Eco-Friendly Products
3. Affordable Pricing
4. 100% Satisfaction Guarantee

#### Pricing Preview (Residential Cleaning Tiers)
| Plan | Price | Features |
|------|-------|----------|
| Basic Cleaning | UGX 150,000 | Standard cleaning, 1-2 rooms |
| Standard Cleaning | UGX 300,000 | Detailed cleaning, 3-4 rooms |
| Deep Cleaning | UGX 600,000 | Complete deep clean, all rooms |

#### Testimonials (5 Reviews)
1. **Michael Ouma** - "Great price · UGX 150–200k"
2. **Ambasiza Esther** - "Loop cleaning services exceeded our expectations with their professional floor care, they use professional products"
3. **BOSCO MURARA** - "Reasonable price · UGX 250–300k loop services are efficient and reliable."
4. **Natukwasa Lindon** - "Very nice and I recommend this. I have been struggling with uncommitted contract cleaning services. But I am grateful for this timely services. Looking forward to partner with Loop! Blessings"
5. **Atwebembire Derick** - "Their service was beyond expectations I would recommend loop cleaning services for your homes, offices, shopping malls, restaurants and supermarkets"

#### Blog Preview (3 Sample Posts)
- "10 Tips for Maintaining a Clean Home"
- "Why Professional Office Cleaning Matters"
- "The Benefits of Deep Cleaning Services"

#### Client Logos Section
- "Trusted by Leading Businesses in Kampala"
- Placeholder client logos

#### Book a Cleaning Session
- "Ready to Transform Your Space?"
- "Book Now" button (primary CTA)
- "WhatsApp Us" button (+256 703652751)

---

### 2. Services Page (`app/services/page.tsx`)
- Hero banner: "Our Cleaning Services"
- Grid of 8 services with detailed descriptions
- **"Not Sure Which Service You Need?"** section
- "Request a Free Consultation" CTA button

---

### 3. Pricing Page (`app/pricing/page.tsx`)
- Hero banner: "Pricing Plans"
- 3 Pricing Cards (Basic, Standard, Deep Cleaning)
- Features list for each tier
- FAQ section
- CTA: "Ready to Book?"

---

### 4. Contact Page (`app/contact/page.tsx`)
- Hero banner: "Contact Us"
- Contact Form (Name, Email, Phone, Service dropdown, Message)
- Contact Information:
  - Address: Kampala, Uganda
  - Phone: +256 703652751
  - Email: info@loopcleaningug.com
- Business Hours
- Map placeholder

---

### 5. Blog Page (`app/blog/page.tsx`)
- Hero banner: "Our Blog"
- Blog post grid (6 sample posts)
- Categories: Cleaning Tips, Office Cleaning, Home Care
- "Read More" links

---

## File Structure

```
LoopCleaningWebsite/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── services/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── ClientLogos.tsx
│   │   └── BookingSection.tsx
│   └── ui/
│       ├── Button.tsx
│       └── SectionHeader.tsx
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Technical Implementation

### Dependencies
```json
{
  "next": "14.x",
  "react": "^18",
  "react-dom": "^18",
  "tailwindcss": "^3.4",
  "autoprefixer": "^10",
  "postcss": "^8"
}
```

### Tailwind Config Colors
```ts
colors: {
  primary: '#0146cf',
  'primary-dark': '#013ba8',
  'primary-light': '#0154e8',
}
```

### Footer Content
- About Us: Brief company description
- Quick Links: Home, Services, Pricing, Blog, Contact
- Contact Us:
  - Address: Kampala, Uganda
  - Phone: +256 703652751
  - Email: info@loopcleaningug.com
- Copyright: ©Loop Cleaning Services 2026 All Rights Reserved.

---

## Implementation Order
1. Project setup (Next.js + Tailwind)
2. Global styles & tailwind config
3. Layout components (Header, Footer)
4. UI components (Button, SectionHeader)
5. Home page sections (top to bottom)
6. Services page
7. Pricing page
8. Contact page
9. Blog page
10. Final testing & cleanup