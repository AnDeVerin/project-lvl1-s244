# adv-hexlet-1

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
[![Build Status](https://travis-ci.org/AnDeVerin/project-lvl1-s244.svg?branch=master)](https://travis-ci.org/AnDeVerin/project-lvl1-s244)


[Мой учебный проект @hexlet.io](https://ru.hexlet.io/u/andeverin)  

## Проект Brain Games / Фронтенд JS-программист
### Уровень: 1. Старт проекта 26 марта 2018

### Цель  
Первый проект нацелен на знакомство с экосистемой JavaScript. Она достаточно сложна по сравнению с языками вроде PHP, Ruby или Python. Количество понятий, инструментов и их связок настолько большое, что даже у опытных разработчиков иногда голова идет кругом. Чтобы стартануть по всем канонам даже простейший проект придется как следует повозиться. Вот неполный перечень ключевых компонентов любого современного js приложения:

* Пакетный менеджер (`npm, yarn`). Управляет зависимостями, выполняет хуки и описывает проект.
* `Babel` (Транспайлер). Позволяет использовать новые фичи, даже если они не поддерживаются средой исполнения.
* `Eslint` - линтер. Проверяет корректность кода на соответствие стандартам кодирования.  

Кроме этого, все более популярным становится использование статического анализатора `flow`. По сути, мы получаем опционально статически типизированный код на js, что помогает выявлять на этапе разработки неимоверное количество ошибок и проблем.

После прохождения проекта вы сможете легко настраивать свои собственные проекты, подключать новые библиотеки, ориентироваться в структуре кода, а так же получите базовые навыки отладки. Прокачаете себя в использовании модулей js и работе с исполняемыми файлами. Опубликуете свой первый пакет в **npm**.

### Описание
В рамках проекта необходимо реализовать набор мини-игр, запускаемых из консоли. Эти игры похожи на то, что обычно называют "Brain Games".

Пример игры:
```sh
Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? John
Hello, John!

Question: 14 .. 18 20 22 24 26 28
Your answer: 16
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, John!
```
---
## Setup

```sh
$ npm install -g adv-hexlet-1
```
## Run
```sh
$ brain-games
```