export const FrontendQuestions = [
  {
    id: 1,
    question: 'Что такое цикл событий (event loop) и как он работает?',
    answer: `
          <p>Цикл событий (event loop) - это механизм, используемый в JavaScript для обработки событий и выполнения асинхронного кода. Он позволяет программе эффективно обрабатывать события, такие как пользовательские действия, таймеры, сетевые запросы и другие асинхронные операции.</p>
          <p>Работа цикла событий в JavaScript обычно выглядит следующим образом:</p>
          <ol>
            <li><strong>Ожидание событий:</strong> Цикл событий начинает свою работу, ожидая возникновения событий, таких как пользовательские действия, таймеры или сетевые запросы.</li>
            <li><strong>Обработка событий:</strong> Когда событие происходит, оно помещается в очередь событий (event queue).</li>
            <li><strong>Выполнение обработчиков:</strong> Цикл событий вызывает обработчик события для выполнения в ответ на событие. Обработчик выполняется синхронно.</li>
            <li><strong>Асинхронный код:</strong> Асинхронные операции помещаются в очередь задач (task queue) и выполняются позже.</li>
            <li><strong>Ожидание новых событий:</strong> Цикл событий возвращается к ожиданию новых событий после обработки текущих.</li>
          </ol>
          <p>Цикл событий позволяет JavaScript выполнять асинхронный код без блокировки основного потока выполнения.</p>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 2,
    question: 'Какие типы данных есть в JS?',
    answer: `
          <p>Всего в JS существует 8 типов данных:</p>
          <ul>
            <li><strong>Number:</strong> Числа.</li>
            <li><strong>String:</strong> Строки.</li>
            <li><strong>Boolean:</strong> Логические значения (true или false).</li>
            <li><strong>BigInt:</strong> Большие числа.</li>
            <li><strong>Symbol:</strong> Уникальные идентификаторы.</li>
            <li><strong>null:</strong> Явное отсутствие значения.</li>
            <li><strong>undefined:</strong> Неопределенное значение.</li>
            <li><strong>Object:</strong> Объекты.</li>
          </ul>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 3,
    question:
      'Что такое NaN? Какого типа это значение? Как можно узнать, равно ли значение переменной NaN?',
    answer: `
          <p>NaN расшифровывается как "Not A Number". Это значение типа Number. Чтобы проверить, является ли значение NaN, можно использовать методы:</p>
          <pre>
            <code>
              let x = NaN;
              console.log(isNaN(x)); // true
            </code>
          </pre>
          <p>Пример для метода <strong>Number.isNaN</strong>:</p>
          <pre>
            <code>
              let y = 5 / "hello";
              console.log(Number.isNaN(y)); // true
            </code>
          </pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 4,
    question: 'В чем разница между let, const и var?',
    answer: `
          <p>Различия между <strong>let</strong>, <strong>const</strong> и <strong>var</strong>:</p>
          <ul>
            <li><strong>var:</strong> Имеет функциональную область видимости и поднимается в начале выполнения.</li>
            <li><strong>let:</strong> Имеет блочную область видимости, не поднимается.</li>
            <li><strong>const:</strong> Как и let, имеет блочную область видимости, но не может быть переопределено после инициализации.</li>
          </ul>
          <pre>
            <code>
              let x = 5;
              console.log(x); // 5
              const y = 10;
              console.log(y); // 10
            </code>
          </pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 5,
    question:
      'Что такое this? Отличие this в function declaration и стрелочных функциях',
    answer: `
          <p><strong>this</strong> - это специальное ключевое слово, которое ссылается на контекст вызова функции.</p>
          <ul>
            <li>В function declaration значение this зависит от того, как была вызвана функция.</li>
            <li>В стрелочных функциях значение this берется из окружающего контекста и не изменяется.</li>
          </ul>
          <pre>
            <code>
              const obj = {
                name: 'John',
                greet: function() {
                  console.log(this.name);
                }
              };
              obj.greet(); // 'John'
            </code>
          </pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 6,
    question: 'С помощью чего в JS реализуются наследование?',
    answer: `
          <p>В JavaScript наследование реализуется с помощью прототипов. Прототипное наследование позволяет объектам наследовать свойства и методы других объектов. С выходом ECMAScript 2015 (ES6) было добавлено ключевое слово <strong>class</strong> для реализации классов.</p>
          <h4>Прототипное наследование с использованием <code>prototype</code>:</h4>
          <p>Создается конструктор (функция-класс), у которого есть свойство <code>prototype</code>. Новые объекты создаются с помощью конструктора <code>new</code>. Прототип нового объекта равен прототипу конструктора.</p>
          <pre><code>
    function Animal(name) {
      this.name = name;
    }
    
    Animal.prototype.sayHello = function() {
      console.log('Hello, my name is ' + this.name);
    };
    
    function Dog(name, breed) {
      Animal.call(this, name);
      this.breed = breed;
    }
    
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    
    Dog.prototype.bark = function() {
      console.log('Woof!');
    };
    
    const myDog = new Dog('Buddy', 'Labrador');
    myDog.sayHello(); // 'Hello, my name is Buddy'
    myDog.bark(); // 'Woof!'
          </code></pre>
    
          <h4>Наследование с использованием <code>class</code> (ES6):</h4>
          <p>Синтаксис <code>class</code> позволяет использовать ключевые слова <code>extends</code> и <code>super</code> для указания родительского класса.</p>
          <pre><code>
    class Animal {
      constructor(name) {
        this.name = name;
      }
    
      sayHello() {
        console.log('Hello, my name is ' + this.name);
      }
    }
    
    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
    
      bark() {
        console.log('Woof!');
      }
    }
    
    const myDog = new Dog('Buddy', 'Labrador');
    myDog.sayHello(); // 'Hello, my name is Buddy'
    myDog.bark(); // 'Woof!'
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 7,
    question: 'Что такое IIFE (Immediately Invoked Function Expression)?',
    answer: `
          <p>IIFE (Immediately Invoked Function Expression) — это функция, которая вызывается сразу же после того, как была объявлена. Она создает собственную область видимости, что позволяет изолировать переменные и функции.</p>
          <pre><code>
    (function() {
      var x = 5;
      console.log(x); // 5
    })();
    
    console.log(x); // ReferenceError: x is not defined
          </code></pre>
          <p>IIFE также может принимать аргументы:</p>
          <pre><code>
    (function(name) {
      console.log('Hello, ' + name);
    })('John'); // 'Hello, John'
          </code></pre>
          <p>IIFE помогает изолировать код и предотвращает его влияние на глобальную область видимости.</p>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 8,
    question: 'В чем разница между == и ===?',
    answer: `
          <p>Операторы сравнения <code>==</code> (нестрогое равенство) и <code>===</code> (строгое равенство) используются для сравнения значений. Вот их различия:</p>
          <ul>
            <li><strong><code>==</code> (нестрогое равенство):</strong> выполняет приведение типов перед сравнением. Например:</li>
            <pre><code>console.log(5 == '5'); // true</code></pre>
            <li><strong><code>===</code> (строгое равенство):</strong> сравнивает значения без приведения типов, то есть сравнивает и типы, и значения:</li>
            <pre><code>console.log(5 === '5'); // false</code></pre>
          </ul>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 9,
    question: 'Что такое замыкание в JavaScript?',
    answer: `
          <p>Замыкание (closure) — это функция, которая "запоминает" своё окружение, даже если она вызывается вне своего лексического контекста. Замыкание сохраняет доступ к переменным из внешней функции.</p>
          <pre><code>
    function outerFunction() {
      var outerVariable = 'Hello';
    
      function innerFunction() {
        console.log(outerVariable);
      }
    
      return innerFunction;
    }
    
    var closure = outerFunction();
    closure(); // 'Hello'
          </code></pre>
          <p>Пример счетчика с использованием замыкания:</p>
          <pre><code>
    function createCounter() {
      var count = 0;
    
      return {
        increment: function() {
          count++;
          console.log(count);
        },
        decrement: function() {
          count--;
          console.log(count);
        }
      };
    }
    
    var counter = createCounter();
    counter.increment(); // 1
    counter.increment(); // 2
    counter.decrement(); // 1
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 10,
    question: 'Что такое Promise, и какие бывают состояния',
    answer: `
          <p><strong>Promise</strong> — это объект, представляющий результат асинхронной операции. Он может находиться в одном из трех состояний:</p>
          <ul>
            <li><strong>Pending:</strong> Ожидание завершения.</li>
            <li><strong>Fulfilled:</strong> Успешное выполнение, возвращает результат.</li>
            <li><strong>Rejected:</strong> Ошибка выполнения, возвращает причину ошибки.</li>
          </ul>
          <p>Пример Promise:</p>
          <pre><code>
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = 'Some data';
          resolve(data);
        }, 2000);
      });
    }
    
    fetchData()
      .then(result => {
        console.log('Результат:', result);
      })
      .catch(error => {
        console.log('Ошибка:', error);
      });
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 11,
    question: 'В чем разница и схожесть между null и undefined?',
    answer: `
          <p><strong>null</strong> и <strong>undefined</strong> — это значения, которые указывают на отсутствие значения, но с разным смыслом:</p>
          <ul>
            <li><strong>null:</strong> Явное отсутствие значения, объектный тип данных.</li>
            <li><strong>undefined:</strong> Неинициализированное значение, примитивный тип данных.</li>
          </ul>
          <p>Сходства:</p>
          <ul>
            <li>Оба значения указывают на отсутствие значения.</li>
            <li>Оба значения являются "ложными" (falsy) в логических выражениях.</li>
          </ul>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 12,
    question:
      'Почему результатом сравнения двух похожих объектов является false?',
    answer: `
          <p>При сравнении объектов в JavaScript используется сравнение по ссылке, а не по содержимому. Даже если объекты содержат одинаковые свойства и значения, они являются разными объектами в памяти.</p>
          <pre><code>
    const obj1 = { name: 'John', age: 25 };
    const obj2 = { name: 'John', age: 25 };
    
    console.log(obj1 === obj2); // false
          </code></pre>
          <p>Для сравнения содержимого объектов нужно сравнивать их свойства вручную.</p>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 13,
    question: 'Для чего используется директива «use strict»?',
    answer: `
          <p>Директива "use strict" используется в JavaScript для включения строгого режима выполнения кода. Когда эта директива указана в начале скрипта или функции, JavaScript выполняет код в строгом режиме, что означает, что некоторые неявные или устаревшие функции и конструкции языка будут запрещены или изменены, а некоторые ошибки будут вызывать исключения.</p>
          
          <h4>Основные задачи строгого режима:</h4>
          <ul>
            <li>Предотвращение ошибок.</li>
            <li>Устранение неявных глобальных переменных.</li>
            <li>Запрет использования некоторых устаревших функций и конструкций.</li>
            <li>Улучшение безопасности.</li>
          </ul>
    
          <h4>Примеры использования:</h4>
          <pre><code>
    "use strict";
    x = 10; // Ошибка: переменная "x" не была объявлена
    
    function sum(a, a, c) { // Ошибка: Повторное объявление параметра
      return a + a + c;
    }
    
    delete Object.prototype; // Ошибка: Удаление свойства объекта запрещено
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 15,
    question: 'В чем разница между методами call, apply, bind?',
    answer: `
          <p>Методы <code>call</code>, <code>apply</code> и <code>bind</code> используются для управления контекстом выполнения функций в JavaScript. Вот их основные различия:</p>
    
          <h4><code>call</code>:</h4>
          <p>Вызывает функцию с указанным контекстом и аргументами, переданными в виде отдельных параметров:</p>
          <pre><code>function.call(context, arg1, arg2, ...);</code></pre>
    
          <h4><code>apply</code>:</h4>
          <p>Вызывает функцию с указанным контекстом, но аргументы передаются в виде массива:</p>
          <pre><code>function.apply(context, [arg1, arg2, ...]);</code></pre>
    
          <h4><code>bind</code>:</h4>
          <p>Создает новую функцию с привязанным контекстом, которую можно вызвать позже:</p>
          <pre><code>function.bind(context);</code></pre>
    
          <h4>Пример использования:</h4>
          <pre><code>
    const obj = {
      name: 'John',
      greet: function(message) {
        console.log(\`\${message}, \${this.name}!\`);
      }
    };
    
    const otherObj = { name: 'Jane' };
    
    // call
    obj.greet.call(otherObj, 'Hello'); // Hello, Jane!
    
    // apply
    obj.greet.apply(otherObj, ['Hi']); // Hi, Jane!
    
    // bind
    const boundGreet = obj.greet.bind(otherObj);
    boundGreet('Hey'); // Hey, Jane!
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 17,
    question: 'Что такое функции высшего порядка?',
    answer: `
          <p>Функции высшего порядка — это функции, которые могут принимать другие функции в качестве аргументов или возвращать функции в качестве результата. Они позволяют писать более гибкий и модульный код.</p>
    
          <h4>Пример функции обратного вызова (callback):</h4>
          <pre><code>
    function calculate(num1, num2, operation) {
      return operation(num1, num2);
    }
    
    function add(a, b) {
      return a + b;
    }
    
    function multiply(a, b) {
      return a * b;
    }
    
    const result1 = calculate(5, 3, add); // 8
    const result2 = calculate(5, 3, multiply); // 15
          </code></pre>
    
          <h4>Пример функции-обертки (wrapper):</h4>
          <pre><code>
    function withLogging(func) {
      return function(...args) {
        console.log('Calling function:', func.name);
        const result = func(...args);
        console.log('Result:', result);
        return result;
      };
    }
    
    function multiply(a, b) {
      return a * b;
    }
    
    const wrappedMultiply = withLogging(multiply);
    wrappedMultiply(5, 3); // 15
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 18,
    question: 'Как создать объект, не имеющий прототипа?',
    answer: `
          <p>В JavaScript можно создать объект без прототипа несколькими способами. Вот некоторые из них:</p>
    
          <h4>Использование <code>Object.create(null)</code>:</h4>
          <pre><code>
    const obj = Object.create(null);
    console.log(obj.toString); // undefined
          </code></pre>
    
          <h4>Использование <code>Object.setPrototypeOf</code>:</h4>
          <pre><code>
    const obj = Object.setPrototypeOf({}, null);
    console.log(obj.toString); // undefined
          </code></pre>
    
          <p>Объекты без прототипа могут быть полезны, если вам нужно избежать наследования стандартных свойств и методов.</p>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 19,
    question: 'Что такое async/await?',
    answer: `
          <p><strong>async/await</strong> — это синтаксический сахар для работы с промисами, позволяющий писать асинхронный код в более линейном стиле.</p>
    
          <h4>Пример использования:</h4>
          <pre><code>
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
    
    fetchData();
          </code></pre>
    
          <h4>Пример с задержкой (delay):</h4>
          <pre><code>
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function delayedFunction() {
      console.log('Начало выполнения');
      await delay(2000);
      console.log('Задержка окончена');
    }
    
    delayedFunction();
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
  {
    id: 20,
    question: 'В чем разница между spread-оператором и rest-оператором?',
    answer: `
          <p>Spread-оператор и rest-оператор выполняют противоположные функции, но оба используют символ <code>...</code> в JavaScript.</p>
    
          <h4>Spread-оператор:</h4>
          <p>Распространяет элементы массива или свойства объекта. Пример:</p>
          <pre><code>
    const numbers = [1, 2, 3];
    const newArray = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
          </code></pre>
    
          <h4>Rest-оператор:</h4>
          <p>Собирает оставшиеся аргументы функции в массив. Пример:</p>
          <pre><code>
    function sum(...numbers) {
      return numbers.reduce((total, number) => total + number, 0);
    }
    
    console.log(sum(1, 2, 3, 4, 5)); // 15
          </code></pre>
        `,
    level: 'JUNIOR',
    category: 'frontend',
  },
];
