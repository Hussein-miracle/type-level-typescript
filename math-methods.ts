type ComputeMin<A extends number, B extends number, C extends 0[] = [] > = C['length'] extends  A ? A : C['length'] extends B ? B : ComputeMin<A,B,[...C,0]>   ;


type ResultComputeMin = ComputeMin<5,2>;



