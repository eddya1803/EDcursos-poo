
export default class Curso{
    constructor(nombre, poster, clases){
        this.nombre = nombre
        this.poster = poster
        this.clases = clases
        this.inscritos = []
    }
      // GET
    getNombre(){
        return this.nombre
    }    
    getPoster(){
        return this.poster
    }
    getClases(){
        return this.clases
    }
    getInscritos(){
        return this.inscritos
    }
      // SET
    setNombre(nombre){
        this.nombre = nombre
    }
    setPoster(poster){
        this.poster = poster
    }
    setClases(clases){
        this.clases = clases
    }
    setInscritos(inscritos){
        this.inscritos = inscritos
    }
}

