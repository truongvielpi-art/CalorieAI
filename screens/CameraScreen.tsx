import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';

const CameraScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="overflow-hidden relative text-white">
      {/* Camera Viewfinder Layer */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          alt="Overhead view of a healthy salad" 
          className="w-full h-full object-cover opacity-90" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaLk3cykdlVYdxRRDNIo7sOvOr3ldaPhGeFG1pv3kg_kfkPGXBjtwvf7LDdr9Mr5zD7d7JyVSTrDPy2CEcfPBw-oMJjEvW1RknMfhagbXS9G6jLRVVhdHOjjAuA_D4vP4OULZ079Omw-9HDsAlKCIo__flKcv9yS8TTpo8pU7e0bzBY71O7UzuIPtv4ap1Foo4hH410LXrIp9F7k0-rSBdJI6a2qBgYGrq7YLdqsyoTRvlfyz1DuZSDQRMUC3SvXhQAoleFZc6Or0" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Top Nav */}
      <div className="relative z-10 w-full px-6 pt-12 pb-4 flex justify-between items-center">
        <button onClick={() => navigate('/home')} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors">
          <span className="material-icons-outlined text-xl">close</span>
        </button>
        <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide">AI ACTIVE</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors">
          <span className="material-icons-outlined text-xl">flash_off</span>
        </button>
      </div>

      {/* Focus Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative w-64 h-64 border border-white/30 rounded-xl flex items-center justify-center backdrop-blur-[1px]">
          {/* Frame Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl -mt-[1px] -ml-[1px]"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-xl -mt-[1px] -mr-[1px]"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-xl -mb-[1px] -ml-[1px]"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl -mb-[1px] -mr-[1px]"></div>
          
          <div className="w-1.5 h-1.5 bg-primary/80 rounded-full"></div>
          
          <div className="absolute -bottom-10 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            <p className="text-white text-sm font-medium">Align food within frame</p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 w-full px-8 pb-12 pt-6 flex items-center justify-between">
        {/* Gallery */}
        <div className="flex flex-col items-center gap-2">
          <button className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/20 hover:border-primary transition-colors relative group">
            <img 
              alt="Gallery thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1mV0Xc7xU5Ya3YYfaHbOPX86c_b1_kei2_-vpj94zamvcVS2NigZFoWIVLYvnAzkijz0Mf2-dimY5Y03EprQqL9YbcrQkiB3n7OgCRo77kb3LqjlkaOoXFBkJZ2g4Q6no_l-9-lI4mcKmOm-EysE8IM01mEZ0l-0EDeRJoKVKHYYp48SgMNkrBfUWnWPZ6x5aRxdpXVsIre-ij8LcF-BzwbJaNdQf8maN0eBftrWuSS04JjnZbFs-Tgnt2Jow67nCDvEbFEh2lV0" 
            />
          </button>
          <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider">Gallery</span>
        </div>

        {/* Shutter */}
        <div className="flex flex-col items-center -mt-4">
          <button 
            onClick={() => navigate('/analysis')}
            className="relative w-20 h-20 group"
          >
            <div className="absolute inset-0 rounded-full border-[3px] border-white/40 group-hover:border-white transition-colors"></div>
            <div className="absolute inset-2 rounded-full bg-[#FDF8E2] shadow-lg flex items-center justify-center transform group-active:scale-90 transition-transform duration-100">
               <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm"></div>
            </div>
          </button>
        </div>

        {/* History */}
        <div className="flex flex-col items-center gap-2">
          <button className="w-12 h-12 rounded-full bg-[#8BA896]/20 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#8BA896]/40 transition-colors text-white group">
            <span className="material-icons-outlined text-2xl group-hover:text-primary transition-colors">history</span>
          </button>
          <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider">History</span>
        </div>
      </div>

      {/* Floating Detection Tags */}
      <div className="absolute top-1/3 left-1/4 z-10 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur text-slate-900 text-xs px-2 py-1 rounded-md shadow-lg transform -translate-x-1/2 -translate-y-1/2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          <span className="font-bold">Avocado</span>
          <span className="text-slate-500 text-[10px]">98%</span>
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 z-10 pointer-events-none animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur text-slate-900 text-xs px-2 py-1 rounded-md shadow-lg transform translate-x-1/2 translate-y-1/2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          <span className="font-bold">Spinach</span>
          <span className="text-slate-500 text-[10px]">95%</span>
        </div>
      </div>
    </Layout>
  );
};

export default CameraScreen;