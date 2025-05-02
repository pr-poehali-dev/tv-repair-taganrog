
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Advertisement } from "@/components/Advertisement";

export default function Index() {
  const [adsEnabled, setAdsEnabled] = useState(true);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2 text-primary">Добро пожаловать!</h1>
      <p className="text-muted-foreground mb-6">Добро пожаловать на нашу платформу</p>
      
      {/* Включить/выключить рекламу */}
      <div className="flex items-center space-x-2 mb-8">
        <Button 
          variant={adsEnabled ? "default" : "outline"} 
          onClick={() => setAdsEnabled(true)}
        >
          Показать рекламу
        </Button>
        <Button 
          variant={!adsEnabled ? "default" : "outline"} 
          onClick={() => setAdsEnabled(false)}
        >
          Скрыть рекламу
        </Button>
      </div>

      {/* Верхний баннер */}
      {adsEnabled && (
        <div className="mb-8">
          <Advertisement 
            type="banner" 
            placement="top" 
            adId="main-banner-01"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="content">
            <TabsList className="mb-4">
              <TabsTrigger value="content">Основное</TabsTrigger>
              <TabsTrigger value="settings">Настройки рекламы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Наши услуги</CardTitle>
                  <CardDescription>Исследуйте наши ведущие решения</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Здесь будет размещено основное содержимое страницы. Обычно это текст, изображения, видео и другие элементы.</p>
                  <p className="mt-4">В этом месте также могут быть размещены нативные рекламные объявления, которые выглядят как часть контента.</p>
                </CardContent>
              </Card>
              
              {/* Встроенная реклама между контентом */}
              {adsEnabled && (
                <div className="my-6">
                  <Advertisement 
                    type="banner" 
                    placement="content" 
                    adId="content-ad-01"
                  />
                </div>
              )}
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Больше информации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Дополнительный контент, который может заинтересовать пользователей.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки рекламы</CardTitle>
                  <CardDescription>Управляйте отображением рекламы на сайте</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Типы рекламы</h3>
                      <p className="text-sm text-muted-foreground">Доступны различные типы рекламных блоков: баннеры, боковые панели, всплывающие окна.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-2">Размещение</h3>
                      <p className="text-sm text-muted-foreground">Рекламу можно размещать в различных частях страницы для максимальной эффективности.</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-2">Идентификаторы</h3>
                      <p className="text-sm text-muted-foreground">Каждый рекламный блок имеет уникальный идентификатор для отслеживания и аналитики.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          {/* Боковая панель с рекламой */}
          <Card>
            <CardHeader>
              <CardTitle>Информация</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">Полезные ссылки и информация для пользователей.</p>
              
              {adsEnabled && (
                <div className="mb-4">
                  <Advertisement 
                    type="sidebar" 
                    placement="sidebar" 
                    adId="sidebar-ad-01"
                  />
                </div>
              )}
              
              <div className="text-sm text-muted-foreground mt-4">
                <p>© 2025 Наша Платформа</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Нижний баннер */}
      {adsEnabled && (
        <div className="mt-8">
          <Advertisement 
            type="banner" 
            placement="bottom" 
            adId="footer-banner-01"
          />
        </div>
      )}
    </div>
  );
}
