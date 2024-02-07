import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
        {...rest}
        className={clsx(
            'flex h-10 items-center rounded-xl bg-secondary px-4 font-medium transition-all hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
            className,
        )}
        >
        {children}
        </button>
    );
}
