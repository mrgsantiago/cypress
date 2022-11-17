
describe('Тестирование поиска Google', function () {
   it('Проверка, что в результатах поиска Telegram в выдаче есть упоминание авторов', function () {
        cy.visit('https://google.com');
        cy.get('.gLFyf').type('telegram').type('{enter}');
        cy.contains('Дуров');
    })

    it('Проверка, что в результатах поиска по "cypress wiki" есть Википедия', function () {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').type('cypress wiki').type('{enter}');
        cy.contains('Wikipedia');
    })
})
