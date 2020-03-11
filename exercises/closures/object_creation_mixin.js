// object_creation_mixin.js

let professional = {
  invoice() {
    console.log(`${this.fullName()} is Billing customer`);  
  },
  
  payTax() {
    console.log(`${this.fullName()} Paying taxes`);
  },
};

function delegate(callingObject, methodOwner, methodName, ...args) {
  return function() {
    methodOwner[methodName].apply(callingObject, args);
  };
}

function extend(object, mixin) {
  Object.keys(mixin).forEach(mixinProp => {
    object[mixinProp] = delegate(object, mixin, mixinProp);
  });
  
  return object;
}

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  communicate() {
    console.log('Communicating');
  }
  
  eat() {
    console.log('Eating');
  }
  
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  
  sleep() {
    console.log('Sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }
  
  diagnose() {
    console.log('Diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }
  
  teach() {
    console.log('Teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }
  
  study() {
    console.log('Studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }
  
  research() {
    console.log('Researching');
  }
}

let doctor = extend(
  new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), 
  professional
);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(
  new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), 
  professional
);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                   // logs 'foo bar is Asking customer to pay'
professor.invoice();                // logs 'foo bar is Asking customer to pay'
professor.payTax();                 // logs 'foo bar Paying taxes'

