import ContentBox from "../components/ContentBox/ContentBox";

const Contact = () => {
  return (
    <ContentBox column={false}>
      <div>
        <p>
          Orignally, from Durban, South Africa, I have spent the last few years
          travelling and working for tech companies, in this order:
        </p>
        <ul>
          <li>Sydney, Australia </li>
          <li>Back to Durban</li>
          <li>Cape Town, South Africa</li>
          <li>Stockholm, Sweden</li>
          <li>Back to Cape Town</li>
        </ul>
        <p>
          On my off days, you'll find me surfing, writing, building hacky apps
          in NodeJS, and hanging out with my daughter.
        </p>
        <p>
          I'm currently based in Cape Town, South Africa, heading up the
          payments product team at <a href='yoco.com'>Yoco</a>.
        </p>
        <h3 className="accent">Get in touch</h3>
        <p><a href="mailto:bouwermichael@gmail.com">bouwermichael@gmail.com</a></p>
        <p><a href="https://www.linkedin.com/in/bouwermichael/">LinkedIn</a></p>
      </div>
    </ContentBox>
  );
};

export default Contact;
