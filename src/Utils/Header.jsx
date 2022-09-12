import Card from "../components/Header-card";
import { AllData } from "../Context/HomeContext";
import icon from "../assets/icons/card-0.svg";
const Header = () => {
  const [res] = AllData();
  return (
    <div className="bg-mainImage mainBackground bg-no-repeat py-16 min-w-full bg-cover">
      <div className="container">
        <h2 className="text-[3rem] font-[500] text-white mb-12">
          Виртуальные номера для приема СМС
        </h2>
        <p className="text-[#9e9e9e] text-[1.125rem] mb-24">
          Хотите зарегистрировать второй аккаунт телеграм или страницу в
          Инстаграм, ВК?
        </p>
        <div className="grid lg:grid-cols-12 md:grid-cols-6 xl:grid-cols-12 gap-8">
          <div className="col-span-3">
            <Card img={icon} titleSize="2rem" border="none" borderSize={0} />
          </div>
          {res.map((item) => (
            <div key={item.title} className="col-span-3">
              <Card arrowStyle="hidden" img={item.icon} title={item.title} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="w-full max-w-[685px] px-[1.25rem] py-[1rem] bg-[#C9AA80] text-white mt-[3.75rem] rounded-[10px] text-center">
            Купить прием смс на временный номер
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
