
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  File, 
  Folder, 
  FolderPlus, 
  Upload, 
  Download, 
  Trash,
  FolderOpen
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  size?: string;
  modified: string;
}

export const FileManager = () => {
  const { toast } = useToast();
  const [currentPath, setCurrentPath] = useState('/home/user');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const files: FileItem[] = [
    { id: '1', name: 'Documents', type: 'folder', modified: '2024-03-20 10:30' },
    { id: '2', name: 'Downloads', type: 'folder', modified: '2024-03-19 15:45' },
    { id: '3', name: 'Pictures', type: 'folder', modified: '2024-03-16 11:25' },
    { id: '4', name: 'Music', type: 'folder', modified: '2024-03-21 09:15' },
    { id: '5', name: 'Videos', type: 'folder', modified: '2024-03-20 14:30' },
    { id: '6', name: 'Projects', type: 'folder', modified: '2024-03-19 16:45' },
    { id: '7', name: 'Backup', type: 'folder', modified: '2024-03-14 13:55' },
    { id: '8', name: 'Desktop', type: 'folder', modified: '2024-03-21 08:30' },
    { id: '9', name: 'Applications', type: 'folder', modified: '2024-03-20 17:15' },
    { id: '10', name: 'Library', type: 'folder', modified: '2024-03-19 12:40' },
    { id: '11', name: 'config.json', type: 'file', size: '2.5KB', modified: '2024-03-18 09:15' },
    { id: '12', name: 'data.csv', type: 'file', size: '1.8MB', modified: '2024-03-17 14:20' },
    { id: '13', name: 'report.pdf', type: 'file', size: '5.2MB', modified: '2024-03-15 16:40' },
    { id: '14', name: 'script.sh', type: 'file', size: '856B', modified: '2024-03-13 10:10' },
    { id: '15', name: 'index.html', type: 'file', size: '12KB', modified: '2024-03-21 11:25' },
    { id: '16', name: 'styles.css', type: 'file', size: '8.4KB', modified: '2024-03-21 11:26' },
    { id: '17', name: 'app.js', type: 'file', size: '45.2KB', modified: '2024-03-21 11:27' },
    { id: '18', name: 'database.sql', type: 'file', size: '2.1MB', modified: '2024-03-20 15:40' },
    { id: '19', name: 'README.md', type: 'file', size: '4.2KB', modified: '2024-03-20 16:15' },
    { id: '20', name: 'package.json', type: 'file', size: '1.2KB', modified: '2024-03-20 16:18' },
    { id: '21', name: 'docker-compose.yml', type: 'file', size: '3.8KB', modified: '2024-03-20 16:20' },
    { id: '22', name: 'nginx.conf', type: 'file', size: '2.9KB', modified: '2024-03-19 14:30' },
    { id: '23', name: '.env', type: 'file', size: '156B', modified: '2024-03-19 14:35' },
    { id: '24', name: '.gitignore', type: 'file', size: '328B', modified: '2024-03-19 14:36' },
    { id: '25', name: 'tsconfig.json', type: 'file', size: '1.4KB', modified: '2024-03-19 14:38' },
    { id: '26', name: 'vite.config.ts', type: 'file', size: '856B', modified: '2024-03-19 14:40' },
    { id: '27', name: 'yarn.lock', type: 'file', size: '286KB', modified: '2024-03-19 14:42' },
    { id: '28', name: 'jest.config.js', type: 'file', size: '720B', modified: '2024-03-19 14:45' },
    { id: '29', name: 'Dockerfile', type: 'file', size: '1.1KB', modified: '2024-03-19 14:48' },
    { id: '30', name: 'LICENSE', type: 'file', size: '1.2KB', modified: '2024-03-19 14:50' }
  ];

  const handleNewFolder = () => {
    toast({
      title: "新建文件夹",
      description: "功能开发中"
    });
  };

  const handleUpload = () => {
    toast({
      title: "上传文件",
      description: "功能开发中"
    });
  };

  const handleDownload = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "请选择要下载的文件",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "下载文件",
      description: "功能开发中"
    });
  };

  const handleDelete = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "请选择要删除的文件",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "删除文件",
      description: "功能开发中"
    });
  };

  const toggleSelect = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <FolderOpen className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">文件管理器</h2>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleNewFolder}>
            <FolderPlus className="mr-1" />
            新建文件夹
          </Button>
          <Button variant="outline" size="sm" onClick={handleUpload}>
            <Upload className="mr-1" />
            上传
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="mr-1" />
            下载
          </Button>
          <Button variant="outline" size="sm" onClick={handleDelete}>
            <Trash className="mr-1" />
            删除
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <Input 
          value={currentPath}
          readOnly
          className="bg-muted"
        />
      </div>

      <div className="space-y-1 max-h-[600px] overflow-y-auto">
        {files.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-2 rounded-lg hover:bg-secondary/50 cursor-pointer ${
              selectedItems.includes(item.id) ? 'bg-secondary' : ''
            }`}
            onClick={() => toggleSelect(item.id)}
          >
            {item.type === 'folder' ? (
              <Folder className="w-5 h-5 text-blue-500 mr-2" />
            ) : (
              <File className="w-5 h-5 text-gray-500 mr-2" />
            )}
            <div className="flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-muted-foreground">
                {item.type === 'file' ? `大小: ${item.size} • ` : ''}
                修改时间: {item.modified}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
