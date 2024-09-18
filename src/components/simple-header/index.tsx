"use client";

import { Container } from "@/components/eduque-components";
import { appRoutes } from "@/utils";
import { useRouter } from "next/navigation";
import ProfileButton from "../profile-button";
import { useAuth } from "react-oidc-context";

const SimpleHeader = () => {
  const router = useRouter();
  const auth = useAuth();

  const goToHome = () => {
    router.push(appRoutes.home);
  };

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <img
            src="/images/eduque-purple-logo.svg"
            alt="Purple Logo"
            className="cursor-pointer"
            onClick={goToHome}
          />

          <div className="flex items-center gap-4">
            {auth.isAuthenticated && (
              <>
                <span
                  className={`
                  text-primary
                  font-bold
                `}
                >
                  Bem-Vindo, {auth.user?.profile.given_name}{" "}
                </span>
                <ProfileButton />
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default SimpleHeader;
