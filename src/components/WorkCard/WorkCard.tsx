import styles from "./workcard.module.css";

type Props = {
  dark: boolean;
  company: string;
  jobtitle: string;
  duration: string;
  location: string;
  description: string;
  link: string
};

const WorkCard = ({
  dark,
  company,
  jobtitle,
  duration,
  location,
  description,
  link
}: Props) => {
  return (
    <div className={dark ? styles.workCardDark : styles.workCard}>
      <p>
        <strong>{jobtitle}</strong>
      </p>
      <h4>
        <a href={link}>{company}</a>
      </h4>
      <span className="small">
        {duration} | <i className='small'>{location}</i>
      </span>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
