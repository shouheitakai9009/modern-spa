import { Label } from '@/components/common/Label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/common/RadioGroup/radio-group';
import { Text } from '@/components/common/Text';

export const OptionsArea = () => {
  return (
    <div>
      <Text className="font-bold mb-2">Framework</Text>
      <RadioGroup className="flex flex-wrap mb-5">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="react" id="react" />
          <Label htmlFor="react">React</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="nestjs" id="nestjs" />
          <Label htmlFor="nestjs">NestJS</Label>
        </div>
      </RadioGroup>
      <Text className="font-bold mb-2">Testing</Text>
      <RadioGroup className="flex flex-wrap mb-5">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vitest" id="vitest" />
          <Label htmlFor="vitest">Vitest</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="storybook" id="storybook" />
          <Label htmlFor="storybook">Storybook</Label>
        </div>
      </RadioGroup>
      <Text className="font-bold mb-2">State management</Text>
      <RadioGroup className="flex flex-wrap mb-5">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recoil" id="recoil" />
          <Label htmlFor="recoil">Recoil</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="reactquery" id="reactquery" />
          <Label htmlFor="reactquery">Tanstack Query</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
