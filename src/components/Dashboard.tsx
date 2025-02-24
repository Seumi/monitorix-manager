
import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Server, Database, Cloud } from 'lucide-react';
import { ServerStatus } from './ServerStatus';
import { SystemMetrics } from './SystemMetrics';
import { ProcessViewer } from './ProcessViewer';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-2">系统监控</h1>
        <p className="text-muted-foreground mb-8">实时监控服务器状态和性能指标</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="stat-card">
            <div className="flex items-center space-x-4">
              <Server className="w-8 h-8 text-primary" />
              <div>
                <div className="stat-value">4/4</div>
                <div className="stat-label">服务器在线</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="flex items-center space-x-4">
              <Activity className="w-8 h-8 text-primary" />
              <div>
                <div className="stat-value">98.5%</div>
                <div className="stat-label">系统正常运行时间</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="flex items-center space-x-4">
              <Database className="w-8 h-8 text-primary" />
              <div>
                <div className="stat-value">256GB</div>
                <div className="stat-label">数据库存储</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="flex items-center space-x-4">
              <Cloud className="w-8 h-8 text-primary" />
              <div>
                <div className="stat-value">12</div>
                <div className="stat-label">活跃服务</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ServerStatus />
          <SystemMetrics />
        </div>

        <div className="w-full">
          <ProcessViewer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
