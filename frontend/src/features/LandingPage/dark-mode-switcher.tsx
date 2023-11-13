import { Label } from "@/components/common/Label";
import { Switch } from "@/components/common/Switch";
import { useTheme } from "@/components/theme-provider";
import { useId } from "react";

export const DarkModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const darkModeId = useId();
  const onChangeDarkMode = (checked: boolean) => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="h-20 flex items-center justify-end">
      <div className="flex items-center">
        <Label htmlFor={darkModeId} className="text-white">
          Dark mode
        </Label>
        <Switch
          id={darkModeId}
          value={theme}
          onCheckedChange={onChangeDarkMode}
          className="ml-2"
        />
      </div>
    </div>
  );
};
