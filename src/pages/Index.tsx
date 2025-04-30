
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Wrench, Award, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Шапка */}
      <header className="bg-primary py-4 text-white">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold">ТВ-Сервис Таганрог</div>
          <div className="flex items-center mt-3 md:mt-0">
            <Phone className="h-5 w-5 mr-2" />
            <a href="tel:+79612920913" className="text-lg hover:underline">+7 961 292-09-13</a>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ремонт телевизоров в Таганроге</h1>
              <p className="text-xl mb-6">Быстрый и качественный ремонт телевизоров любых марок с гарантией</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Ремонт телевизора" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Наши услуги */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition duration-300">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Диагностика неисправностей</h3>
              <p className="text-gray-600 mb-4">Точное определение причины поломки телевизора с использованием профессионального оборудования</p>
              <p className="text-purple-700 font-medium">от 500 ₽</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition duration-300">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ремонт ЖК и LED телевизоров</h3>
              <p className="text-gray-600 mb-4">Устранение неисправностей любой сложности в телевизорах Samsung, LG, Sony и других марок</p>
              <p className="text-purple-700 font-medium">от 1000 ₽</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition duration-300">
              <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Замена комплектующих</h3>
              <p className="text-gray-600 mb-4">Профессиональная замена экранов, блоков питания, материнских плат и других деталей</p>
              <p className="text-purple-700 font-medium">от 1500 ₽</p>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button className="bg-purple-700 hover:bg-purple-800">
              Все услуги <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <Award className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Гарантия на работу</h3>
                <p className="text-gray-600">Предоставляем гарантию до 12 месяцев на все выполненные работы</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <Clock className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Работаем без выходных</h3>
                <p className="text-gray-600">Принимаем заявки и выполняем ремонт 7 дней в неделю с 9:00 до 20:00</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <Wrench className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Опытные мастера</h3>
                <p className="text-gray-600">Специалисты с опытом более 10 лет ремонта электроники</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="mb-6 flex items-start">
                <MapPin className="h-6 w-6 text-purple-700 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Таганрог, ул. Петровская, 123</p>
                </div>
              </div>
              
              <div className="mb-6 flex items-start">
                <Phone className="h-6 w-6 text-purple-700 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 961 292-09-13</p>
                </div>
              </div>
              
              <div className="mb-6 flex items-start">
                <Clock className="h-6 w-6 text-purple-700 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Режим работы</h3>
                  <p className="text-gray-600">Ежедневно: 9:00-20:00</p>
                  <p className="text-purple-700 font-semibold mt-1">Работаем без выходных!</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Оставьте заявку</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  <input type="tel" placeholder="Телефон" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  <textarea placeholder="Опишите проблему" rows={3} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                  <Button className="w-full bg-purple-700 hover:bg-purple-800">Отправить заявку</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">ТВ-Сервис Таганрог</div>
            <div className="text-gray-400">© 2025 Все права защищены</div>
            <div className="mt-4 md:mt-0">
              <a href="tel:+79612920913" className="flex items-center hover:text-purple-400 transition">
                <Phone className="h-5 w-5 mr-2" />
                +7 961 292-09-13
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
