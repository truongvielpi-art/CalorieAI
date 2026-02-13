import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PieChart, Pie, Cell } from 'recharts';

const AnalysisScreen: React.FC = () => {
  const navigate = useNavigate();

  // Chart Data
  const data = [
    { name: 'Carbs', value: 45, color: '#13ec80' },
    { name: 'Protein', value: 25, color: '#fca5a5' },
    { name: 'Fat', value: 20, color: '#fde047' },
    { name: 'Other', value: 10, color: 'transparent' }, // Gap
  ];

  return (
    <Layout className="items-center justify-center">
      {/* Header */}
      <header className="absolute top-0 w-full flex items-center justify-between px-6 pt-12 pb-4 z-10">
        <button onClick={() => navigate('/camera')} className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm text-slate-800 dark:text-white transition hover:bg-gray-100">
          <span className="material-icons-round">arrow_back</span>
        </button>
        <h1 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">Analysis Result</h1>
        <button className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-slate-800 dark:text-white">
          <span className="material-icons-round">more_horiz</span>
        </button>
      </header>

      {/* Main Scrollable */}
      <main className="flex-1 w-full overflow-y-auto no-scrollbar pb-24 px-6 pt-24">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(19,236,128,0.15)] mb-6 group">
          <img 
            alt="Avocado toast" 
            className="w-full h-full object-cover transition transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQV5kd0GPIIi55JQcwTphPiRdRrv_B0ogZNIzEJjZqnB3xwfWgoIMbkebh2Fi9UnlmuHKucg06IQFCvhvdXyeIdotFcslp4x9ybanHugthNLv_1_AgpG1NuvHi1WkC4kbu6CSn2eScm1BT7tUWuOIXhKa89SwtB3j7Z7CaCy0-EirdzyiDuKeyZXjuzOwywVtrWEZ3EDOIux3hAV0PEJJgsvPCoIUjGwmb5c1ZMY7UiXvamuQte0ACPMgaNfIMvWLOluzTU4Z3hqI" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary/90 text-background-dark text-xs font-bold px-2 py-0.5 rounded-full">High Protein</span>
            </div>
            <h2 className="text-2xl font-bold">Avocado Toast & Egg</h2>
          </div>
        </div>

        {/* Calories & Score */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-gray-400">Total Energy</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-slate-900 dark:text-white">350</span>
              <span className="text-xl font-medium text-primary">kcal</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium text-slate-500 dark:text-gray-400 mb-1">Health Score</p>
            <div className="flex items-center gap-1 bg-white dark:bg-white/5 px-3 py-1.5 rounded-lg border border-primary/20">
              <span className="material-icons-round text-primary text-sm">eco</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">94</span>
              <span className="text-xs text-slate-500 dark:text-gray-400">/100</span>
            </div>
          </div>
        </div>

        {/* Macros Chart */}
        <div className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm mb-6">
          <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Macronutrients</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            
            {/* Donut Chart */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <PieChart width={160} height={160}>
                <Pie
                  data={data}
                  cx={80}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute flex flex-col items-center">
                <span className="text-xs text-slate-400 dark:text-gray-400">Total</span>
                <span className="font-bold text-xl text-slate-900 dark:text-white">100%</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 w-full space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-medium text-sm text-slate-700 dark:text-gray-200">Carbs</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">45g</span>
                  <span className="text-slate-400 text-xs ml-1">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#fca5a5]"></div>
                  <span className="font-medium text-sm text-slate-700 dark:text-gray-200">Protein</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">25g</span>
                  <span className="text-slate-400 text-xs ml-1">25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#fde047]"></div>
                  <span className="font-medium text-sm text-slate-700 dark:text-gray-200">Fat</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">12g</span>
                  <span className="text-slate-400 text-xs ml-1">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
            <span className="material-icons-round text-primary/70 mb-2">local_fire_department</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Burn Time</span>
            <span className="font-bold text-slate-900 dark:text-white mt-1">45 min walk</span>
          </div>
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
            <span className="material-icons-round text-primary/70 mb-2">scale</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Portion</span>
            <span className="font-bold text-slate-900 dark:text-white mt-1">Medium (250g)</span>
          </div>
        </div>

        <p className="text-xs text-center text-slate-400 mb-8">
          Values are estimates based on visual recognition.
        </p>
      </main>

      {/* Sticky Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-12 z-20">
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/camera')}
            className="flex-1 py-4 px-6 rounded-xl border border-slate-200 dark:border-white/20 font-semibold text-slate-900 dark:text-white bg-white dark:bg-white/5 shadow-sm active:scale-[0.98] transition"
          >
            Edit Details
          </button>
          <button 
            onClick={() => navigate('/home')}
            className="flex-[2] py-4 px-6 rounded-xl bg-primary font-bold text-background-dark shadow-lg shadow-primary/30 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <span className="material-icons-round text-xl">check</span>
            Confirm Meal
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AnalysisScreen;