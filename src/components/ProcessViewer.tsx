
import React from 'react';
import { Card } from '@/components/ui/card';
import { Cpu } from 'lucide-react';

interface Process {
  id: string;
  name: string;
  cpu: string;
  memory: string;
  status: 'running' | 'stopped' | 'sleeping';
}

export const ProcessViewer = () => {
  const processes: Process[] = [
    { id: '1', name: 'nginx', cpu: '2.5%', memory: '128MB', status: 'running' },
    { id: '2', name: 'mongodb', cpu: '4.2%', memory: '512MB', status: 'running' },
    { id: '3', name: 'redis', cpu: '1.8%', memory: '256MB', status: 'running' },
    { id: '4', name: 'node', cpu: '5.1%', memory: '384MB', status: 'running' },
    { id: '5', name: 'postgres', cpu: '3.7%', memory: '448MB', status: 'running' },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Cpu className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold">系统进程</h2>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-4 text-sm font-medium text-muted-foreground pb-2 border-b">
          <div>进程名称</div>
          <div>CPU</div>
          <div>内存</div>
          <div>状态</div>
        </div>
        
        {processes.map((process) => (
          <div key={process.id} className="grid grid-cols-4 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors">
            <div className="font-medium">{process.name}</div>
            <div>{process.cpu}</div>
            <div>{process.memory}</div>
            <div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {process.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
