import React, { useState } from "react";
import NextLink from "next/link";
import { Container, Flex, Button, useToast, Box } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { NeedItem, ContactForm } from "../../components/service";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { map } from "ramda";
import steps from "../../lib/coursesData";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Course = () => {
  const toast = useToast();
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const [selectedNeed, setSelectedNeed] = useState(false);

  const sendContactForm = () => {
    if (activeStep === steps.length - 1) {
      nextStep();
      toast({
        title: "Message envoyé !",
        description:
          "Je vous re-contacte au plus vite pour discuter avec vous de votre projet, à bientôt.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      nextStep();
    }
  };

  return (
    <Layout title='Inkdrop'>
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {activeStep === 0 &&
              map(
                (need) => (
                  <NeedItem
                    title={need.title}
                    description={need.description}
                    image={need.image}
                    selectedNeed={selectedNeed}
                    setSelectedNeed={setSelectedNeed}
                  />
                ),
                content
              )}
            {activeStep === 2 && (
              <ContactForm sendContactForm={sendContactForm} />
            )}
          </Step>
        ))}
      </Steps>
      <Flex flexDir='column' width='100%'>
        <Container>
          {activeStep === steps.length ? (
            <Box align='center' my={8}>
              <NextLink href='/'>
                <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                  Revenir à la page d'accueil
                </Button>
              </NextLink>
            </Box>
          ) : (
            <Flex width='100%' justify='center' mt={4}>
              <Button
                isDisabled={activeStep === 0}
                mr={4}
                onClick={prevStep}
                size='sm'
                variant='ghost'
              >
                Précédent
              </Button>
              <Button size='sm' onClick={sendContactForm}>
                {activeStep === steps.length - 1 ? "Envoyer" : "Suivant"}
              </Button>
            </Flex>
          )}
        </Container>
      </Flex>
    </Layout>
  );
};

export default Course;
