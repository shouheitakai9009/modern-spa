import { buttonVariants } from '@/components/common/Button';
import { cn } from '@/utils/classnames';
import { Container } from '@/components/common/Container';
import { Heading } from '@/components/common/Heading';
import { Link } from 'react-router-dom';
import { Text } from '@/components/common/Text';

interface DescriptionItemProps {
  title: string;
  description: string;
}

const descriptionItems = [
  {
    title: 'Intuitive UI',
    description:
      '@shadcn/ui provides intuitive UI and you can create components easily and quickly.',
  },
  {
    title: 'Many Components',
    description:
      'You can build a complex feature or a basic component quickly because @shadcn/ui provides built-in components many kind.',
  },
  {
    title: 'Customize Yourself',
    description:
      'You can design for specific users because easily install any component. For example, you can install Card component after typing "npx shadcn-ui@latest" add card on your terminal.',
  },
];

const DescriptionItem = ({ title, description }: DescriptionItemProps) => (
  <section>
    <Heading as="h2">{title}</Heading>
    <Text className="text-lg">{description}</Text>
  </section>
);

export const UiBuildingSection = () => {
  return (
    <Container slideIn>
      <Heading as="h1" className="mb-8 text-primary">
        Ultra-Fast UI Building
      </Heading>
      <div className="flex flex-col md:!flex-row">
        <img
          src="/images/part_mocking.png"
          className="object-cover w-full md:w-1/2 aspect-square rounded shadow-md"
        />
        <div className="md:ml-10 mt-10 md:mt-4 flex flex-col gap-4 justify-between">
          {descriptionItems.map((item) => (
            <DescriptionItem key={item.title} {...item} />
          ))}
          <div className="flex justify-center mt-6">
            <Link
              to="https://ui.shadcn.com/"
              target="_blank"
              className={cn(
                'dark:text-white',
                buttonVariants({ size: 'lg', variant: 'outline' }),
              )}
            >
              View @shadcn/ui Documentation
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
