// describe("",()=>{
//     it('4th into 1 ', () => {
//         cy.visit("https://example.cypress.io/");
    

//     cy.get(".dropdown-toggle").should("be.visible").click();
//     cy.wait(1000);
//     cy.get("ul.dropdown-menu").contains("Network Requests").should("be.visible").click();

//     cy.request('https://jsonplaceholder.cypress.io/comments')
//   .should((response) => {
//     expect(response.status).to.eq(200)
//     expect(response.body).to.have.length(500)
//     expect(response).to.have.property('headers')
//     expect(response).to.have.property('duration')
//   })


//   //======================================

//   // প্রথমে, প্রথম user-এর userId খুঁজে বের করি
// cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
// .its('body.0') // response-এর প্রথম user কে ধরে
// .then((user) => {
//   expect(user).property('id').to.be.a('number') // user id একটি সংখ্যা কিনা চেক করা

//   // user-এর পক্ষ থেকে একটি নতুন post তৈরি করা
//   cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
//     userId: user.id,
//     title: 'Cypress Test Runner',
//     body: 'Fast i am sabbir',
//   })
// })
// // এখানে ২য় request-এর response চেক করা হচ্ছে
// .then((response) => {
//   expect(response).property('status').to.equal(201) // নতুন entity তৈরি হলে status 201 হয়
//   expect(response).property('body').to.contain({
//     title: 'Cypress Test Runner',
//   })
  
//   // JSONPlaceholder API-তে ১০০টি post আগে থেকেই আছে,
//   // তাই নতুন post-এর ID ১০০-এর বেশি হবে
//   expect(response.body).property('id').to.be.a('number')
//     .and.to.be.gt(100)

//   // userId property আছে কিনা তা যাচাই করা
//   expect(response.body).property('userId').to.be.a('number')
// })



//   })
// });

