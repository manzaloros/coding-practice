/*
  [col, row]
  [x, y]

  for y instruction, reverse all rows after instruction row.
  for x instruction, reverse all cols after instruction col.

  plan:
  make a matrix

  for each instruction
    transform matrix

  return number of dots in resulting matrix
*/

const sample = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`;

const puzzleInput = `176,226
749,474
1218,784
1193,451
478,224
1019,620
865,667
884,178
622,505
43,856
475,619
1295,96
497,499
589,326
117,267
559,361
402,863
1220,277
167,617
955,560
1011,135
311,618
865,198
855,761
698,241
180,786
728,523
832,222
865,67
1280,649
155,844
990,406
688,505
990,488
1116,288
1047,266
181,408
27,401
883,257
253,610
1213,131
967,395
581,605
316,302
1260,425
967,171
721,774
618,668
604,51
858,323
520,553
271,730
749,567
1274,892
1054,102
117,301
201,598
227,257
1193,267
146,658
87,498
1017,313
1211,628
118,668
1059,259
48,169
698,292
405,516
676,110
1101,667
298,453
251,119
1046,529
1245,774
1019,722
1009,365
117,593
27,469
599,164
915,775
1088,91
530,407
124,571
494,378
97,59
995,443
311,49
345,822
175,469
174,560
427,66
261,120
371,38
73,844
145,637
674,675
1275,646
787,44
1074,57
478,229
1140,630
999,51
559,252
30,649
1256,182
836,882
801,679
271,394
176,665
989,211
887,533
431,147
760,539
1207,523
73,172
786,690
504,674
1039,858
1034,702
540,277
457,89
393,436
995,397
728,371
556,850
180,747
345,72
887,361
484,742
692,598
835,619
1057,158
1159,891
412,201
801,33
391,628
1116,736
1240,344
530,487
667,397
639,171
880,168
390,813
788,176
1250,793
780,487
445,667
1217,857
832,705
42,763
813,499
700,444
114,619
1191,884
119,10
791,313
917,436
1243,343
1290,513
15,798
728,75
179,833
683,873
773,260
830,271
567,620
610,450
395,567
231,361
1135,469
1278,46
1136,399
780,357
403,567
671,778
343,51
902,78
676,241
345,486
504,224
136,593
458,400
806,224
274,873
753,347
591,714
699,856
966,427
991,773
169,859
85,339
817,175
470,733
932,52
378,310
164,694
999,619
552,168
523,44
807,303
843,623
999,299
160,826
97,723
557,347
790,553
1143,617
701,637
1109,598
1193,515
418,505
522,649
184,733
801,705
227,42
1255,235
222,159
92,784
95,364
912,344
85,787
1170,511
756,809
473,184
226,731
676,513
1130,108
251,775
219,484
219,708
151,357
1192,674
360,505
1267,486
972,592
626,221
1268,292
445,248
830,495
69,143
401,485
1213,884
1175,313
1241,303
612,627
634,676
947,620
729,498
721,326
1299,451
544,537
1079,306
373,172
1036,873
519,357
1163,203
1197,268
802,147
95,585
181,413
858,213
604,537
452,323
662,488
276,401
1178,357
743,128
236,57
1210,309
905,516
99,492
430,168
1083,637
706,625
345,408
569,555
831,61
32,400
1208,352
892,505
97,884
58,7
227,852
1143,572
643,751
311,548
12,450
276,394
505,707
370,355
599,659
445,67
557,884
1211,154
1084,137
1238,523
551,747
264,589
755,850
887,431
311,845
27,465
254,814
102,726
10,750
184,676
676,784
831,541
1039,500
937,172
140,607
831,353
479,61
264,813
259,119
840,733
239,262
1136,750
68,341
1275,248
445,26
766,537
1265,396
1098,53
774,668
50,537
152,175
118,674
472,331
1283,401
1299,443
1163,691
1012,493
909,50
639,723
870,393
975,185
1212,492
229,777
1310,172
627,149
42,292
1206,287
136,145
97,131
11,443
671,171
335,325
686,549
44,444
1059,119
1208,726
197,420
1120,301
753,803
1215,642
975,709
564,281
197,474
207,150
805,707
552,253
144,563
556,716
1083,497
503,357
271,500
1268,602
145,215
756,163
290,296
589,120
1176,341
691,198
535,296
962,625
296,574
555,873
445,446
171,722
932,584
944,401
955,807
580,479
723,103
355,334
910,814
73,624
971,3
698,653
202,547
1295,723
1083,66
283,436
65,777
295,738
751,361
1190,750
519,177
991,26
494,826
95,82
1084,731
1083,257
1027,436
1213,579
75,150
792,77
518,77
704,171
72,523
1116,158
306,513
388,65
315,443
97,619
93,663
282,892
112,254
134,647
373,274
113,268
69,420
151,751
426,626
1178,494
473,486
1211,413
1119,465
519,313
691,795
535,598
170,712
831,93
1299,133
1266,444
937,786
125,184
718,813
423,431
229,290
440,393
1074,281
1197,178
965,72
214,501
263,621
922,9
788,649
306,558
909,284
55,730
1207,371
1198,469
994,302
263,721
311,299
104,287
550,355
391,714
216,331
808,175
1265,498
694,855
749,409
746,613
212,53
378,584
1026,355
145,355
425,604
132,357
557,507
1047,621
1159,3
284,66
1026,592
28,553
257,143
470,228
309,408
315,497
530,805
882,611
1113,420
372,892
1165,705
892,11
1236,479
683,745
20,513
447,150
753,507
1290,558
251,635
721,120
1193,739
60,218
309,486
927,858
509,705
1178,537
320,488
1032,501
618,598
1034,500
344,19
763,858
892,883
1292,667
561,679
99,266
774,226
113,324
627,877
671,723
907,567
1056,841
100,507
253,64
1237,605
38,407
1034,425
654,172
445,491
348,625
1233,128
832,224
445,448
401,284
140,511
554,809
1088,735
567,498
1116,437
1135,751
730,479
581,50
967,51
709,745
370,715
32,46
231,306
209,739
67,343
837,315
1196,723
98,402
1036,425
98,850
1233,340
946,2
1292,227
1225,339
920,529
1283,465
284,539
1079,809
868,53
1059,567
780,537
171,172
1215,812
468,287
1059,635
401,50
479,833
999,49
587,791
611,486
977,824
343,52
1303,284
1017,784
574,526
1165,215
127,722
253,158
512,228
612,205
643,397
927,659
1300,144
1126,676
1299,751
80,424
1200,537
692,296
535,436
641,855
919,714
223,299
725,591
1213,723
658,516
838,331
826,294
1267,856
470,653
97,212
837,710
756,835
831,425
502,175
290,2
319,773
1049,355
919,833
591,845
373,786
636,219
540,802
1257,597
478,222
298,1
28,341
850,9
184,666
251,327
554,835
995,891
848,190
1087,147
1282,553
152,560
1236,415
879,147
674,219
591,180
370,144
293,110
1159,751
940,592
1073,830
97,275
503,21
321,742
1176,647
1243,418
107,858
840,666
281,219
1265,189
97,579
291,620
67,418
749,679
278,501
272,182
319,26
1193,634
6,488
1001,408
1131,61
20,336
666,750
223,147
1255,164
1197,324
20,241
1139,722
940,403
627,45
366,407
363,172
126,668
1004,336
711,164
534,144
773,525
610,444
520,647
6,600
455,133
759,747
766,357
509,355
759,147
692,2
1268,355
530,313
325,119
117,379
711,730
753,91
760,735
1211,292
775,296
420,782
338,592
706,537
465,697
460,9
503,143
428,78
1193,155
1220,617
1217,791
528,226
355,87
1044,885
801,579
536,226
145,539
388,9
551,147
1155,844
1012,45
1260,619
431,523
1034,873
84,873
74,479
691,696
202,213
229,499
353,529
643,451
194,288
169,35
38,39
93,499
54,182
966,19
790,229
170,630
132,89
1215,687
1260,537
1038,40
175,21
55,164
425,731
1101,739
753,884
793,107
321,11
922,829
1081,499
1079,85
883,66
194,736
547,858
356,893
465,197
540,275
791,357
522,89
865,827
38,597
59,75
135,313
50,843
749,215
311,346
378,52
325,775
775,744
669,855
683,149
487,870
1245,120
1081,395
769,122
1282,445
190,301
1178,649
946,892
42,539
1283,493
209,369
1196,171
753,547
529,184
1146,200
823,277
647,284
567,128
107,36
517,787
423,361
644,750
1252,7
333,294
1217,26
1303,610
45,396
175,61
920,813
952,544
522,718
848,359
348,241
1046,589
263,861
791,537
356,1
868,617
1049,774
823,572
301,365
634,381
442,841
1198,254
27,493
1283,849
432,735
33,558
875,708
38,855
770,725
263,609
361,110
1272,39
729,172
363,620
1083,738
908,31
910,53
848,862
1178,89
1010,369
509,691
72,11
69,474
676,676
281,257
1113,474
544,357
1174,593
348,65
38,465
1260,394
760,159
145,189
731,744
266,885
971,397
181,481
634,218
103,523
816,378
1242,789
145,257
999,276
1186,123

