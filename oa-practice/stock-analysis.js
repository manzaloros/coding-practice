/* In data analysis, the eliminate algorithm determines the single final value
to use for each data parameter.  The eliminate algorithm works in the following
way:

Data is acquired from multiple sources in order from least to most preferred,
i.e. If a parameter Pi is present in both source 1 and source 2, the parameter
from the higher priority source, source 2, is used in the final parameter list,
and any value from an earlier source is superseded.  As new parameters arrive,
they are added to the list.  If a parameter Pi is present only in one of the
sources, it is directly added to the final parameter list. Hence, The result of
performing the above operations until all the parameters from source 1 and
source 2 are exhausted is the result of Eliminate-algorithm(source 1, source 2).
Each time a new value for a parameter is encountered from a higher preferred
site, the old data is superseded.  Assuming three sources S1, S2, and S3.
Eliminate-algorithm(S1, S2, S3) = Eliminate-algorithm(Eliminate-algorithm(S1,
S2), S3) Given a list of sources S1, S2, ..., Sn, find the final parameter list
given by Eliminate-algorithm(S1, S2, .., Sn). Maintain your result in the order
a key was first encountered.

For example, a rating parameter of buy, sell or hold from three sources in
increasing order of preference: [buy, sell, hold], where buy is from S1,
immediately superseded by sell S2, immediately superseded by hold S3.  The final
rating is the only one that hasn't been superseded, so you use "hold" as the
final rating.

Function Description: Complete the function computeParameterValue in the editor
below.  The function must return an array of strings that denotes the final
parameter list values in the order their keys were first encountered.

computeParameterValue has following parameter(s): sources: A 2-dimensional array
of key:value pairs, each row is one source's data, sources presented from lowest
to highest preference.

Constraints:

1 <= n < 100 1 <= p < 1000 Input Format for Custom Testing

The first line contains a positive integer n, the number of sources.  The next
line contains a positive integer p, denoting the number of parameters of each
source.  Each of the next n lines contains an array of p space-separated strings
of formate key:value, denoting the key and value of source[i] parameters.  Input

Sample Input 0: 2 3 P1:a P3:b P5:x P1:b P2:q P5:x

Sample Output 0: b b x q

Explanation 0: Final parameter list:
- P1 b (Source 2)
- P3 b (Source 1)
- P5 x (Source 2)
- P2 q (Source 2)   */

const computeParameterValue = () => {

};
