/// <reference types= "cypress" />
import{navigate, addTodo, validateTodoText} from '../page-objects/todo-page' //importing funtions instead of class const todoPage = new TodoPage()

describe('todo actions', () => {  //Mocha grouping tests method "describe"
    
    beforeEach(() => {
        navigate()
        addTodo('Clean room')
    })

    it('should add a new todo list', () => {
        validateTodoText(0, 'Clean room') //Assertion for text input using function
        cy.get('.toggle').should('not.be.checked') //Assertion for toggle state
    
    })
    
    it('should mark a todo as completed', () =>{
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through') //Assertion at CSS level for toggle
    
    })
    
    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li') //Assertion for the Clear button function
    
    })
})
