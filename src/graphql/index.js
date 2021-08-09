import { gql, useQuery } from '@apollo/client';

const query = gql`
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

const getLaunchesPast = ({ offset }) =>
    useQuery(query, {
        variables: { offset },
    });

export default getLaunchesPast;
