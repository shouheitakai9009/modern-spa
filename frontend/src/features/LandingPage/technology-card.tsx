import { buttonVariants } from '@/components/common/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/common/Card';
import { cn } from '@/utils/classnames';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/common/Badge';

export type TechnologyTag =
  | 'State'
  | 'Frontend'
  | 'Backend'
  | 'Testing'
  | 'Styling'
  | 'Build'
  | 'Other';

export const tagKinds = [
  'State',
  'Frontend',
  'Backend',
  'Testing',
  'Styling',
  'Build',
  'Other',
] as const;

export type TechnologyCardType = {
  name: string;
  image: string;
  mainTag: string;
  tags: TechnologyTag[];
  description: JSX.Element;
  link: string;
};

const itemVariants = {
  hidden: { translateX: -100, opacity: 0 },
  visible: { translateX: 0, opacity: 1 },
};

export const TechnologyCard = (props: TechnologyCardType) => {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, translateX: -100 }}
      viewport={{ once: true }}
    >
      <Card className="sm:w-full md:max-w-[350px] mb-4">
        <CardHeader>
          <CardTitle className="flex flex-col">
            <div>{props.name}</div>
            <div className="mt-2 flex flex-wrap items-center">
              <Badge className="mr-1">{props.mainTag}</Badge>
              {props.tags.map((tag) => (
                <Badge variant="outline" className="mr-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardTitle>
          <CardDescription className="h-20 py-2">
            {props.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={props.image}
            className="w-full object-cover aspect-square rounded"
          />
        </CardContent>
        <CardFooter className="flex items-center">
          <Link
            to={props.link}
            target="_blank"
            className={cn(
              'w-full',
              buttonVariants({ size: 'lg', variant: 'secondary' }),
            )}
          >
            View Documentation
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
