import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.VerdariDiamods.app',
  appName: 'VerdariDiamods',
  webDir: 'dist/code',
  server: {
    androidScheme: 'https',
  },
};

export default config;
