// === ДАННЫЕ ===
const topics = [
    {
        id: "variables",
        title: "Переменные",
        content: `
            <h2>Переменные</h2>
            <p>Переменная — <strong>место для хранения данных, это что то типо коробки</strong>. В неё можно положить: очки игрока, имя, количество денег.</p>
            <p>В Ren'Py переменные создаются так:</p>
            <pre><code>$ points = 0
$ player_name = "Тимофей"
$ has_key = False</code></pre>
            <p><strong>Что происходит:</strong></p>
            <ul>
                <li><code>$</code> — начало Python-строки</li>
                <li><code>points = 0</code> — переменная <code>points</code> равна нулю</li>
                <li><code>player_name = "Тимофей"</code> — строка в кавычках</li>
                <li><code>has_key = False</code> — логическое значение (истина/ложь)</li>
            </ul>
            <h3>Как менять переменные</h3>
            <pre><code>$ points = points + 10
$ points += 10</code></pre>
            <p>Оба варианта увеличивают <code>points</code> на 10.</p>
            <h3>Зачем это нужно</h3>
            <p>Переменные позволяют <strong>запоминать выборы игрока</strong> и использовать их позже.</p>
        `
    },
    {
        id: "ifelse",
        title: "if / else",
        content: `
            <h2>if / else</h2>
            <p><code>if</code> проверяет условие. Если оно <strong>истинно</strong> — выполняется один код, если <strong>ложно</strong> — другой.</p>
            <h3>Базовый пример</h3>
            <pre><code>if points >= 10:
    e "Ты набрал 10 очков!"
else:
    e "Ты набрал меньше 10 очков."</code></pre>
            <h3>С elif (несколько условий)</h3>
            <pre><code>if points >= 10:
    jump best_ending
elif points >= 5:
    jump good_ending
else:
    jump bad_ending</code></pre>
            <p><strong>Что происходит:</strong></p>
            <ul>
                <li><code>if</code> — первое условие</li>
                <li><code>elif</code> — «иначе если» (проверяется, если первое не сработало)</li>
                <li><code>else</code> — выполняется, если <strong>все</strong> условия ложны</li>
            </ul>
            <h3>Важно</h3>
            <p>В Ren'Py для <strong>сравнения</strong> используется <code>==</code> (двойное равно), а для <strong>присваивания</strong> — <code>=</code> (одинарное).</p>
            <pre><code>$ gift = "iguana"    # присваивание
if gift == "iguana":   # сравнение
    m "Ты подарил игуану!"</code></pre>
        `
    },
    {
        id: "menus",
        title: "Кастомизация меню",
        content: `
            <h2>Кастомизация меню</h2>
            <p>Меню в игре (не главное, а то, что появляется при выборе) можно настроить.</p>
            <h3>Базовое меню</h3>
            <pre><code>menu:
    "Пойти гулять":
        jump walk
    "Остаться дома":
        jump stay</code></pre>
            <h3>Условные варианты</h3>
            <p>Можно показывать вариант только при выполнении условия:</p>
            <pre><code>menu:
    "Пойти гулять":
        jump walk
    "Остаться дома":
        jump stay
    "Открыть дверь" if has_key:
        jump open_door</code></pre>
            <p>Вариант «Открыть дверь» появится <strong>только</strong> если <code>has_key == True</code>.</p>
            <h3>Экран выбора (choice screen)</h3>
            <p>Внешний вид меню настраивается через экран <code>choice</code>. Он получает список <code>items</code> — каждый пункт меню.</p>
            <pre><code>screen choice(items):
    vbox:
        for i in items:
            textbutton i.caption action i.action</code></pre>
            <p>Здесь можно менять шрифт, цвет, расположение кнопок.</p>
        `
    },
    {
        id: "screens",
        title: "Экраны (Screens)",
        content: `
            <h2>Экраны (Screens)</h2>
            <p>Экран — это <strong>отдельный слой интерфейса</strong>: меню, инвентарь, диалоговое окно.</p>
            <h3>Простой экран</h3>
            <pre><code>screen hello_screen():
    vbox:
        text "Привет!"
        textbutton "Закрыть" action Hide("hello_screen")</code></pre>
            <p>Показать экран: <code>show screen hello_screen</code>.</p>
            <h3>Специальные экраны</h3>
            <p>В Ren'Py есть <strong>встроенные экраны</strong>, которые можно менять:</p>
            <ul>
                <li><code>say</code> — окно диалога</li>
                <li><code>choice</code> — меню выбора</li>
                <li><code>main_menu</code> — главное меню</li>
                <li><code>preferences</code> — настройки</li>
            </ul>
            <h3>Пример: изменение главного меню</h3>
            <pre><code>screen main_menu():
    tag menu

    add "images/bg_title.png"

    vbox:
        textbutton "Начать игру" action Start()
        textbutton "Настройки" action ShowMenu("preferences")</code></pre>
            <p>Так можно добавить свои кнопки или картинки в главное меню.</p>
        `
    }
];

// === ЭЛЕМЕНТЫ ===
const content = document.getElementById('content');
const topicList = document.getElementById('topic-list');

// === БОКОВАЯ ПАНЕЛЬ ===
function renderSidebar() {
    topicList.innerHTML = topics.map(t =>
        `<li><a href="#" data-id="${t.id}">${t.title}</a></li>`
    ).join('');

    topicList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            renderTopic(link.dataset.id);
        });
    });
}

// === ОТРИСОВКА ТЕМЫ ===
function renderTopic(id) {
    const topic = topics.find(t => t.id === id);
    if (!topic) return;

    content.innerHTML = topic.content;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === СТАРТ ===
renderSidebar();
renderTopic('variables');