// === ДАННЫЕ ===
const topics = [
    {
        id: "variables",
        title: "Переменные",
        content: `
            <h2>Переменные</h2>
            <p>Переменная — <strong>место для хранения данных, это что-то типа коробки</strong>. В неё можно положить: очки игрока, имя, количество денег.</p>
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
                <li><code>elif</code> — «иначе если»</li>
                <li><code>else</code> — если все условия ложны</li>
            </ul>
            <h3>Важно</h3>
            <p>Для <strong>сравнения</strong> — <code>==</code>, для <strong>присваивания</strong> — <code>=</code>.</p>
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
            <h3>Базовое меню</h3>
            <pre><code>menu:
    "Пойти гулять":
        jump walk
    "Остаться дома":
        jump stay</code></pre>
            <h3>Условные варианты</h3>
            <pre><code>menu:
    "Пойти гулять":
        jump walk
    "Открыть дверь" if has_key:
        jump open_door</code></pre>
            <h3>Экран выбора (choice screen)</h3>
            <pre><code>screen choice(items):
    vbox:
        for i in items:
            textbutton i.caption action i.action</code></pre>
        `
    },
    {
        id: "screens",
        title: "Экраны (Screens)",
        content: `
            <h2>Экраны (Screens)</h2>
            <p>Экран — это <strong>отдельный слой интерфейса</strong>.</p>
            <h3>Простой экран</h3>
            <pre><code>screen hello_screen():
    vbox:
        text "Привет!"
        textbutton "Закрыть" action Hide("hello_screen")</code></pre>
            <p>Показать: <code>show screen hello_screen</code>.</p>
            <h3>Специальные экраны</h3>
            <ul>
                <li><code>say</code> — окно диалога</li>
                <li><code>choice</code> — меню выбора</li>
                <li><code>main_menu</code> — главное меню</li>
                <li><code>preferences</code> — настройки</li>
            </ul>
            <h3>Пример: главное меню</h3>
            <pre><code>screen main_menu():
    tag menu
    add "images/bg_title.png"
    vbox:
        textbutton "Начать игру" action Start()
        textbutton "Настройки" action ShowMenu("preferences")</code></pre>
        `
    },
    {
        id: "characters",
        title: "Персонажи",
        content: `
            <h2>Персонажи</h2>
            <p>Персонаж — это тот, кто говорит. У него есть <strong>имя</strong> и <strong>цвет</strong>.</p>
            <pre><code>define v = Character("Вика", color="#ff88cc")
define t = Character("Тимофей", color="#88ccff")</code></pre>
            <h3>Как использовать</h3>
            <pre><code>v "Привет! Я Вика."
t "А я Тимофей."</code></pre>
        `
    },
    {
        id: "sprites",
        title: "Спрайты и анимации",
        content: `
            <h2>Спрайты и анимации</h2>
            <p>Спрайт — это <strong>картинка персонажа</strong>.</p>
            <pre><code>show vika happy
show vika sad at left
hide vika</code></pre>
            <ul>
                <li><code>show</code> — показать</li>
                <li><code>happy</code>, <code>sad</code> — эмоции</li>
                <li><code>at left</code> — позиция</li>
                <li><code>hide</code> — убрать</li>
            </ul>
            <h3>Переходы</h3>
            <pre><code>with dissolve
with fade</code></pre>
        `
    },
    {
        id: "transitions",
        title: "Переходы",
        content: `
            <h2>Переходы</h2>
            <pre><code>scene bg room
with fade

show vika happy
with dissolve</code></pre>
            <ul>
                <li><code>fade</code> — затемнение</li>
                <li><code>dissolve</code> — растворение</li>
                <li><code>move</code> — движение</li>
                <li><code>pixellate</code> — пикселизация</li>
            </ul>
        `
    },
    {
        id: "cheatsheet",
        title: "Шпаргалка",
        content: `
            <h2>Шпаргалка по Ren'Py</h2>
            <table>
                <tr><th>Команда</th><th>Что делает</th></tr>
                <tr><td><code>$ x = 0</code></td><td>Создать переменную</td></tr>
                <tr><td><code>if / elif / else</code></td><td>Условие</td></tr>
                <tr><td><code>menu:</code></td><td>Меню выбора</td></tr>
                <tr><td><code>screen</code></td><td>Экран</td></tr>
                <tr><td><code>define</code></td><td>Персонаж</td></tr>
                <tr><td><code>show / hide</code></td><td>Спрайт</td></tr>
                <tr><td><code>scene</code></td><td>Фон</td></tr>
                <tr><td><code>with fade</code></td><td>Переход</td></tr>
                <tr><td><code>play music</code></td><td>Музыка</td></tr>
                <tr><td><code>play sound</code></td><td>Звук</td></tr>
                <tr><td><code>jump</code></td><td>Перейти к метке</td></tr>
                <tr><td><code>label</code></td><td>Метка</td></tr>
                <tr><td><code>return</code></td><td>Выход</td></tr>
            </table>
        `
    },
    {
        id: "generators",
        title: "Генераторы",
        content: `
            <h2>Генераторы</h2>
            <p>Здесь можно быстро собрать код для персонажа или меню. Просто заполни поля и нажми кнопку.</p>

            <h3>Генератор персонажей</h3>
            <div class="generator">
                <input id="char-name" placeholder="Имя (Вика)">
                <input id="char-short" placeholder="Короткое имя (v)">
                <input id="char-color" type="color" value="#ff88cc">
                <button onclick="generateCharacter()">Создать</button>
                <pre id="char-output"></pre>
            </div>

            <h3>Генератор меню</h3>
            <div class="generator" id="menu-generator">
                <div id="menu-options">
                    <div class="menu-option">
                        <input placeholder="Текст варианта" class="menu-text">
                        <input placeholder="Метка (jump)" class="menu-jump">
                    </div>
                </div>
                <button onclick="addMenuOption()">Добавить вариант</button>
                <button onclick="generateMenu()">Создать меню</button>
                <pre id="menu-output"></pre>
            </div>
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

// === ГЕНЕРАТОР ПЕРСОНАЖЕЙ ===
function generateCharacter() {
    const name = document.getElementById('char-name')?.value.trim();
    const short = document.getElementById('char-short')?.value.trim();
    const color = document.getElementById('char-color')?.value;
    const output = document.getElementById('char-output');

    if (!name || !short) {
        if (output) output.textContent = '# Заполни имя и короткое имя';
        return;
    }

    if (output) {
        output.textContent = `define ${short} = Character("${name}", color="${color}")`;
    }
}

// === ГЕНЕРАТОР МЕНЮ ===
function addMenuOption() {
    const container = document.getElementById('menu-options');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'menu-option';
    div.innerHTML = `
        <input placeholder="Текст варианта" class="menu-text">
        <input placeholder="Метка (jump)" class="menu-jump">
    `;
    container.appendChild(div);
}

function generateMenu() {
    const options = document.querySelectorAll('.menu-option');
    const output = document.getElementById('menu-output');
    let code = 'menu:\n';

    options.forEach(opt => {
        const text = opt.querySelector('.menu-text').value.trim();
        const jump = opt.querySelector('.menu-jump').value.trim();

        if (text && jump) {
            code += `    "${text}":\n        jump ${jump}\n`;
        }
    });

    if (output) output.textContent = code;
}

// === СТАРТ ===
renderSidebar();
renderTopic('variables');
