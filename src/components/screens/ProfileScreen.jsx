import React, { useState } from 'react';
import AvatarUser from '../../assets/avatar-user.png';
import ProfEdit from '../../assets/prof-edit.svg';
import ProfSecurity from '../../assets/prof-security.svg';
import ProfSetting from '../../assets/prof-setting.svg';
import ProfHelp from '../../assets/prof-help.svg';
import ProfLogout from '../../assets/prof-logout.svg';
import { ChevronRight, ShieldCheck, Check } from 'lucide-react';

export default function ProfileScreen({ onNavigate }) {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const menuItems = [
    { id: 'edit', label: 'Edit Profile', desc: 'Account details, email, phone', icon: ProfEdit },
    { id: 'security', label: 'Security & PIN', desc: 'Change passcode, biometrics', icon: ProfSecurity },
    { id: 'settings', label: 'Preferences & Settings', desc: 'Currency, language, dark mode', icon: ProfSetting },
    { id: 'help', label: 'Help Center & FAQ', desc: '24/7 customer support', icon: ProfHelp },
    { id: 'logout', label: 'Logout', desc: 'Sign out from this device', icon: ProfLogout, isDanger: true },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F1FFF3] overflow-y-auto no-scrollbar pb-6">
      {/* Header */}
      <div className="px-6 pt-2 pb-4">
        <h1 className="text-xl font-extrabold text-[#052224] tracking-tight">Profile</h1>
        <p className="text-xs font-semibold text-[#093030]/70">Account Management & Security</p>
      </div>

      {/* User Card (Figma Node 7020:3844) */}
      <div className="px-5 mb-5">
        <div className="bg-white rounded-[28px] p-5 border border-[#00D09E]/20 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={AvatarUser}
                alt="Alex Morgan"
                className="w-16 h-16 rounded-full object-cover ring-3 ring-[#00D09E]/30"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#00D09E] ring-2 ring-white flex items-center justify-center">
                <Check size={10} className="text-white" strokeWidth={3} />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-black text-[#052224]">Alex Morgan</h2>
                <span className="bg-[#DFF7E2] text-[#052224] text-[9px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                  <ShieldCheck size={10} className="text-[#00D09E]" />
                  PRO
                </span>
              </div>
              <p className="text-xs font-bold text-[#0068FF] mt-0.5">ID: 25030024</p>
              <p className="text-[10px] text-[#093030]/60 font-medium">alex.morgan@finwise.app</p>
            </div>
          </div>

          <button
            onClick={() => {}}
            className="w-8 h-8 rounded-full bg-[#DFF7E2] flex items-center justify-center text-[#052224] hover:bg-[#00D09E] transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Quick Toggles */}
      <div className="px-5 mb-5">
        <div className="bg-white rounded-2xl p-4 border border-[#00D09E]/20 shadow-xs space-y-3">
          {/* Biometrics Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#052224] block">Biometric Authentication</span>
              <span className="text-[10px] text-[#093030]/60 font-medium">Use Face ID / Fingerprint to login</span>
            </div>
            <button
              onClick={() => setBiometricsEnabled(!biometricsEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                biometricsEnabled ? 'bg-[#00D09E]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                  biometricsEnabled ? 'left-5.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          <div className="h-[1px] bg-[#00D09E]/10" />

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#052224] block">Transaction Alerts</span>
              <span className="text-[10px] text-[#093030]/60 font-medium">Instant notification on expense</span>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                notificationsEnabled ? 'bg-[#00D09E]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                  notificationsEnabled ? 'left-5.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Settings Menu List (Figma Node 7020:3844) */}
      <div className="px-5 space-y-2.5 flex-1">
        <h3 className="text-sm font-bold text-[#052224]">Account Settings</h3>

        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {}}
            className="bg-white rounded-2xl p-3 flex items-center justify-between border border-[#00D09E]/15 hover:border-[#00D09E]/40 transition-all cursor-pointer shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} alt={item.label} className="w-11 h-11 object-contain rounded-xl" />
              <div>
                <h4
                  className={`text-xs font-black ${
                    item.isDanger ? 'text-[#FF4267]' : 'text-[#052224]'
                  }`}
                >
                  {item.label}
                </h4>
                <p className="text-[10px] text-[#093030]/60 font-medium mt-0.5">{item.desc}</p>
              </div>
            </div>

            <ChevronRight
              size={16}
              className="text-[#093030]/40 group-hover:text-[#00D09E] transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
