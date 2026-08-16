# SauceDemo Authentication Test Plan

## Objective
Validate the core authentication flows for SauceDemo, including successful login, invalid credentials, locked-out user handling, and logout behavior.

## App URL
https://www.saucedemo.com/

## Test Cases

### 1. Verify login with valid credentials
- Pre-condition: User is on the login page.
- Test data: Username = standard_user, Password = secret_sauce
- Expected result: Login succeeds and the user is redirected to the inventory page.

### 2. Verify login with incorrect password
- Pre-condition: User is on the login page.
- Test data: Username = standard_user, Password = wrong_password
- Expected result: An error message is displayed and the user remains on the login page without access to the inventory.

### 3. Verify logout functionality
- Pre-condition: User is logged in.
- Test data: Username = standard_user, Password = secret_sauce
- Expected result: Logout succeeds and the user is returned to the login page.

### 4. Verify login for locked out user
- Pre-condition: User is on the login page.
- Test data: Username = locked_out_user, Password = secret_sauce
- Expected result: An error message states the account is locked and the user cannot log in.

## Success Criteria
- Valid credentials redirect to the product inventory page.
- Invalid or locked credentials prevent access and present a clear message.
- Logout ends the active session and returns to login.
- Each scenario starts from a fresh browser state.
