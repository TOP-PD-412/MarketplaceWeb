import HeaderNavItem, { HeaderNavItemProps } from "./nav-item";

export type HeaderNavProps = {
    items: HeaderNavItemProps[];
}

export default function HeaderNav({ items }: Readonly<HeaderNavProps>) {
    return (
        <nav className="flex items-center gap-4">
            {items.map((item) => (
                <HeaderNavItem key={item.href} {...item} />
            ))}
        </nav>
    );
}
