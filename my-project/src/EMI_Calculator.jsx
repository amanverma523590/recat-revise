import { useState } from "react";

export function EMI_Calculator() {
  const [amount, setAmount] = useState(10000);
  const [year, setYear] = useState(5);
  const [rate, setRate] = useState(10);
  const [emi, setEmi] = useState(0);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }
  function handleYearChange(e) {
    setYear(e.target.value);
  }
  function handleInterstChange(e) {
    setRate(e.target.value);
  }
  function handleCalculateClick() {
    let P = parseInt(amount);
    let R = parseFloat(rate) / 12 / 100;
    let N = parseInt(year) * 12;
    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI);
  }

  return (
    <div
      className="container-fluid bg-secondary p-4"
      style={{ height: "100vh" }}
    >
      <div className="bg-black p-4">
        <h4 className="text-center text-white">Personal Loan Emi Calculator</h4>
        <div className="bg-light text-dark p-4">
          <div className="row p-4 bg-info">
            <div className="col">
              Amount u needed &#8377;{" "}
              <input
                type="text"
                size={16}
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="col">
              for{" "}
              <input
                type="text"
                value={year}
                onChange={handleYearChange}
                size={2}
              />{" "}
              years
            </div>
            <div className="col">
              interest rate{" "}
              <input
                type="text"
                value={rate}
                onChange={handleInterstChange}
                size={2}
              />{" "}
              %
            </div>
          </div>

          <div className="row mt-4 bg-warning">
            <div className="col">
              <input
                type="range"
                min="100000"
                max="10000000"
                step="1000"
                value={amount}
                onChange={handleAmountChange}
                className="form-range"
              />
              <div>
                <span>&#8377; 1,00,000</span>
                <span className="float-end">&#8377; 10,00,000</span>
              </div>
            </div>
            <div className="col">
              <input
                type="range"
                min="1"
                max="5"
                value={year}
                onChange={handleYearChange}
                className="form-range"
              />
              <div>
                <span>1 year</span>
                <span className="float-end">5 year</span>
              </div>
            </div>
            <div className="col">
              <input
                type="range"
                min={1}
                max={5}
                value={rate}
                onChange={handleInterstChange}
                className="form-range"
              />
              <div>
                <span>10.45%</span>
                <span className="float-end">18.45%</span>
              </div>
            </div>
          </div>

          <div className="row p-4">
            <div className=" col text-end">
              <button
                onClick={handleCalculateClick}
                className="btn btn-primary"
              >
                Calculate
              </button>
            </div>
          </div>
          <div className="row p-4">
            <div className="col text-center">
              <div>
                Your monthly EMI is
                <span className="fs-3 fw-bold">
                  {Math.round(emi).toLocaleString("en-in", {
                    style: "currency",
                    currency: "INR",
                  })}
                </span>
                for next {year * 12} months
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
