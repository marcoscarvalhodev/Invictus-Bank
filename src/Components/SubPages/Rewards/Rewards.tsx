import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
const RewardsHero = React.lazy(() => import('./RewardsHero'));

interface RewardsProps {
  small: boolean;
}

const Rewards = ({ small }: RewardsProps) => {
  return (
    <StyledRewards>
      <React.Suspense fallback={<></>}>
        <RewardsHero small={small} />
      </React.Suspense>
    </StyledRewards>
  );
};

export default Rewards;
