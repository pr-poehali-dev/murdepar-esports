import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const matches = [
  {
    id: 1,
    opponent: "CyberWolves",
    date: "25 мая 2024",
    time: "18:00",
    tournament: "Spring Championship",
    status: "upcoming",
    prize: "$50,000",
  },
  {
    id: 2,
    opponent: "Digital Dragons",
    date: "28 мая 2024",
    time: "20:00",
    tournament: "Pro League",
    status: "upcoming",
    prize: "$25,000",
  },
  {
    id: 3,
    opponent: "EliteGamers",
    date: "18 мая 2024",
    time: "19:00",
    tournament: "Major Cup",
    status: "won",
    score: "3:1",
    prize: "$75,000",
  },
  {
    id: 4,
    opponent: "TechTitans",
    date: "12 мая 2024",
    time: "17:30",
    tournament: "Regional Finals",
    status: "won",
    score: "3:0",
    prize: "$30,000",
  },
];

const MatchSchedule = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "won":
        return <Badge className="bg-green-600/80 text-white">Победа</Badge>;
      case "lost":
        return <Badge className="bg-red-600/80 text-white">Поражение</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-600/80 text-white">Предстоит</Badge>;
      default:
        return <Badge className="bg-gray-600/80 text-white">TBD</Badge>;
    }
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-montserrat">
            Расписание матчей
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Предстоящие игры и результаты последних матчей
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {matches.map((match) => (
            <Card
              key={match.id}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <CardTitle className="text-white text-xl">
                        MurDepar <span className="text-purple-400">vs</span>{" "}
                        {match.opponent}
                      </CardTitle>
                      {getStatusBadge(match.status)}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>📅 {match.date}</span>
                      <span>🕐 {match.time}</span>
                      <span>🏆 {match.tournament}</span>
                      <span className="text-green-400">💰 {match.prize}</span>
                    </div>
                  </div>

                  {match.score && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        {match.score}
                      </div>
                      <div className="text-sm text-gray-400">Счет</div>
                    </div>
                  )}

                  {match.status === "upcoming" && (
                    <div className="text-right">
                      <div className="text-lg font-semibold text-blue-400 mb-1">
                        Скоро
                      </div>
                      <div className="text-sm text-gray-400">
                        Следите за обновлениями
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchSchedule;
