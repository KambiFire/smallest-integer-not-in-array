import "./styles.css";

export default function App() {
  // Minimum integer in array(s)
  function minimumInteger(A) {
    // Filter -ve numbers and sort array ascending
    A = A.filter((x) => x > 0).sort((a, b) => a - b);

    let smallNum = 1;
    // Is empty array after filter? exit.
    if (A.length < 1) return smallNum;

    console.log("[" + A.toString() + "]");

    // If smaller number is found, exit, cause the array is sorted
    for (let i = 0; i < A.length; i++) {
      if (smallNum < A[i]) return smallNum;
      // Add 1 to the current number
      smallNum = A[i] + 1;
    }
    // if smaller number is not found, return last number + 1
    return smallNum;
  }

  const tests = [
    [],
    [-1, -2, -3],
    [1, 2, 3],
    [1, 4, 7, 2, 6, 3],
    [-1, -4, 7, 2, 6, 3],
    [-1, 4, 7, 2, -6, -3, 5, 1],
    [-100, 100, -200, 200]
  ];

  return (
    <div className="App">
      <h1>Miminum integer in a array</h1>
      {tests.map((test, index) => (
        <h3 key={index}>
          [{test.toString()}] = {minimumInteger(test)}
        </h3>
      ))}
    </div>
  );
}
