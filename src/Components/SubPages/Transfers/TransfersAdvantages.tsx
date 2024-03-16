import React from 'react';
import { StyledTransfersAdvantages } from '../../../Styles/SubPages/Transfers/TransfersAdvantages.styled';
import LaptopMockup from '../../../assets/svg/transfers/laptop-mockup.png?url';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentTransfers } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

const TransfersAdvantages = () => {
  const [iconState, setIconState] = React.useState(0);

  return (
    <StyledTransfersAdvantages className='container'>
      <div className='advantages-flex'>
        <div className='wrapper'>
          <div className='laptop-mockup-wrapper'>
            {ContentTransfers.advantages.icons.map(
              ({ id, icon, icon_description }) => (
                <div
                  className={`icon-wrapper icon-wrapper-${id} ${
                    iconState === 0 - id && 'icon-wrapper-disable'
                  }`}
                  key={id}
                >
                  <div>
                    <div
                      className='icon'
                      onMouseOver={() => setIconState(id)}
                      onMouseLeave={() => setIconState(0 - id)}
                    >
                      {icon}
                    </div>

                    <div
                      className={`icon-description-wrapper ${
                        iconState === id
                          ? 'icon-description-wrapper-enable'
                          : 'icon-description-wrapper-disable'
                      }`}
                    >
                      <StyledTexts $size='p1' className='icon-description'>
                        {' '}
                        {icon_description}
                      </StyledTexts>
                    </div>
                  </div>
                </div>
              )
            )}

            <img src={LaptopMockup} alt='' className='laptop-mockup' />
          </div>
        </div>
      </div>
      <div className='advantages-flex'>
        <StyledHeadings as='h5'>
          {ContentTransfers.advantages.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-advantages'>
          {ContentTransfers.advantages.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>
          {ContentTransfers.advantages.p_descripion}
        </StyledTexts>
      </div>
    </StyledTransfersAdvantages>
  );
};

export default TransfersAdvantages;
