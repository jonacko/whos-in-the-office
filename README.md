# whos-in-the-office
- Module 10 assignment for UoB Bootcamp due 12-09-22
- Walkthrough video link: https://drive.google.com/file/d/1AgFqDTpjC6Wzbqhi-NcxuOMqJ1YWMW1-/view

Contents:

1. Summary
2. Key features
3. Issues encountered/further amendments
4. Credits

## 1. Summary

This project was undertaken as a submission for a Birmingham University Bootcamp assignment, with a brief to create a README generator using the Inquirere package in Node.js.  The user story and acceptance criteria are below:

[insert image 1/image 2 here]


## 2. Key features:

- Jest installed and test suites created
- Tests passed (testing to expect certain data types on user input)
- Application runs and prompts user to add team members
- Application asks for information specific to that role (manager, engineer, intern)
- Styled index.html page generated into dist folder when user selects 'build the team'
- Clean interface 


## 3. Issues encountered/further amendments

Please see commented out code for more details, but key issues are as follows:

- unfortunately the data from the user's responses does not populate the html page.  I could not work out how to solve this issue; I need to pass the data using a function I believe but I could not make this work.
- CSS needs to be amended so cards are aligned horizontally


## 4. Credits

- test help: https://www.testim.io/blog/node-js-unit-testing-get-started-quickly-with-examples/?utm_source=google&utm_medium=cpc&utm_campaign=InMarket-new-t2&utm_term=&utm_term=&utm_campaign=InMarket-Geo&utm_source=google&utm_medium=cpc&hsa_acc=1473487825&hsa_cam=18133703992&hsa_grp=140967922272&hsa_ad=617796760068&hsa_src=g&hsa_tgt=dsa-19959388920&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwsfuYBhAZEiwA5a6CDIwwv-MwC6pJG25XErzhwmA0DErp7jnrLJRmCyHJJLqtEdyj7t-2nRoCtIcQAvD_BwE
- using inquirer: https://www.npmjs.com/package/inquirer
- Jest testing: https://jestjs.io/