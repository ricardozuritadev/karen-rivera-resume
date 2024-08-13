type HobbiesProps = {
    children: React.ReactNode;
};

export default function Hobbies({ children }: HobbiesProps) {
    return <div className="hobbies">{children}</div>;
}
