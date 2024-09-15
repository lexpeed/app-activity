"use client";

import Image from "next/image";
import { useAuth } from "react-oidc-context";
import { Button } from "@/components/eduque-components";

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
                    window.location.pathname,
                  ),
                })
              }
            >
              Entrar
            </Button>
            <Button
              onClick={() => {
                const redirectUri = auth.settings.redirect_uri.concat(
                  window.location.pathname,
                );

                // Construct the URL for registration
                const registrationUrl = `${
                  process.env.NEXT_PUBLIC_AUTHORITY
                }/protocol/openid-connect/registrations?client_id=${
                  process.env.NEXT_PUBLIC_CLIENT_ID
                }&redirect_uri=${encodeURIComponent(
                  redirectUri,
                )}&response_type=code&scope=openid`;

                // Redirect the user to the registration page
                window.location.href = registrationUrl;
              }}
            >
              Cadastrar
            </Button>
          </div>
        ) : (
          <Button
            onClick={() =>
              auth.signoutRedirect({
                post_logout_redirect_uri: auth.settings.redirect_uri.concat(
                  window.location.pathname,
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
