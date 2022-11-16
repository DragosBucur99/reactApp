import Link from "next/link"
import Image from "next/image"
import foodrecipe from "../public/foodrecipe.png"
import {motion} from "framer-motion"

import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function recipe() { 

    return (
        <motion.div 
            className="px-4 py-4 h-screen bg-violet-50 overflow-y-auto text-gray-800"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, ease: 'easeOut'}}
            exit={{ opacity: 0 }}
        >
        <Link href="/"><a><AiOutlineArrowLeft className="scale-150 rounded-full" /></a></Link>
            <div className="flex flex-col gap-10">
                <Image src={foodrecipe}/>
                <div className="flex flex-col gap-5">
                    <span className="font-semibold">Nutrition facts</span>
                    <span>1 serving: 256 calories, 19g fat (9g saturated fat), 45mg cholesterol, 161mg sodium, 8g carbohydrate (6g sugars, 2g fiber), 11g protein.</span>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="font-semibold">Steps</span>
                    <ol>
                        <li>1. Arrange the tomatoes, cheese and basil on a serving platter. Whisk the vinaigrette ingredients; drizzle over salad. If desired, sprinkle with additional salt and pepper.</li>
                    </ol>
                </div>
            </div>
        </motion.div>

    )
}


