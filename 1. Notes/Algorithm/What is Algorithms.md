tags: #algorithm

---
> [!important]
> Informally, an *algorithm* is any well-defined computational procedure that takes some value, or set of values, as *input* and produces some value, or set of values, as *output* in a finite amount of time. An algorithm is thus a sequence of computational steps that transform the input into the output.

You can also view an algorithm as a tool for solving well-specified *computational problem*.

Example:
suppose that you need to sort a sequence of numbers into monotonically increasing order. This problem arises frequently in practice and provides fertile ground for inntroducing many standard design techniques and analysis tools. Here is how we formally define the *sorting problem*:

**Input:** a sequence of $n$ numbers $\langle a_{1},a_{2},..., a_{n} \rangle$.
**Output:** a permutation (reordering) $\langle a_{1},a_{2},..., a_{n} \rangle$ of the input sequence such that $a'_1 \leq a'_2 \leq ... \leq a'_n$ .

Thus, given the input sequence $\langle 31,41,59,26,41,58 \rangle$, a correct sorting algorithm return as output the sequence $\langle 26,31,41,41,58,59 \rangle$

> [!note] instance
> Such an input sequence is called an *instance* of the sorting problem.

 + In general, an *instance of a problem* consists of the input (satisfying whatever constraints are imposed in the problem) needed to compute a solution to the problem.

An algorithm for a computational problem is *correct* if, for every problem instance provided as input, it *halts* - finishes its computing in finite time - and outputs the correct sulution to the problem instance.
A correct algrorithm *solves* the given computational problem. An incorrect might not halt at all on some input instances, or it might halt with an incorrect answer.

---
### REFERENCES
1. Introduction to Algorithm book
