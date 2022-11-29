# Nextjs Auth Middleware

<a href="https://www.npmjs.com/package/nextjs-auth-middleware"><img src="https://img.shields.io/npm/v/nextjs-auth-middleware.svg?style=flat-square" alt="Current Release" /></a>
<a href="https://www.npmjs.com/package/nextjs-auth-middleware"><img src="https://img.shields.io/npm/dm/nextj-auth-middleware?style=flat-square" alt="Downloads" /></a>
<a href="https://github.com/abrahamcalsin/nextjs-auth-middleware/blob/main/LICENSE"><img alt="npm" src="https://img.shields.io/npm/l/nextjs-auth-middleware?style=flat-square" alt="License"></a>

`Nextjs-Auth-Middleware` is a node.js package that provides middleware that can be used to add API Key authentications to secure an API route in Next.js.

## Installation

To use this package in your project, you must install it via npm, yarn or pnpm, depending on the package manager you use:

```bash
# Using npm
npm install --save nextjs-auth-middleware@latest

# Using yarn
yarn add nextjs-auth-middleware@latest

# Using pnpm
pnpm add nextjs-auth-middleware@latest
```

## Usage

Nextjs-auth-middleware is based on Next.js middleware, so I invite you to consult the [Next.js Middleware documentation](https://nextjs.org/docs/advanced-features/middleware).

> pages/api/your-api.{ts,js}

The auth middleware has an option to add, `processEnv` this option indicates the name of the key environment variable, by default it will be `API_ROUTE_PUBLIC_KEY`, you can replace it with another name by adding it using the `processEnv` option.

### With the option:

```ts
import NextAuthMiddleware from 'nextjs-auth-middleware';

async function handler(req, res) {
  // Run the auth middleware
  // The processEnv(environment variable) is now API_ROUTE_KEY
  await NextAuthMiddleware(req, res, {
    processEnv: process.env.API_ROUTE_KEY,
  });

  // Rest of the API logic
  res.json({ message: 'Hello NextJs Auth! 🚀' });
}
```

### Without the option:

```ts
import NextAuthMiddleware from 'nextjs-auth-middleware';

async function handler(req, res) {
  // Run the auth middleware
  // The environment variable is now API_ROUTE_PUBLIC_KEY
  await NextAuthMiddleware(req, res);

  // Rest of the API logic
  res.json({ message: 'Hello NextJs Auth! 🚀' });
}
```

Remember to add the environment variable you chose by the option or the default value in your environment variables.

## Keep in touch with me

- GitHub: [@abrahamcalsin](https://github.com/abrahamcalsin)
- Twitter: [@abraham_calsin](https://twitter.com/abraham_calsin)

## License

This project is licensed under [License.](LICENSE)
