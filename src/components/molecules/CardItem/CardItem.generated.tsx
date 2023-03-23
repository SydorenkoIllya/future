

import { gql } from '@apollo/client';
export type CardItemFragment = { __typename?: 'Rocket', id?: string | null, description?: string | null, name?: string | null };

export const CardItemFragmentDoc = gql`
    fragment CardItem on Rocket {
  id
  description
  name
}
    `;