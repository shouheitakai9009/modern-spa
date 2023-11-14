import { Container } from '@/components/common/Container';
import { Heading } from '@/components/common/Heading';
import { Text } from '@/components/common/Text';

interface StepItem {
  title: string;
  description: JSX.Element;
}

interface DescriptionItemProps {
  title: string;
  steps: StepItem[];
}

export const StepByStepSection = ({ title, steps }: DescriptionItemProps) => {
  return (
    <Container slideIn>
      <Heading as="h1" className="mt-24 mb-8 text-primary">
        {title}
      </Heading>
      <div>
        {steps.map((item) => (
          <div key={item.title} className="mb-6">
            <Heading as="h3">{item.title}</Heading>
            <Text className="text-lg">{item.description}</Text>
          </div>
        ))}
      </div>
    </Container>
  );
};
