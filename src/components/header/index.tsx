'use client';

import Image from 'next/image';
import { useAuth } from 'react-oidc-context';

import Button from '../button';

const Header = () => {
  const auth = useAuth();

  return (
    <header className="bg-primary p-6 flex flex-col gap-8 items-center">
      <div className="flex justify-between items-center w-full">
        <Image
          src="/images/eduque-green-logo.svg"
          alt="Logo"
          className="w-12"
          width={48}
          height={48}
        />
        {!auth.isAuthenticated ? (
          <div>
            <Button
              color="secondary"
              textColor="primary"
              onClick={() =>
                auth.signinRedirect({
                  redirect_uri: auth.settings.redirect_uri.concat(
                    window.location.pathname
                  ),
                })
              }
            >
              Entrar
            </Button>
            <Button
              onClick={() =>
                auth.signinRedirect({
                  extraQueryParams: {
                    kc_action: 'register',
                  },
                  redirect_uri: auth.settings.redirect_uri.concat(
                    window.location.pathname
                  ),
                })
              }
            >
              Cadastrar
            </Button>
          </div>
        ) : (
          <Button
            onClick={() =>
              auth.signoutRedirect({
                post_logout_redirect_uri: auth.settings.redirect_uri.concat(
                  window.location.pathname
                ),
              })
            }
          >
            Sair
          </Button>
        )}
      </div>

      <h1 className="text-white text-center font-black text-7xl">
        Transformando <br />a Educação
      </h1>

      <Image
        src="/images/eduque-green-typo-logo.svg"
        alt="Hero"
        className="max-w-48"
        width={192}
        height={73}
      />
    </header>
  );
};

export default Header;
