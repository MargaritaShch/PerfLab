export const KafkaQuestions = [
    {
        id: 1,
        question: "Что такое Apache Kafka и для чего она используется?",
        level: "JUNIOR"
    },
    {
        id: 2,
        question: "Какова архитектура Apache Kafka и какие её основные компоненты?",
        level: "JUNIOR"
    },
    {
        id: 3,
        question: "Что такое продюсер (producer) в Kafka и как он работает?",
        level: "JUNIOR"
    },
    {
        id: 4,
        question: "Что такое потребитель (consumer) в Kafka и как он взаимодействует с продюсером?",
        level: "JUNIOR"
    },
    {
        id: 5,
        question: "Что такое топики (topics) в Kafka и как они используются?",
        level: "JUNIOR"
    },
    {
        id: 6,
        question: "Как работают разделы (partitions) в Kafka и для чего они нужны?",
        level: "JUNIOR"
    },
    {
        id: 7,
        question: "Что такое брокер (broker) в Kafka и какую роль он играет в системе?",
        level: "JUNIOR"
    },
    {
        id: 8,
        question: "Что такое кластер Kafka и как он строится?",
        level: "JUNIOR"
    },
    {
        id: 9,
        question: "Как Kafka обеспечивает отказоустойчивость и репликацию данных?",
        level: "JUNIOR"
    },
    {
        id: 10,
        question: "Что такое offset в Kafka и как он используется для отслеживания сообщений?",
        level: "JUNIOR"
    },
    {
        id: 11,
        question: "Как работает балансировка нагрузки между потребителями в группе (consumer group)?",
        level: "JUNIOR"
    },
    {
        id: 12,
        question: "Каковы основные режимы доставки сообщений в Kafka (at-most-once, at-least-once, exactly-once)?",
        level: "JUNIOR"
    },
    {
        id: 13,
        question: "Как продюсер отправляет данные в Kafka и что происходит с сообщениями в топиках?",
        level: "JUNIOR"
    },
    {
        id: 14,
        question: "Как потребитель читает данные из топика в Kafka?",
        level: "JUNIOR"
    },
    {
        id: 15,
        question: "Как настроить Kafka для работы в распределенном режиме?",
        level: "JUNIOR"
    },
    {
        id: 16,
        question: "Какие параметры конфигурации важны для настройки производительности Kafka?",
        level: "JUNIOR"
    },
    {
        id: 17,
        question: "Что такое ZooKeeper и какова его роль в экосистеме Kafka?",
        level: "JUNIOR"
    },
    {
        id: 18,
        question: "Как работают лидеры и реплики в Kafka и как они распределяются?",
        level: "JUNIOR"
    },
    {
        id: 19,
        question: "Как происходит автоматическое восстановление Kafka после сбоя брокера?",
        level: "JUNIOR"
    },
    {
        id: 20,
        question: "Что такое log retention в Kafka и как его настроить?",
        level: "JUNIOR"
    },
    {
        id: 21,
        question: "Как удаляются старые сообщения из топиков в Kafka?",
        level: "JUNIOR"
    },
    {
        id: 22,
        question: "Как отслеживать метрики производительности и состояния Kafka с помощью JMX?",
        level: "JUNIOR"
    },
    {
        id: 23,
        question: "Как использовать Kafka Connect для интеграции с другими системами?",
        level: "JUNIOR"
    },
    {
        id: 24,
        question: "Что такое Kafka Streams и для чего он используется?",
        level: "JUNIOR"
    },
    {
        id: 25,
        question: "Как Kafka Streams позволяет обрабатывать потоки данных в реальном времени?",
        level: "JUNIOR"
    },
    {
        id: 26,
        question: "Как работает KTable и KStream в Kafka Streams?",
        level: "JUNIOR"
    },
    {
        id: 27,
        question: "Что такое компактификация (log compaction) в Kafka и как она работает?",
        level: "JUNIOR"
    },
    {
        id: 28,
        question: "Как происходит сжатие данных в Kafka и какие алгоритмы сжатия поддерживаются?",
        level: "JUNIOR"
    },
    {
        id: 29,
        question: "Что такое idempotent producer и как он используется для обеспечения exactly-once доставки?",
        level: "JUNIOR"
    },
    {
        id: 30,
        question: "Как настроить контроль доступа в Kafka с использованием ACL?",
        level: "JUNIOR"
    },
    {
        id: 31,
        question: "Что такое consumer lag и как его минимизировать?",
        level: "JUNIOR"
    },
    {
        id: 32,
        question: "Как использовать паттерн Pub/Sub в Kafka для потоковой передачи данных?",
        level: "JUNIOR"
    },
    {
        id: 33,
        question: "Как тестировать и отлаживать системы, построенные на Kafka?",
        level: "JUNIOR"
    },
    {
        id: 34,
        question: "Что такое транзакции в Kafka и как их использовать для обработки сообщений?",
        level: "JUNIOR"
    },
    {
        id: 35,
        question: "Как работает процесс ребалансировки в группах потребителей Kafka?",
        level: "JUNIOR"
    },
    {
        id: 36,
        question: "Как настроить Kafka для работы в многозональной архитектуре (multi-datacenter setup)?",
        level: "JUNIOR"
    },
    {
        id: 37,
        question: "Какие существуют возможности мониторинга Kafka с использованием таких инструментов, как Prometheus и Grafana?",
        level: "JUNIOR"
    },
    {
        id: 38,
        question: "Как использовать Kafka в облачных инфраструктурах, таких как AWS или Azure?",
        level: "JUNIOR"
    },
    {
        id: 39,
        question: "Как управлять и мониторить Kafka с помощью Confluent Control Center?",
        level: "JUNIOR"
    },
    {
        id: 40,
        question: "Как мигрировать данные из других систем в Kafka?",
        level: "JUNIOR"
    },
    {
        id: 41,
        question: "Как использовать Kafka MirrorMaker для репликации данных между кластерами?",
        level: "JUNIOR"
    },
    {
        id: 42,
        question: "Как защитить данные в Kafka с использованием шифрования?",
        level: "JUNIOR"
    },
    {
        id: 43,
        question: "Как настроить аутентификацию и авторизацию в Kafka с использованием SASL и Kerberos?",
        level: "JUNIOR"
    },
    {
        id: 44,
        question: "Какие типичные ошибки могут возникнуть при работе с Kafka и как их исправить?",
        level: "JUNIOR"
    },
    {
        id: 45,
        question: "Что такое реестр схем (Schema Registry) и как он работает в экосистеме Kafka?",
        level: "JUNIOR"
    },
    {
        id: 46,
        question: "Как происходит управление версионированием схем в Apache Kafka с использованием Avro или Protobuf?",
        level: "JUNIOR"
    },
    {
        id: 47,
        question: "Какое влияние на производительность Kafka оказывает размер разделов и число реплик?",
        level: "JUNIOR"
    },
    {
        id: 48,
        question: "Как управлять очередью сообщений в топиках с высокой частотой запросов?",
        level: "JUNIOR"
    },
    {
        id: 49,
        question: "Что такое брокеры-координаторы в Kafka и как они управляют жизненным циклом потребителей?",
        level: "JUNIOR"
    },
    {
        id: 50,
        question: "Как обеспечить высокую доступность и отказоустойчивость системы на основе Kafka?",
        level: "JUNIOR"
    }
];
