class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputs = inputUTXOs;
    this.outputs = outputUTXOs;
  }
  execute() {
    for (let i of this.inputs) {
      if (i.spent) {
        throw new Error("input is already spent!");
      }
    }
    const sumInp = this.inputs.map((e) => e.amount).reduce((a, b) => a + b, 0);
    console.log(sumInp);
    const sumOut = this.outputs.map((e) => e.amount).reduce((a, b) => a + b, 0);
    console.log(sumOut);
    const fee = sumInp - sumOut;
    if (fee < 0) throw new Error("Not enough input!");
    this.fee = fee;
    for (let i of this.inputs) {
      i.spent = true;
    }
  }
}

module.exports = Transaction;
