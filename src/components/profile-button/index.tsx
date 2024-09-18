"use client";

import { useOnClickOutside } from "@/hooks";
import { UserOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { Popper } from "../eduque-components";

interface Props {
  variant?: "primary" | "secondary";
}

const ProfileButton = ({ variant = "primary" }: Props) => {
  const [isPopperVisible, setPopperVisible] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);

  useOnClickOutside(userRef, () => setPopperVisible(false));

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
          ${variant === "primary" ? "bg-primary text-secondary" : "bg-secondary text-primary"}
        `}
      >
        <UserOutlined />
      </div>

      <Popper anchorEl={userRef?.current} isOpen={isPopperVisible}>
        <div>
          <MenuButton>Perfil</MenuButton>
          <MenuButton>Perfil</MenuButton>
          <MenuButton>Perfil</MenuButton>
          <MenuButton>Perfil</MenuButton>
        </div>
      </Popper>
    </div>
  );
};

interface ButtonProps {
  children: string;
}

const MenuButton = ({ children }: ButtonProps) => {
  return (
    <button
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
