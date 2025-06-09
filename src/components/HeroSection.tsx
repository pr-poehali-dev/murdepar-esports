import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_70%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 text-lg px-6 py-2">
          Киберспортивная команда
        </Badge>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent font-montserrat">
          MurDepar
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Профессиональная команда, покоряющая вершины киберспорта с 2020 года
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
          >
            Смотреть матчи
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400/50 text-purple-300 hover:bg-purple-600/20 px-8 py-3 text-lg"
          >
            Состав команды
          </Button>
        </div>

        <div className="flex justify-center gap-8 text-center">
          <div className="text-purple-300">
            <div className="text-3xl font-bold text-white">47</div>
            <div className="text-sm uppercase tracking-wider">Побед</div>
          </div>
          <div className="text-purple-300">
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-sm uppercase tracking-wider">Турниров</div>
          </div>
          <div className="text-purple-300">
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-sm uppercase tracking-wider">Игроков</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
