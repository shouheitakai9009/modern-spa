import { Button } from '@/components/common/Button';
import { Heading } from '@/components/common/Heading';
import { Text } from '@/components/common/Text';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export const SetNumberArea = () => {
  const [goal, setGoal] = useState(250);

  const onGoalChange = (delta: -1 | 1) => setGoal(goal + delta);
  return (
    <div>
      <Heading as="h4">Walk Goal</Heading>
      <Text className="text-secondary-foreground mb-4">
        Set your daily walking goal.
      </Text>
      <div className="flex justify-center items-center gap-3 gap-x-6 mb-4">
        <Button
          size="icon"
          variant="secondary"
          onClick={() => onGoalChange(-1)}
        >
          <Minus size={18} />
        </Button>
        <div className="flex flex-col items-center">
          <Heading as="h2">{goal}</Heading>
          <Text className="text-sm">CALORIES/DAY</Text>
        </div>
        <Button size="icon" variant="secondary" onClick={() => onGoalChange(1)}>
          <Plus size={18} />
        </Button>
      </div>
      <div className="flex justify-center">
        <Button>Set your new goal</Button>
      </div>
    </div>
  );
};
