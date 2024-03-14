import SectionLayout from "./layouts/section-layout";

interface Contact {
  name: string;
  link?: string;
  description?: string;
}

const contacts: Contact[] = [
  {
    name: "Телефон",
    link: "tel+8 (836) 231 03 30",
    description: "8 (836) 231 03 30",
  },
  { name: "Адрес", description: "г. Йошкар-Ола, ул. Строителей 54" },
  {
    name: "e-mail",
    link: "mailto:oooprorab23@yandex.ru",
    description: "oooprorab23@yandex.ru",
  },
  {
    name: "Исполнительный директор, Екатерина",
    link: "tel++7 (918) 983 86 99",
    description: "+7 (918) 983 86 99",
  },
  {
    name: "Рукводитель отдела продаж, Роман",
    link: "tel++7 (920) 029 93 00",
    description: "+7 (920) 029 93 00",
  },
];

const Contatcs = () => {
  return (
    <SectionLayout title="Контакты">
      <div>
        {contacts.map((el) => (
          <p key={el.name}>
            <span className="font-bold text-gray-900">{el.name}: </span>
            {el.link ? (
              <a className="font-light text-gray-900" href={el.link}>
                {el.description}
              </a>
            ) : (
              <span className="font-light text-gray-900">{el.description}</span>
            )}
          </p>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Contatcs;
