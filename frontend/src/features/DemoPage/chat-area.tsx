import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/common/Avatar';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Separator } from '@/components/common/Separator';

import { Text } from '@/components/common/Text';
import { cn } from '@/utils/classnames';
import { SendHorizontal } from 'lucide-react';

interface ChatItem {
  isOwn: boolean;
  message: string;
}

const chats: ChatItem[] = [
  { isOwn: true, message: 'Hi Shouhei !!' },
  { isOwn: false, message: 'Hello someone' },
  { isOwn: false, message: "What's up ?" },
  { isOwn: true, message: "I'm doing good to work recently." },
  { isOwn: false, message: "I'm glad to hear about your story." },
];

export const ChatArea = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/48905597?v=4" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <Text className="font-bold text-md">shouheitakai9009</Text>
      </div>
      <Separator className="my-4" />
      <div>
        {chats.map((chat, i) => (
          <div
            key={i}
            className={cn('flex', chat.isOwn ? 'justify-end' : 'justify-start')}
          >
            <div
              className={cn(
                'min-w-[100px] max-w-[300px] px-4 py-2 rounded-md mb-3',
                chat.isOwn
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-secondary-foreground',
              )}
            >
              {chat.message}
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4">
        <Input placeholder="Type a message for shouheitakai9009" />
        <Button size="icon">
          <SendHorizontal size="18" />
        </Button>
      </div>
    </div>
  );
};
