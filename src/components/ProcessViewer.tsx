
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Cpu, Terminal } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Process {
  id: string;
  name: string;
  cpu: string;
  memory: string;
  status: 'running' | 'stopped' | 'sleeping';
}

export const ProcessViewer = () => {
  const [command, setCommand] = useState('');
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const { toast } = useToast();

  const processes: Process[] = [
    { id: '1', name: 'nginx', cpu: '2.5%', memory: '128MB', status: 'running' },
    { id: '2', name: 'mongodb', cpu: '4.2%', memory: '512MB', status: 'running' },
    { id: '3', name: 'redis', cpu: '1.8%', memory: '256MB', status: 'running' },
    { id: '4', name: 'node', cpu: '5.1%', memory: '384MB', status: 'running' },
    { id: '5', name: 'postgres', cpu: '3.7%', memory: '448MB', status: 'running' },
    { id: '6', name: 'apache2', cpu: '1.2%', memory: '156MB', status: 'running' },
    { id: '7', name: 'mysql', cpu: '3.9%', memory: '624MB', status: 'running' },
    { id: '8', name: 'docker', cpu: '2.8%', memory: '892MB', status: 'running' },
    { id: '9', name: 'elasticsearch', cpu: '6.4%', memory: '1.2GB', status: 'running' },
    { id: '10', name: 'prometheus', cpu: '1.5%', memory: '334MB', status: 'running' },
    { id: '11', name: 'grafana', cpu: '0.8%', memory: '168MB', status: 'running' },
    { id: '12', name: 'rabbitmq', cpu: '2.1%', memory: '276MB', status: 'running' },
    { id: '13', name: 'jenkins', cpu: '0.2%', memory: '512MB', status: 'sleeping' },
    { id: '14', name: 'php-fpm', cpu: '1.7%', memory: '224MB', status: 'running' },
    { id: '15', name: 'memcached', cpu: '0.9%', memory: '128MB', status: 'running' }
  ];

  const executeCommand = () => {
    if (!command.trim()) {
      toast({
        title: "错误",
        description: "请输入要执行的命令",
        variant: "destructive",
      });
      return;
    }

    // 模拟命令执行
    const output = `执行命令: ${command}\n> 模拟输出结果`;
    setCommandOutput(prev => [...prev, output]);
    setCommand('');
    
    toast({
      title: "成功",
      description: "命令已执行",
    });
  };

  return (
    <div className="space-y-6">
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
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  process.status === 'running' 
                    ? 'bg-green-100 text-green-800'
                    : process.status === 'sleeping'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {process.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">终端命令</h2>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="输入命令..."
              className="font-mono"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  executeCommand();
                }
              }}
            />
            <Button onClick={executeCommand}>执行</Button>
          </div>

          {commandOutput.length > 0 && (
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm max-h-60 overflow-y-auto">
              {commandOutput.map((output, index) => (
                <div key={index} className="whitespace-pre-wrap">{output}</div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
