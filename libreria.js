const library = {
    libros: [],

    agregarLibros: function (titulo, autor, fecha){
        const Nuevolibro = {
            titulo: titulo,
            autor: autor,
            fecha: fecha
        };
        this.libros.push(Nuevolibro);
    },
    buscarlibro: function(titulo){
        const libroEncontrado = this.libros.find(function(libros){
            return libros.titulo === titulo;
        })
        return libroEncontrado;
    },
    mostrarLibros: function(){
        this.libros.forEach(function(libros){
            console.log("Titulo: " + libros.titulo);
            console.log("Autor: " + libros.autor);
            console.log("Fecha: " + libros.fecha);
        })
    }
};

library.agregarLibros("1984", "George Orwell", 1949);
library.agregarLibros("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
library.agregarLibros("Cien años de soledad", "Gabriel García Márquez", 1967);

const libroEncontrado = library.buscarlibro("Cien años de soledad");
console.log("Libro encontrado:");
console.log("Título: " + libroEncontrado.titulo);
console.log("Autor: " + libroEncontrado.autor);
console.log("Año de publicación: " + libroEncontrado.fecha);
