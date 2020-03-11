// anonymizer.js

let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  
  function getRandomChar() {
    const CHARS = 'abcdefghijklmnopqrstuvwxyz' + 
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                  '0123456789';
    
    let randomIndex = Math.floor(Math.random() * CHARS.length);
    
    return CHARS[randomIndex];
  }
  
  function invalidPasswordMessage() {
    return 'Invalid Password';
  }
  
  function makeDisplayName(numChars) {
    let name = '';
    
    for (let index = 0; index < numChars; index += 1) {
      name += getRandomChar();
    }
    
    return name;
  }
  
  function validatePassword(testPassword) {
    return userPassword === testPassword;
  }
  
  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      
      this.displayName = makeDisplayName(16);
       
      return this;
    },
   
    email(passwordEntered) {
      if (validatePassword(passwordEntered)) {
        return userEmail;
      } else {
        return invalidPasswordMessage();
      }
    },
   
    firstName(passwordEntered) {
      if (validatePassword(passwordEntered)) {
        return userFirstName;
      } else {
        return invalidPasswordMessage();
      }
    },
   
    lastName(passwordEntered) {
      if (validatePassword(passwordEntered)) {
        return userLastName;
      } else {
        return invalidPasswordMessage();
      }
    },
      
    reanonymize(passwordEntered) {
      if (validatePassword(passwordEntered)) {
        this.displayName = makeDisplayName(16);
        return true;
      } else {
        return invalidPasswordMessage();
      }
    },
   
    resetPassword(passwordEntered, newPassword) {
      if (validatePassword(passwordEntered)) {
        userPassword = newPassword;
        return true;
      } else {
        return invalidPasswordMessage();
      }
    },
  };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

console.log();

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('123456'));              // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));                  // 'baz@qux.com' but should 'foo@bar.com'