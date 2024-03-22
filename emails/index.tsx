import { ContactForm } from '@/lib/types';
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Heading,
  Tailwind,
} from '@react-email/components';

const ContactEmailTemplate = (formData: ContactForm) => {
  const { name, email, content } = formData;
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: 'hsl(234, 24%, 48%)',
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>Contact received from {name}</Preview>
        <Body style={main}>
          <Container>
            <Section>
              <Row>
                <Column>
                  <Heading as='h2' className='text-center text-primary'>
                    A contact form has been submited from{' '}
                    <Link href='https://lucasverdiell.xyz'>
                      lucasverdiell.xyz
                    </Link>
                  </Heading>
                  <Text>
                    <b>Name: </b>
                    {name}
                  </Text>
                  <Text>
                    <b>Email: </b>
                    {email}
                  </Text>
                  <Text>
                    <b>Content: </b>
                    {content}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Row>
              <Column colSpan={2}>
                <Link
                  className='h-9 px-4 py-2 font-head inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow shadow-primary hover:bg-primary/90'
                  href={`mailto:${email}`}
                >
                  Reply
                </Link>
              </Column>
            </Row>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

ContactEmailTemplate.PreviewProps = {
  email: 'lucas@smat.io',
  name: 'Lucas Verdiell',
  content:
    'Cupidatat consequat cupidatat incididunt enim tempor esse commodo cupidatat ea veniam do et eu. In ipsum incididunt aliquip fugiat. Deserunt sunt ex officia sit ad. Irure sit et dolore anim ad non quis voluptate duis nulla non.',
};

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

export default ContactEmailTemplate;
