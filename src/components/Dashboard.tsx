
import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Server, Database, Cloud, Sun, CloudRain, ThermometerSun } from 'lucide-react';
import { ServerStatus } from './ServerStatus';
import { SystemMetrics } from './SystemMetrics';
import { ProcessViewer } from './ProcessViewer';
import { FileManager } from './FileManager';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-2">系统监控</h1>
        <p className="text-muted-foreground mb-8">实时监控服务器状态和性能指标</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="stat-card p-6">
            <div className="flex items-center space-x-4">
              <ThermometerSun className="w-8 h-8 text-orange-500" />
              <div>
                <div className="stat-value">24°C</div>
                <div className="stat-label">温度</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card p-6">
            <div className="flex items-center space-x-4">
              <Sun className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="stat-value">晴朗</div>
                <div className="stat-label">天气状况</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card p-6">
            <div className="flex items-center space-x-4">
              <CloudRain className="w-8 h-8 text-blue-500" />
              <div>
                <div className="stat-value">65%</div>
                <div className="stat-label">湿度</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card p-6">
            <div className="flex items-center space-x-4">
              <Cloud className="w-8 h-8 text-blue-400" />
              <div>
                <div className="stat-value">5km/h</div>
                <div className="stat-label">风速</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ServerStatus />
          <SystemMetrics />
        </div>

        <div className="space-y-6">
          <ProcessViewer />
          <FileManager />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
