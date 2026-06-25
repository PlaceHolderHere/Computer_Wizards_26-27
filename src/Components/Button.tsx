import './Button.css';

interface ButtonProps {
    text: string;
    hrefLink?: string;
}

function Button ({ text, hrefLink }: ButtonProps) {
    return (
        <a href={hrefLink}>
            <button className="button">
                <p>{text}</p>
            </button>
        </a>
    )
}

export default Button;