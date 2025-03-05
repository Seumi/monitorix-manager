
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const SystemMetrics = () => {
  const data = [
    { time: '00:00', cpu: 45, memory: 62 },
    { time: '03:00', cpu: 52, memory: 58 },
    { time: '06:00', cpu: 48, memory: 65 },
    { time: '09:00', cpu: 70, memory: 75 },
    { time: '12:00', cpu: 58, memory: 68 },
    { time: '15:00', cpu: 63, memory: 72 },
    { time: '18:00', cpu: 45, memory: 65 },
    { time: '21:00', cpu: 55, memory: 70 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">系统资源使用率</h2>
      <div className="h-[320px] p-3 bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg shadow-inner">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                borderRadius: '8px', 
                padding: '10px', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: 'none'
              }} 
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="cpu"
              name="CPU使用率"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4, fill: '#10B981', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#059669', strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="memory"
              name="内存使用率"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 4, fill: '#6366F1', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#4F46E5', strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
