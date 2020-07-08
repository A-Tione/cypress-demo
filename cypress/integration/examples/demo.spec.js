describe('cloud-auth', ()=> {
  it('登录成功', ()=> {
    cy.visit("http://cloud.bp.123cx.com/#/login")
    cy.get('[type="autoComplete"]').type("11100000001")
    cy.get('[type="password-plus"]').type("a123456")
    cy.wait(60)
    cy.get("button").click()
    cy.get('.name').contains('系统应用').should('exist')
    cy.get('.name').contains('基础应用').should('exist')
    cy.wait(60)
    cy.get('.go').first().click()
    cy.url().should('include', 'system.bp.123cx.com')
  })
  it('登录失败', ()=> {
    cy.visit("http://cloud.bp.123cx.com/#/login")
    cy.get('[type="autoComplete"]').type("11100000001")
    cy.get('[type="password-plus"]').type("a1234561")
    cy.wait(60)
    cy.get("button").click()
    cy.contains('账号或密码错误').should('exist')
  })
})

