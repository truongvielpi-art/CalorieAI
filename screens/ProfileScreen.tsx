import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { BottomNav } from '../components/BottomNav';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="items-center justify-center">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      {/* Header */}
      <header className="pt-12 px-6 pb-6 w-full flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer">
            <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-primary to-green-200">
              <img 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-background-dark" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUiC5MSGn2DexS5bNxLKBJesj5cDVHk_ujuhKUibxjvB6lyDte-yH4iRu7KMtsT-MN-ocQQfAXekY9KC77D-9Qoa0CDqHJj288mUfDGnw1KJJDuOdKH-BaYLdanyv07liVXMnqpUbgkVTRmJZ2jpGyT-ZMxY6zqFXTzASoTxGAQJIZ36-_C-yj0oNAjHKr1af7XP-iQJistOx0XlJ55eD9D-LQiqY-LRQW0hhiPn5lvC07xPdqbRGB98NXbi60F_GKK7O_CpGCd4" 
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-background-dark shadow-sm">
              <span className="material-icons text-[14px] leading-none block">edit</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">Hello, Alex!</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Keep up the streak 🔥</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
          <span className="material-icons">settings</span>
        </button>
      </header>

      {/* Scrollable Content */}
      <div className="w-full flex-1 px-6 pb-24 overflow-y-auto no-scrollbar space-y-6">
        
        {/* Calendar */}
        <section className="bg-white dark:bg-[#1a3326] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">October 2023</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-300 transition-colors">
                <span className="material-icons text-lg">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-colors">
                <span className="material-icons text-lg">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 text-center mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="text-xs font-semibold text-gray-400 uppercase">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-3 gap-x-1 justify-items-center">
            {/* Prev month */}
            <div className="text-gray-300 dark:text-gray-600 text-sm py-1">29</div>
            <div className="text-gray-300 dark:text-gray-600 text-sm py-1">30</div>
            
            {/* Days 1-11 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(d => {
                let statusColor = "bg-primary";
                if(d === 3 || d === 7) statusColor = "bg-orange-200"; // Missed
                return (
                    <div key={d} className="flex flex-col items-center gap-1 cursor-pointer">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${statusColor}`}></div>
                    </div>
                )
            })}

            {/* Current Day */}
            <div className="relative flex flex-col items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/30 cursor-pointer">
              <span className="text-sm font-bold text-background-dark">12</span>
            </div>

            {/* Future days */}
            {[13, 14, 15, 16, 17, 18, 19].map(d => (
                <div key={d} className="flex flex-col items-center gap-1 opacity-50">
                    <span className="text-sm text-gray-400 dark:text-gray-600">{d}</span>
                </div>
            ))}
          </div>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-2 gap-4">
          {/* Avg Calories */}
          <div className="bg-[#FEFCE8] dark:bg-[#2C332B] rounded-2xl p-5 flex flex-col justify-between min-h-[9rem] border border-yellow-100 dark:border-gray-700">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-[#1a3326] flex items-center justify-center text-orange-400">
                <span className="material-icons text-lg">local_fire_department</span>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">-5%</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Avg. Calories</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,850</h3>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">kcal / day</p>
            </div>
          </div>

          {/* Days Tracked */}
          <div className="bg-white dark:bg-[#1a3326] rounded-2xl p-5 flex flex-col justify-between min-h-[9rem] border border-gray-100 dark:border-gray-800 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            <div className="w-8 h-8 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary">
              <span className="material-icons text-lg">calendar_today</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Days Tracked</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">14</h3>
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Scans */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Recent Scans</h3>
            <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">See All</button>
          </div>
          <div className="space-y-3">
             <div className="flex items-center p-3 bg-white dark:bg-[#1a3326] rounded-xl shadow-sm border border-gray-50 dark:border-gray-800 hover:border-primary/30 transition-colors">
              <img alt="Toast" className="w-14 h-14 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hIDTTIbsOvVpKs2DX03ZLLuIzx6bxo7yxgKoOTWqikq4IBQ-noR726oMsdlPkk5TBPD6JYqGmiFcJNc9Jb0M82XJofeBI4rLgEfCtji17ELKCOaLVvwEV6jJZDNJYphBOPzhjTj_FXeciNMq3AaOTnei2JGUSz1R5B9cuUJqwLDDJbF-jEwmrBa7lpcyYgOM-c61sssHAsYxAvqm5qiSjTOXnxifbpc0cs41NMNuJbZs1NDUGRxr2R-ppyv6kgHG1zBQaUlGwdY" />
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white truncate">Avocado Toast</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Breakfast • 10:30 AM</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="block font-bold text-gray-900 dark:text-white">350</span>
                <span className="text-xs text-gray-400 font-medium">kcal</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-white dark:bg-[#1a3326] rounded-xl shadow-sm border border-gray-50 dark:border-gray-800 hover:border-primary/30 transition-colors">
              <img alt="Salad" className="w-14 h-14 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC09yoK31qkTgQP-pAp8garMazExr2L_cRkqrsbjIDiBwWGpIr7yt_owrAtX0A77R41XsZJVpDkjxLlu4pWc6tIlvgK09k2p0oI1az-Ychb6h0rMCybhxpH4tqwe9d2nXXmIjc9Aq92XkbC727MZjfnfXy-bt01ygWdBdk2gTVnGDkkwW3f1yg_2Yts3zRsV6iJKEgYFnuGJY9iHl4uaCeka6RqwF_mC4kZyOX2yYqdWJuz2zcILIceIbyyq9izSqun-dxSmTAppo" />
              <div className="ml-4 flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white truncate">Green Salad</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Lunch • 1:15 PM</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="block font-bold text-gray-900 dark:text-white">210</span>
                <span className="text-xs text-gray-400 font-medium">kcal</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAB Camera Button (Absolute in Profile too for consistency if desired, or relying on nav) */}
       <div className="absolute bottom-0 left-0 right-0 z-20">
         <div className="absolute bottom-[4.5rem] left-1/2 transform -translate-x-1/2 z-30">
          <button 
            onClick={() => navigate('/camera')}
            className="w-16 h-16 bg-primary hover:bg-primary-dark text-background-dark rounded-full shadow-xl shadow-primary/40 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
          >
            <span className="material-icons text-3xl group-hover:rotate-12 transition-transform">qr_code_scanner</span>
          </button>
        </div>
        <BottomNav activeTab="profile" />
      </div>
    </Layout>
  );
};

export default ProfileScreen;