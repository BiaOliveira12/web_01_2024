export class Person {
    private _nome : string ;
    private _anoNascimento : number ;
   
    constructor ( _nome : string , _anoNascimento : number ) {
        this . _nome = _nome ;
        this . _anoNascimento = _anoNascimento ;
    }
   
    public get anoNascimento () : number {
        return this . _anoNascimento ;
    }
    public set anoNascimento (value : number) {
        this . _anoNascimento = value ;
    }
    public get nome () : string {
        return this . _nome ;
    }
    public set nome (value : string) {
        this . _nome = value ;
    }
       
    public calculaIdade () : number {
        return Math . floor (new Date () . getFullYear () - this . _anoNascimento) ;
    }
}