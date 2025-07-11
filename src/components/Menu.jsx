function BotaoMenu({ title, icon, span }) {
    return (
        <button className='flex flex-col items-center p-4 bg-[#0E0E0E] rounded-xl border border-gray-400 shadow-md hover:bg-[#FE9A00] transition'>
            {icon} 
            <span className='text-sm font-semibold text-white'>{title}</span>
            <span className='text-xs text-gray-500'>{span}</span>
        </button>
    )
}

export default BotaoMenu;