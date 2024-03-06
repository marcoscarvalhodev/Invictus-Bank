import React from 'react';
import { StyledRewardsHero } from '../../../Styles/SubPages/Rewards/RewardsHero.styled';
import RewardsGift from './RewardsGift';

interface RewardsProps {
  smallState: 'mobile' | 'desktop';
}

const RewardsHero = ({ smallState }: RewardsProps) => {

  return (
    <StyledRewardsHero className='container'>
      <div className='flex-hero'><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit ipsa odio architecto aperiam voluptate, eius minima sed corrupti quas explicabo commodi quisquam in vero pariatur atque consectetur ducimus assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore accusantium eius aperiam velit cupiditate fuga! Molestiae harum illum sunt reprehenderit, nesciunt expedita excepturi. Quaerat natus vero pariatur eaque dignissimos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsa enim odio id quisquam accusamus animi ut quis! Voluptate porro dolorem inventore error maxime reiciendis accusantium, commodi voluptas nostrum fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis dignissimos maiores eum accusantium ex tempora fugit debitis tempore. Obcaecati quae facilis odio quaerat ab totam dicta animi. Ad, dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa esse laudantium ea officiis cumque expedita consequuntur commodi eum saepe optio eos molestiae, ipsum pariatur modi! Laboriosam at in nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio ex assumenda at natus quis cupiditate nobis voluptate voluptas ut possimus consequuntur totam, laboriosam facere omnis labore rem hic distinctio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat rem dignissimos tempore provident adipisci perferendis at, corrupti illo, quisquam molestiae assumenda ipsum officiis cum, totam labore animi fugiat nostrum dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo numquam voluptate ducimus quaerat possimus dolor magnam accusamus aliquam ratione sed, beatae, adipisci tempore deserunt qui pariatur veritatis asperiores commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aspernatur ipsum rerum ipsa expedita, nulla earum eos, hic nemo nihil ea deserunt voluptate quis. Velit maxime eius hic corporis fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eaque officiis quia deleniti ullam ipsa maxime maiores voluptatibus. Nesciunt dolore magnam quam possimus perferendis asperiores odit assumenda recusandae sequi similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur, recusandae odio nulla quidem obcaecati quam. Perspiciatis, eum. Suscipit blanditiis numquam reprehenderit in quidem repellat possimus harum similique? Commodi, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nam similique ullam ea esse, dolorem dicta ad assumenda voluptatibus rem minima unde quaerat eaque reprehenderit maxime deserunt corporis veniam eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aspernatur sit consectetur provident quasi commodi itaque sint eum iste in, minima eligendi recusandae reiciendis debitis aperiam vitae quis, placeat mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, inventore, recusandae quasi sapiente facere magni explicabo perspiciatis adipisci beatae obcaecati incidunt, rem ab cumque reprehenderit ad repudiandae doloribus aliquid itaque.</div>
      
      
      </div>

      <div className='flex-hero flex-hero-2'>
        <RewardsGift />
      </div>
    </StyledRewardsHero>
  );
};

export default RewardsHero;
