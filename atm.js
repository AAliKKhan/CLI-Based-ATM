import inquirer from "inquirer";
let myBalance = 5000;
let mypin = 2468;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin",
});
if (pinAnswer.pin === mypin) {
    console.log(`Correct Pincode`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select option",
            choices: ["withdraw", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
