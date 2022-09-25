/// <reference types="cypress"/>

describe('Llena los campos para un nueva cita y la muestra y la edita', () => {
    it('campos nueva cita', () => {

        cy.visit('/index.html')

        cy.get('[data-cy=mascota-input]')
            .type('Hook');

        cy.get('[data-cy=propietario-input]')
            .type('Yamil');

        cy.get('[data-cy=telefono-input]')
            .type('4568791');

        cy.get('[data-cy=fecha-input]')
            .type('2022-09-25');

        cy.get('[data-cy=hora-input]')
            .type('15:00');
        
        cy.get('[data-cy=sintomas-textarea]')
            .type('El perro solo come y duerme');

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy=citas-heading')
            .invoke('text')
            .should('equal', 'Administra tus Citas');
        
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        cy.get('[data-cy=alerta]')
        .should('have.class', 'alert-success')
    });

    it('Edita la cita', () => {

        cy.get('[data-cy="btn-editar"]').click()

        cy.get('[data-cy=mascota-input]')
            .clear()
            .type('NUEVO HOOK');

        cy.get('[data-cy=submit-cita]')
            .click();
        
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')

    });


});