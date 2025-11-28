import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Facebook, 
  MoreHorizontal,
  Hash,
  AtSign,
  BarChart2,
  MessageCircle,
  DollarSign
} from 'lucide-react';
import { Toggle } from './components/Toggle';
import { ListItem } from './components/ListItem';

// Mock data for location pills
const LOCATIONS = [
  "Hocking Hills State Park",
  "Lancaster, Ohio",
  "Columbus, Ohio",
  "Logan, Ohio"
];

const App: React.FC = () => {
  const [aiLabelEnabled, setAiLabelEnabled] = useState(false);
  const [shareToThreads, setShareToThreads] = useState(false);
  const [shareToFacebook, setShareToFacebook] = useState(false);
  const [shareToStory, setShareToStory] = useState(false);
  const [watchAndEarnEnabled, setWatchAndEarnEnabled] = useState(false);

  return (
    <div className="h-screen bg-white text-gray-900 font-sans flex flex-col mx-auto max-w-md shadow-2xl overflow-hidden relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 h-12 border-b border-transparent shrink-0">
        <button className="p-1 -ml-2">
          <ArrowLeft className="w-7 h-7 text-black" strokeWidth={1.5} />
        </button>
        <h1 className="text-[1.1rem] font-bold text-black absolute left-1/2 transform -translate-x-1/2">
          New reel
        </h1>
        <button className="text-blue-500 font-semibold text-[1rem]">
          OK
        </button>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-[100px]">
        
        {/* Reel Preview & Edit Cover */}
        <div className="flex flex-col items-center pt-4 pb-4">
          <div className="relative group cursor-pointer w-[140px] h-[220px]">
            <img 
              src="https://picsum.photos/seed/costco/400/600" 
              alt="Reel Preview" 
              className="w-full h-full object-cover rounded-[12px] shadow-sm"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                Edit cover
              </div>
            </div>
          </div>
        </div>

        {/* Caption Input */}
        <div className="px-4 pb-2">
          <div className="w-full text-[15px] leading-relaxed break-words whitespace-pre-wrap font-normal">
            <span>Costco haul restock</span>
            <br />
            <span className="text-blue-600 font-normal">#costco #food #fyp</span>
            <span className="animate-pulse ml-0.5 opacity-0">|</span>
          </div>
        </div>

        {/* Quick Action Chips */}
        <div className="px-4 py-3 flex items-center space-x-3 overflow-x-auto no-scrollbar">
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 rounded-lg shrink-0 active:bg-gray-200 transition-colors">
            <Hash className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[13px] font-medium text-gray-700">Hashtags</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 rounded-lg shrink-0 active:bg-gray-200 transition-colors">
            <AtSign className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[13px] font-medium text-gray-700">Link a reel</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 rounded-lg shrink-0 active:bg-gray-200 transition-colors">
            <BarChart2 className="w-3.5 h-3.5 text-gray-500 rotate-90" />
            <span className="text-[13px] font-medium text-gray-700">Poll</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 rounded-lg shrink-0 active:bg-gray-200 transition-colors">
            <MessageCircle className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[13px] font-medium text-gray-700">Prompt</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mx-4 my-2"></div>

        {/* Form Options */}
        <div className="flex flex-col">
          <ListItem 
            icon={<img src="https://i.ibb.co/1YfcgStX/tag-people.png" alt="Tag people" className="w-6 h-6 object-contain" />}
            label="Tag people"
          />
          
          <ListItem 
            icon={<img src="https://i.ibb.co/FLq0hqJ2/add-location.png" alt="Add location" className="w-6 h-6 object-contain" />}
            label="Add location"
          />
          
          {/* Location Suggestions Pills */}
          <div className="pl-[52px] pr-4 pb-4 overflow-x-auto no-scrollbar flex space-x-2">
            {LOCATIONS.map((loc) => (
              <button 
                key={loc}
                className="flex-none px-3 py-1.5 bg-gray-100 rounded-md text-[13px] font-medium text-gray-900 active:bg-gray-200"
              >
                {loc}
              </button>
            ))}
          </div>

          <ListItem 
            icon={<img src="https://i.ibb.co/LDQ93h0Z/rename-audio.png" alt="Rename audio" className="w-6 h-6 object-contain" />}
            label="Rename audio"
            rightElement={<span className="text-[15px] text-gray-500 mr-1">Original Audio</span>}
          />
          
          <ListItem 
            icon={<img src="https://i.ibb.co/QFfdKky4/add-ai-label.png" alt="Add AI label" className="w-6 h-6 object-contain" />}
            label="Add AI label"
            subLabel="We require you to label certain realistic content that's made with AI. Learn more"
            hasChevron={false}
            rightElement={
              <Toggle checked={aiLabelEnabled} onChange={setAiLabelEnabled} />
            }
          />

          <div className="h-2 bg-gray-50 border-t border-b border-gray-100 my-2"></div>

          <div className="pt-2 px-4 pb-1">
            <span className="font-semibold text-[15px]">Audience</span>
          </div>

          <ListItem 
            icon={<img src="https://i.ibb.co/992WnRWD/audience.png" alt="Audience" className="w-6 h-6 object-contain" />}
            label="Audience"
            rightElement={<span className="text-[15px] text-gray-500 mr-1">Everyone</span>}
          />

          <div className="h-2 bg-gray-50 border-t border-b border-gray-100 my-2"></div>

          <div className="pt-2 px-4 pb-1">
            <span className="font-semibold text-[15px]">Also share on...</span>
          </div>

          <ListItem 
            icon={<img src="https://i.ibb.co/rfcPRB3Z/threads.png" alt="Threads" className="w-6 h-6 object-contain" />}
            label="Threads"
            hasChevron={false}
            rightElement={
              <Toggle checked={shareToThreads} onChange={setShareToThreads} />
            }
          />

          <ListItem 
            icon={<Facebook className="w-6 h-6 text-blue-600 fill-blue-600" strokeWidth={0} />}
            label="Facebook"
            hasChevron={false}
            rightElement={
              <Toggle checked={shareToFacebook} onChange={setShareToFacebook} />
            }
          />

          <ListItem 
            icon={<img src="https://i.ibb.co/HTFpyjV3/your-story.png" alt="Your story" className="w-6 h-6 object-contain" />}
            label="Your story"
            hasChevron={false}
            rightElement={
              <Toggle checked={shareToStory} onChange={setShareToStory} />
            }
          />
          
          <div className="h-px bg-gray-100 mx-4 my-2"></div>

          <ListItem 
            icon={<MoreHorizontal className="w-6 h-6" strokeWidth={1.5} />}
            label="More options"
          />

          <div className="h-px bg-gray-100 mx-4 my-2"></div>

          <ListItem 
            icon={<DollarSign className="w-6 h-6" strokeWidth={1.5} />}
            label="Watch Reels & Earn"
            subLabel={
              watchAndEarnEnabled ? (
                <div className="flex flex-col mt-0.5">
                  <span className="text-gray-500">Enable this feature to get paid while watching videos</span>
                  <span className="mt-1 text-[#00b2cc] font-medium leading-snug">
                    Balance: 827.28 Total Videos Watched: 89 <span className="text-black font-bold cursor-pointer">Learn more</span>
                  </span>
                </div>
              ) : (
                "Enable this feature to get paid while watching videos"
              )
            }
            hasChevron={false}
            rightElement={
              <Toggle 
                checked={watchAndEarnEnabled} 
                onChange={setWatchAndEarnEnabled} 
              />
            }
          />
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 pb-8 z-50">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center w-full bg-gray-100 active:bg-gray-200 text-black font-semibold text-[15px] py-3.5 rounded-lg transition-colors">
            Save draft
          </button>
          <button className="flex items-center justify-center w-full bg-blue-600 active:bg-blue-700 text-white font-semibold text-[15px] py-3.5 rounded-lg transition-colors">
            Share
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;