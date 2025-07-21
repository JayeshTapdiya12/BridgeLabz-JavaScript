// this is the Employee Wage Computation Problem

console.log("Welcome to Employee Wage Computation Program on Master Branch");


class Employee {

    static wagesperhrs = 20;
    static maxhrs = 100;
    static maxdays = 20;



    constructor(name, company) {
        this.name = name;
        this.company = company;
        console.log(`hello ${this.name} welcome to wage computation ${this.company}`);
    }



    // uc 1 for check attadence
    checkAttance() {
        let present = Math.floor(Math.random() * 2);
        if (present == 0) {
            console.log("the emp is absent");
        } else {
            console.log("the ep is present");
        }
    }

    // computeWages(partime) {
    //     let wagePerhrs = 20;
    //     let totalhrs = 8;
    //     let income = 0;
    //     if (partime == false) {
    //         income = wagePerhrs * totalhrs;
    //     } else {
    //         let total = totalhrs + 8;
    //         income = wagePerhrs * total;
    //     }

    //     console.log("the wages for the day is : " + income)
    //     return income
    // }

    // partTime() {
    //     console.log("the emp has done the part time work ", this.computeWages(true));
    // }


    // computeBySwitch(partime) {
    //     let income = 0;
    //     let parthrs = 8;
    //     let totalhrs = 8
    //     let wagesperhrs = 20

    //     switch (partime) {
    //         case true:
    //             totalhrs = totalhrs + parthrs;
    //             income = totalhrs * wagesperhrs;
    //             console.log(`the emp wages are ${income}`)
    //             return income;
    //         // break;


    //         case false:
    //             income = totalhrs * wagesperhrs;
    //             console.log(`the emp wages are ${income}`)
    //             return income
    //         // break;;


    //         default:
    //             break;
    //     }
    // }


    // wagesforMonth() {
    //     let days = 20;
    //     let income = 0;

    //     let count = 0;

    //     for (let i = 0; i < days; i++) {
    //         let parttime = Math.random() < 0.5
    //         income += this.computeBySwitch(parttime);
    //     }
    //     console.log(`the month salary is ${income}`);

    // }


    wagestillCondition() {
        let income = 0;
        let totalhrs = 0;
        let totaldays = 0;
        while (totalhrs < Employee.maxhrs && totaldays < Employee.maxdays) {
            let emp = (Math.random() < .5);
            if (emp == 0) {
                totalhrs += 0
            } else {
                totalhrs += 8
            }

            totaldays++;

        }
        income += income + totalhrs * Employee.wagesperhrs;
        console.log(`the total income ${income}`);

    }

    computWage() {
        this.wagestillCondition();
    }

}




const emp = new Employee("jayesh", "tcs");
for (let i = 0; i < 10; i++) {
    emp.checkAttance();
}

emp.computWage()


// emp.computeBySwitch(false);


// emp.wagesforMonth()

// emp.computeWages(false)

// emp.partTime();