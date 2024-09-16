describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
         cy.get('#loginButton').click(); //Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю на совпадение текст 
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден полдьзователю
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
        cy.get('#forgotEmailButton').click(); //Нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден полдьзователю
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден полдьзователю
    })

    it('Неерный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
        cy.get('#mail').type('grman@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio7'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден полдьзователю
    })
         
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден полдьзователю
    })


    it('Верный логин и верный пароль с нарушением синтаксиа', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю на совпадение текст 
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден полдьзователю
    })
 })
