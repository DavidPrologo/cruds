
export default function setObjectField
<Type, Key extends keyof Type>
(object:Type, key:Key, value:any): void{
  object[key] = value;
}