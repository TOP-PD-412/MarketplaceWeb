import Link from "next/link";

export type HeaderNavItemProps = {
    href: string;
    label: string;
};

export default function HeaderNavItem({ href, label }: Readonly<HeaderNavItemProps>) {
    return <Link href={href} className="text-white hover:text-blue-300">{label}</Link>;
}