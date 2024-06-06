<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript és jQuery Cheatsheet</title>
    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        /* CSS Példák */
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <!-- Fejléc -->
    <header class="bg-primary text-white text-center p-3">
        <h1>JavaScript és jQuery Cheatsheet</h1>
    </header>

    <!-- Fő tartalom -->
    <main class="container mt-4">

        <!-- Változók -->
        <section>
            <h2>Változók</h2>
            <p><strong>var:</strong> Globális vagy függvény szintű változó. Nem ajánlott a blokk szintű viselkedés miatt.</p>
            <pre>
var name = "John";
            </pre>
            <p><strong>let:</strong> Blokk szintű változó. Ajánlott használni, ha a változó értéke változhat.</p>
            <pre>
let age = 30;
            </pre>
            <p><strong>const:</strong> Blokk szintű állandó. Értéke nem változhat. Ajánlott használni, ha a változó értéke nem változik.</p>
            <pre>
const pi = 3.14;
            </pre>
        </section>

        <hr>

        <!-- Adattípusok -->
        <section>
            <h2>Adattípusok</h2>
            <p><strong>Number:</strong> Szám, pl. 1, 3.14</p>
            <pre>
let num = 42;
            </pre>
            <p><strong>String:</strong> Szöveg, pl. "Hello"</p>
            <pre>
let str = "Hello, World!";
            </pre>
            <p><strong>Boolean:</strong> Igazságérték, pl. true, false</p>
            <pre>
let isTrue = true;
            </pre>
            <p><strong>Array:</strong> Tömb, pl. [1, 2, 3]</p>
            <pre>
let arr = [1, 2, 3];
            </pre>
            <p><strong>Object:</strong> Objektum, pl. {key: "value"}</p>
            <pre>
let obj = { name: "John", age: 30 };
            </pre>
        </section>

        <hr>

        <!-- Függvények -->
        <section>
            <h2>Függvények</h2>
            <p><strong>Hagyományos függvény:</strong></p>
            <pre>
function add(a, b) {
    return a + b;
}
            </pre>
            <p><strong>Arrow függvény:</strong></p>
            <pre>
const add = (a, b) => a + b;
            </pre>
        </section>

        <hr>

        <!-- Eseménykezelés -->
        <section>
            <h2>Eseménykezelés</h2>
            <p><strong>JavaScript:</strong></p>
            <pre>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
            </pre>
            <p><strong>jQuery:</strong></p>
            <pre>
$("#myButton").click(function() {
    alert("Button clicked!");
});
            </pre>
        </section>

        <hr>

        <!-- Osztályok kezelése -->
        <section>
            <h2>Osztályok kezelése</h2>
            <p><strong>JavaScript Osztály:</strong></p>
            <pre>
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person("John", 30);
console.log(john.greet());
            </pre>
            <p><strong>jQuery Osztály hozzáadása/eltávolítása:</strong></p>
            <pre>
$("#myElement").addClass("highlight");
$("#myElement").removeClass("highlight");
$("#myElement").toggleClass("highlight");
            </pre>
        </section>

        <hr>

        <!-- Importálás -->
        <section>
            <h2>Importálás</h2>
            <p><strong>JavaScript Modul Importálás:</strong></p>
            <pre>
// myModule.js
export const pi = 3.14;
export function add(a, b) {
    return a + b;
}

// main.js
import { pi, add } from './myModule.js';
console.log(pi);
console.log(add(2, 3));
            </pre>
        </section>

        <hr>

        <!-- Privát/Publikus változók -->
        <section>
            <h2>Privát/Publikus változók</h2>
            <p><strong>JavaScript Privát/Publikus változók (ES6+):</strong></p>
            <pre>
class Example {
    #privateField = "I am private";

    publicField = "I am public";

    getPrivateField() {
        return this.#privateField;
    }
}

const example = new Example();
console.log(example.publicField); // "I am public"
console.log(example.getPrivateField()); // "I am private"
console.log(example.#privateField); // Error: Private field '#privateField' must be declared in an enclosing class
            </pre>
        </section>

    </main>

    <!-- Lábléc -->
    <footer class="bg-light text-center p-3 mt-4">
        <p>&copy; 2024 JavaScript és jQuery Cheatsheet</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

</body>
</html>
