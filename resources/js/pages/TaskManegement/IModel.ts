
export default interface IModel {
    get:<IType>(key:string) => IType;
    set:<IType>(key:string, value:IType )=>IType;
}