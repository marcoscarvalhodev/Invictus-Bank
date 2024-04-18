import React from 'react'
import { StyledAboutBullets } from '../../../Styles/SubPages/About/AboutBullets.styled'
import { ContentAbout } from '../../../Contents'
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled'
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled'
import BankCompany from '../../../assets/img/about/bank-company.png'

const AboutBullets = () => {
  return (
    <StyledAboutBullets className='container'> 
      <ul className='advantages-flex flex-1'>
      {ContentAbout.bullets.map(({bullet_item, bullet_title, id}) => {
        return <li key={id} className='flex-1-item'>
          <StyledHeadings as="h6">{bullet_title}</StyledHeadings>
          <StyledTexts $size="p4">{bullet_item}</StyledTexts>
        </li>
      })}
      </ul>

      <div className='advantages-flex flex-2'>
        <img src={BankCompany} alt="supreme bank company image" className='company-image'/>
      </div>
    </StyledAboutBullets>
  )
}

export default AboutBullets