/*
  Given two strings s and t. Count the number of occurence of t in s as follows.
Length of t is 3, increment count when t == s[i]s[i+2]s[i+4] e.g s = aabbcc , t
= abc . output = 2.  Q2. Broken keyboard on a phone. Only some keys are
functional, Given list of words find which words can be typed on this phone.
Q3. Rotate matrix k times while keeping the elements on both diagonals fixed.
Q4. Given two arrays a and b and list of queries. Return the values of get query
in an array.  Queries are of two types:
0. update [type, index of element in a, value]. Update the element in a by given
   value

get [type, sum]. Return the number of ways a[i] + b[j] == sum where 0<=i <
len(a) and 0<= j < len(b) e.g a = [1,2,3] , b = [4,5] queries = [[1,6], [0, 1,
2], [1,8]] result = [2, 2] for query 1, 6 can come in 2 ways, 1 + 5 and 2 + 4
for query 2 -> update a[1] += 2 , so a becomes [1,4,3] for query 3, 8 can come
in 2 ways now as well. 4 + 4 and 5 + 3

1 <= a.length < 10^5 1 <= b.length< 10^4
*/

const count = (s, t) => {

};
