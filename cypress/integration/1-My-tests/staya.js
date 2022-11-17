describe('Тестирование работы авторизации сайта staya', function () {

    it('Авторизация с валидным логином и паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('hbnf1701@list.ru');
        cy.get('.auth-form > form > [type="password"]').type('StayaStaya123');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
    })

    it('Авторизация с неправильным логином и паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('staya123@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Staya1234@');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })

})