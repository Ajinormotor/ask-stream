import React, { useState } from 'react'
import Layout from '../layouts'
import Bookmark from './bookmark'
// import conversations from './conversations'
// import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {  ArrowRight,  ChevronDown,  Tag } from 'lucide-react'
import { BookmarkType } from '@/types'

import { bookmarksData } from '@/data/section.data'
import Conversations from './conversations'


const StreamsIndex = () => {

     const [activeBookmark, setActiveBookmark] = useState<BookmarkType>(
    bookmarksData[0]
  );
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   const [showAnalyze, setShowAnalyze] = useState<boolean | null>(null)
     const [loading, setLoading] = useState(false)

  const titles = [
    {title: 'Excepteur sint occaecat cupidatat?'},
    {title:  'Excepteur sint occaecat cupidatat?'}
  ]


    const handleAnalyzeClick = () => {
    setLoading(true) 
    setShowAnalyze(false) 
    setTimeout(() => {
      setLoading(false) 
      setShowAnalyze(true) 
    }, 2000) 
  }

  return (
 <Layout>
<div className="flex flex-col w-full">


{/* nav */}
<div className='min-h-17.5 w-full flex items-center max-w-full px-4
 justify-between border-b border-[#E3E8EE]'>

  <div className='flex gap-2 items-center'>
        <p className="text-[#4F566B] text-base font-medium"> Ask Stream </p>
     <ChevronDown size={8}  color='#4F566B'/>
  </div>

          <p className="text-[#4F566B] text-base font-medium"> Show History </p>

</div>


<div className={`relative
  ${showAnalyze ? "" : ""}`
}>


{/* Header */}
  <div className={`min-h-109 w-full flex flex-col items-center justify-center md:gap-11 p-4
    ${showAnalyze ? "hidden md:flex" : ""}`}>


<div className='md:w-[70%]  flex flex-col  justify-center md:gap-11 gap-6.5 min-h-110 md:py-10'>


{/* Text */}
<div className={`
  ${showAnalyze ? 'hidden md:flex md:flex-col' : 'flex flex-col'}  `}>
<h1 className=" font-bricolage font-semibold 
  md:leading-16 md:text-[57px]  text-5xl leading-14
  text-transparent bg-clip-text 
  bg-[linear-gradient(90deg,#625AFA_0.05%,#272464_22.24%)]
">
  Ask Stream  <p className='text-[#CAC4D0] font-bricolage font-semibold md:leading-64px]  md:text-[57px]'>lorem ipsum</p>
</h1>

   
</div>



{/* Input */}
<div className={`flex flex-col gap-2.5 w-full
  ${showAnalyze ? '' : ''}`}>

<div className="border border-[#EDEEF0] md:rounded-[18px] w-full rounded-4 p-2
 flex flex-col justify-between  min-h-26">
  <input
    placeholder="Ask anything"
  className="border-0 bg-transparent p-1 focus:outline-none focus:ring-0 
  focus:border-0"
  />

  <div className="flex items-center justify-between w-full mt-2">

    <div className='flex items-center gap-2'>

      <div className="flex items-center bg-[#EFEFFF] rounded-sm gap-0.5 px-2 py-0.5 cursor-pointer">
        <Tag size={10} color="#625AFA" />
        <h1 className="text-[#625AFA] text-sm font-medium">Beta</h1>
      </div>
      <p className="text-sm text-gray-500 mt-1">Conversational Analytics</p>
    </div>

    <Button onClick={() => handleAnalyzeClick()}
     className="shadow-[0px_2px_5px_0px_#3C42571F,0px_1px_1px_0px_#00000014,0px_-1px_1px_0px_#0000001F_inset]
    bg-[#141232] hover:bg-[#141232] cursor-pointer">
      Analyze
    </Button>
  </div>
</div>

  { titles.length !== 0 &&  <div className={`w-full grid grid-cols-2 gap-2
    ${showAnalyze ? "hidden md:flex" : ""}`}>
      {titles.slice(-2).map((t, index) => {
        const isSelected = index === selectedIndex;
        return (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex items-center md:justify-between w-full md:p-4 rounded-lg cursor-pointer 
               shadow-[0px_1px_4px_0px_#4F566B14]
              ${isSelected ? "bg-[#EDEEF0] " : ""}
              `}
          >
            <h1 className='md:text-base text-xs text-[#4F566B]'>{t.title}</h1>
            <ArrowRight  className='text-xs md:text-2xl' color='#4F566B'/>
          </div>
        );
      })}
    </div>

}

</div>

</div>

  </div>

          {loading && (
          <div className="w-full flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#141232]" />
          </div>
        )}



       {/* Show-analyze  */}
 { showAnalyze &&   <div className='flex flex-col md:flex-row w-full min-h-205.5
  border-t border-[#EDEEF0] p-4 md:p-0 mb-5'>

    <div className=' md:max-w-[22%] w-full'>
    <Bookmark
          data={bookmarksData}
          activeId={activeBookmark.id}
          onSelect={setActiveBookmark}
            setShowAnalyze={setShowAnalyze}
        />
    </div>

  <div className='md:max-w-[78%] lg:p-10  '>
 <Conversations
  conversations={activeBookmark.conversations}
  demographics={activeBookmark.demographics}
         setShowAnalyze={setShowAnalyze}

/>

  </div>

</div>

}

{/* Smaller screen Input */}
<div
  className={`
    fixed bottom-0 left-0 w-full md:hidden border border-[#EDEEF0] rounded-t-2xl
    p-4 min-h-26 flex flex-col justify-between bg-white  z-50
    ${showAnalyze ? "flex" : "hidden"}
  `}
>
  <input
    placeholder="Ask anything"
    className="border-0 bg-transparent p-1 focus:outline-none focus:ring-0"
  />

  <div className="flex items-center justify-between w-full mt-2">
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-[#EFEFFF] rounded-sm gap-0.5 px-2 py-0.5">
        <Tag size={10} color="#625AFA" />
        <h1 className="text-[#625AFA] text-sm font-medium">Beta</h1>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Conversational Analytics
      </p>
    </div>

    <Button
      onClick={() => setShowAnalyze(true)}
      className="bg-[#141232] hover:bg-[#141232]"
    >
      Analyze
    </Button>
  </div>
</div>



</div>

</div>
</Layout>
  )
}

export default StreamsIndex
