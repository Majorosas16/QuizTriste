//Ejercicio 1

const ciudades = [
{
    city: "Mexico",
    poblacion: 10
},
{
    city: "Peru",
    poblacion: 30
},
{
    city: "Colombia",
    poblacion: 40
}
];

const returnCity = (array) => {

    const save='';

    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {

        if (array.poblacion[i]>array.poblacion[j]){
            save=array[i];
        }
        
       }
        
    }

    return save
}

console.log(returnCity(ciudades));

//Ejercicio 2

const obj = [
    {
        id: "1",
        nombre: "Hacer la tarea",
        completada: false
    },
    {
        id: "2",
        nombre: "Lavar ropa",
        completada: false
    },
    {
        id: "3",
        nombre: "testear el codigo",
        completada: false
    },
];

const keep = []

const returnTrue = (array, state) =>{

    const keep = []

    array.forEach(element => {
        if (element.id===state){
          element.completada=true  
          keep.push=element
          
        }
    });
return keep
}

console.log(returnTrue(obj,"3"));
