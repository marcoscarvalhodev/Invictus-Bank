interface jobDetailsProps {
  company: {
    title: string;
    description_1: string;
    description_2: string;
  };
  job_description: {
    title: string;
    description: { description_segment: React.ReactElement }[];
  };

  job_bullets: {
    bullet_your_duty: { title: string; bullets: { bullet: string }[] };
  };
}

type jobDetailsPropsExtended = Array<jobDetailsProps>;

export interface careerProps {
  title: string;
  id: number;
  description: string;
  location: string;
  job_details: jobDetailsPropsExtended;
}

export type careersProps = Array<careerProps>;
