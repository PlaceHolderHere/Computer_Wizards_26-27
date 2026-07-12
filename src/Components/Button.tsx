import './Button.css';

interface ButtonProps {
    text: string;
    hrefLink?: string;
}

function Button ({ text, hrefLink }: ButtonProps) {
    return (
        <a href={hrefLink}>
            <button className="button">
                {text}
            </button>
        </a>
    )
}

export default Button;