"use client";

import { Container, Popper } from "@/components/eduque-components";
import { useOnClickOutside } from "@/hooks";
import { appRoutes } from "@/utils";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SimpleHeader = () => {
  const router = useRouter();
  const [isPopperVisible, setPopperVisible] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);

  useOnClickOutside(userRef, () => setPopperVisible(false));

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
            <span>Olá, Fulano</span>
            <div
              ref={userRef}
              onClick={() => setPopperVisible(!isPopperVisible)}
              className={`
                bg-secondary
                h-10 w-10
                rounded-full
                text-primary text-2xl
                flex items-center justify-center
                cursor-pointer
              `}
            >
              <UserOutlined />
            </div>

            <Popper anchorEl={userRef?.current} isOpen={isPopperVisible}>
              <div>
                <button>Perfil</button>
                <button>Perfil</button>
                <button>Perfil</button>
                <button>Perfil</button>
              </div>
            </Popper>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default SimpleHeader;
