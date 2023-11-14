import { Button } from '@/components/common/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/common/Form';
import { Heading } from '@/components/common/Heading';
import { Input } from '@/components/common/Input';
import { Separator } from '@/components/common/Separator';
import { Github, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const SigninArea = () => {
  const form = useForm();
  return (
    <div>
      <Heading as="h4" className="mb-4">
        Sign In
      </Heading>
      <section className="flex gap-2 justify-center mb-4">
        <Button variant="secondary">
          <Twitter size={18} className="mr-2" />
          Twitter
        </Button>
        <Button variant="secondary">
          <Github size={18} className="mr-2" />
          Github
        </Button>
      </section>
      <Separator className="mb-2" />
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={() => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shouheitakai9009" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={() => (
            <FormItem className="mt-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Passw0rd!" />
              </FormControl>
            </FormItem>
          )}
        />
        <section className="flex justify-center mt-4">
          <Button>Submit</Button>
        </section>
      </Form>
    </div>
  );
};
