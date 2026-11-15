import React from 'react';
import { X, Bell, CheckCircle2, AlertTriangle, ArrowDownRight } from 'lucide-react';

export default function NotificationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      group: 'Today',
      items: [
        {
          id: 1,
          type: 'reminder',
          title: 'Reminder: Auto Savings',
          desc: 'Set up your automatic savings to meet your vacation travel goal on time.',
          time: '10:45 AM',
          iconBg: 'bg-[#DFF7E2]',
          iconColor: 'text-[#00D09E]',
        },
        {
          id: 2,
          type: 'transaction',
          title: 'New Transaction Registered',
          desc: 'Groceries | Pantry Market | -$100.00 confirmed with Visa Debit.',
          time: '08:30 AM',
          iconBg: 'bg-[#DFF7E2]',
          iconColor: 'text-[#0068FF]',
        },
      ],
    },
    {
      group: 'Yesterday',
      items: [
        {
          id: 3,
          type: 'alert',
          title: 'Expense Alert',
          desc: 'We recommend that you monitor your restaurant expenses (85% of monthly budget reached).',
          time: '06:15 PM',
          iconBg: 'bg-amber-100',
          iconColor: 'text-amber-600',
        },
        {
          id: 4,
          type: 'update',
          title: 'Monthly Statement',
          desc: 'Your financial statement for April has been compiled and ready for download.',
          time: '02:00 PM',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
        },
      ],
    },
    {
      group: 'This Weekend',
      items: [
        {
          id: 5,
          type: 'transaction',
          title: 'Direct Deposit Received',
          desc: 'Salary payment of +$4,000.00 credited to Main Checking.',
          time: 'April 28',
          iconBg: 'bg-[#DFF7E2]',
          iconColor: 'text-[#00D09E]',
        },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="w-full bg-[#F1FFF3] rounded-t-[32px] p-5 max-h-[85%] flex flex-col shadow-2xl border-t border-[#00D09E]/30 animate-slide-up">
        {/* Handle & Close bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#00D09E]/15">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#DFF7E2] flex items-center justify-center">
              <Bell size={15} className="text-[#052224]" />
            </span>
            <h2 className="text-base font-extrabold text-[#052224]">Notifications</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#052224] hover:bg-[#DFF7E2] transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* List of notifications */}
        <div className="overflow-y-auto no-scrollbar py-3 space-y-4">
          {notifications.map((group) => (
            <div key={group.group}>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#093030]/60 block mb-2 px-1">
                {group.group}
              </span>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-3 border border-[#00D09E]/15 shadow-2xs flex items-start gap-3"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
                    >
                      <Bell size={16} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#052224]">{item.title}</h4>
                        <span className="text-[9px] text-[#093030]/50 font-semibold">{item.time}</span>
                      </div>
                      <p className="text-[10px] text-[#093030]/80 font-medium mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#00D09E] hover:bg-[#00b386] text-[#052224] font-extrabold text-xs py-3 rounded-full transition-colors cursor-pointer mt-2"
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
}
