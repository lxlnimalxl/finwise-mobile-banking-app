import React, { useState, useEffect } from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function StatusBar({ dark = false }) {
  const [time, setTime] = useState('16:04');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const textColor = dark ? 'text-white' : 'text-[#052224]';

  return (
    <div className={`w-full px-7 pt-3.5 pb-2 flex items-center justify-between text-sm font-semibold tracking-tight select-none z-30 transition-colors ${textColor}`}>
      <span className="font-semibold text-[15px]">{time}</span>

      <div className="flex items-center gap-2">
        {/* Cellular signal bars */}
        <div className="flex items-end gap-[2px] h-3">
          <div className={`w-[3px] h-1.5 rounded-sm ${dark ? 'bg-white' : 'bg-[#052224]'}`} />
          <div className={`w-[3px] h-2 rounded-sm ${dark ? 'bg-white' : 'bg-[#052224]'}`} />
          <div className={`w-[3px] h-2.5 rounded-sm ${dark ? 'bg-white' : 'bg-[#052224]'}`} />
          <div className={`w-[3px] h-3 rounded-sm ${dark ? 'bg-white' : 'bg-[#052224]'}`} />
        </div>

        {/* Wifi */}
        <Wifi size={15} strokeWidth={2.4} />

        {/* Battery */}
        <div className="flex items-center gap-0.5">
          <div className={`w-5 h-2.5 rounded-sm border-[1.5px] p-[1.5px] flex items-center ${dark ? 'border-white' : 'border-[#052224]'}`}>
            <div className={`w-full h-full rounded-[1px] ${dark ? 'bg-white' : 'bg-[#052224]'}`} />
          </div>
          <div className={`w-0.5 h-1 rounded-r-xs ${dark ? 'bg-white' : 'bg-[#052224]'}`} />
        </div>
      </div>
    </div>
  );
}
