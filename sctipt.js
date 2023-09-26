//Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase

//Creando mi primera clase 

class persona {
    //1 . Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //3. Definir un contructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    //El contructor es una funcion especial, cuya funcion es la de contruir o instanciar objetos 
    //Al pasar los atributos como parametros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }



    //2. Metodos o comportameintos (funciones)
    //Para difinir los metodos de mi objeto, ya no utilizo la palabra function
    hablar(){
        console.log("Hola, estoy hablando...");
    }//Cierre de metodo hablar

    dormir(){
        console.log("zzzzzzzz");
    }//Cierre de metodo dormir

    mostrarInfo(){
        console.log("Nombre: ");
        console.log("Apellido: ");
        console.log("Edad: ");
        console.log("Email: ");
        console.log("Telefono: ");
    }//Cierre de metodo mostrar info
}//Cierre de mi clase persona 

/*Instancia de objetos del tipo persona

Sintaxis basica de una instancia

variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)
*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@gmail.com", "5512345678");
let persona2 = new persona("Naruto", "Uzumaki", 22, "naturo@hokage.com", "1234567800");
let persona3 = new persona("Alexis", "Lopez", 20, "alexisy361@gmail.com", "3311019786");

//Inprimir el objeto completo 
console.log(persona1);

//Imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//Invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();







//Mostrar un objeto similar a este
let Felipe = {
    nombre : "Felipe",
    apellido : "Maqueda",
    edad : 31,
    email : "felipemaqueda@gmail.com",
    telefono : "5512345678",
}



/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operacions a nuestro codigo.

   - Herencia
   - Polimorfismo
   - Encapsulamiento
   - Abstraccion

*/

//Creando una nueva clase para aplicar la herencia (extends)

class paciente extends persona{
    //1. Definicion de atributos o propiedades 
    doctorAtiende = "";//nombre del doctor que atiende 
    historialMedico = "";//si o no el historial 
    alergias = "";//alergias existentes 

    //3. Generacion de constructor
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior 
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }
    //2. Metodos
    mostrarInfo(){
        console.log("Nombre: ", this.nombre)
        console.log("Apellido: ", this.apellido)
        console.log("Edad: ", this.edad)
        console.log("Email: ", this.email)
        console.log("Telefono: ", this.telefono)
        console.log("Doctor que atiende: ", this.doctorAtiende)
        console.log("Historial medico: ", this.historialMedico)
        console.log("Alergias: ", this.alergias)
    }
}
//I: UML

//Instancia de un paciente 
let paciente1 = new paciente("Jesus", "Gonzales", 31, "jesusgonzales@gmail.com", "55987654321", "Doctor Simi", "No tiene", "Penicilina");

//Imprimir objeto paciente
console.log(paciente1);

//Uso del metodo mostrar info
paciente1.mostrarInfo();

paciente1.dormir();


//Diferencias entre un objeto literal (normal), y un objeto tipo JSON

let objetoJSONSerializado = { 
    "nombre": "Jesus", 
    "apellido": "Gonzales", 
    "edad": 31, 
    "email":  "jesusgonzales@gmail.com", 
    "telefono":  "55987654321", 
    "doctorAtiende":  "Doctor Simi", 
    "historialMedico":  "No tiene", 
    "alergias":  "Penicilina"
}

//Tratar la informacion y sacar datos especificos para DOM
let objetoLiteral1 = { 
    nombre: "Jesus", 
    apellido: "Gonzales", 
    edad: 31, 
    email: "jesusgonzales@gmail.com", 
    telefono: "55987654321", 
    doctorAtiende: "Doctor Simi", 
    historialMedico: "No tiene", 
    alergias: "Penicilina"
}

/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.


    Atributos:
       - nombre
       - nota (calificacion)
    
    metodos:
       - Constructor
       - Metodo evaluacion (si aprueba o no)
       - Metodo imprimirInfo (nombre y nota)

    Logica del negocio:
       - If para evaluar la nota (si la nota es mayor a 6, esta reprobado)
       - Recuperamos la informacion por medio de un prompt 
       - Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menos a 6, la nota sea mayor a 6)
*/

//Creacion de la clase (3 pasos)

class alumno {
    //1. Atributos o propiedades
    nombre;
    nota;


    //3. Constructor donde le di identidad a mi objeto (this)
    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }


    //2. Metodos
    //Metodo general, un metodo que no requiere personalizacion porque aplica para cualquier objeto 
    evaluacion(nota){
        //condicion para saber si esta aprobado o reprobado 
        if (nota>=6){
            console.log("Aprobado")
        }else{
            console.log("Reprobado")
        }
    }

    imprimirInfo(){
        console.log("nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);
    }
}

//Instancias de alumnos 
let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);



//invocando metodos
alumno1.evaluacion();//reprobado
alumno2.evaluacion();//aprobado
alumno3.evaluacion();//aprobado



