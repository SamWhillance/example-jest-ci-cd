# Express.js with Jest and GitHub CI/CD

A simple Express.js application demonstrating:

- Jest for testing
- GitHub Actions for CI/CD workflow
- Express.js API endpoint that returns the current date
- Static HTML page serving

## Features

- Express.js API with a `/api/date` endpoint that returns the current date
- Simple static HTML page with JavaScript to fetch and display the current date
- Jest tests with coverage reporting
- GitHub Actions workflow for continuous integration

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   npm start
   ```
4. Visit http://localhost:3000 in your browser

## Testing

Run tests with coverage:

```
npm test
```

## CI/CD Workflow

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` will:

1. Run on any push to main branch or pull request
2. Install dependencies
3. Run tests and generate coverage reports
4. Upload coverage reports as artifacts

## Project Structure

- `src/`: Source code
  - `app.js`: Express app configuration
  - `server.js`: Server startup
  - `routes/`: API routes
  - `public/`: Static files
- `__tests__/`: Jest test files
- `.github/workflows/`: GitHub Actions workflows
