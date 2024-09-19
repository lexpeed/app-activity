"use client";

import Image from "next/image";
import { useAuth } from "react-oidc-context";
import { Button } from "@/components/eduque-components";
import ProfileButton from "../profile-button";

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
          <div className="flex items-center gap-4">
            {auth.isAuthenticated && (
              <>
                <span
                  className={`
                    text-white
                    font-bold
                  `}
                >
                  Bem-Vindo, {auth.user?.profile.given_name}{" "}
                </span>
                <ProfileButton />
              </>
            )}
          </div>
        )}
      </div>

      <Image
        src="/images/eduque-green-typo-logo.svg"
        alt="Eduque Logo"
        className="max-w-48 hidden sm:block"
        width={192}
        height={73}
      />

      <h1
        className={`
          text-white text-center font-black text-4xl
          md:text-6xl
          sm:text-5xl
      `}
      >
        Transformando a<br /> Educação
      </h1>

      <Image
        src="/images/eduque-green-typo-logo.svg"
        alt="Eduque Logo"
        className="max-w-32 sm:hidden"
        width={192}
        height={73}
      />

      <h3 className="text-center text-2xl text-white hidden md:inline">
        Encontre e compartilhe atividades com seus alunos e outros professores
      </h3>
    </header>
  );
};

export default Header;
