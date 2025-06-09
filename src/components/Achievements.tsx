import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: 1,
    title: "Cyber Championship 2024",
    place: "1 место",
    prize: "$100,000",
    date: "2024",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Regional Pro League",
    place: "2 место",
    prize: "$50,000",
    date: "2024",
    icon: "🥈",
  },
  {
    id: 3,
    title: "Winter Tournament",
    place: "1 место",
    prize: "$75,000",
    date: "2023",
    icon: "🏆",
  },
  {
    id: 4,
    title: "Major Cup Finals",
    place: "3 место",
    prize: "$25,000",
    date: "2023",
    icon: "🥉",
  },
];

const stats = [
  { label: "Всего турниров", value: "24", icon: "🎮" },
  { label: "Общий призовой фонд", value: "$300K+", icon: "💰" },
  { label: "Винрейт", value: "78%", icon: "📈" },
  { label: "Лет в киберспорте", value: "4", icon: "⭐" },
];

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white font-montserrat">
            Достижения
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Наши победы и статистика за все время выступлений
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-purple-500/20 text-center backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <div className="text-4xl mr-4">{achievement.icon}</div>
                <div className="flex-1">
                  <CardTitle className="text-white text-xl mb-2">
                    {achievement.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={`${
                        achievement.place === "1 место"
                          ? "bg-yellow-600/80"
                          : achievement.place === "2 место"
                            ? "bg-gray-600/80"
                            : "bg-orange-600/80"
                      } text-white`}
                    >
                      {achievement.place}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-500/50 text-purple-300"
                    >
                      {achievement.date}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Призовые:</span>
                  <span className="text-2xl font-bold text-green-400">
                    {achievement.prize}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
