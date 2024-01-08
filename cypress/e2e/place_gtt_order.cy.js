import { commonConstants } from "../constants"

describe('place gtt order in zerodha', () => {
    before(() => {
        cy.login(Cypress.env('user_name_1'), Cypress.env('user_password_1'), Cypress.env('totp_key_1'))
    })
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720)
    })
    it('place a buy gtt order', () => {
      // cy.placeGTTBuyOrder('MANINFRA', 223, (223.77).toFixed(1), '10')
      cy.deleteGTTOrder('FSL', commonConstants.sell)
    })
  })