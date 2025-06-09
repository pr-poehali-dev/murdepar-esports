import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const news = [
  {
    id: 1,
    title: "Победа в турнире Cyber Championship 2024",
    description:
      "MurDepar одержала уверенную победу в финале, обыграв соперников со счетом 3:1",
    date: "15 мая 2024",
    category: "Турнир",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Новый игрок присоединился к команде",
    description:
      "Встречайте Phoenix - нового игрока поддержки с впечатляющим опытом",
    date: "8 мая 2024",
    category: "Команда",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Анонс участия в World Cyber Games",
    description:
      "Готовимся к самому важному турниру года - тренировки идут полным ходом",
    date: "2 мая 2024",
    category: "Анонс",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white font-montserrat">
            Последние новости
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Будьте в курсе всех событий команды MurDepar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card
              key={article.id}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600/80 text-white">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white hover:text-purple-300 transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-400 text-sm">
                  {article.date}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
