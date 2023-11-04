"use client"

import Hover from "../Hover/hover";
import styles from "./Navlink.module.scss";

import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps {
    address: string,
    children: React.ReactNode,
    hoverText: string,
    hoverDirection: "left" | "right"
}

export default function NavLink(props: NavLinkProps) {
    const { address, children, hoverText, hoverDirection } = props;
    const router = useRouter();
    const pathname = usePathname();

    let buttonStyles = `${styles.navButton} `
    if (pathname === address) buttonStyles += `${styles.active}`

    return (
        <Hover hoverText={hoverText} hoverDirection={hoverDirection}>
            <button onClick={() => router.push(address)} className={buttonStyles}>
                {children}
            </button>
        </Hover>
    )
}