# D1 Skincare

A web application for D1 Skincare.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ecyuzon/d1_skincare.git
   cd d1_skincare
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Copy the example environment file and fill in the required values:
   ```bash
   cp .env.example .env
   ```

   Open `.env` and update the variables as needed.

## Usage

**Start the development server:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

**Run tests:**

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request
