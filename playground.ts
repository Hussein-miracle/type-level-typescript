

type CountClean<A,Counter extends 0[] = []> = Counter['length']  extends A ? [...Counter]  : CountClean<A,[...Counter,0]>; 

type Inc<I, Cache extends 0[] = []> = Cache['length'] extends I ? [...Cache,0]['length']  : Inc<I,[...Cache,0]>;

type Dec<I,Cache extends 0[] = []> =  Cache['length'] extends I ? Cache extends [infer _A,...infer Rest] ? Rest['length'] : Cache  : Dec<I,[...Cache,0]> ;



type Add<A,B,CacheA extends 0[] = [],CacheB extends 0[] = []> = CacheA['length'] extends A ?  CacheB['length'] extends B ? [...CacheB,...CacheA]['length'] :  Add<B,A,[...CacheB,0],[...CacheA]>   : Add<A,B,[...CacheA,0],[...CacheB]>    ;




type IncClean<I> = [...CountClean<I>,0]['length'];
type DecClean<I> = CountClean<I> extends [infer _First,...infer Rest] ? Rest['length'] : 0;



type ResultInc = Inc<5>
type ResultDec = Dec<5>
type ResultIncClean = IncClean<5>
type ResultDecClean = DecClean<5>
type ResultAdd = Add<5,4>;