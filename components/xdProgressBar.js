
export default function XDProgressBar({entry}){
    
    return (
        <div> 
            <div className='flex justify-between'>
                <div className='font-dosis font-semibold text-primary-normal '>{entry.title}</div>
                <div className='flex'>
                    <div className='font-dosis text-primary-normal'>{entry.progressAmount}</div>
                    <div className='font-dosis text-primary-normal'>{entry.progressUnit}</div>
                </div>
            </div>
        </div>
    )
}