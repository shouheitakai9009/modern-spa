import { Container } from '@/components/common/Container';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/Tabs/tabs';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { technologies } from './technologies';
import type { TechnologyCardType, TechnologyTag } from './technology-card';
import { tagKinds, TechnologyCard } from './technology-card';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // 子要素間の遅延時間
    },
  },
};

interface FullstackJavascripterSectionProps {
  isInViewTechnology: boolean;
}

export const FullstackJavascripterSection = ({
  isInViewTechnology,
}: FullstackJavascripterSectionProps) => {
  const [filteredTechnologies, setFilteredTechnologies] =
    useState<TechnologyCardType[]>(technologies);

  const onClickFilterTechnologies = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { textContent } = e.target as HTMLButtonElement;
    if (textContent === 'All') {
      setFilteredTechnologies(technologies);
      return;
    }
    setFilteredTechnologies(
      technologies.filter((t) => t.tags.includes(textContent as TechnologyTag)),
    );
  };

  return (
    <Tabs
      defaultValue="All"
      className="w-full flex-col items-center justify-center flex"
    >
      <Container className="flex justify-center">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="All" onClick={onClickFilterTechnologies}>
            All
          </TabsTrigger>
          {tagKinds.map((tag) => (
            <TabsTrigger value={tag} onClick={onClickFilterTechnologies}>
              {tag}
            </TabsTrigger>
          ))}
        </TabsList>
      </Container>
      <TabsContent value="All" className="pt-8">
        <motion.div
          className="flex flex-col flex-wrap justify-center md:gap-3 md:!flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredTechnologies.map((technology, key) => (
            <TechnologyCard
              key={key}
              name={technology.name}
              mainTag={technology.mainTag}
              tags={technology.tags}
              image={technology.image}
              link={technology.link}
              description={technology.description}
            />
          ))}
        </motion.div>
      </TabsContent>
      {tagKinds.map((tag) => (
        <TabsContent value={tag} className="pt-8">
          {isInViewTechnology && (
            <motion.div
              className="flex flex-col flex-wrap justify-center md:gap-3 md:!flex-row"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredTechnologies.map((technology, key) => (
                <TechnologyCard
                  key={key}
                  name={technology.name}
                  mainTag={technology.mainTag}
                  tags={technology.tags}
                  image={technology.image}
                  link={technology.link}
                  description={technology.description}
                />
              ))}
            </motion.div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};
