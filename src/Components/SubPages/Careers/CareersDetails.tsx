import React from 'react';
import { StyledCareersDetails } from '../../../Styles/SubPages/Careers/CareersDetails.styled';
import { careerProps } from './Careers';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import UserContext from '../../../UseContext';
import {useLocation } from 'react-router-dom';
import NoMatch from '../../../NoMatch';

const CareersDetails = () => {
  const [itemState, setItemState] = React.useState<careerProps | null>(null);
  const item = React.useContext(UserContext);
  const location = useLocation();
  const [locationState, setLocationState] = React.useState(false);

  React.useEffect(() => {
    if (item) {
      setItemState(item);
      setLocationState(
        location.pathname === `/careers/job/${item.id}` ? true : false
      );
      
    }
  }, [item, location, locationState]);

  if (itemState && locationState)
    return (
      <StyledCareersDetails className='container'>
        <StyledHeadings as='h1'>{itemState.title}</StyledHeadings>
        <StyledHeadings as='h1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          neque, quisquam nobis nisi soluta cum explicabo aliquid necessitatibus
          facilis ab libero dolore odit vero! Quidem veritatis expedita sunt
          impedit rerum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aspernatur architecto, reiciendis minima aut qui soluta dolorem
          eum reprehenderit corporis! Numquam voluptas consequatur laboriosam
          placeat quasi, aut sint sit quia sed! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis quis sunt quas possimus ut
          nostrum veritatis a illo doloremque saepe, ea officia hic ipsa
          deserunt laborum recusandae reprehenderit temporibus quos!
        </StyledHeadings>
      </StyledCareersDetails>
    );

    else return <NoMatch />

    
};

export default CareersDetails;
