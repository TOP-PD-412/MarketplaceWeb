export type ProductCardDateProps = {
    label: string;
    date: Date;
}

export default function ProductCardDate({ label, date }: ProductCardDateProps) {
    return (
        <span className="text-gray-600">{label}: {new Date(date).toLocaleString()}</span>
    )
}