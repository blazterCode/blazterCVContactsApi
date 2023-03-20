type PropsType = {
  clase: string;
};
const Picture = ({ clase }: PropsType) => {
  return (
    <img src='https://i.imgur.com/vIlFc3E.jpg' alt='foto' className={clase} />
  );
};

export default Picture;
