import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";

const SearchMainSection = () => {
  return (
    <>
      <TextField placeholder="Поиск" />
      <TextField placeholder="Город" />
      <Button text="Найти кандидатов" />
    </>
  );
};
export default SearchMainSection;
