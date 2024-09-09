import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

const Auth = ({ children, kcIdpHint }: { children: any; kcIdpHint?: string }): JSX.Element => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading) {
      auth.signinRedirect({
        redirect_uri: auth.settings.redirect_uri.concat(window.location.pathname),
        ...(kcIdpHint ? { extraQueryParams: { kc_idp_hint: kcIdpHint } } : {}),
      });
    }
  }, [auth]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth.isAuthenticated) {
    return <div>Unable to log in</div>;
  }

  if (auth.error) {
    console.log(auth.error);
    return <div>Oops... {auth.error.message}</div>;
  }

  return children;
};

export default Auth;
