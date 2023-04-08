type PropsType = {
  nameClass: string;
};
const Icon = ({ nameClass }: PropsType) => {
  return <i className={nameClass}></i>;
};

export default Icon;
