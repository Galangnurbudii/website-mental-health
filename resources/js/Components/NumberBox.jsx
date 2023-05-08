export default function NumberBox({ className = '', ...props }) {
    return (
    <div className="text-[18px] font-bold w-9 h-9 bg-[#4C9BF5] flex justify-center items-center text-white rounded-md">
        {props.number}
    </div>
    );
}