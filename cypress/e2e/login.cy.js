describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm').should('be.visible');
        cy.get('#mailForgot').type('leonid@korsika.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');        
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('asadsadasdasdsa');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');         
        cy.get('#mail').type('germans@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');         
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');        
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
}) 