fold along x=655
fold along y=447
fold along x=327
fold along y=223
fold along x=163
fold along y=111
fold along x=81
fold along y=55
fold along x=40
fold along y=27
fold along y=13
fold along y=6`;

const howManyDotsVisible = (input, part1) => {
  let [rows, cols] = [0, 0];
  let [dots, instructions] = input.split(/\n/)
    .filter((p) => p.trim())
    .reduce((output, line) => {
      if (line[0] === 'f') {
        const [axis, num] = line.split('=');

        output[1].push([axis[axis.length - 1], +num]);
      } else {
        const coords = line.split(',')
          .map((el) => +el)
          .reverse();
        rows = Math.max(rows, coords[0]);
        cols = Math.max(cols, coords[1]);

        output[0].push(coords);
      }

      return output;
    }, [[], []]);

  let visibleDots = 0;

  let matrix = Array(rows + 1)
    .fill()
    .map((el) => Array(cols + 1).fill('.'));

  dots.forEach(([row, col]) => {
    matrix[row][col] = '#';
  });

  const iterate = (mat, cb) => {

  };

  const combine = (firstHalf, secondHalf) => {
    firstHalf.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        if (el === '#' || secondHalf[rowIndex][colIndex] === '#') firstHalf[rowIndex][colIndex] = '#';
      });
    });

    return firstHalf;
  };

  instructions.forEach(([axis, num], i) => {
    if (i === 0 && part1) {
      let [firstHalf, secondHalf] = [[], []];
      if (axis === 'x') {
        [firstHalf, secondHalf] = matrix.reduce(([half1, half2], row) => {
          half1.push(row.slice(0, num));
          half2.push(row.slice(num + 1)
            .reverse());

          return [half1, half2];
        }, [[], []]);
      } else {
        firstHalf = matrix.slice(0, num);
        secondHalf = matrix.slice(num + 1).reverse();
      }

      matrix = combine(firstHalf, secondHalf);

      matrix.forEach((row, rowIndex) => {
        row.forEach((el, colIndex) => {
          if (el === '#') visibleDots += 1;
        });
      });
    }
  });

  return visibleDots;
};

const foldPaper = (input) => {
  let [rows, cols] = [0, 0];
  let [dots, instructions] = input.split(/\n/)
    .filter((p) => p.trim())
    .reduce((output, line) => {
      if (line[0] === 'f') {
        const [axis, num] = line.split('=');

        output[1].push([axis[axis.length - 1], +num]);
      } else {
        const coords = line.split(',')
          .map((el) => +el)
          .reverse();
        rows = Math.max(rows, coords[0]);
        cols = Math.max(cols, coords[1]);

        output[0].push(coords);
      }

      return output;
    }, [[], []]);

  let visibleDots = 0;

  let matrix = Array(rows + 1)
    .fill()
    .map((el) => Array(cols + 1).fill(' '));

  dots.forEach(([row, col]) => {
    matrix[row][col] = '░';
  });

  const combine = (firstHalf, secondHalf) => {
    firstHalf.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        if (el === '░' || secondHalf[rowIndex][colIndex] === '░') firstHalf[rowIndex][colIndex] = '░';
      });
    });

    return firstHalf;
  };

  instructions.forEach(([axis, num]) => {
    let [firstHalf, secondHalf] = [[], []];

    if (axis === 'x') {
      [firstHalf, secondHalf] = matrix.reduce(([half1, half2], row) => {
        half1.push(row.slice(0, num));
        half2.push(row.slice(num + 1)
          .reverse());

        return [half1, half2];
      }, [[], []]);

      if (firstHalf.length > secondHalf.length) secondHalf.forEach((row) => row.unshift(' '));
    } else {
      firstHalf = matrix.slice(0, num);
      secondHalf = matrix.slice(num + 1)
        .reverse();

      if (firstHalf.length > secondHalf.length) secondHalf.unshift(Array(firstHalf[0].length).fill(' '));
    }

    matrix = combine(firstHalf, secondHalf);
  });

  console.log(matrix);
  return matrix;
};

// JRZBLGKM
// JRZLBKH
foldPaper(puzzleInput);

// other solution:
const fs = require('fs');

const input = fs
  .readFileSync('./input')
  .toString()
  .split('\n')
  .filter((line) => line !== '');

const foldStartIdx = input.findIndex((line) => line.startsWith('fold'));
const points = input.slice(0, foldStartIdx);
const folds = input.slice(foldStartIdx);

const parseInstruction = (fold) => {
  const [, , instruction] = fold.split(' ');
  const [axis, value] = instruction.split('=');
  return { axis, value: parseInt(value) };
};

const foldPoints = (points, fold) => {
  const { axis, value } = parseInstruction(fold);

  for (const point of points) {
    let [x, y] = point.split(',').map(Number);
    let folded = false;

    if (axis === 'x' && x > value) {
      x = value - (x - value);
      folded = true;
    }

    if (axis === 'y' && y > value) {
      y = value - (y - value);
      folded = true;
    }

    if (folded) {
      points.delete(point);
      points.add(`${x},${y}`);
    }
  }
};

// Part 1: How many dots are visible after completing just the first fold instruction on your transparent paper?
const p1 = (points, folds) => {
  const uniquePoints = new Set(points);
  foldPoints(uniquePoints, folds[0]);
  return uniquePoints.size;
};

// Part 2: What code do you use to activate the infrared thermal imaging camera system?
const p2 = (points, folds) => {
  const uniquePoints = new Set(points);

  // Characters are of height 6 (added extra row for console output padding)
  // Message length is 8, letter width is 4 + single char of padding between each letter
  const messageGrid = Array.from(Array(7), () => Array(39).fill(' '));

  for (const fold of folds) {
    foldPoints(uniquePoints, fold);
  }

  for (const point of uniquePoints) {
    const [x, y] = point.split(',').map(Number);
    messageGrid[y][x] = '#';
  }

  console.log('Your infrared thermal imaging camera system code is below!\n');
  console.log(messageGrid.map((row) => row.join('')).join('\n'));

  return uniquePoints.size;
};

console.time('Part 1 Time');
console.log('Part 1:', p1(points, folds));
console.timeEnd('Part 1 Time');
console.log();

console.time('Part 2 Time');
console.log('Part 2:', p2(points, folds));
console.timeEnd('Part 2 Time');
