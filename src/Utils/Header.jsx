import Card from "../components/Header-card";
import { AllData } from "../Context";

const Header = () => {
  const [res] = AllData();
  return (
    <div className="bg-mainImage mainBackground bg-no-repeat h-screen min-w-full bg-cover">
      <div className="container">
        <h2 className="text-[3rem] font-[500] text-white pt-24 mb-7">
          Виртуальные номера для приема СМС
        </h2>
        <p className="text-[#9e9e9e] text-[1.125rem] mb-24">
          Хотите зарегистрировать второй аккаунт телеграм или страницу в
          Инстаграм, ВК?
        </p>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Card titleSize="2rem" border="none" borderSize={0} />
          </div>
          {res.map((item) => (
            <div className="col-span-3">
              <Card arrowStyle="hidden" img={item.icon} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
