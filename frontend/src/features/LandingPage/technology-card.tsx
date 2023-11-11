import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export type TechnologyCardType = {
  name: string;
  image: string;
  badge: string;
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
    >
      <Card className="sm:w-full md:max-w-[350px] mb-4">
        <CardHeader>
          <CardTitle className="flex items-center">
            {props.name}
            <Badge className="ml-2">{props.badge}</Badge>
          </CardTitle>
          <CardDescription className="h-20">
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
              "w-full",
              buttonVariants({ size: "lg", variant: "secondary" })
            )}
          >
            View Documentation
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
