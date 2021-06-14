/// <reference types="cypress" />

// using export function instead of wraping in class

    export function navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    export function addTodo(todoText) {

        cy.get('.new-todo').type(todoText + "{enter}")
    }

    export function validateTodoText(todoIndex, expectedText) {
        cy.get('.todo-list').should('have.text', expectedText)

    }
    