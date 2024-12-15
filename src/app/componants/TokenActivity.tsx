import React from 'react';

interface TokenActivityProps {
  isEnabled?: boolean;
}

interface Activity {
  user: string;
  type: 'Purchase' | 'Sell';
  amount: number;
  cost: number;
  time: string;
}

const ComingSoonOverlay = () => (
  <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-10 rounded-2xl flex flex-col items-center justify-center gap-4">
    <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
      Token Activity Coming Soon
    </div>
    <div className="text-gray-400 text-lg">
      Monitor token movements in real-time! 💫
    </div>
    <div className="flex gap-2 mt-2">
      <span className="animate-bounce delay-0">🪙</span>
      <span className="animate-bounce delay-100">💰</span>
      <span className="animate-bounce delay-200">💎</span>
    </div>
  </div>
);

const TableHeader = () => (
  <div className="mb-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🪙</span>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          Token Activity
        </h2>
        <span className="text-2xl">💰</span>
      </div>
      <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg">
        <span className="text-green-400 text-sm">Live Updates</span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

const ActivityTable: React.FC<{ activities: Activity[] }> = ({ activities }) => (
  <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700">
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="p-4 text-gray-400">Wallet Address</th>
          <th className="p-4 text-gray-400">Action</th>
          <th className="p-4 text-gray-400">Amount 🪙</th>
          <th className="p-4 text-gray-400">Price</th>
          <th className="p-4 text-gray-400">When</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
          <tr 
            key={index}
            className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
          >
            <td className="p-4 font-mono text-gray-300">
              {activity.user}
            </td>
            <td className="p-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                activity.type === 'Purchase'
                  ? 'bg-green-400/10 text-green-400'
                  : 'bg-red-400/10 text-red-400'
              }`}>
                {activity.type}
              </span>
            </td>
            <td className="p-4">
              <span className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full">
                {activity.amount}
              </span>
            </td>
            <td className="p-4">
              <span className={`font-medium ${
                activity.type === 'Purchase'
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}>
                ${activity.cost.toFixed(2)}
              </span>
            </td>
            <td className="p-4">
              <span className="text-gray-400 text-sm">
                {activity.time}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TokenActivity: React.FC<TokenActivityProps> = ({ isEnabled = false }) => {
  const activities: Activity[] = [
    {
      user: '0x42b9 ... 3B148',
      type: 'Purchase',
      amount: 10,
      cost: 1.70,
      time: 'Just Now'
    },
    {
      user: '0x42b9 ... 3B148',
      type: 'Sell',
      amount: 1,
      cost: 1.20,
      time: 'Just Now'
    }
  ];

  return (
    <div className="relative">
      {!isEnabled && <ComingSoonOverlay />}

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl">
        <TableHeader />
        <ActivityTable activities={activities} />

        {/* View History Button */}
        <div className="mt-4 text-center">
          <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-2 rounded-xl hover:from-yellow-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            <span>View Token History</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenActivity;