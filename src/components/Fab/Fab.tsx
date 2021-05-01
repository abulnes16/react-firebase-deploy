import "./Fab.css";

interface Props {
  text: string;
  onClick: () => void;
}

export const Fab = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className="fab">
      {text}
    </button>
  );
};
