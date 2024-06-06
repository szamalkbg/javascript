<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Cheatsheet</title>
    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <!-- Fejléc -->
    <header class="bg-primary text-white text-center p-3">
        <h1>JavaScript Cheatsheet</h1>
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

        <!-- Feltételes elágazások -->
        <section>
            <h2>Feltételes elágazások</h2>
            <pre>
let x = 10;

if (x > 5) {
    console.log("x nagyobb mint 5");
} else {
    console.log("x kisebb vagy egyenlő mint 5");
}
            </pre>
        </section>

        <hr>

        <!-- Ciklusok -->
        <section>
            <h2>Ciklusok</h2>
            <p><strong>For ciklus:</strong></p>
            <pre>
for (let i = 0; i < 10; i++) {
    console.log(i);
}
            </pre>
            <p><strong>While ciklus:</strong></p>
            <pre>
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
            </pre>
        </section>

        <hr>

        <!-- DOM manipuláció -->
        <section>
            <h2>DOM manipuláció</h2>
            <p><strong>Element kiválasztása:</strong></p>
            <pre>
let elem = document.getElementById("myElement");
let elems = document.getElementsByClassName("myClass");
let queryElem = document.querySelector("#myElement");
let queryElems = document.querySelectorAll(".myClass");
            </pre>
            <p><strong>Element módosítása:</strong></p>
            <pre>
elem.textContent = "Hello, World!";
elem.style.color = "red";
            </pre>
        </section>

        <hr>

        <!-- jQuery -->
        <section>
            <h2>jQuery</h2>
            <p><strong>Document ready:</strong> Jquery</p>
            <pre>
$(document).ready(function() {
    console.log("Document ready!");
});
            </pre>
            <p><strong>Element kiválasztása:</strong></p>
            <pre>
let $elem = $("#myElement");
let $elems = $(".myClass");
            </pre>
            <p><strong>Element módosítása:</strong></p>
            <pre>
$elem.text("Hello, World!");
$elem.css("color", "red");
            </pre>
            <p><strong>Eseménykezelés:</strong></p>
            <pre>
$elem.click(function() {
    alert("Element clicked!");
});
            </pre>
        </section>

    </main>

    <!-- Lábléc -->
    <footer class="bg-light text-center p-3 mt-4">
        <p>&copy; 2024 JavaScript Cheatsheet</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

</body>
</html>
