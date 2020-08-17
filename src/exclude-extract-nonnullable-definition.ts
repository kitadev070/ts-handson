export {};

type MyExclude = DebugType;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
type MyFunctionType = MyExclude<SomeTypes>;

type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
