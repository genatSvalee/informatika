// Объявляем объект для хранения идентификаторов уроков
var lessonId = {};

// Функция для перенаправления на страницу урока
function goToLesson(lessonId) {
    window.location.href = `lessons/${lessonId}.html`;
}

// Функция для отображения текста по нажатию на кнопку
function showText(buttonId) {
    var contentDiv = document.getElementById('content');
    var sidebarDiv = document.getElementById('sidebar');
    var classNumber;

    // Убираем выделение у всех кнопок
    var buttons = document.querySelectorAll('#sidebar button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Выделяем текущую кнопку
    var currentButton = document.getElementById(buttonId);
    currentButton.classList.add('active');

    switch (buttonId) {
        case 'button1':
            classNumber = 7;
            break;
        case 'button2':
            classNumber = 8;
            break;
        case 'button3':
            classNumber = 9;
            break;
        case 'button4':
            classNumber = 10;
            break;
        case 'button5':
            classNumber = 11;
            break;
        default:
            contentDiv.innerHTML = "Неопределенная кнопка.";
            return;
    }

    var header = "<span class='program-header'>Программа для " + classNumber + " класса</span>";

    var lessons = [];
    switch (classNumber) {
        case 7:
            lessons = [
                { id: "lesson1", title: "Урок 1", topic: "Что изучает информатика. Правила гигиены и техники безопасности при работе на компьютере" },
                { id: "lesson2", title: "Урок 2", topic: "Информация, ее свойства и классификация" },
                { id: "lesson3", title: "Урок 3", topic: "Основные компоненты комрьютера и их функции" },
                { id: "lesson4", title: "Урок 4", topic: "Информационные процессы" },
                { id: "lesson5", title: "Урок 5", topic: "Кодирование информации. Двоичный код" },
                { id: "lesson6", title: "Урок 6", topic: "Единицы измерения информации" },
                { id: "lesson7", title: "Урок 7", topic: "Программное обеспечение компьютера" },
                { id: "lesson8", title: "Урок 8", topic: "Файл и файловая система" },
                { id: "lesson9", title: "Урок 9", topic: "Основы информационной безопасности и защиты информации" },
                { id: "lesson10", title: "Урок 10", topic: "Формирование изображения на экране компьютера" },
                { id: "lesson11", title: "Урок 11", topic: "Растровая графика" },
                { id: "lesson12", title: "Урок 12", topic: "Векторная графика" },
                { id: "lesson13", title: "Урок 13", topic: "Текстовые документы и оценка их количественных параметров" },
                { id: "lesson14", title: "Урок 14", topic: "Создание текстовых документов на компьютере" },
                { id: "lesson15", title: "Урок 15", topic: "Интеллектуальные возможности современных систем обработки текстов" }
            ];
            break;
        case 8:
            lessons = [
                { id: "lesson16", title: "Урок 1", topic: "Техника безопасности при работе с компьютером. Тест" },
                { id: "lesson17", title: "Урок 2", topic: "Основные сведения о системе счисления" },
                { id: "lesson18", title: "Урок 3", topic: "Двоичная система счисления. Двоичная арифметика" },
                { id: "lesson19", title: "Урок 4", topic: "Компьютерные системы счисления. Контрольная работа" },
                { id: "lesson20", title: "Урок 5", topic: "Высказывания и операции с ними" },
                { id: "lesson21", title: "Урок 6", topic: "Таблицы истинности. Контрольная работа" },
                { id: "lesson22", title: "Урок 7", topic: "Исполнители и алгоритмы. Способы записи алгоритма" },
                { id: "lesson23", title: "Урок 8", topic: "Объекты алгоритмов. Алгоритмическая конструкция «следование»" },
                { id: "lesson24", title: "Урок 9", topic: "Алгоритмическая конструкция «ветвление»" },
                { id: "lesson25", title: "Урок 10", topic: "Алгоритмическая конструкция «повторение»" },
                { id: "lesson26", title: "Урок 11", topic: "Анализ алгоритмов" },
                { id: "lesson27", title: "Урок 12", topic: "Конктрольная работа" },
                { id: "lesson28", title: "Урок 13", topic: "Основные сведения о языке программирования Паскаль. Самостоятельная работа" },
                { id: "lesson29", title: "Урок 14", topic: "Запись линейных алгоритмов на языке программирования" },
                { id: "lesson30", title: "Урок 15", topic: "Запись ветвлений на языке Паскаль" },
                { id: "lesson31", title: "Урок 16", topic: "Запись циклических алгоритмов на языке программирования. Контрольная работа" }
            ];
            break;
        case 9:
            lessons = [
                { id: "lesson32", title: "Урок 1", topic: "Моделирование как метод познания" },
                { id: "lesson33", title: "Урок 2", topic: "Графы" },
                { id: "lesson34", title: "Урок 3", topic: "Табличные информационные модели" },
                { id: "lesson35", title: "Урок 4", topic: "Математическое моделирование. Контрольная работа" },
                { id: "lesson36", title: "Урок 5", topic: "Решение задач на компьютере" },
                { id: "lesson37", title: "Урок 6", topic: "Одномерные массивы целых чисел" },
                { id: "lesson38", title: "Урок 7", topic: "Анализ алгоритмов для исполнителей" },
                { id: "lesson39", title: "Урок 8", topic: "Конструирование алгоритмов. Контрольная работа" },
                { id: "lesson41", title: "Урок 9", topic: "Базы данных" },
                { id: "lesson42", title: "Урок 10", topic: "Система управления базами данных" },
                { id: "lesson43", title: "Урок 11", topic: "Организация вычислений в электронных таблицах" },
                { id: "lesson44", title: "Урок 12", topic: "Средства анализа и визуализации данных в электронных таблицах. Контрольная работа" },
                { id: "lesson45", title: "Урок 13", topic: "Компьютерные сети" },
                { id: "lesson46", title: "Урок 14", topic: "Информационные ресурсы и сервисы Интернета. Поиск информации в сети" },
                { id: "lesson47", title: "Урок 15", topic: "Создание веб-сайта" },
                { id: "lesson48", title: "Урок 16", topic: "Организация личного информационного пространства. Контрольная работа" }
            ];
            break;
        case 10:
            lessons = [
                { id: "lesson49", title: "Урок 1", topic: "Информация и информатика. Информационная грамотность и информационная культура" },
                { id: "lesson50", title: "Урок 2", topic: "Подходы к измернию информации" },
                { id: "lesson51", title: "Урок 3", topic: "Информационные связи в системах различной природы" },
                { id: "lesson52", title: "Урок 4", topic: "Обработка информации. Передача и хранение информации" },
                { id: "lesson53", title: "Урок 5", topic: "История развития вычислительной техники" },
                { id: "lesson54", title: "Урок 6", topic: "Основополагающие принципы устройства компьютеров" },
                { id: "lesson55", title: "Урок 7", topic: "Программное обеспечение компьютеров и компьютерных систем" },
                { id: "lesson56", title: "Урок 8", topic: "Представление чисел в позиционных системах счисления" },
                { id: "lesson57", title: "Урок 9", topic: "Арифметические операции в позиционных системах счисления" },
                { id: "lesson58", title: "Урок 10", topic: "Некоторые сведения из теории множеств" },
                { id: "lesson59", title: "Урок 11", topic: "Алгебра логики. Таблица истинности" },
                { id: "lesson60", title: "Урок 12", topic: "Преобразование логических выражений" },
                { id: "lesson61", title: "Урок 13", topic: "Логические задачи и способы их решения" },
                { id: "lesson62", title: "Урок 14", topic: "Кодирование текстовой информации" },
                { id: "lesson63", title: "Урок 15", topic: "Обработка текстовой информации" },
                { id: "lesson64", title: "Урок 16", topic: "Обработка графической информации" }
            ];
            break;
        case 11:
            lessons = [
                { id: "lesson65", title: "Урок 1", topic: "Основные сведения об алгоритмах" },
                { id: "lesson66", title: "Урок 2", topic: "Базовые алгоритмические структуры" },
                { id: "lesson67", title: "Урок 3", topic: "Запись алгоритмов на языках программирования. Язык программирования Паскаль (Python)" },
                { id: "lesson68", title: "Урок 4", topic: "Вспомогательные алгоритмы" },
                { id: "lesson69", title: "Урок 5", topic: "Массивы" },
                { id: "lesson70", title: "Урок 6", topic: "Модели и моделирование" },
                { id: "lesson71", title: "Урок 7", topic: "Моделирование на графах" },
                { id: "lesson72", title: "Урок 8", topic: "Знакомство с теорией игр" },
                { id: "lesson73", title: "Урок 9", topic: "Компьютерное моделирование" },
                { id: "lesson74", title: "Урок 10", topic: "Математические модели. Стохастические модели" },
                { id: "lesson75", title: "Урок 11", topic: "Компьютерные сети" },
                { id: "lesson76", title: "Урок 12", topic: "Веб-технологии" },
                { id: "lesson77", title: "Урок 13", topic: "Деятельность в сети Интернет" },
                { id: "lesson78", title: "Урок 14", topic: "Обработка информации в электронных таблицах" },
                { id: "lesson79", title: "Урок 15", topic: "Система управления базами данных" },
                { id: "lesson80", title: "Урок 16", topic: "Средства искусственного интеллекта" },
                { id: "lesson80", title: "Урок 16", topic: "Информационное право и информационная безопасность" }
            ];
            break;
        default:
            contentDiv.innerHTML = "Неопределенная кнопка.";
            return;
    }

    var htmlContent = "<h2>" + header + "</h2>";
    for (var i = 0; i < lessons.length; i++) {
        lessonId[classNumber + "-" + (i + 1)] = lessons[i].id;

        htmlContent += "<div id='" + lessons[i].id + "'>";
        htmlContent += "<h3 style='font-weight:normal;'>" + lessons[i].title + "</h3>"; 
        htmlContent += "<p style='font-family: Arial, sans-serif;'>" + lessons[i].topic + "</p>"; 
        htmlContent += "<button onclick='goToLesson(\"" + lessons[i].id + "\")'>Перейти к уроку</button>";
        htmlContent += "</div>"; 
        if (i < lessons.length - 1) {
            htmlContent += "<hr>"; 
        }
    }

    
    sidebarDiv.style.display = 'block';

    contentDiv.innerHTML = htmlContent;

    // Плавно прокручиваем скроллбар в начало
    contentDiv.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    
}

window.addEventListener('DOMContentLoaded', (event) => {
    showText('button1');

    var contentDiv = document.getElementById('content');
    var scrolled = false;

    function isScrolledToBottom() {
        return contentDiv.scrollHeight - contentDiv.scrollTop === contentDiv.clientHeight;
    }

    // Обработчик прокрутки блока
    contentDiv.addEventListener('scroll', function() {
        scrolled = isScrolledToBottom();
    });

    // Обработчик изменения содержимого блока
    contentDiv.addEventListener('DOMSubtreeModified', function() {
        if (scrolled) {
            // Если пользователь был прокручен до конца, возвращаем его туда после изменения содержимого
            contentDiv.scrollTop = contentDiv.scrollHeight;
        }
    });
});
