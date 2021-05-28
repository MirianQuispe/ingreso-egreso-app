export class Usuario{
    public uid: string;
    public nombre: string;
    public correo: string;

    constructor(uid,nombre,correo){
        this.uid    = uid;
        this.nombre = nombre;
        this.correo = correo;
    }
}