/* eslint-disable spellcheck/spell-checker */
import config from 'config';
import path from 'path';

const __dirname = path.resolve();

export default {
 port: process.env.PORT || config.get('PORT') || '',
 availableLocals: process.env.AVAILABLE_LOCALS || config.get('AVAILABLE_LOCALS') || '',
 defaultLanguage: process.env.DEFAULT_LANGUAGE || config.get('DEFAULT_LANGUAGE') || '',
 projectRoot: path.join(__dirname, '.'),
 algorithm: 'aes-256-cbc',
 encryptionKey: process.env.ENCRYPTION_KEY || config.get('ENCRYPTION_KEY') || '',
 //  sessionSecret: process.env.SESSION_SECRET || config.get('SESSION_SECRET') || '',
 jwtSecret: process.env.JWT_SECRET || config.get('JWT_SECRET') || '',
 whiteList: process.env.CORS_WHITELIST || config.get('CORS_WHITELIST') || [],
 environment: process.env.NODE_ENV || config.get('ENVIRONMENT') || '',
 mongoUrl: process.env.MONGO_URL || config.get('MONGO_URL') || '',
};
