import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import router from 'next/router';

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const userSession = new UserSession({ appConfig });

export function signIn() {
  showConnect({
    appDetails: {
      name: 'Sypool',
      icon: window.location.origin + '/logo.svg',
    },
    onFinish: () => {
      router.push('/dashboard')
    },
    userSession: userSession,
  });
}

export function signOut() {
    userSession.signUserOut();
    router.push('/join')
}

export function getUserData() {
  return userSession.loadUserData();
}

