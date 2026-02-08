
import React from 'react';
import { X, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle2, ThumbsUp, Share2, Grid, Music, Play } from 'lucide-react';

interface SocialModalProps {
  platform: string | null;
  onClose: () => void;
}

const SocialModal: React.FC<SocialModalProps> = ({ platform, onClose }) => {
  if (!platform) return null;

  const renderInstagram = () => (
    <div className="bg-white text-black h-full overflow-y-auto">
      {/* IG Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex justify-between items-center z-10">
        <div className="font-bold text-xl">sofiasgym_moana</div>
        <div className="flex gap-4">
          <MoreHorizontal className="w-6 h-6" />
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="p-4 flex gap-8 items-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full rounded-full border-2 border-white object-cover"
              alt="Profile"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full border-2 border-white p-0.5">
            <CheckCircle2 className="w-3 h-3 text-white fill-current" />
          </div>
        </div>
        <div className="flex-1 flex justify-around text-center text-sm">
          <div><div className="font-bold">248</div><div className="text-xs text-gray-500">Posts</div></div>
          <div><div className="font-bold">12.4k</div><div className="text-xs text-gray-500">Followers</div></div>
          <div><div className="font-bold">892</div><div className="text-xs text-gray-500">Following</div></div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h1 className="font-bold">Sofia's Gym Moaña</h1>
        <p className="text-sm">🏋️ Centro de Alto Rendimiento en Moaña</p>
        <p className="text-sm">🔥 Tu mejor versión empieza aquí</p>
        <p className="text-sm text-blue-900 font-medium">sofiasgym.com/moana</p>
      </div>

      <div className="flex gap-2 px-4 mb-6">
        <button className="flex-1 bg-gray-100 font-bold py-2 rounded-lg text-sm">Following</button>
        <button className="flex-1 bg-gray-100 font-bold py-2 rounded-lg text-sm">Message</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 px-1">
        {[1,2,3,4,5,6,7,8,9].map(i => (
          <div key={i} className="aspect-square relative group">
            <img 
              src={`https://images.unsplash.com/photo-${1534438327276 + i}-14e5300c3a48?q=80&w=400&auto=format&fit=crop`} 
              className="w-full h-full object-cover" 
              alt="Grid item"
            />
            {i % 3 === 0 && <Play className="absolute top-2 right-2 w-4 h-4 text-white fill-current" />}
          </div>
        ))}
      </div>
    </div>
  );

  const renderFacebook = () => (
    <div className="bg-[#f0f2f5] text-black h-full overflow-y-auto">
      {/* Header */}
      <div className="bg-[#1877f2] h-32 relative">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Cover"
        />
        <div className="absolute -bottom-12 left-4">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 px-4">
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-bold">Sofia's Gym Moaña</h1>
          <CheckCircle2 className="w-5 h-5 text-[#1877f2] fill-current" />
        </div>
        <p className="text-gray-500 text-sm">8.2k likes • 9.1k followers</p>
        
        <div className="flex gap-2 my-4">
          <button className="flex-1 bg-[#1877f2] text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2">
            <ThumbsUp className="w-4 h-4 fill-current" /> Liked
          </button>
          <button className="flex-1 bg-gray-200 font-bold py-2 rounded-lg flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Message
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
          <h3 className="font-bold mb-3">Intro</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">🏢 Gimnasio/Centro de fitness</div>
            <div className="flex items-center gap-2">📍 Moaña, Galicia</div>
            <div className="flex items-center gap-2">🌐 sofiasgym.es</div>
          </div>
        </div>

        {/* Fake Post */}
        <div className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
          <div className="p-3 flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full" alt="Mini" />
            <div>
              <div className="font-bold text-sm">Sofia's Gym Moaña</div>
              <div className="text-xs text-gray-500">2h • 🌍</div>
            </div>
          </div>
          <div className="px-3 pb-3 text-sm">
            ¡Hoy hemos superado el récord de asistencia en la clase de Crossfit! 🏋️‍♂️💪 Gracias Moaña por la energía.
          </div>
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" className="w-full" alt="Post" />
          <div className="p-3 flex justify-between border-t mt-2">
            <div className="flex gap-4">
              <span className="flex items-center gap-1 text-xs text-gray-500"><ThumbsUp className="w-4 h-4" /> 152</span>
            </div>
            <div className="text-xs text-gray-500">24 comments • 8 shares</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTikTok = () => (
    <div className="bg-[#121212] text-white h-full overflow-y-auto">
      <div className="p-8 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
        <h1 className="text-xl font-bold">@sofiasgym</h1>
        <p className="text-sm font-medium mb-4">Sofia's Gym Moaña</p>
        
        <button className="bg-[#fe2c55] px-12 py-2 rounded font-bold mb-6">Follow</button>
        
        <div className="flex gap-6 text-center mb-6">
          <div><div className="font-bold">25.3k</div><div className="text-xs text-gray-400">Following</div></div>
          <div><div className="font-bold">120k</div><div className="text-xs text-gray-400">Followers</div></div>
          <div><div className="font-bold">2.4M</div><div className="text-xs text-gray-400">Likes</div></div>
        </div>

        <p className="text-sm text-center px-8 mb-4 italic">"Transformando Moaña repetición a repetición" 💪🌊</p>
      </div>

      <div className="sticky top-0 bg-[#121212] border-b border-gray-800 flex justify-around">
        <div className="py-2 border-b-2 border-white px-8"><Grid className="w-6 h-6" /></div>
        <div className="py-2 text-gray-500 px-8"><Heart className="w-6 h-6" /></div>
      </div>

      <div className="grid grid-cols-3 gap-0.5">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-[3/4] relative bg-gray-900 overflow-hidden">
            <img 
              src={`https://images.unsplash.com/photo-${1534438327276 + i + 10}-14e5300c3a48?q=80&w=400&auto=format&fit=crop`} 
              className="w-full h-full object-cover opacity-80" 
              alt="TikTok item"
            />
            <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px]">
              <Play className="w-3 h-3 fill-current" /> 12.5k
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[20] bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition"
        >
          <X className="w-6 h-6" />
        </button>

        {platform === 'instagram' && renderInstagram()}
        {platform === 'facebook' && renderFacebook()}
        {platform === 'tiktok' && renderTikTok()}
      </div>
    </div>
  );
};

export default SocialModal;
