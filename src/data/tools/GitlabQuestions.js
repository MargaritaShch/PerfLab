export const GitlabQuestions = [
  {
    id: 1,
    question: "Что такое GitLab и для чего он используется?",
    answer: `<p><strong>GitLab</strong> — это платформа для хостинга Git-репозиториев, предназначенная для управления проектами и командной работы. Основные возможности GitLab включают:</p>
             <ul>
               <li>Управление версиями кода с помощью Git;</li>
               <li>Автоматизацию сборки, тестирования и развёртывания с CI/CD;</li>
               <li>Отслеживание задач и управление проектом.</li>
             </ul>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 2,
    question: "Как создать и инициализировать новый проект в GitLab?",
    answer: `<p>Для создания и инициализации нового проекта:</p>
             <ol>
               <li>Зайдите на свою панель в GitLab и выберите "Новый проект".</li>
               <li>Выберите "Создать пустой проект" или используйте шаблон.</li>
               <li>Введите название проекта и настройте параметры доступа.</li>
               <li>Нажмите "Создать проект", после чего можно инициализировать проект с пустым репозиторием или добавить существующий.</li>
             </ol>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 3,
    question: "Что такое GitLab CI/CD и как настроить простой конвейер?",
    answer: `<p><strong>GitLab CI/CD</strong> — это инструмент автоматизации, позволяющий настраивать конвейеры (pipelines) для сборки, тестирования и развёртывания кода. Для настройки простого конвейера:</p>
             <ol>
               <li>Создайте файл <code>.gitlab-ci.yml</code> в корневой директории проекта.</li>
               <li>Определите этапы (например, build, test, deploy) и команды для каждого этапа.</li>
               <li>Сохраните изменения, и GitLab автоматически запустит конвейер при каждом коммите.</li>
             </ol>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 4,
    question: "Какую структуру имеет файл .gitlab-ci.yml?",
    answer: `<p>Файл <code>.gitlab-ci.yml</code> содержит конфигурацию для конвейеров GitLab CI/CD и включает:</p>
             <ul>
               <li><strong>Stages (Этапы):</strong> определяют последовательность выполнения, такие как <code>build</code>, <code>test</code>, <code>deploy</code>.</li>
               <li><strong>Jobs (Задачи):</strong> команды, которые выполняются на каждом этапе.</li>
               <li><strong>Script:</strong> команда или список команд, выполняемых в задаче.</li>
               <li><strong>Variables:</strong> переменные окружения для параметризации задач.</li>
             </ul>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 5,
    question: "Что такое GitLab Runner и как его установить?",
    answer: `<p><strong>GitLab Runner</strong> — это агент, который выполняет задачи конвейера. Для установки Runner:</p>
             <ol>
               <li>Скачайте GitLab Runner для своей операционной системы с официального сайта.</li>
               <li>Установите и зарегистрируйте Runner с помощью команды <code>gitlab-runner register</code>, указав URL и токен вашего GitLab-проекта.</li>
               <li>Выберите тип Runner (например, shell, docker) и завершите регистрацию.</li>
             </ol>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 6,
    question: "Как работают этапы (stages) и задачи (jobs) в GitLab CI/CD?",
    answer: `<p>Этапы (<strong>stages</strong>) и задачи (<strong>jobs</strong>) организуют выполнение конвейеров:</p>
             <ul>
               <li><strong>Stages:</strong> определяют последовательные этапы, которые выполняются один за другим, например, <code>build</code>, <code>test</code>, <code>deploy</code>.</li>
               <li><strong>Jobs:</strong> задачи, выполняемые на каждом этапе. Задачи в одном этапе выполняются параллельно, если это возможно.</li>
             </ul>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 7,
    question: "Как настроить переменные среды (environment variables) в GitLab CI/CD?",
    answer: `<p>Переменные среды используются для передачи конфиденциальных данных, таких как токены API или параметры конфигурации:</p>
             <ol>
               <li>Перейдите в настройки проекта <strong>Settings</strong> > <strong>CI/CD</strong>.</li>
               <li>В разделе <strong>Variables</strong> нажмите <strong>Add variable</strong>, задайте имя и значение переменной.</li>
               <li>Установите переменной уровень безопасности, указав <code>protected</code> или <code>masked</code>, если необходимо.</li>
             </ol>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 8,
    question: "Что такое окружения (environments) и как с ними работать?",
    answer: `<p>Окружения (<strong>environments</strong>) в GitLab CI/CD используются для развертывания приложений в разных средах (например, staging, production). Окружения помогают управлять процессами развертывания и контроля версий:</p>
             <ol>
               <li>Задайте окружение в <code>.gitlab-ci.yml</code> в параметре <code>environment</code> для задачи (job).</li>
               <li>Назначьте URL для отслеживания развернутого приложения в каждом окружении.</li>
               <li>Окружения позволяют запускать действия вручную и управлять задачами развертывания.</li>
             </ol>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 9,
    question: "Как использовать GitLab для управления задачами и проектами?",
    answer: `<p>GitLab поддерживает систему управления задачами и проектами с использованием следующих инструментов:</p>
             <ul>
               <li><strong>Issues:</strong> позволяют создавать и отслеживать задачи в проекте.</li>
               <li><strong>Milestones:</strong> для группировки задач в рамках сроков проекта.</li>
               <li><strong>Boards:</strong> визуальные доски для управления задачами и распределения задач по этапам.</li>
               <li><strong>Labels:</strong> помогают категоризировать задачи для удобной навигации.</li>
             </ul>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
  {
    id: 10,
    question: "Как настроить защиту веток в GitLab?",
    answer: `<p>Защита веток позволяет установить правила для важных веток, таких как <code>main</code> или <code>master</code>, чтобы предотвратить случайное изменение или удаление:</p>
             <ol>
               <li>Перейдите в настройки проекта в разделе <strong>Settings</strong> > <strong>Repository</strong>.</li>
               <li>В разделе <strong>Protected Branches</strong> выберите ветки, которые необходимо защитить.</li>
               <li>Настройте уровни доступа (например, разрешите push только администраторам) и сохраните настройки.</li>
             </ol>`,
    category: "tools",
    tool: "GitLab",
    title: "GitLab",
  },
];