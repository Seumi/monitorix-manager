
import React from 'react';
import { Card } from '@/components/ui/card';

export const ServerStatus = () => {
  const servers = [
    { name: 'Web Server 01', status: 'healthy', cpu: '23%', memory: '45%' },
    { name: 'API Server 01', status: 'healthy', cpu: '31%', memory: '52%' },
    { name: 'Database Server', status: 'warning', cpu: '78%', memory: '82%' },
    { name: 'Cache Server', status: 'healthy', cpu: '12%', memory: '34%' },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">服务器状态</h2>
      <div className="space-y-4">
        {servers.map((server) => (
          <div
            key={server.name}
            className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg transition-all duration-300 hover:bg-secondary"
          >
            <div className="flex items-center space-x-3">
              <div className={`status-indicator status-${server.status}`} />
              <span className="font-medium">{server.name}</span>
            </div>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <span>CPU: {server.cpu}</span>
              <span>内存: {server.memory}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
