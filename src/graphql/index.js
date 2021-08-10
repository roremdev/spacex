import { gql, useQuery } from '@apollo/client';

const queryLaunchesPast = gql`
    query launchesPast($offset: Int) {
        launchesPast(limit: 12, offset: $offset) {
            id
            mission_name
            launch_date_local
            launch_success
            links {
                wikipedia
                flickr_images
            }
        }
    }
`;

const queryAbout = gql`
    query {
        company {
            links {
                website
                twitter
                flickr
            }
            name
            summary
        }
    }
`;

export const getLaunchesPast = ({ offset }) =>
    useQuery(queryLaunchesPast, {
        variables: { offset },
    });

export const getAbout = () => useQuery(queryAbout);
