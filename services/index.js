import { request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPlayers = async () => {
  const query = gql`
    query Players {
      players {
        firstName
        lastName
        nickName
        victory
        defeat
        photo {
          url
        }
      }
    }`

  const result = await request(graphqlAPI, query)
  return result.players
}

export const getMatchs = async () => {
  const query = gql`
    query GetMatchs {
        matchs {
          id
          team1 {
            id
            firstName
            lastName
          }
          team2 {
            id
            firstName
            lastName
          }
          scoreTeam1
          scoreTeam2
          scoreToWin
          date
          slug
          thumbnail {
            url
          }
        }
      }
  `;

  const result = await request(graphqlAPI, query);
  return result.matchs
};

export const getMatchDetails = async (slug) => {
  const query = gql`
    query GetMatchDetails($slug : String!) {
        matchs(where: {slug: $slug}) {
          id
          team1 {
            id
            firstName
            lastName
          }
          team2 {
            id
            firstName
            lastName
          }
          scoreTeam1
          scoreTeam2
          scoreToWin
          date
          slug
          thumbnail {
            url
          }
        }
      }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.matchs
};