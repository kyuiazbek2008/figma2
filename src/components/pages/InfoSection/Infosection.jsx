import avatar from "../../../assets/hoto.svg";
import discountImage from "../../../assets/byt.svg";
import scss from "./InfoSection.module.scss";
const InfoSection = () => {
  return (
    <div className={scss.infoContainer}>
      <div className="container">
        <div className={scss.infoContent}>
          <div className={scss.textBox}>
            <div className={scss.profile}>
              <img src={avatar} alt="Dorothy Holland" className={scss.avatar} />
              <div className={scss.ava}>
                <h4 className={scss.name}>Dorothy Holland</h4>
                <p className={scss.role}>Chief Marketing Officer</p>
              </div>
            </div>
            <h2 className={scss.title}>Aliquam Faucibus Odionecom.</h2>
            <p className={scss.description}>
              Duis vestibulum elit vel neque pharetra vulputate. Quisque
              scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin
              molestie accumsan nulla sit.
            </p>
            <p className={scss.description}>
              Namaki duis vestibulum elit vel neque pharetra vulputate. Quisque
              scelerisque nisi urna.
            </p>
          </div>

          <div className={scss.discountBox}>
            <img
              src={discountImage}
              alt="Discount Shoes"
              className={scss.backgroundImage}
            />
            <div className={scss.overlay}>
              <h3 className={scss.discountText}>25 % Discount</h3>
              <p className={scss.discountDesc}>
                Curabitur vulputate arcu odio, facilisis diam accumsan ut. Ut
                imperdiet et leo in vulputate.
              </p>
              <button className={scss.discountButton}>Get Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
