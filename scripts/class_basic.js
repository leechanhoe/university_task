var Member = function(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
      return this.lastName + ' ' + this.firstName;
    }

  };
  
  var mem = new Member('철수', '강');
  console.log(mem.getName());
  console.log(mem.firstName);
