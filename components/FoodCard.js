import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaBurn } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function FoodCard(props) {
    return (
        <div className="snap-start snap-always shrink-0 w-full rounded-lg h-full p-5 lg:shadow-md lg:h-full lg:flex-1" style={{backgroundColor: props.color}}>
            <div className="relative flex flex-col items-center bg-violet-700 rounded-xl h-full pt-40 w-full">
                <div className="foodAvatar absolute bg-gray-200 h-40 w-40 rounded-full shadow-md"  style={{top: '5rem', backgroundImage: "url('foodrecipe.png')"}} />
                <AiOutlineHeart className='absolute top-5 right-5 scale-150'/>
                <div className="bg-violet-50 h-full w-full rounded-xl pt-28" style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}>
                    <div className="flex flex-col px-5">
                        <p className='mx-auto text-gray-800 text-2xl font-bold tracking-wide'>Caprese Salad</p>
                        <div className='py-5 flex text-gray-800 w-full justify-between items-center'>
                            <span className='flex items-center gap-1'><AiOutlineClockCircle className='text-green-600'/> 15 min</span>
                            <span className='flex items-center gap-1'><FaBurn className='text-red-600'/> 256 calories</span>
                        </div>
                        <div className='text-gray-800 font-semibold text-lg'>
                            <span>Ingredients</span>
                            <div className='mt-3 flex w-full gap-2'>
                                <div className='shadow-sm p-2 flex flex-col justify-between items-center self-stretch flex-1'><img src='tomato.svg' className='w-10'></img><span className='font-semibold text-sm'>Tomato</span></div>
                                <div className='shadow-sm p-2 flex flex-col justify-between items-center self-stretch flex-1'><img src='basil.png' className='w-10'></img><span className='font-semibold text-sm'>Basil</span></div>
                                <div className='shadow-sm p-2 flex flex-col justify-between items-center self-stretch flex-1'><img src='mozzarela.png' className='w-10'></img><span className='font-semibold text-sm'>Mozzarela</span></div>
                            </div>
                        </div>
                        <div className='text-gray-800 font-semibold text-lg mt-5'>
                            <span>About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


FoodCard.defaultProps = {
    color: '#1d1d1d'
}