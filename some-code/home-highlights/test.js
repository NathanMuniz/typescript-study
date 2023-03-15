// f(n +2) = F(n +1)


const soma = (a) => (b) => a + b

/*
soma(10, 20)
[ (a) => ] (b) => a + b (10, 20)
(a)(b) => a + b 



*/



console.log(soma(10))


/*
const true_ = (x) => (y) => x;
const false_ = (x) => (y) => y

const and = (a) => (b) => a(b)(false_)

console.log(and(false_)(false_).toString())
console.log(and(true_)(false_).toString())
console.log(and(true_)(true_).toString())


const zero = (z) => (s) => z
const succ = (n) => (z) => (s) => s(n(z)(s))
const one = succ(zero)
const two = succ(one)
natToNumber = (n) => n(0)((acc) => acc + 1)

console.log(one.toString())

const addOpne = (add) => (n) => (m) => n(m)((pred) => add(pred)(succ))


/*

and(false_)(false_)
(a) => (b) => a(b)(false_)(false_)(false_)
(false_) => (false_) => false_(false_)(false_)
false_(false_)(false_)
(x, y) => y (false_)(false_)
(false_, false_) => false_
false_

const one = succ(zero)
(n, z, s) => s(n(z)(s)) ((z, s) => z)

s(z)

const two = succ(s(z))
(n, z, s) => s(n(z)(s)) s => z







const soma = (x, y) => y + x

const true_ = (x, y) => x
const false_ = (x, y) => y

if_ = (pred, then, else) => pred(then)(else);


if_(true_, true_, false_)
(pred, then, else) => pred(then)(else) (true_, true_, false_)
(true_, true_, false_) => true_(true_)(false_)
true_(true_)(false_)
(x, y) => x (true_)(false_)
(true_, false_) => true_
true_









func = (1)
x => m (1)



true_(0, 1)
(x, y) => x(0, 1)
(x, y)[x, y := 0, 1]
(0, 1) => 0
0

false_(0, 1)
(x, y) => y (0,1)
(x, y) -- [x, y := 0, 1]
(0, 1) => 1
1



soma(1, 2)
(x, y) => y + x
(x, y)-- [x, y := 1, 2]
(1, 2) => 1 + 2
1 + 2




*/












//console.log(soma(1))
