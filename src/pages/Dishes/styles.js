import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 84vh;
`;

export const RatingsContainer = styled(Paper)`
  background: white;
  margin: 12px;
  padding: 6px;
  min-width: 300px;
`;

export const RelatedContentContainer = styled.div`
  color: white;
`;
