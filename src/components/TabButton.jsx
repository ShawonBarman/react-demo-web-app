export default function TabButton({onSelect, label, isSelected}) {
    return <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{label}</button></li>
}