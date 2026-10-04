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
        id: "compliments",
        title: "111 комплиментов",
        content: `
            <h2>111 комплиментов для Вики</h2>
            <h3>Ты сама сказала что тебе это нравится</h3>
            <ol>
                <li>У тебя красивый голос</li>
                <li>Твоя улыбка делает день ярче.</li>
                <li>У тебя красивые волосы.</li>
                <li>С тобой интересно дружить</li>
                <li>У тебя очень приятные черты лица.</li>
                <li>Красивая(правда) </li>
                <li>У тебя красивая осанка.</li>
                <li>У тебя крутые косплеи</li>
                <li>Ты реально красивая.</li>
                <li>Ты очень фотогенична.</li>
                <li>С тобой интересно общаться</li>
                <li>Ты правдо правда очень красивая</li>
                <li>У тебя очень милая улыбка.</li>
                <li>Ты выглядишь очень аккуратно.</li>
                <li>Ты милая</li>
                <li>Ты возбудила Кастета когда мяукала(хаххахах) </li>
                <li>У тебя правда красивый голос</li>
                <li>Ты всегда выглядишь очень хорошо.</li>
                <li>У тебя красивое все.</li>
                <li>Ты назвала меня милым. Ты милая</li>
            </ol>
            <ol start="21">
                <li>У тебя очень красивый голос.</li>
                <li>Ты приятно говоришь.</li>
                <li>Твой голос успокаивает.</li>
                <li>Тебя приятно слушать.</li>
                <li>У тебя выразительная речь.</li>
                <li>Ты умеешь говорить с душой.</li>
                <li>Твой смех — это что-то.(хахахаха) </li>
                <li>Ты говоришь мягко и тепло.</li>
                <li>У тебя чёткая дикция.</li>
                <li>Тебе идёт твой тембр.</li>
                <li>Ты умеешь держать внимание голосом.</li>
                <li>Твой голос — твоя фишка.</li>
                <li>Ты говоришь спокойно и уверенно.</li>
                <li>Тебя хочется слушать ещё.</li>
                <li>У тебя голос, как у диктора.</li>
                <li>Ты умеешь передать эмоции голосом.</li>
                <li>Твой голос — твоя суперсила.</li>
                <li>Ты говоришь красиво.</li>
                <li>С тобой интересно разговаривать.</li>
                <li>Твой голос — как музыка.</li>
            </ol>
            <ol start="41">
                <li>Ты очень умная.</li>
                <li>Ты быстро схватываешь.</li>
                <li>С тобой интересно обсуждать что угодно.</li>
                <li>Ты умеешь думать нестандартно.</li>
                <li>Ты видишь то, что другие не замечают.</li>
                <li>У тебя живой ум.</li>
                <li>Ты умеешь задавать правильные вопросы.</li>
                <li>Ты разбираешься в том, что любишь.</li>
                <li>Ты умеешь анализировать.</li>
                <li>С тобой можно говорить о сложных вещах.</li>
                <li>Ты умеешь удивлять мыслями.</li>
                <li>У тебя есть своё мнение.</li>
                <li>Ты умеешь его отстаивать.</li>
                <li>Ты не боишься думать сама.</li>
                <li>Ты умнее, чем кажешься.</li>
                <li>Ты умеешь учиться.</li>
                <li>Ты схватываешь на лету.</li>
                <li>С тобой не соскучишься.</li>
                <li>Ты умеешь видеть суть.</li>
                <li>Ты — интересный собеседник.</li>
            </ol>
            <ol start="61">
                <li>Ты очень красиво рисуешь.</li>
                <li>У тебя свой стиль в рисунках.</li>
                <li>Ты умеешь передать эмоции в картинке.</li>
                <li>Твои персонажи живые.</li>
                <li>Ты умеешь придумать сюжет.</li>
                <li>У тебя есть вкус.</li>
                <li>Ты умеешь видеть красивое.</li>
                <li>Твои работы запоминаются.</li>
                <li>Ты умеешь работать с цветом.</li>
                <li>Ты — художник.</li>
                <li>Ты умеешь создавать миры.</li>
                <li>Твои идеи — огонь.</li>
                <li>Ты умеешь вдохновлять.</li>
                <li>С тобой интересно придумывать.</li>
                <li>Ты умеешь доводить до конца.</li>
                <li>Ты — творец.</li>
                <li>Ты умеешь видеть детали.</li>
                <li>Твои рисунки — это искусство.</li>
                <li>Ты умеешь рассказать историю.</li>
                <li>Ты — талант.</li>
            </ol>
            <ol start="81">
                <li>Ты очень добрая.</li>
                <li>Ты умеешь слушать.</li>
                <li>Ты умеешь поддержать.</li>
                <li>Ты честная.</li>
                <li>Ты смелая.</li>
                <li>Ты умеешь быть собой.</li>
                <li>Ты не боишься быть странной.</li>
                <li>Ты умеешь дружить.</li>
                <li>Ты — надёжный человек.</li>
                <li>Ты умеешь прощать.</li>
                <li>Ты не сдаёшься.</li>
                <li>Ты умеешь мечтать.</li>
                <li>Ты умеешь идти к цели.</li>
                <li>Ты — сильная.</li>
                <li>Ты умеешь быть нежной.</li>
                <li>Ты — настоящая.</li>
                <li>С тобой тепло.</li>
                <li>Ты умеешь заботиться.</li>
                <li>Ты — человек, которому хочется доверять.</li>
                <li>Ты — лучшая.</li>
            </ol>
            <ol start="101">
                <li>Ты классная.</li>
                <li>С тобой хорошо.</li>
                <li>Ты — мадемуазель.</li>
                <li>Ты — моя первая подруга.</li>
                <li>Я рад, что ты есть.</li>
                <li>Ты делаешь мир лучше.</li>
                <li>Ты — та, с кем хочется делать игры.</li>
                <li>Ты реально круто косплеиш.</li>
                <li>Ты — огонь.</li>
                <li>Ты — Вика. И этого достаточно.</li>
                <li>Ты — хорошая злодейка</li>
            </ol>
        `
    },
    {
        id: "cosplay-ideas",
        title: "Идеи для косплея",
        content: `
            <h2>Идеи для косплея</h2>
            <p>Не знаешь, кого косплеить? Нажми на кнопку — и получишь случайную идею. Если не понравится — жми ещё раз.</p>

            <div class="cosplay-box">
                <button onclick="randomCosplay()">Случайная идея</button>
                <button onclick="showAllCosplay()">Показать все</button>
                <div id="cosplay-output"></div>
            </div>
        `
    },
    {
        id: "combo-generator",
        title: "Генератор комбинаций косплея",
        content: `
            <h2>Генератор комбинаций косплея</h2>
            <p>Собирает образ из <strong>трёх частей</strong>: персонаж + стиль + аксессуар. Получается необычный косплей.</p>
            <p>Нажми кнопку — получишь идею. Если не понравится — жми ещё раз.</p>

            <div class="generator">
                <button onclick="randomCombo()">Случайная комбинация</button>
                <button onclick="showAllCombos()">Показать все</button>
                <div id="combo-output"></div>
            </div>
        `
    },
    {
        id: "date",
        title: "Свидание с Тимошей",
        content: `
            <h2>Пойти на свидание с Тимошей</h2>
            <p>Нажми на кнопку, чтобы пойти на свидание с Тимошей. Что может пойти не так?</p>

            <div class="generator">
                <button onclick="goOnDate()">Пойти на свидание с Тимошей</button>
            </div>
        `
    },
    {
        id: "jokes",
        title: "Извинения за шутки",
        content: `
            <h2>Извинения за тупые шутки</h2>
            <p>Ты <strong>сама</strong> виновата, что они тебе нравятся. Но я всё равно извиняюсь.</p>

            <h3>Извинения</h3>
            <ul>
                <li>Извини за подколы. Оно само.</li>
                <li>Извини за «Тимоша». Ты сама не проголосовала.</li>
                <li>Извини за «мадемуазель». Красиво звучит.</li>
                <li>Извини за 11 поцелуйчиков. Это шутка</li>
                <li>Извени за Кастета. Он не хотел</li>
                <li>Извини за «Яйцечесалку». Она легенда.</li>
                <li>Извини за этот сайт. Он для тебя.</li>
            </ul>

            <p><strong>Прости за всё, мадемуазель.</strong> 🤘</p>
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

// === ИДЕИ ДЛЯ КОСПЛЕЯ (только персонаж и откуда) ===
const cosplayIdeas = [
    // === ИГРЫ ===
    { name: "Салли Фейс", from: "Sally Face" },
    { name: "Тревис", from: "Sally Face" },
    { name: "Ларри", from: "Sally Face" },
    { name: "Тодд", from: "Sally Face" },
    { name: "Гастер", from: "Undertale" },
    { name: "Санс", from: "Undertale" },
    { name: "Папирус", from: "Undertale" },
    { name: "Чара", from: "Undertale" },
    { name: "Фриск", from: "Undertale" },
    { name: "Андайн", from: "Undertale" },
    { name: "Альфис", from: "Undertale" },
    { name: "Меттатон", from: "Undertale" },
    { name: "Азгор", from: "Undertale" },
    { name: "Мьютант", from: "Undertale" },
    { name: "Флауи", from: "Undertale" },
    { name: "Крис", from: "Deltarune" },
    { name: "Сьюзи", from: "Deltarune" },
    { name: "Ральзей", from: "Deltarune" },
    { name: "Ланцер", from: "Deltarune" },
    { name: "Дживил", from: "Deltarune" },
    { name: "Морти", from: "Рик и Морти" },
    { name: "Рик", from: "Рик и Морти" },
    { name: "Саммер", from: "Рик и Морти" },
    { name: "Джерри", from: "Рик и Морти" },
    { name: "Бет", from: "Рик и Морти" },
    { name: "Бёрдперсон", from: "Рик и Морти" },
    { name: "Мистер Мисикс", from: "Рик и Морти" },
    { name: "Сквончи", from: "Рик и Морти" },
    { name: "Пикачу", from: "Pokemon" },
    { name: "Иви", from: "Pokemon" },
    { name: "Джиглипафф", from: "Pokemon" },
    { name: "Чармандер", from: "Pokemon" },
    { name: "Сквиртл", from: "Pokemon" },
    { name: "Бульбазавр", from: "Pokemon" },
    { name: "Мьюту", from: "Pokemon" },
    { name: "Марио", from: "Super Mario" },
    { name: "Луиджи", from: "Super Mario" },
    { name: "Пич", from: "Super Mario" },
    { name: "Боузер", from: "Super Mario" },
    { name: "Тоад", from: "Super Mario" },
    { name: "Йоши", from: "Super Mario" },
    { name: "Соник", from: "Sonic" },
    { name: "Тейлз", from: "Sonic" },
    { name: "Наклз", from: "Sonic" },
    { name: "Эггман", from: "Sonic" },
    { name: "Кратос", from: "God of War" },
    { name: "Атрей", from: "God of War" },
    { name: "Джеральт", from: "Ведьмак" },
    { name: "Цири", from: "Ведьмак" },
    { name: "Йеннифэр", from: "Ведьмак" },
    { name: "Лютик", from: "Ведьмак" },
    { name: "Трисс", from: "Ведьмак" },
    { name: "Стив", from: "Minecraft" },
    { name: "Алекс", from: "Minecraft" },
    { name: "Крипер", from: "Minecraft" },
    { name: "Эндермен", from: "Minecraft" },
    { name: "Скелет", from: "Minecraft" },
    { name: "Зомби", from: "Minecraft" },
    { name: "Артур Морган", from: "Red Dead Redemption 2" },
    { name: "Джон Марстон", from: "Red Dead Redemption 2" },
    { name: "Тревор", from: "GTA V" },
    { name: "Майкл", from: "GTA V" },
    { name: "Франклин", from: "GTA V" },
    { name: "СиДжей", from: "GTA San Andreas" },
    { name: "Эцио", from: "Assassin's Creed" },
    { name: "Альтаир", from: "Assassin's Creed" },
    { name: "Коннор", from: "Assassin's Creed 3" },
    { name: "Эдвард Кенуэй", from: "Assassin's Creed 4" },
    { name: "Лара Крофт", from: "Tomb Raider" },
    { name: "Нейтан Дрейк", from: "Uncharted" },
    { name: "Джоэл", from: "The Last of Us" },
    { name: "Элли", from: "The Last of Us" },
    { name: "Абби", from: "The Last of Us 2" },
    { name: "Артас", from: "Warcraft" },
    { name: "Иллидан", from: "Warcraft" },
    { name: "Тралл", from: "Warcraft" },
    { name: "Джайна", from: "Warcraft" },
    { name: "Сильвана", from: "Warcraft" },
    { name: "Диабло", from: "Diablo" },
    { name: "Деккард Каин", from: "Diablo" },
    { name: "Лилит", from: "Diablo" },
    { name: "Гордон Фримен", from: "Half-Life" },
    { name: "Аликс Вэнс", from: "Half-Life" },
    { name: "G-Man", from: "Half-Life" },
    { name: "Челл", from: "Portal" },
    { name: "ГЛаДОС", from: "Portal" },
    { name: "Пирамидоголовый", from: "Silent Hill" },
    { name: "Хизер", from: "Silent Hill 3" },
    { name: "Джеймс", from: "Silent Hill 2" },
    { name: "Леон", from: "Resident Evil" },
    { name: "Клэр", from: "Resident Evil" },
    { name: "Джилл", from: "Resident Evil" },
    { name: "Ада Вонг", from: "Resident Evil" },
    { name: "Немезис", from: "Resident Evil" },
    { name: "Фредди", from: "Five Nights at Freddy's" },
    { name: "Бонни", from: "Five Nights at Freddy's" },
    { name: "Чика", from: "Five Nights at Freddy's" },
    { name: "Фокси", from: "Five Nights at Freddy's" },
    { name: "Голден Фредди", from: "Five Nights at Freddy's" },
    { name: "Марионетка", from: "Five Nights at Freddy's" },
    { name: "Спрингтрап", from: "Five Nights at Freddy's" },
    { name: "Ванни", from: "Five Nights at Freddy's" },
    { name: "Старлайт", from: "Пацаны" },
    { name: "Хоумлендер", from: "Пацаны" },
    { name: "Бутчер", from: "Пацаны" },
    { name: "Хьюи", from: "Пацаны" },
    { name: "MM", from: "Пацаны" },
    { name: "Френчи", from: "Пацаны" },
    { name: "Кимико", from: "Пацаны" },
    { name: "А-Трейн", from: "Пацаны" },
    { name: "Чёрный Нуар", from: "Пацаны" },
    { name: "Глубина", from: "Пацаны" },
    { name: "Штормфронт", from: "Пацаны" },

    // === АНИМЕ ===
    { name: "Наруто", from: "Наруто" },
    { name: "Саске", from: "Наруто" },
    { name: "Сакура", from: "Наруто" },
    { name: "Какаши", from: "Наруто" },
    { name: "Итачи", from: "Наруто" },
    { name: "Хината", from: "Наруто" },
    { name: "Гаара", from: "Наруто" },
    { name: "Джирайя", from: "Наруто" },
    { name: "Луффи", from: "One Piece" },
    { name: "Зоро", from: "One Piece" },
    { name: "Нами", from: "One Piece" },
    { name: "Санджи", from: "One Piece" },
    { name: "Усопп", from: "One Piece" },
    { name: "Чоппер", from: "One Piece" },
    { name: "Робин", from: "One Piece" },
    { name: "Гоку", from: "Dragon Ball" },
    { name: "Вегета", from: "Dragon Ball" },
    { name: "Булма", from: "Dragon Ball" },
    { name: "Гохан", from: "Dragon Ball" },
    { name: "Фриза", from: "Dragon Ball" },
    { name: "Селл", from: "Dragon Ball" },
    { name: "Ичиго", from: "Блич" },
    { name: "Рукия", from: "Блич" },
    { name: "Айзен", from: "Блич" },
    { name: "Кенпачи", from: "Блич" },
    { name: "Тоширо", from: "Блич" },
    { name: "Эрен", from: "Атака титанов" },
    { name: "Микаса", from: "Атака титанов" },
    { name: "Армин", from: "Атака титанов" },
    { name: "Леви", from: "Атака титанов" },
    { name: "Эрвин", from: "Атака титанов" },
    { name: "Танджиро", from: "Клинок, рассекающий демонов" },
    { name: "Незуко", from: "Клинок, рассекающий демонов" },
    { name: "Зеницу", from: "Клинок, рассекающий демонов" },
    { name: "Иноске", from: "Клинок, рассекающий демонов" },
    { name: "Гию", from: "Клинок, рассекающий демонов" },
    { name: "Шиничи", from: "Клинок, рассекающий демонов" },
    { name: "Дэку", from: "Моя геройская академия" },
    { name: "Бакуго", from: "Моя геройская академия" },
    { name: "Тодороки", from: "Моя геройская академия" },
    { name: "Урарака", from: "Моя геройская академия" },
    { name: "Всемогущий", from: "Моя геройская академия" },
    { name: "Тёмный", from: "Моя геройская академия" },
    { name: "Гон", from: "Hunter x Hunter" },
    { name: "Киллуа", from: "Hunter x Hunter" },
    { name: "Курапика", from: "Hunter x Hunter" },
    { name: "Леорио", from: "Hunter x Hunter" },
    { name: "Хисока", from: "Hunter x Hunter" },
    { name: "Сайтама", from: "Ванпанчмен" },
    { name: "Генос", from: "Ванпанчмен" },
    { name: "Соник", from: "Ванпанчмен" },
    { name: "Торнадо", from: "Ванпанчмен" },
    { name: "Кинг", from: "Ванпанчмен" },
    { name: "Сейлор Мун", from: "Сейлор Мун" },
    { name: "Сейлор Марс", from: "Сейлор Мун" },
    { name: "Сейлор Венера", from: "Сейлор Мун" },
    { name: "Туксэдо Маск", from: "Сейлор Мун" },
    { name: "Лайт Ягами", from: "Тетрадь смерти" },
    { name: "L", from: "Тетрадь смерти" },
    { name: "Миса", from: "Тетрадь смерти" },
    { name: "Рюк", from: "Тетрадь смерти" },
    { name: "Нир", from: "Тетрадь смерти" },
    { name: "Эдвард Элрик", from: "Стальной алхимик" },
    { name: "Альфонс Элрик", from: "Стальной алхимик" },
    { name: "Уинри", from: "Стальной алхимик" },
    { name: "Рой Мустанг", from: "Стальной алхимик" },
    { name: "Скар", from: "Стальной алхимик" },

    // === ФИЛЬМЫ И СЕРИАЛЫ ===
    { name: "Гарри Поттер", from: "Гарри Поттер" },
    { name: "Гермиона", from: "Гарри Поттер" },
    { name: "Рон Уизли", from: "Гарри Поттер" },
    { name: "Драко Малфой", from: "Гарри Поттер" },
    { name: "Дамблдор", from: "Гарри Поттер" },
    { name: "Снегг", from: "Гарри Поттер" },
    { name: "Волан-де-Морт", from: "Гарри Поттер" },
    { name: "Хагрид", from: "Гарри Поттер" },
    { name: "Фродо", from: "Властелин колец" },
    { name: "Сэм", from: "Властелин колец" },
    { name: "Гэндальф", from: "Властелин колец" },
    { name: "Арагорн", from: "Властелин колец" },
    { name: "Леголас", from: "Властелин колец" },
    { name: "Гимли", from: "Властелин колец" },
    { name: "Голлум", from: "Властелин колец" },
    { name: "Джек Воробей", from: "Пираты Карибского моря" },
    { name: "Уилл Тёрнер", from: "Пираты Карибского моря" },
    { name: "Элизабет", from: "Пираты Карибского моря" },
    { name: "Дэйви Джонс", from: "Пираты Карибского моря" },
    { name: "Барбосса", from: "Пираты Карибского моря" },
    { name: "Джеймс Бонд", from: "Джеймс Бонд" },
    { name: "Индиана Джонс", from: "Индиана Джонс" },
    { name: "Шерлок Холмс", from: "Шерлок" },
    { name: "Доктор Ватсон", from: "Шерлок" },
    { name: "Мориарти", from: "Шерлок" },
    { name: "Эркюль Пуаро", from: "Эркюль Пуаро" },
    { name: "Мисс Марпл", from: "Мисс Марпл" },
    { name: "Джокер", from: "DC" },
    { name: "Харли Квинн", from: "DC" },
    { name: "Бэтмен", from: "DC" },
    { name: "Супермен", from: "DC" },
    { name: "Чудо-женщина", from: "DC" },
    { name: "Флэш", from: "DC" },
    { name: "Аквамен", from: "DC" },
    { name: "Женщина-кошка", from: "DC" },
    { name: "Пингвин", from: "DC" },
    { name: "Загадочник", from: "DC" },
    { name: "Ядовитый Плющ", from: "DC" },
    { name: "Дэдшот", from: "DC" },
    { name: "Харли Квинн", from: "DC" },
    { name: "Человек-паук", from: "Marvel" },
    { name: "Железный человек", from: "Marvel" },
    { name: "Тор", from: "Marvel" },
    { name: "Локи", from: "Marvel" },
    { name: "Халк", from: "Marvel" },
    { name: "Капитан Америка", from: "Marvel" },
    { name: "Чёрная Вдова", from: "Marvel" },
    { name: "Соколиный глаз", from: "Marvel" },
    { name: "Доктор Стрэндж", from: "Marvel" },
    { name: "Чёрная Пантера", from: "Marvel" },
    { name: "Дэдпул", from: "Marvel" },
    { name: "Росомаха", from: "Marvel" },
    { name: "Танос", from: "Marvel" },
    { name: "Локи", from: "Marvel" },
    { name: "Эльза", from: "Холодное сердце" },
    { name: "Анна", from: "Холодное сердце" },
    { name: "Кристофф", from: "Холодное сердце" },
    { name: "Олаф", from: "Холодное сердце" },
    { name: "Рапунцель", from: "Рапунцель" },
    { name: "Флинн Райдер", from: "Рапунцель" },
    { name: "Белль", from: "Красавица и чудовище" },
    { name: "Чудовище", from: "Красавица и чудовище" },
    { name: "Ариэль", from: "Русалочка" },
    { name: "Золушка", from: "Золушка" },
    { name: "Аврора", from: "Спящая красавица" },
    { name: "Малефисента", from: "Спящая красавица" },
    { name: "Белоснежка", from: "Белоснежка" },
    { name: "Жасмин", from: "Аладдин" },
    { name: "Аладдин", from: "Аладдин" },
    { name: "Мулан", from: "Мулан" },
    { name: "Моана", from: "Моана" },
    { name: "Меда", from: "Моана" },
    { name: "Мирабель", from: "Энканто" },
    { name: "Бруно", from: "Энканто" },
    { name: "Шрек", from: "Шрек" },
    { name: "Фиона", from: "Шрек" },
    { name: "Осёл", from: "Шрек" },
    { name: "Кот в сапогах", from: "Шрек" },
    { name: "Путин", from: "Политика" },

    // === МИФОЛОГИЯ И ФОЛЬКЛОР ===
    { name: "Дракула", from: "Дракула" },
    { name: "Вампир", from: "Фольклор" },
    { name: "Ведьма", from: "Фольклор" },
    { name: "Зомби", from: "Хоррор" },
    { name: "Призрак", from: "Фольклор" },
    { name: "Скелет", from: "Фольклор" },
    { name: "Ангел", from: "Мифология" },
    { name: "Демон", from: "Мифология" },
    { name: "Единорог", from: "Мифология" },
    { name: "Дракон", from: "Мифология" },
    { name: "Феникс", from: "Мифология" },
    { name: "Русалка", from: "Мифология" },
    { name: "Сирена", from: "Мифология" },
    { name: "Гарпия", from: "Мифология" },
    { name: "Кентавр", from: "Мифология" },
    { name: "Минотавр", from: "Мифология" },
    { name: "Циклоп", from: "Мифология" },
    { name: "Медуза Горгона", from: "Мифология" },
    { name: "Фея", from: "Мифология" },
    { name: "Эльф", from: "Фэнтези" },
    { name: "Гном", from: "Фэнтези" },
    { name: "Орк", from: "Фэнтези" },
    { name: "Тролль", from: "Фэнтези" },
    { name: "Валькирия", from: "Скандинавская мифология" },
    { name: "Один", from: "Скандинавская мифология" },
    { name: "Тор", from: "Скандинавская мифология" },
    { name: "Локи", from: "Скандинавская мифология" },
    { name: "Фрейя", from: "Скандинавская мифология" },
    { name: "Зевс", from: "Греческая мифология" },
    { name: "Афина", from: "Греческая мифология" },
    { name: "Аполлон", from: "Греческая мифология" },
    { name: "Артемида", from: "Греческая мифология" },
    { name: "Посейдон", from: "Греческая мифология" },
    { name: "Аид", from: "Греческая мифология" },
    { name: "Персефона", from: "Греческая мифология" },
    { name: "Геракл", from: "Греческая мифология" },
    { name: "Ахиллес", from: "Греческая мифология" },
    { name: "Одиссей", from: "Греческая мифология" },
    { name: "Ра", from: "Египетская мифология" },
    { name: "Анубис", from: "Египетская мифология" },
    { name: "Осирис", from: "Египетская мифология" },
    { name: "Исида", from: "Египетская мифология" },
    { name: "Бастет", from: "Египетская мифология" },

    // === ИСТОРИЯ ===
    { name: "Пират", from: "История" },
    { name: "Рыцарь", from: "История" },
    { name: "Король", from: "История" },
    { name: "Королева", from: "История" },
    { name: "Принцесса", from: "Сказки" },
    { name: "Принц", from: "Сказки" },
    { name: "Самурай", from: "Япония" },
    { name: "Ниндзя", from: "Япония" },
    { name: "Гейша", from: "Япония" },
    { name: "Ронин", from: "Япония" },
    { name: "Викинг", from: "Скандинавия" },
    { name: "Спартанец", from: "Греция" },
    { name: "Легионер", from: "Рим" },
    { name: "Центурион", from: "Рим" },
    { name: "Гладиатор", from: "Рим" },
    { name: "Фараон", from: "Египет" },
    { name: "Жрица", from: "Древний мир" },
    { name: "Шаман", from: "Племена" },
    { name: "Индеец", from: "Племена" },
    { name: "Ковбой", from: "Дикий Запад" },
    { name: "Шериф", from: "Дикий Запад" },
    { name: "Бандит", from: "Дикий Запад" },
    { name: "Детектив", from: "20 век" },
    { name: "Гангстер", from: "20 век" },
    { name: "Лётчик", from: "20 век" },
    { name: "Моряк", from: "20 век" },
    { name: "Солдат", from: "20 век" },
    { name: "Медсестра", from: "20 век" },
    { name: "Учёный", from: "20 век" },
    { name: "Изобретатель", from: "20 век" },

    // === СТИЛИ И ОБРАЗЫ ===
    { name: "Киберпанк", from: "Стиль" },
    { name: "Стимпанк", from: "Стиль" },
    { name: "Готика", from: "Стиль" },
    { name: "Панк", from: "Стиль" },
    { name: "Гранж", from: "Стиль" },
    { name: "Хиппи", from: "Стиль" },
    { name: "Хипстер", from: "Стиль" },
    { name: "Байкер", from: "Стиль" },
    { name: "Рокер", from: "Стиль" },
    { name: "Металлист", from: "Стиль" },
    { name: "Эмо", from: "Стиль" },
    { name: "Гот", from: "Стиль" },
    { name: "Аниме-школьница", from: "Аниме" },
    { name: "Ангел", from: "Мифология" },
    { name: "Демон", from: "Мифология" },
    { name: "Робот", from: "Фантастика" },
    { name: "Призрак", from: "Фольклор" },
    { name: "Зомби", from: "Хоррор" },
    { name: "Вампир", from: "Фольклор" },
    { name: "Ведьма", from: "Фольклор" },
    { name: "Фея", from: "Мифология" }
];

// === СЛУЧАЙНАЯ ИДЕЯ ===
function randomCosplay() {
    const idea = cosplayIdeas[Math.floor(Math.random() * cosplayIdeas.length)];
    alert("Идея для косплея:\n\n" + idea.name + "\n(" + idea.from + ")");
}

// === ВСЕ ИДЕИ ===
function showAllCosplay() {
    const output = document.getElementById('cosplay-output');
    if (!output) return;

    output.innerHTML = `
        <h3>Все идеи (${cosplayIdeas.length})</h3>
        <ul>
            ${cosplayIdeas.map(i => `<li><strong>${i.name}</strong> — ${i.from}</li>`).join('')}
        </ul>
    `;
}

// === ГЕНЕРАТОР КОМБИНАЦИЙ ===
const comboCharacters = [
    { name: "Салли Фейс", from: "Sally Face" },
    { name: "Тревис", from: "Sally Face" },
    { name: "Ларри", from: "Sally Face" },
    { name: "Гастер", from: "Undertale" },
    { name: "Санс", from: "Undertale" },
    { name: "Папирус", from: "Undertale" },
    { name: "Чара", from: "Undertale" },
    { name: "Морти", from: "Рик и Морти" },
    { name: "Рик", from: "Рик и Морти" },
    { name: "Саммер", from: "Рик и Морти" },
    { name: "Бутчер", from: "Пацаны" },
    { name: "Хоумлендер", from: "Пацаны" },
    { name: "Старлайт", from: "Пацаны" },
    { name: "Дэдпул", from: "Marvel" },
    { name: "Джокер", from: "DC" },
    { name: "Харли Квинн", from: "DC" },
    { name: "Бэтмен", from: "DC" },
    { name: "Человек-паук", from: "Marvel" },
    { name: "Железный человек", from: "Marvel" },
    { name: "Тор", from: "Marvel" },
    { name: "Локи", from: "Marvel" },
    { name: "Эльза", from: "Холодное сердце" },
    { name: "Анна", from: "Холодное сердце" },
    { name: "Рапунцель", from: "Рапунцель" },
    { name: "Белль", from: "Красавица и чудовище" },
    { name: "Ариэль", from: "Русалочка" },
    { name: "Золушка", from: "Золушка" },
    { name: "Малефисента", from: "Спящая красавица" },
    { name: "Дракула", from: "Дракула" },
    { name: "Ведьма", from: "Фольклор" },
    { name: "Вампир", from: "Фольклор" },
    { name: "Зомби", from: "Хоррор" },
    { name: "Призрак", from: "Фольклор" },
    { name: "Скелет", from: "Фольклор" },
    { name: "Ангел", from: "Мифология" },
    { name: "Демон", from: "Мифология" },
    { name: "Кошка", from: "Животные" },
    { name: "Лиса", from: "Животные" },
    { name: "Волк", from: "Животные" },
    { name: "Кролик", from: "Животные" },
    { name: "Панда", from: "Животные" },
    { name: "Единорог", from: "Мифология" },
    { name: "Дракон", from: "Мифология" },
    { name: "Феникс", from: "Мифология" },
    { name: "Робот", from: "Фантастика" },
    { name: "Самурай", from: "Япония" },
    { name: "Ниндзя", from: "Япония" },
    { name: "Пират", from: "История" },
    { name: "Рыцарь", from: "История" },
    { name: "Король", from: "История" },
    { name: "Королева", from: "История" },
    { name: "Принцесса", from: "Сказки" },
    { name: "Принц", from: "Сказки" },
    { name: "Ведьмак", from: "Ведьмак" },
    { name: "Эльф", from: "Фэнтези" },
    { name: "Гном", from: "Фэнтези" },
    { name: "Орк", from: "Фэнтези" },
    { name: "Тролль", from: "Фэнтези" },
    { name: "Фея", from: "Мифология" },
    { name: "Русалка", from: "Мифология" },
    { name: "Сирена", from: "Мифология" },
    { name: "Гарпия", from: "Мифология" },
    { name: "Кентавр", from: "Мифология" },
    { name: "Минотавр", from: "Мифология" },
    { name: "Циклоп", from: "Мифология" },
    { name: "Медуза Горгона", from: "Мифология" },
    { name: "Гарри Поттер", from: "Гарри Поттер" },
    { name: "Гермиона", from: "Гарри Поттер" },
    { name: "Драко Малфой", from: "Гарри Поттер" },
    { name: "Дамблдор", from: "Гарри Поттер" },
    { name: "Волан-де-Морт", from: "Гарри Поттер" },
    { name: "Фродо", from: "Властелин колец" },
    { name: "Гэндальф", from: "Властелин колец" },
    { name: "Леголас", from: "Властелин колец" },
    { name: "Арагорн", from: "Властелин колец" },
    { name: "Голлум", from: "Властелин колец" },
    { name: "Шерлок Холмс", from: "Шерлок Холмс" },
    { name: "Доктор Ватсон", from: "Шерлок Холмс" },
    { name: "Джеймс Бонд", from: "Джеймс Бонд" },
    { name: "Индиана Джонс", from: "Индиана Джонс" },
    { name: "Джек Воробей", from: "Пираты Карибского моря" },
    { name: "Наруто", from: "Наруто" },
    { name: "Саске", from: "Наруто" },
    { name: "Сакура", from: "Наруто" },
    { name: "Какаши", from: "Наруто" },
    { name: "Итачи", from: "Наруто" },
    { name: "Луффи", from: "One Piece" },
    { name: "Зоро", from: "One Piece" },
    { name: "Нами", from: "One Piece" },
    { name: "Санджи", from: "One Piece" },
    { name: "Гоку", from: "Dragon Ball" },
    { name: "Вегета", from: "Dragon Ball" },
    { name: "Ичиго", from: "Блич" },
    { name: "Рукия", from: "Блич" },
    { name: "Эрен", from: "Атака титанов" },
    { name: "Микаса", from: "Атака титанов" },
    { name: "Леви", from: "Атака титанов" },
    { name: "Танджиро", from: "Клинок, рассекающий демонов" },
    { name: "Незуко", from: "Клинок, рассекающий демонов" },
    { name: "Зеницу", from: "Клинок, рассекающий демонов" },
    { name: "Иноске", from: "Клинок, рассекающий демонов" },
    { name: "Дэку", from: "Моя геройская академия" },
    { name: "Бакуго", from: "Моя геройская академия" },
    { name: "Тодороки", from: "Моя геройская академия" },
    { name: "Гон", from: "Hunter x Hunter" },
    { name: "Киллуа", from: "Hunter x Hunter" },
    { name: "Сайтама", from: "Ванпанчмен" },
    { name: "Генос", from: "Ванпанчмен" },
    { name: "Лайт Ягами", from: "Тетрадь смерти" },
    { name: "L", from: "Тетрадь смерти" },
    { name: "Миса", from: "Тетрадь смерти" },
    { name: "Эдвард Элрик", from: "Стальной алхимик" },
    { name: "Альфонс Элрик", from: "Стальной алхимик" },
    { name: "Рой Мустанг", from: "Стальной алхимик" },
    { name: "Скар", from: "Стальной алхимик" },
    { name: "Уинри", from: "Стальной алхимик" }
];

const comboStyles = [
    "киберпанк", "стимпанк", "готика", "панк", "гранж",
    "хиппи", "хипстер", "байкер", "рокер", "металлист",
    "эмо", "гот", "аниме", "милитари", "спорт",
    "классика", "ретро", "футуризм", "минимализм", "максимализм",
    "бохо", "глэм", "гранж-рок", "вамп", "нуар",
    "сюрреализм", "поп-арт", "авангард", "традиция", "эклектика",
    "неон", "пастель", "монохром", "радуга", "металл",
    "кружево", "кожа", "деним", "шёлк", "бархат"
];

const comboAccessories = [
    "очки", "маска", "шляпа", "кепка", "капюшон",
    "наушники", "цепочка", "кольцо", "браслет", "часы",
    "ремень", "перчатки", "шарф", "плащ", "жилет",
    "сумка", "рюкзак", "зонт", "трость", "веер",
    "книга", "свеча", "цветок", "меч", "лук",
    "посох", "кинжал", "пистолет", "щит", "шлем",
    "корона", "диадема", "серьги", "пирсинг", "грим",
    "парик", "контактные линзы", "накладные уши", "хвост", "крылья",
    "рога", "нимб", "клыки", "когти"
];

// === СЛУЧАЙНАЯ КОМБИНАЦИЯ ===
function randomCombo() {
    const char = comboCharacters[Math.floor(Math.random() * comboCharacters.length)];
    const style = comboStyles[Math.floor(Math.random() * comboStyles.length)];
    const acc = comboAccessories[Math.floor(Math.random() * comboAccessories.length)];
    
    alert("Идея для косплея:\n\n" + char.name + " (" + char.from + ")\nСтиль: " + style + "\nАксессуар: " + acc);
}

// === ВСЕ КОМБИНАЦИИ ===
function showAllCombos() {
    const output = document.getElementById('combo-output');
    if (!output) return;
    
    const total = comboCharacters.length * comboStyles.length * comboAccessories.length;
    output.innerHTML = `
        <h3>Комбинаций возможно: ${total}</h3>
        <p><strong>Персонажи:</strong> ${comboCharacters.length}</p>
        <p><strong>Стили:</strong> ${comboStyles.length}</p>
        <p><strong>Аксессуары:</strong> ${comboAccessories.length}</p>
        <p>Нажми «Случайная комбинация», чтобы получить одну из них.</p>
    `;
}

// === СВИДАНИЕ С ТИМОШЕЙ ===
function goOnDate() {
    alert("Хер тебе");
}

// === СТАРТ ===
renderSidebar();
renderTopic('variables');
