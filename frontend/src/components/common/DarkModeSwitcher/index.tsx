import { Label } from '@/components/common/Label';
import { Switch } from '@/components/common/Switch';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/utils/classnames';
import { useId } from 'react';

interface DarkModeSwitcherProps {
  alwaysTextWhite?: boolean;
}

export const DarkModeSwitcher = ({
  alwaysTextWhite = false,
}: DarkModeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const darkModeId = useId();
  const onChangeDarkMode = (checked: boolean) => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className="h-20 flex items-center justify-end">
      <div className="flex items-center">
        <Label
          htmlFor={darkModeId}
          className={cn(
            alwaysTextWhite
              ? 'text-white'
              : 'text-secondary-foreground dark:text-white',
          )}
        >
          Dark mode
        </Label>
        <Switch
          id={darkModeId}
          checked={theme === 'dark'}
          onCheckedChange={onChangeDarkMode}
          className="ml-2"
        />
      </div>
    </div>
  );
};
