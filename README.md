## Getting Started

Before you begin, make sure you have the following requirements installed on your machine:
- Node.js
- NPM (node package manager)

How to Install

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Application Folder Structure

├── assets              # Image or icon assets
├── config              # Configuration files (theme, environment)
├── features            # Feature-specific code or components
│   ├── dashboard       # Dashboard feature
│   ├── login           # Login feature
│   └── splash          # Splash feature
├── hooks               # Global custom hooks
│   └── useAuthentication.ts  # Authentication hook
├── layouts             # Layout components
├── lib                 # Libraries preconfigured for the application
│   └── axios.ts        # Axios library configuration
├── pages               # Page level components
├── store               # Global state management
├── types               # Shared types/interfaces for the entire application
└── utils               # Utility/helper functions
    ├── keys.ts         # Utility function for handling keys
    └── capitalize.ts   # Utility function for capitalizing strings

