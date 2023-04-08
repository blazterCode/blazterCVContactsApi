type PropsType = {
  clase: string;
  recurso: string;
};
const Picture = ({ clase, recurso }: PropsType) => {
  return (
    <img
      src={recurso === 'Default' ? 'https://i.imgur.com/vIlFc3E.jpg' : recurso}
      alt='foto'
      className={clase}
    />
  );
};

export default Picture;
