import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'webview-crash',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
