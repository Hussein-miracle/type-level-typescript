

type classOfFoodMapType = {
  carbs:{healthValue:number;}
  protein:{healthValue:number;}
  vitamins:{healthValue:number;}
}
const classOfFoodMap = {
  carbs:{healthVal:1},
  protein:{healthVal:4},
  vitamin:{healthVal:10},
}

// type SetSub<T> =


// const Keys = Object.keys(classOfFoodMap)

type KeysUnion = keyof typeof classOfFoodMap;

type CopyFirst<A extends unknown[]> = A extends [infer First,... infer Others] ? First : never ;





// // type CopyRest<S extends unknown[]> = S["length"] extends 

// type R = CopyFirst<Array<Keys>>


// type MakeSet<T extends unknown[],Cache extends unknown[] = []> =  Cache["length"] extends T["length"] ? Cache : T extends [infer A,...infer Rest] ? MakeSet<Rest,[...Cache,CopyFirst<T>]>  : never   ;

// type SetType<SetItems extends unknown[]> =  SetItems['length'] extends 0 ? [] :  MakeSet<SetItems>;


// type OneOfEachClass = SetType<['carbs','protein','vitamin']>




// // type SetType<> = 

// const categories: OneOfEachClass = ['carbs','protein','vitamin','carbs']