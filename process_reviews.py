import json
import re
from datetime import datetime, timedelta
import random

def clean_text(text):
    """Очищает текст от лишних символов и форматирования"""
    # Удаляем лишние символы и форматирование
    text = re.sub(r'[^\w\s\.\,\!\?\-\(\)\:\;]', '', text)
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    return text

def extract_name_from_text(text):
    """Извлекает имя из текста отзыва"""
    lines = text.split('\n')
    
    # Ищем строки, которые могут быть именами
    for line in lines[:5]:
        line = line.strip()
        if len(line) > 2 and len(line) < 50:
            # Убираем лишние символы
            clean_line = re.sub(r'[^\w\s]', '', line)
            if len(clean_line) > 2:
                # Проверяем, что это не служебная информация
                if not any(keyword in clean_line.lower() for keyword in 
                          ['сделка', 'состоялась', 'репетитор', 'английскому', 'языку', 'олимпиадам']):
                    return clean_line
    
    return "Студент"

def extract_direction_from_text(text):
    """Извлекает направление подготовки из текста"""
    text_lower = text.lower()
    
    directions = {
        'егэ': 'Подготовка к ЕГЭ',
        'огэ': 'Подготовка к ОГЭ', 
        'олимпиад': 'Олимпиадная подготовка',
        'английск': 'Изучение английского языка',
        'ielts': 'Подготовка к IELTS',
        'toefl': 'Подготовка к TOEFL',
        'всероссийск': 'Олимпиадная подготовка',
        'разговорн': 'Разговорный английский'
    }
    
    for keyword, direction in directions.items():
        if keyword in text_lower:
            return direction
    
    return "Подготовка к экзаменам"

def extract_date_from_text(text):
    """Извлекает дату из текста или генерирует случайную"""
    # Ищем даты в формате DD.MM.YYYY или DD месяц YYYY
    date_patterns = [
        r'(\d{1,2})\.(\d{1,2})\.(\d{4})',
        r'(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\s+(\d{4})',
        r'(\d{1,2})\s+(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)\s+(\d{4})'
    ]
    
    for pattern in date_patterns:
        match = re.search(pattern, text)
        if match:
            try:
                if len(match.groups()) == 3:
                    day, month, year = match.groups()
                    return f"{day.zfill(2)}.{month.zfill(2)}.{year}"
            except:
                pass
    
    # Если дата не найдена, генерируем случайную за последний год
    end_date = datetime.now()
    start_date = end_date - timedelta(days=365)
    random_date = start_date + timedelta(days=random.randint(0, 365))
    return random_date.strftime("%d.%m.%Y")

def process_reviews():
    """Обрабатывает отзывы из JSON файла"""
    with open('reviews_data.json', 'r', encoding='utf-8') as f:
        reviews = json.load(f)
    
    processed_reviews = []
    
    for i, review in enumerate(reviews):
        # Очищаем текст
        clean_review_text = clean_text(review['text'])
        
        # Извлекаем информацию
        name = extract_name_from_text(clean_review_text)
        direction = extract_direction_from_text(clean_review_text)
        date = extract_date_from_text(clean_review_text)
        
        # Ограничиваем длину текста
        if len(clean_review_text) > 300:
            clean_review_text = clean_review_text[:300] + "..."
        
        # Создаем обработанный отзыв
        processed_review = {
            "id": i + 1,
            "name": name,
            "direction": direction,
            "date": date,
            "rating": 5,
            "text": clean_review_text,
            "shortText": clean_review_text[:150] + "..." if len(clean_review_text) > 150 else clean_review_text
        }
        
        processed_reviews.append(processed_review)
    
    # Сохраняем обработанные отзывы
    with open('processed_reviews.json', 'w', encoding='utf-8') as f:
        json.dump(processed_reviews, f, ensure_ascii=False, indent=2)
    
    print(f"Обработано {len(processed_reviews)} отзывов")
    return processed_reviews

if __name__ == "__main__":
    process_reviews() 