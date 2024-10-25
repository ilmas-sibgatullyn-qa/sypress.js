describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');  // Зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru');  // Ввёл правильный логин
         cy.get('#pass').type('iLoveqastudio1');  // Ввёл правильный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Виден текст успеха после автотеста
         cy.get('#messageHeader').should('be.visible'); // Видна надпись пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден пользвателю
         cy.get('#exitMessageButton > .exitIcon').click(); // Крестик кликабельный
 
     })
 
 })


 describe('Проверка восстановление пароля', function () {

    it('Кнопка забыли пароль', function () {
         cy.visit('https://login.qa.studio/');  // Зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки
         cy.get('#forgotEmailButton').click(); // Нажатие кнопки забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru') // Ввести павильный логин
         cy.get('#restoreEmailButton').click(); // Нажатие кнопки отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Виден текст упеха отправки
         cy.get('#messageHeader').should('be.visible'); // Надпись видна пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользвателю
         cy.get('#exitMessageButton > .exitIcon').click(); // Крестик кликабельный
 
     })
 
 })


 describe('Негативный кейс авторизации', function () {

    it('Неправильный логин', function () {
         cy.visit('https://login.qa.studio/');  // Зашел на сайт
         cy.get('#mail').type('german@dolnikovx.ru');  // Ввёл неправильный логин
         cy.get('#pass').type('iLoveqastudio1');  // Ввёл правильный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Виден текст не успеха авторизации
         cy.get('#messageHeader').should('be.visible'); // Надпись видна пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
         cy.get('#exitMessageButton > .exitIcon').click(); // Кресткик кликабельный

     })
 
 })


 describe('Негативный кейс авторизации', function () {

    it('Неправильный пароль', function () {
         cy.visit('https://login.qa.studio/');  // Зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru');  // Ввёл правильный логин
         cy.get('#pass').type('iLoveqastudio1x');  // Ввёл неправильный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Виден текст не успеха авторизации
         cy.get('#messageHeader').should('be.visible'); // Надпись видна пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
         cy.get('#exitMessageButton > .exitIcon').click(); // Кресткик кликабельный

     })
 
 })


 describe('Негативный кейс валидации', function () {

    it('Логин без спецсимвола', function () {
         cy.visit('https://login.qa.studio/');  // Зашел на сайт
         cy.get('#mail').type('germandolnikov.ru');  // Ввёл логин без собачки
         cy.get('#pass').type('iLoveqastudio1');  // Ввёл правильный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст проблемы валидации
         cy.get('#messageHeader').should('be.visible'); // Надпись видна пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
         cy.get('#exitMessageButton > .exitIcon').click(); // Крестик кликабельный

     })
 
 })


 describe('Проверка на приведение к строчным буквам в логине', function () {

    it('Проверка на приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');  // Зашел на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru');  // Ввёл строчный логин
         cy.get('#pass').type('iLoveqastudio1');  // Ввёл правильный пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Виден текст не успеха авторизации

     })
 
 })