# Nextjs Auth Middleware

<a href="https://www.npmjs.com/package/nextjs-auth-middleware"><img src="https://img.shields.io/npm/v/nextjs-auth-middleware.svg?style=flat-square" alt="Current Release" /></a>
<a href="https://www.npmjs.com/package/nextjs-auth-middleware"><img src="https://img.shields.io/npm/dm/nextjs-auth-middleware?style=flat-square" alt="Downloads" /></a>
<a href="https://github.com/abrahamcalsin/nextjs-auth-middleware/blob/main/LICENSE"><img alt="npm" src="https://img.shields.io/github/license/abrahamcalsin/react-github-fork-banner?style=flat-square" alt="License"></a>

`Nextjs-Auth-Middleware` is a Node.js package that provides middleware for adding API key authentication to secure an API route in Next.js. This package is based on Next.js middleware, so I invite you to consult the [Next.js Middleware documentation](https://nextjs.org/docs/advanced-features/middleware).

> pages/api/your-api.{ts,js}

## Installation

It can be installed via npm, yarn, or pnpm by running one of the following commands:

```powershell
# Using npm
npm install --save nextjs-auth-middleware@latest

# Using yarn
yarn add nextjs-auth-middleware@latest

# Using pnpm
pnpm add nextjs-auth-middleware@latest
```

## Usage

To use the middleware, import it into your `pages/api/your-api.{ts,js}` file and pass the request and response objects to it, along with an optional `processEnv` option to specify the name of the environment variable containing the API key. If the `processEnv` option is not provided, the default value of `API_ROUTE_PUBLIC_KEY` will be used.

```typescript
import NextAuthMiddleware from 'nextjs-auth-middleware';

async function handler(req, res) {
  // Run the auth middleware
  await NextAuthMiddleware(req, res, {
    processEnv: process.env.API_ROUTE_KEY, // optional, default is API_ROUTE_PUBLIC_KEY
  });

  // Rest of the API logic
  res.json({ message: 'Hello NextJs Auth! 🚀' });
}
```

Remember to set the appropriate environment variable (either the default or the one specified with the `processEnv` option) with the API key in order for the middleware to function properly.

## Keep in touch with me

- GitHub: [@abrahamcalsin](https://github.com/abrahamcalsin)
- Twitter: [@abraham_calsin](https://twitter.com/abraham_calsin)

## License

This project is licensed under [License.](LICENSE)
