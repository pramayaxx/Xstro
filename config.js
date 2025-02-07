import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

const config = {
  SESSION_ID: process.env.SESSION_ID || '7RRT7M1P',
  SUDO: process.env.SUDO || '94770611075',
  BOT_INFO: process.env.BOT_INFO || 'Whatsapp Bot',
  WARN_COUNT: process.env.WARN_COUNT || 3,
  TIME_ZONE: process.env.TIME_ZONE || 'Asia/Colombo',
  VERSION: '1.5.12',
};

export { config };
export default config;
