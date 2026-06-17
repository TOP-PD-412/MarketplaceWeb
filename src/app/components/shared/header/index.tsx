import Link from "next/link";
import HeaderNav, { HeaderNavProps } from "./nav";

export type HeaderProps = HeaderNavProps & {
    title: string;
}

export default function Header({ title, items }: Readonly<HeaderProps>) {
    return (
        <header className="w-full px-8 py-4 flex items-center gap-4 border-b border-gray-300">
            <Link href="/">
                <h1 className="text-3xl font-bold">{title}</h1>
            </Link>
            <HeaderNav items={items} />
        </header>
    );
}


