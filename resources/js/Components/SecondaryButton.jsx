export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `items-center md:w-32 px-4 py-2 bg-putih border border-hoverBackground rounded-md font-semibold text-sm text-hoverBackground tracking-widest shadow-sm hover:bg-primary hover:text-putih disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
