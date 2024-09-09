'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from 'react-oidc-context';

import { store } from '@/state/store';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <AuthProvider
      {...{
        authority: process.env.NEXT_PUBLIC_AUTHORITY ?? '',
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID ?? '',
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI ?? '',
        post_logout_redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI ?? '',
        onSigninCallback: (): void => {
          window.history.replaceState(
            null,
            document.title,
            window.location.pathname
          );
        },
      }}
    >
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </AuthProvider>
  );
};

export default Providers;
