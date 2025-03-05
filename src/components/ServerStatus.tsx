import React from 'react';
export const ServerStatus = () => {
  const servers = [{
    name: 'Web Server 01',
    status: 'healthy',
    cpu: '23%',
    memory: '45%'
  }, {
    name: 'API Server 01',
    status: 'healthy',
    cpu: '31%',
    memory: '52%'
  }, {
    name: 'Database Server',
    status: 'warning',
    cpu: '78%',
    memory: '82%'
  }, {
    name: 'Cache Server',
    status: 'healthy',
    cpu: '12%',
    memory: '34%'
  }];
  return <div>
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">服务器状态123</h2>
      <div className="space-y-4">
        {servers.map((server, index) => <div key={server.name} className="flex items-center justify-between p-5 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:translate-x-1" style={{
        animationDelay: `${index * 100}ms`
      }}>
            <div className="flex items-center space-x-3">
              <div className={`status-indicator status-${server.status} animate-pulse`} />
              <span className="font-semibold text-slate-800">{server.name}</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">CPU: {server.cpu}</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full font-medium">内存: {server.memory}</span>
            </div>
          </div>)}
      </div>
    </div>;
};