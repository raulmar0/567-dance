import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fivesixsevendance.app',
  appName: '567 dance',
  webDir: './www',
  bundledWebRuntime: false,
  server: {
    hostname: '127.0.0.1:5173',
    // hostname: '192.168.1.8:5173/567-dance',
    cleartext: true,
    allowNavigation: ['*'],
    iosScheme: 'http'
  },
};

export default config;
