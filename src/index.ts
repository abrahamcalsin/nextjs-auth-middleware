import { NextApiRequest, NextApiResponse } from 'next';

interface authMiddlewareOptions {
  processEnv?: string | undefined;
}

async function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  options: authMiddlewareOptions
) {
  const { processEnv = process.env.API_ROUTE_PUBLIC_KEY } = options;

  return new Promise<void>((resolve, reject) => {
    const key = 'x-api-public-key';

    const value = req.headers[key] || req.query[key];

    if (!value) {
      return reject(
        res.status(400).json({
          error: {
            message: 'The api public key is required',
          },
        })
      );
    }

    if (value === processEnv) {
      return resolve();
    }

    return reject(
      res.status(401).json({
        error: {
          message: 'You are not authorized to call this api',
        },
      })
    );
  });
}

const NextAuthMiddleware = authMiddleware;

export default NextAuthMiddleware;
