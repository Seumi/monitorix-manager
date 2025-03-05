
import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Server, Database, Cloud } from 'lucide-react';
import { ServerStatus } from './ServerStatus';
import { SystemMetrics } from './SystemMetrics';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-3 text-indigo-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600">系统监控</h1>
        <p className="text-muted-foreground mb-10 text-lg">实时监控服务器状态和性能指标</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="stat-card hover:translate-y-[-4px] transition-all duration-300 border-none shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-50/30 rounded-lg"></div>
            <div className="relative flex items-center space-x-5 p-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Server className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <div className="stat-value text-blue-700">4/4</div>
                <div className="stat-label text-blue-600">服务器在线</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card hover:translate-y-[-4px] transition-all duration-300 border-none shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-50/30 rounded-lg"></div>
            <div className="relative flex items-center space-x-5 p-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Activity className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <div className="stat-value text-green-700">98.5%</div>
                <div className="stat-label text-green-600">系统正常运行时间</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card hover:translate-y-[-4px] transition-all duration-300 border-none shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-purple-50/30 rounded-lg"></div>
            <div className="relative flex items-center space-x-5 p-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <Database className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <div className="stat-value text-purple-700">256GB</div>
                <div className="stat-label text-purple-600">数据库存储</div>
              </div>
            </div>
          </Card>

          <Card className="stat-card hover:translate-y-[-4px] transition-all duration-300 border-none shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-indigo-50/30 rounded-lg"></div>
            <div className="relative flex items-center space-x-5 p-6">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Cloud className="w-10 h-10 text-indigo-600" />
              </div>
              <div>
                <div className="stat-value text-indigo-700">12</div>
                <div className="stat-label text-indigo-600">活跃服务</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-none shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm p-6 hover:shadow-2xl transition-all duration-300">
            <ServerStatus />
          </Card>
          <Card className="border-none shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm p-6 hover:shadow-2xl transition-all duration-300">
            <SystemMetrics />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
