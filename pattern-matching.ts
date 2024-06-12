
type Reverse<S, Store extends string = ''> = S extends `${infer First}${infer Rest}` ? Reverse<Rest,`${First}${Store}`> : Store; 

type Invert<I , R extends string = ""> = I extends `${infer Head}${infer Tail}` ? Invert<Tail, `${Head}` extends '0' ? `${R}${'1'}` : `${R}${'0'}` > : R;

type InvertClean<I , R extends string = ""> = I extends `${infer Head}${infer Tail}` ? Invert<Tail, `${R}${Head extends '0' ? '1' : '0' }` > : R;

type HeadBottomWrap<S , StringStore extends string = ''> = S extends `${infer _FirstChar}${infer RestChars}` ? HeadBottomWrap<RestChars , `${StringStore}*`> : StringStore ;



type Wrap<S extends string> = `${HeadBottomWrap<S>} 
${'*'}${' '}${S}${' '}${'*'}
${HeadBottomWrap<S>}`;

type WrapClean<S extends string > = `**${HeadBottomWrap<S>}**
* ${S} *
**${HeadBottomWrap<S>}**
`


type WordCount<S extends string,Counter extends 0[] = [0]> = S extends `${infer _First} ${infer Rest}`  ?  WordCount<Rest,[...Counter,0]> : Counter['length'] ;

type DrawLine<Count extends number,Rows extends 0[] = [],StringStore extends string = ''> =  Rows['length'] extends Count ? StringStore : DrawLine<Count,[...Rows,0],`${StringStore}*`>;



type Draw<I extends number,Columns extends 0[] = [],StringStore extends string = ''>  =   Columns['length'] extends I ? StringStore : Draw<I,[...Columns,0],`${StringStore}${DrawLine<I>}
`> ;



type ResultDraw = Draw<4>;
type ResultDrawLine = DrawLine<4>;

type ResultWordCount = WordCount<"Hello World! ASAP gty">;

type ResultWrap = Wrap<"Hello World!">;
type ResultWrapClean = WrapClean<"Hello World!">;

type ResultWrapHB = HeadBottomWrap<"Hello World!">;


type ResultReverse = Reverse<"0101">
type ResultInverse = Invert<"111">
type ResultInverseClean = InvertClean<"000">