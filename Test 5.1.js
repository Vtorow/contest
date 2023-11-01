class Person {
    constructor(a,b) {
        this.first_name = a
        this.last_name = b
    }
    compare_to(a)
    {
        if (this.last_name == a.last_name)
            if (this.first_name == a.first_name)  return true
            else return false
        else return false
    }
}

var p1 = new Person("РРІР°РЅ",'РРІР°РЅРѕРІ')
var p2 = new Person("РџС‘С‚СЂ","РџРµС‚СЂРѕРІ")
var p3 = new Person("РРІР°РЅ",'РРІР°РЅРѕРІ')

console.log(p1.compare_to(p2));
console.log(p1.compare_to(p3));