import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';
import { ReviewImage } from './OptimizedImage';

// Типы для отзывов
interface Review {
  id: number;
  name: string;
  direction: string;
  date: string;
  rating: number;
  text: string;
  shortText: string;
}

// Оптимизированный компонент звездочки для рейтинга
const StarRating: React.FC<{ rating: number }> = React.memo(({ rating }) => {
  const stars = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  }, [rating]);

  return <div className="flex gap-1">{stars}</div>;
});

StarRating.displayName = 'StarRating';

// Оптимизированный компонент карточки отзыва
const ReviewCard: React.FC<{ review: Review }> = React.memo(({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const shouldShowButton = review.text.length > review.shortText.length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col border border-gray-100" style={{ backgroundColor: '#FBF3F0' }}>
      {/* Заголовок карточки */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-arsenal font-bold text-lg text-black mb-1">{review.name}</h3>
          <p className="font-arsenal text-sm text-brand-secondary mb-1">{review.direction}</p>
        </div>
        <div className="text-right">
          <p className="font-arsenal text-sm text-black opacity-60 mb-2">{review.date}</p>
          <StarRating rating={review.rating} />
        </div>
      </div>

      {/* Текст отзыва */}
      <div className="flex-1">
        <p className="font-arsenal text-black leading-relaxed text-sm">
          {isExpanded ? review.text : review.shortText}
        </p>
        
        {/* Кнопка развернуть/свернуть */}
        {shouldShowButton && (
          <button
            onClick={handleToggle}
            className="mt-3 text-brand-secondary hover:text-black font-arsenal font-bold text-sm transition-colors underline"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Свернуть' : 'Читать полностью'}
          </button>
        )}
      </div>
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

// Хук для определения мобильного устройства
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Хук для debouncing
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Основной компонент карусели
const ReviewsCarousel: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const swiperRef = useRef<any>(null);
  
  // Debounced индекс для оптимизации производительности
  const debouncedIndex = useDebounce(currentIndex, 100);

  // Изображения отзывов из /public
  const imageFiles: string[] = useMemo(() => [
    '/IMG_2887.png','/IMG_2888.png','/IMG_2889.png','/IMG_2890.png','/IMG_2891.png','/IMG_2892.png',
    '/IMG_2894.png','/IMG_2895.png','/IMG_2896.png','/IMG_2898.png','/IMG_2899.png','/IMG_2900.png',
    '/IMG_2901.png','/IMG_2902.png','/IMG_2903.png','/IMG_2904.png','/IMG_2905.png','/IMG_2906.png',
    '/IMG_2907.png','/IMG_2908.png','/IMG_2910.png','/IMG_2912.png','/IMG_2913.png','/IMG_2914.png',
    '/IMG_2915.png','/IMG_2916.png','/IMG_2917.png','/IMG_2919.png','/IMG_2920.png','/IMG_2921.png',
    '/IMG_2922.png','/IMG_2923.png','/IMG_2926.png','/IMG_2927.png','/IMG_2930.png','/IMG_2931.png',
    '/IMG_2934.png','/IMG_2935.png','/IMG_2936.png','/IMG_2937.png'
  ], []);

  const uniqueImages = useMemo(() => Array.from(new Set(imageFiles)), [imageFiles]);

  // Мемоизированные отзывы
  const memoizedReviews = useMemo(() => [
    {
      id: 1,
      name: "Анна Петрова",
      direction: "Олимпиадная подготовка",
      date: "15.03.2024",
      rating: 5,
      text: "Прекрасный специалист! Готовилась к Всероссийской олимпиаде с Маратом. Очень ответственный, вежливый, позитивный и терпеливый преподаватель, объясняет все подробно и интересно. В меру строгий. Уроки проходят очень продуктивно, ни одной секунды не тратится впустую. Всегда можно рассчитывать на быструю обратную связь и подсказки по всем возникающим вопросам.",
      shortText: "Прекрасный специалист! Готовилась к Всероссийской олимпиаде с Маратом. Очень ответственный, вежливый, позитивный и терпеливый преподаватель..."
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      direction: "Подготовка к ЕГЭ",
      date: "22.02.2024",
      rating: 5,
      text: "Благодарю Марата за подготовку! Готовлюсь к заключительному этапу. За время занятий заметно вырос уровень английского и уверенность. Рекомендую Марата как отличного специалиста.",
      shortText: "Благодарю Марата за подготовку! За время занятий заметно вырос уровень английского и уверенность..."
    },
    {
      id: 3,
      name: "Елена Козлова",
      direction: "Подготовка к ОГЭ",
      date: "08.01.2024",
      rating: 5,
      text: "Марат ведет подготовку к ОГЭ по английскому. Занятиями довольна. Очень продуктивно. Рекомендую!",
      shortText: "Марат ведет подготовку к ОГЭ по английскому. Занятиями довольна. Очень продуктивно. Рекомендую!"
    },
    {
      id: 4,
      name: "Дмитрий Волков",
      direction: "Изучение английского языка",
      date: "14.12.2023",
      rating: 5,
      text: "Услуга была оказана качественно, исполнитель был очень вежливым и быстро отвечал на все вопросы.",
      shortText: "Услуга была оказана качественно, исполнитель был очень вежливым и быстро отвечал на все вопросы."
    },
    {
      id: 5,
      name: "Мария Соколова",
      direction: "Подготовка к ЕГЭ",
      date: "03.11.2023",
      rating: 5,
      text: "Вчера прошло мое первое занятие, и мне все очень понравилось! Материал объясняется понятно и доступно. Чувствую, что с таким подходом смогу быстро улучшить свой английский и хорошо подготовиться к ЕГЭ. Жду следующих занятий!",
      shortText: "Вчера прошло мое первое занятие, и мне все очень понравилось! Материал объясняется понятно и доступно..."
    },
    {
      id: 6,
      name: "Александр Лебедев",
      direction: "Олимпиадная подготовка",
      date: "20.10.2023",
      rating: 5,
      text: "Все было супер! Сын очень понравился урок. А я лично тоже слушал, человек очень терпеливый и все очень хорошо объясняет.",
      shortText: "Все было супер! Сын очень понравился урок. А я лично тоже слушал, человек очень терпеливый и все очень хорошо объясняет."
    },
    {
      id: 7,
      name: "Ольга Новикова",
      direction: "Олимпиадная подготовка",
      date: "05.09.2023",
      rating: 5,
      text: "Занимался с Маратом олимпиадным английским. Провел пробное занятие и уверен, что буду заниматься именно с этим репетитором. Марат добавил меня в олимпиадную группу, с каждым разделом посвященным отдельной части Олимпиады, что очень удобно.",
      shortText: "Занимался с Маратом олимпиадным английским. Провел пробное занятие и уверен, что буду заниматься именно с этим репетитором..."
    },
    {
      id: 8,
      name: "Сергей Морозов",
      direction: "Изучение английского языка",
      date: "18.08.2023",
      rating: 5,
      text: "Занятия проходят в комфортной атмосфере, материал объясняется интересно и преподаватель находит индивидуальный подход.",
      shortText: "Занятия проходят в комфортной атмосфере, материал объясняется интересно и преподаватель находит индивидуальный подход."
    },
    {
      id: 9,
      name: "Татьяна Воробьева",
      direction: "Олимпиадная подготовка",
      date: "12.07.2023",
      rating: 5,
      text: "Отличный преподаватель! Ребенок занимается с удовольствием и интересом!",
      shortText: "Отличный преподаватель! Ребенок занимается с удовольствием и интересом!"
    },
    {
      id: 10,
      name: "Андрей Соловьев",
      direction: "Подготовка к ЕГЭ",
      date: "25.06.2023",
      rating: 5,
      text: "Марат знает свое дело и во время работы чувствуется, что специалист прикладывает максимум усилий, чтобы помочь клиенту и оказаться полезным. Отвечает сразу спустя несколько минут после просьбы о помощи в подготовке, крайне быстро определились со временем первого занятия.",
      shortText: "Марат знает свое дело и во время работы чувствуется, что специалист прикладывает максимум усилий..."
    },
    {
      id: 11,
      name: "Юлия Гусева",
      direction: "Олимпиадная подготовка",
      date: "15.05.2023",
      rating: 5,
      text: "Искала преподавателя, который помог бы подготовиться к Олимпиаде. Марат очень понятно и интересно объясняет материал, дает много решать на отработку, поэтому все хорошо запоминается.",
      shortText: "Искала преподавателя, который помог бы подготовиться к Олимпиаде. Марат очень понятно и интересно объясняет материал..."
    },
    {
      id: 12,
      name: "Владимир Виноградов",
      direction: "Подготовка к ЕГЭ",
      date: "28.04.2023",
      rating: 5,
      text: "Провел пробное занятие с Маратом, было достаточно интересно и насыщено. Буду продолжать заниматься.",
      shortText: "Провел пробное занятие с Маратом, было достаточно интересно и насыщено. Буду продолжать заниматься."
    },
    {
      id: 13,
      name: "Екатерина Семенова",
      direction: "Подготовка к ЕГЭ",
      date: "10.03.2023",
      rating: 5,
      text: "Очень рада, что наткнулась на Марата, подготавливает дочку к ЕГЭ. Объясняет все очень доступно, занятия проходят в удобном формате, рекомендую!",
      shortText: "Очень рада, что наткнулась на Марата, подготавливает дочку к ЕГЭ. Объясняет все очень доступно..."
    },
    {
      id: 14,
      name: "Игорь Орлов",
      direction: "Изучение английского языка",
      date: "22.02.2023",
      rating: 5,
      text: "Проводили с Маратом очень полезное и веселое обучение на уроках! Очень нравится получать новые знания и поднимать настроение вместе с ним.",
      shortText: "Проводили с Маратом очень полезное и веселое обучение на уроках! Очень нравится получать новые знания..."
    },
    {
      id: 15,
      name: "Наталья Романова",
      direction: "Подготовка к ЕГЭ",
      date: "05.01.2023",
      rating: 5,
      text: "Прекрасный репетитор по английскому! Ребенок с удовольствием занимается, а это главное! От себя хочу сказать, что Марат очень вежливый и пунктуальный.",
      shortText: "Прекрасный репетитор по английскому! Ребенок с удовольствием занимается, а это главное! От себя хочу сказать..."
    }
  ], []);

  useEffect(() => {
    // Загружаем данные из обработанного JSON файла
    const loadReviews = async () => {
      try {
        const response = await fetch('/processed_reviews.json');
        if (response.ok) {
          const data = await response.json();
          setReviews(memoizedReviews);
        } else {
          setReviews(memoizedReviews);
        }
      } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
        setReviews(memoizedReviews);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [memoizedReviews]);

  // Обработчик изменения слайда с debouncing
  const handleSlideChange = useCallback((swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  }, []);

  // Оптимизированные настройки для мобильных устройств
  const swiperConfig = useMemo(() => ({
    modules: [Autoplay, Virtual],
    spaceBetween: isMobile ? 20 : 30,
    slidesPerView: 1,
    autoplay: {
      delay: isMobile ? 10000 : 8000, // Больше задержка на мобильных
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    virtual: true, // Включаем виртуализацию
    speed: isMobile ? 400 : 600, // Медленнее на мобильных для плавности
    watchSlidesProgress: true,
    preventInteractionOnTransition: true, // Предотвращаем взаимодействие во время анимации
  }), [isMobile]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        {...swiperConfig}
        onSlideChange={handleSlideChange}
        className="reviews-swiper"
        ref={swiperRef}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={`text-${review.id}`} virtualIndex={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
        {uniqueImages.map((src, idx) => (
          <SwiperSlide key={`img-${idx}`} virtualIndex={reviews.length + idx}>
            <div className="bg-[#FBF3F0] rounded-lg shadow-lg p-3 h-full flex items-center justify-center">
              <ReviewImage
                src={src}
                alt={`Отзыв ${idx + 1}`}
                reviewIndex={idx}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel; 