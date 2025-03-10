import { Button } from "./BurgerBtn.styled";


const BurgerBtn = ({ fn }) => {
  return (
    <Button
      type="button"
      aria-label="Open mobile menu"
      onClick={() => fn(true)}
    >
      <svg width={24} height={24}>
        <use xlinkHref="/sprite.svg#icon-burgermenu"></use>
      </svg>
    </Button>
  );
};

export default BurgerBtn;
