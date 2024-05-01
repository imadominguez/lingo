"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  iconSrc: string;
  href: string;
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      className="justify-start h-[52px]"
      variant={active ? "sidebarOutline" : "sidebar"}
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          width={32}
          height={32}
        />
        {label}
      </Link>
    </Button>
  );
};
