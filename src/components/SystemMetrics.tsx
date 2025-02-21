
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">系统资源使用率</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cpu"
              name="CPU使用率"
              stroke="#10B981"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="memory"
              name="内存使用率"
              stroke="#6366F1"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
