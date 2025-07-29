# YumeProof Landing Page

<div align="center">
  <img src="public/yume.png" alt="YumeProof Logo" width="120" height="120" style="border-radius: 20px;">
  
  <h2>Revolutionary Image Authentication</h2>
  <p>IOTA Blockchain Hackathon Winner - Proof-of-Concept Android Mobile Application</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4)
  ![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)
</div>

## 🌟 Overview

YumeProof is a revolutionary Proof-of-Concept Android Mobile Application designed for the IOTA Blockchain Hackathon. It tackles the critical problem of real image verification by combining cutting-edge blockchain technology with advanced security mechanisms.

## 🎯 Core Features

### 🔐 Proof-Of-Real-Device
- **Google Confidential VM**: Trusted Execution Environment for secure backend operations
- **Google Play Integrity API**: Hardware-level device attestation and software integrity verification
- **IOTA Identity Framework**: Generates unique Decentralized Identifiers (DIDs) for each verified device
- **Verifiable Credentials**: Issued by the TEE-backed system to confirm device authenticity

### 📸 Proof-Of-Real-Image
- **Authenticated Capture**: Images captured within verified application using authenticated device credentials
- **Cryptographic Signing**: Images and metadata hashed using device-specific private keys stored in Android Keystore
- **IOTA Notarization**: Permanent blockchain record using Locked Notarization method
- **Monetization System**: Credit-based system using IOTA Closed Loop Tokens
- **Smart Contract Indexing**: Paid notarizations indexed for easy verification
- **Gas Station**: IOTA sponsors transaction fees for seamless user experience

### 🔍 Universal Verification
- **Web-Based Verification**: Anyone can verify image authenticity without app installation
- **Cryptographic Proof**: Complete verification of image authenticity with metadata
- **Global Accessibility**: Available worldwide through IOTA blockchain infrastructure

## 🛠 Technology Stack

### Blockchain Technologies
- **IOTA Identity**: Decentralized identity framework for device authentication
- **IOTA Notarization**: Immutable proof-of-existence service for images
- **IOTA Gas Station**: Transaction fee sponsorship for seamless UX
- **IOTA Closed-Loop Token**: Sustainable monetization mechanism
- **IOTA Blockchain Move Package**: Smart contract infrastructure

### Development Stack
- **Rust Uniffi**: Cross-platform interoperability for Android-Rust integration
- **Kotlin**: Native Android application development
- **Next.js**: Modern React framework for the landing page
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Three.js**: 3D graphics for interactive phone mockup

### Security Infrastructure
- **Google Play Integrity API**: Hardware-level device attestation
- **Google Confidential VM**: Trusted Execution Environment
- **Android Keystore**: Secure private key storage

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yumeproof-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Landing Page Sections

### 1. Hero Section
- Captivating introduction to YumeProof
- Highlights IOTA Blockchain Hackathon winner status
- Overview of core capabilities

### 2. Interactive Showcase
- **3D Phone Mockup**: Built with Three.js
- **Scroll-based Animation**: Phone reveals and rotates on scroll
- **App Demo**: Shows YumeProof logo in phone screen
- **Feature Highlights**: Key advantages and capabilities

### 3. Proof-Of-Real-Device Deep Dive
- Technical explanation of device authentication
- Google infrastructure integration details
- IOTA Identity DID generation process
- Step-by-step verification workflow

### 4. Proof-Of-Real-Image Details
- Image capture and signing process
- Blockchain notarization workflow
- Monetization system explanation
- User experience benefits

### 5. Universal Verification Portal
- Web-based verification interface mockup
- Step-by-step verification process
- Sample verification results
- Global accessibility features

### 6. Technology Showcase
- Comprehensive technology stack breakdown
- System architecture overview
- Key advantages and benefits
- Performance and security highlights

### 7. Team Section
- 5 expert team members
- Individual specializations and backgrounds
- Combined experience statistics
- Mission statement

### 8. Footer
- Technology summary
- Feature overview
- Branding and credits

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#5995eb` - Main brand color
- **Secondary Navy**: `#2f459b` - Accent and depth
- **Pure White**: `#ffffff` - Clean backgrounds
- **Rich Black**: `#000000` - Text and contrast

### Typography
- **Font Family**: Inter - Modern, readable sans-serif
- **Headings**: Bold weights with tight letter spacing
- **Body Text**: Optimized line height and spacing for readability

### Components
- **Rounded Corners**: Consistent 12-24px radius throughout
- **Gradients**: Smooth transitions between brand colors
- **Shadows**: Subtle depth with multiple shadow layers
- **Animations**: Smooth transitions and micro-interactions

## 🌐 Responsive Design

The landing page is fully responsive and optimized for:
- **Desktop**: Full-featured experience with 3D interactions
- **Tablet**: Optimized layouts and touch-friendly interactions
- **Mobile**: Streamlined content with essential information

## ⚡ Performance Features

- **Dynamic Imports**: Three.js components loaded only when needed
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Efficient bundle loading
- **SEO Optimized**: Meta tags and structured data

## 🔧 Development Commands

```bash
# Development
npm run dev        # Start development server with hot reload

# Production
npm run build      # Build optimized production bundle
npm start          # Start production server

# Code Quality
npm run lint       # Run ESLint for code quality checks
npm run type-check # Run TypeScript type checking
```

## 🏗 Project Structure

```
yumeproof-landing-page/
├── public/
│   ├── yume.png              # App logo
│   └── [other-assets]        # SVG icons and images
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles with custom properties
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Main landing page
│   ├── components/
│   │   └── blocks/           # Landing page sections
│   │       ├── HeroSection.tsx
│   │       ├── ShowcaseSection.tsx
│   │       ├── ProofOfRealDeviceSection.tsx
│   │       ├── ProofOfRealImageSection.tsx
│   │       ├── VerificationSection.tsx
│   │       ├── TechnologySection.tsx
│   │       ├── TeamSection.tsx
│   │       └── Footer.tsx
│   ├── hooks/
│   │   └── use-mobile.ts     # Mobile detection utilities
│   └── lib/
│       └── utils.ts          # Utility functions
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.ts           # Next.js configuration
```

## 🎯 Key Differentiators

1. **Hardware-Level Security**: Leverages Google's Confidential VM and Play Integrity API
2. **Blockchain Immutability**: IOTA blockchain ensures permanent, tamper-proof records
3. **Universal Accessibility**: Web-based verification without app requirements
4. **Seamless UX**: Gas Station abstracts blockchain complexity
5. **Sustainable Monetization**: Credit-based system for long-term viability

## 🏆 Hackathon Achievement

YumeProof was developed as a winning entry for the IOTA Blockchain Hackathon, demonstrating:
- **Innovation**: Novel approach to image authentication
- **Technical Excellence**: Integration of multiple cutting-edge technologies
- **Real-World Impact**: Addresses critical digital trust challenges
- **Scalability**: Built for global deployment and adoption

## 🤝 Contributing

This is a proof-of-concept project developed for the IOTA Blockchain Hackathon. For questions or collaboration opportunities, please refer to the team section for contact information.

## 📄 License

This project is a proof-of-concept for the IOTA Blockchain Hackathon. All rights reserved.

---

<div align="center">
  <p><strong>YumeProof - Making Digital Content Trustworthy</strong></p>
  <p>Built with ❤️ for the IOTA Blockchain Hackathon</p>
</div>
