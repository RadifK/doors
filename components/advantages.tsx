import SectionLayout from "./layouts/section-layout";
import Card, { CardProps } from "./card";

const cards: CardProps[] = [
  {
    image: "/images/cards/cardImage1.png",
    name: "Собственное производство",
    description:
      "Современное высокотехнологичное производство на площади более 10 000 кв.м.",
  },
  {
    image: "/images/cards/cardImage2.png",
    name: "Соблюдаем договоренности",
    description: "Производство двери в четко согласованные сроки",
  },
  {
    image: "/images/cards/cardImage3.png",
    name: "100% качество",
    description: "Контроль качества на всех этапах производства",
  },
  {
    image: "/images/cards/cardImage4.png",
    name: "Надежность",
    description:
      "Используем фурнитуру и комлпектущие только проверенных производителей",
  },
];

const Advantages = () => {
  return (
    <SectionLayout title="Почему стоит выбрать нас">
      <div className="grid tablet:grid-cols-[repeat(2,_minmax(200px,_480px))] gap-[15px] ">
        {cards.map((el) => (
          <Card
            name={el.name}
            key={el.name}
            description={el.description}
            image={el.image}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Advantages;
