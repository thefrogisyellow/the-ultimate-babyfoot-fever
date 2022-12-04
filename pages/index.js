import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { Leaderboard } from "../components/table";
import { getPlayers } from "../services/index";

const Page = ({players}) => {

  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          mb={6}
          p={3}
          textAlign='center'
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          The Ultimate Babyfoot Fever, la meilleure app babyfoot jamais créée !
        </Box>

        {/* Pourquoi pas mettre une section : les dernieres maj de l'app, avec le nom des commits */}

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Classement des meilleurs joueurs de la semaine
          </Heading>
          {/* todo: mettre en dynamique le tableau */}
          <Leaderboard players={players} />
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Les derniers matchs
          </Heading>

        {/* random football image */}
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;


export async function getStaticProps() {
  const players = (await getPlayers()) || [];
  return {
    props: {players},
  };
}
