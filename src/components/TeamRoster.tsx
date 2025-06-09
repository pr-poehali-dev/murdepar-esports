import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const players = [
  {
    id: 1,
    nickname: "56k",
    realName: "Алексей Морозов",
    role: "Стрелок",
    country: "RU",
    rating: 2840,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    nickname: "Komp3rs",
    realName: "Дмитрий Волков",
    role: "Капитан",
    country: "RU",
    rating: 2795,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    nickname: "Apostol",
    realName: "Екатерина Смирнова",
    role: "Поддержка",
    country: "RU",
    rating: 2720,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332446c?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    nickname: "Patci",
    realName: "Михаил Петров",
    role: "Танк",
    country: "RU",
    rating: 2680,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    nickname: "Ka1eveZy",
    realName: "Анна Козлова",
    role: "Стратег",
    country: "RU",
    rating: 2750,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const TeamRoster = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-montserrat">
            Состав команды
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Профессиональные игроки с многолетним опытом в киберспорте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {players.map((player) => (
            <Card
              key={player.id}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-500/30">
                  <AvatarImage src={player.avatar} alt={player.nickname} />
                  <AvatarFallback className="bg-purple-600 text-white text-xl">
                    {player.nickname.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-purple-300 text-xl font-montserrat">
                  {player.nickname}
                </CardTitle>
                <p className="text-gray-400 text-sm">{player.realName}</p>
              </CardHeader>

              <CardContent className="text-center space-y-3">
                <Badge
                  variant="outline"
                  className="border-purple-500/50 text-purple-300"
                >
                  {player.role}
                </Badge>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Рейтинг:</span>
                    <span className="text-purple-300 font-semibold">
                      {player.rating}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Страна:</span>
                    <span className="text-purple-300">{player.country}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRoster;
