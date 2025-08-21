# CustomsLens Brand & Style Guide

## Brand Identity

### Mission
Transform customs clearance in the Netherlands through innovative technology and strategic partnerships.

### Brand Personality
- **Professional** - We handle critical business operations
- **Innovative** - AI-powered, modern solutions
- **Reliable** - Compliance and accuracy are paramount
- **Efficient** - Speed and automation at our core
- **Approachable** - Complex made simple

### Brand Voice
- Clear and direct communication
- Technical when necessary, simple when possible
- Confidence without arrogance
- Focus on benefits and outcomes
- Use active voice

## Visual Identity

### Logo Concept
- Modern, clean design incorporating lens/visibility metaphor
- Suggests clarity, focus, and transparency
- Professional enough for enterprise, approachable for SMBs

### Color Palette

CustomsLens uses a clean, professional three-color system focused on trust and clarity.

#### Primary Colors
```css
--primary-blue: #0066FF;      /* Main brand color - trust, technology, professionalism */
--blue-dark: #0052CC;         /* Darker blue for depth and authority */
--blue-light: #E6F0FF;        /* Light blue for backgrounds and subtle highlights */
```

#### Neutral Colors  
```css
--black: #1A1A1A;             /* Almost black - primary text, headers */
--gray-dark: #4A4A4A;         /* Dark gray - secondary text */
--gray: #737373;              /* Medium gray - muted text, placeholders */
--gray-light: #E6E6E6;        /* Light gray - borders, dividers */
--gray-lighter: #F5F5F5;      /* Lighter gray - background areas */
--white: #FFFFFF;             /* Pure white - main background */
```

#### Usage Guidelines
- **Blue**: Primary actions, links, brand elements, key highlights
- **Black/Dark Gray**: All text content, icons, primary UI elements  
- **White**: Backgrounds, cards, clean spaces
- **Light Grays**: Subtle backgrounds, borders, secondary elements

#### Accessibility
All color combinations meet WCAG 2.1 AA standards:
- Blue on white: 7.2:1 contrast ratio
- Black on white: 14.8:1 contrast ratio
- Dark gray on white: 9.2:1 contrast ratio

### Typography

#### Font Families
```css
--font-heading: 'Quantico', sans-serif;    /* Headers, branding */
--font-body: 'Manrope', sans-serif;        /* Body text, UI */
--font-mono: 'JetBrains Mono', monospace;  /* Code, numbers */
```

#### Font Sizes
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
```

#### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System
```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px */
--radius-base: 0.25rem;  /* 4px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Pills */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

## UI Components

### Buttons

#### Primary Button
- Background: `--primary-blue`
- Text: White
- Hover: Darker shade with slight scale
- Font: Manrope Medium

#### Secondary Button
- Background: White
- Border: `--gray-300`
- Text: `--gray-800`
- Hover: `--gray-50` background

#### Ghost Button
- Background: Transparent
- Text: `--primary-blue`
- Hover: `--primary-light` background

### Cards
- Background: White
- Border: 1px solid `--gray-200`
- Border radius: `--radius-xl`
- Shadow: `--shadow-base`
- Hover: `--shadow-lg` transition

### Forms
- Input borders: `--gray-300`
- Focus state: `--primary-blue` border
- Error state: `--error-red` border
- Success state: `--accent-green` border

## Animation Guidelines

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

### Hover Effects
- Scale: 1.02 for interactive elements
- Opacity: 0.9 for secondary actions
- Shadow elevation for cards

### Page Transitions
- Fade in content on scroll
- Stagger animations for lists
- Smooth scrolling between sections

## Iconography

### Style
- Line icons (2px stroke)
- Consistent 24x24px grid
- Rounded corners matching brand
- Use Lucide or Tabler icons

### Common Icons
- ✓ Check - Success, validation
- → Arrow - Progress, next steps
- 📊 Chart - Analytics, reporting
- 🔒 Lock - Security, compliance
- ⚡ Lightning - Speed, automation
- 🌐 Globe - International, network

## Content Guidelines

### Headlines
- Use Quantico font
- Clear value proposition
- Action-oriented language
- Maximum 8-10 words

### Body Copy
- Use Manrope font
- Short paragraphs (3-4 sentences)
- Bullet points for features
- Focus on benefits over features

### CTAs
- Action verbs (Start, Get, Transform)
- Specific outcomes
- Urgency without pressure
- Consistent styling

## Photography & Imagery

### Style
- Modern, professional environments
- Rotterdam port imagery
- Abstract tech/network visuals
- Clean, minimal compositions

### Colors
- Match brand palette
- Blue overlay for hero images
- High contrast for text overlay
- Consistent filter treatment

## Application Examples

### Website Headers
- Quantico for main headlines
- Primary blue for emphasis
- White space for breathing room
- Clear hierarchy

### Dashboard UI
- Manrope for all text
- Subtle gray backgrounds
- Color coding for status
- Consistent spacing grid

### Marketing Materials
- Bold Quantico statements
- Blue-to-white gradients
- Tech-forward imagery
- Clear value messaging