/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "2024 Management Consultancy Industry Trends",
    url: "/insights/member-insights-2024-management-consultancy-industry-trends",
    image:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/w_650,h_800,c_fill,g_north/v1711463514/miranda_naiman_xlxc23.jpg",
  },
  {
    id: 2,
    title: "2024 International Finance & Development Industry Trends",
    url: "/insights/member-insights-2024-international-finance-and-development-trends",
    image:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/v1711449462/malado_kxil5y.jpg",
  },
];

const RelatedArticle = ({ omit = null }) => {
  return (
    <section className="container mt-16">
      <div className="max-w-full lg:mx-16">
        <hr className="my-12 max-w-md h-1 bg-dawn-500" />
        <h3 className="text-4xl font-bold mb-8">More insights</h3>
        <div className="grid grid-cols-3 gap-8">
          {articles
            .filter((article) => article.id !== omit)
            .map((article, i) => (
              <Link key={i} href={article.url}>
                <img
                  className="object-cover h-[250px] w-full mb-4"
                  src={article.image}
                  alt=""
                />
                <p className="font-libreb font-bold">{article.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticle;
