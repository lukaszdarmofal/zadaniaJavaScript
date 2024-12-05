class Calculator {
    
    static add(a, b) {

        const result = a + b
        return (`Wynik dodawania: ${a} + ${b} = ${result}`)

    }
  
    static subtract(a, b) {

        const result = a - b
        return (`Wynik odejmowania: ${a} - ${b} = ${result}`)
      
    }
  
    static multiply(a, b) {

        const result = a * b
        return (`Wynik mnożenia: ${a} * ${b} = ${result}`)

    }
  
    static divide(a, b) {

        if (b === 0) {
            return 'Błąd: Nie można dzielić przez zero!'
        }

        const result = a / b
        return (`Wynik dzielenia: ${a} / ${b} = ${result}`)
    }
}
  
const a = 10
const b = 5

console.log( Calculator.add(a, b) )
console.log( Calculator.subtract(a, b) )
console.log( Calculator.multiply(a, b) )
console.log( Calculator.divide(a, b) )

// dzielenie przez 0
console.log( Calculator.divide(a, 0) )