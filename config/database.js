const path = require('path');

module.exports = ({ env }) => {
  const client = env('INS_DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    mysql2: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('INS_DATABASE_URL'),
        host: env('INS_DATABASE_HOST', 'localhost'),
        port: env.int('INS_DATABASE_PORT', 5432),
        database: env('INS_DATABASE_NAME', 'strapi'),
        user: env('INS_DATABASE_USERNAME', 'strapi'),
        password: env('INS_DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('INS_DATABASE_SSL', false) && {
          key: env('INS_DATABASE_SSL_KEY', undefined),
          cert: env('INS_DATABASE_SSL_CERT', undefined),
          ca: env('INS_DATABASE_SSL_CA', undefined),
          capath: env('INS_DATABASE_SSL_CAPATH', undefined),
          cipher: env('INS_DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'INS_DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
        schema: env('INS_DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('INS_DATABASE_POOL_MIN', 2), max: env.int('INS_DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
