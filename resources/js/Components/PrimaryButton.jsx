export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `flex-shrink-0 items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-sm text-putih tracking-widest hover:opacity-80 transition ease-in-out duration-150 ${

                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
