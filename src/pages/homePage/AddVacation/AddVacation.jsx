import Button from "../../../shared/components/Button/Button";
import cosmonautmob from "../../../shared/images/mobile/cosmonautmob.png";
const AddVacation = () => {
  return (
    <div>
      <img src={cosmonautmob} alt="cosmonaut img" />
      <h3>разместить вакансию</h3>
      <p>Работодатель смогут найти вас и предложить отличную работу.</p>
      <Button text="разместить вакансию" />
    </div>
  );
};
export default AddVacation;
