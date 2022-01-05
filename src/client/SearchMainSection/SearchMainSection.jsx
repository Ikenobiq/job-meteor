import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";

const SearchMainSection = () => {
  return (
    <div>
      <TextField placeholder="Поиск" />
      <TextField placeholder="Город" />
      <Button text="Найти кандидатов" />
    </div>
  );
};
export default SearchMainSection;
