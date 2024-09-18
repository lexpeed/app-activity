"use client";

import { useOnClickOutside } from "@/hooks";
import { UserOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { Popper } from "@/components/eduque-components";
import { useAuth } from "react-oidc-context";

const ProfileButton = () => {
  const [isPopperVisible, setPopperVisible] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);
  const auth = useAuth();

  useOnClickOutside(userRef, () => setPopperVisible(false));

  const handleLogout = () => {
    auth.signoutRedirect({
      post_logout_redirect_uri: auth.settings.redirect_uri.concat(
        window.location.pathname,
      ),
    });
  };

  return (
    <div>
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
          <MenuButton onClick={handleLogout}>Sair</MenuButton>
        </div>
      </Popper>
    </div>
  );
};

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const MenuButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2
        rounded-md
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default ProfileButton;
