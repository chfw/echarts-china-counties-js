(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('临桂区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450312","properties":{"name":"临桂区","cp":[110.212463,25.238628],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@BABAB@B@@@B@@A@@@A@@@AC@@A@ABA@@@AB@@@@@BBBC@ABCB@@AB@@A@@@AB@@A@@BA@@@@@A@@@A@@@A@@@@@A@@@A@@B@B@@@B@@A@@ACD@@@@AA@C@@@@A@@B@@@@CB@BABA@@@@BCB@@A@@@A@AA@A@@AB@B@@AB@BA@@@@@@AA@AA@@@@@@@BA@@B@BA@@@@@@@@@A@@@@B@@@BB@@@A@@BC@A@ADABC@@B@@B@BB@@@BCAC@A@@@AE@@AA@@A@@A@A@@@A@AAC@ABA@@@A@@AAA@A@@A@@@@@AB@@A@@A@AAA@@B@BA@@@@@AB@F@@@@A@AC@@@A@AAA@A@AAEB@A@@@@A@AAAB@@@@ABB@DBB@@@CDAAC@A@@@@@AB@@AB@@A@@@@@AA@@A@A@ABA@A@AA@@A@@@A@@AB@@AAA@@@@A@@@A@@@ABA@@@AA@@@@BABA@@A@AA@@@@@A@A@ABA@A@A@A@A@@C@C@A@@@@@@E@ABCBCF@D@FAFC@@AACACE@CA@@AAAEDADCCEAA@ACEAAB@@EGBC@G@AA@AC@C@@@A@@C@@@A@@BA@@@A@AAA@AA@BAACBAAC@ABCD@I@MA@A@A@A@ABA@A@@B@@C@@DA@@BA@@B@B@AA@A@AA@@A@C@A@C@A@C@@AA@@@A@@@A@@@A@@AA@@AA@A@A@@AA@@@CA@@A@@@A@@@AAA@AACCAAAA@A@@A@@@@BA@@BA@A@@B@@@BAA@AA@@@A@@@A@@BAB@@@@@@@BA@@@A@@@@@A@C@@B@@@BA@@BA@AB@@AB@@@@@@@D@@@@A@@@AB@@@@ABA@AB@B@@A@ABC@@BA@AB@B@B@@@B@B@BA@A@@B@@CF@@A@@B@@A@@BA@@@@B@@@BAB@B@@AB@B@@@@@B@B@@@B@@@B@@@B@@@B@B@@@BB@B@@@@B@@@B@@@B@@B@@B@@@@@BBD@B@B@B@B@@A@@@@@@B@@BB@B@@@@@B@@BB@B@@@BBB@B@@@BB@@@@@AB@@@BABAB@@@B@BA@AD@B@B@@@B@@@B@BAB@B@@ADA@@BA@@B@B@@BB@@A@@BA@AB@@@B@B@@@FBB@@@BBBAB@B@B@@B@B@@B@@@@@@AB@B@@A@@B@@@@@@A@AB@@ADAB@@@B@B@@@B@B@@A@@@@@@B@B@@ABB@@@@@@BB@@@@@AB@@@B@B@BCBABABABABA@@B@@B@B@B@@@FAB@@@DB@BB@@BB@@@@@@B@BABA@@BA@@@@D@@C@ABAA@B@@@BB@@@B@@BB@BB@@@@@@BB@@@@@B@@@BB@@@ABBB@B@@B@@@@BB@@@@B@@A@BDAB@B@@BB@B@@BBBD@@@B@B@BB@@@AB@BED@@A@@@ABA@@BA@C@AB@@ADABA@@@@@ABABA@AB@BA@@BAB@BA@@@DBB@@@@BAB@BCB@@@BA@@B@@A@@@A@@BB@@B@@AB@@@D@@AB@@@BA@@@@B@@@BCBA@@BA@AB@B@@@@BBB@@@@@@DA@@B@B@@CB@@ABABABA@AB@B@@@B@@@B@@@@@BAAA@A@@@CB@A@@@@@@@@C@@@@BC@@@@B@@A@A@A@@@A@C@@@@@@@@@A@@@@BAB@@@B@BA@@BA@@@BB@@A@@BAB@@@@@@@@B@@@B@@@@B@B@@@@@@@@B@@B@@@@@B@@@BB@@BBA@@B@B@@@BF@@BA@@BB@BB@@@@AB@BA@@@A@@BA@@BA@@BA@@@B@@B@@BB@D@@@@@BB@@AB@@@@A@@BC@@@@@@@BB@B@BABAB@BA@@B@@CB@@@B@B@@@BA@A@CB@B@BAB@@AB@B@B@@@B@BABA@A@@@A@AA@@@C@@@A@@A@@BA@AB@@A@@B@B@B@B@B@@A@@@A@A@E@@@ECA@E@ABA@@B@B@@@@B@@BB@@B@D@BAB@@ABA@ABA@AAA@@@CA@BA@AD@@BB@@@B@B@B@@ABAD@@ABA@@@A@A@A@@@CDCBAB@@A@A@@@@@@@@BBB@@@B@@BBAB@B@B@@@BAB@@@B@@AB@BABBBB@@@@@@@@@@B@@@@@BB@@B@@@@@@@AA@@@A@@@B@@B@BDBA@BB@@AB@@B@@@BAB@@@@@BD@@@@B@BB@@@B@BB@@BBB@@@@AB@@@@@B@BA@@@AB@B@@@@@@AB@@A@@B@@@BAB@@@BB@@@A@@@@@AB@BA@@BA@@B@@@B@@@@@@AB@@CB@@A@A@@@A@@@A@A@AB@BABA@A@@BA@ABAB@@@BAA@@AB@B@B@@AB@D@@AA@@@BA@@@@B@@@@AAA@@@@BAB@A@@A@@@A@@@CBA@@A@@AB@B@@A@@B@AB@@AA@@AAA@@@B@@@@A@@@B@@@A@@A@@A@@@@@A@@AA@@B@@@@@@@@@A@@@A@@@@A@@@@@@A@@@@A@@@A@@@@@BA@@@@@A@@@@@AA@AB@@@A@@@@A@@@AA@@@@@@@@@A@@@@@@A@A@@AA@@@@@@@@@@BA@@B@B@@BBA@ABCBA@@@@@@B@@A@A@AB@@@@@A@@@@@A@@AB@@@@@@@B@@@AAB@@@@@BABA@A@CACB@A@@A@@@@B@B@@@@@@@@@B@@A@A@@@@@AA@A@@@@AA@@@@@@@@D@@@@AA@@@@@BAA@@@BAA@@A@A@@@AA@A@AB@@A@@@@@A@@@@A@@@@AAA@EB@@@A@A@A@@@A@@@@C@A@A@@@@A@@AA@@@@@AAB@@AA@BA@@@@@A@@B@@@@AB@@@A@@@@@@@A@@AB@@@@A@@@@@@AA@A@@@@@@@@@A@@@@@@@BAA@@@@A@@A@@@A@@@B@@A@@A@BAA@A@@@@@BA@@A@@@AA@@@@@A@@A@@B@@@@A@@BBB@BABA@@AA@CA@B@@A@@@@@@B@@A@@A@@@@A@@@ADAB@@A@@@@B@@@B@@A@@@@@A@A@@@A@A@@@@A@@A@@@@@@@@AA@@@A@@@@@AA@@A@@B@@@@@@AA@@@@@@@@A@@@A@@@@@AA@@@@@@A@@@@@A@A@@@@@A@@@@A@BAA@@@@B@@@BA@@BA@@@A@@AAC@A@AAA@CAA@AAAAA@A@@@A@A@@@ABC@@@C@CDA@A@@@C@@@A@@BAB@@A@@B@B@BABAB@B@@@B@@BB@@BDB@@B@B@BB@@B@@@@@DAB@@ABAB@@A@@@@@ABA@@B@@AB@@A@@@A@@B@@@BA@A@@B@@CB@BA@CB@@A@@@A@@B@@ABA@@@@B@B@BA@@B@@@@AB@@AB@@@@ABA@@@@B@@@B@@CD@@@@ABABAB@@@BEFABA@A@A@@@C@AB@@A@@B@@@@A@@@AB@@A@C@ABC@@@@AEAA@@@@AA@@@CCA@@@A@A@AA@@ABC@EBA@ABEBC@A@A@C@CBABCAAB@@C@@B@D@B@B@@@B@BBB@B@@@BBB@BB@@BBB@@AB@@@BAB@@@@@BA@@@@B@@B@@B@B@BAD@BA@@BAB@DFBB@D@BB@@BD@@@BA@@B@B@@@B@B@B@@@BBBBDBB@B@D@DDD@@B@B@@@B@@@BBB@@@D@@@B@B@@B@@@BB@B@B@B@BBB@BD@@A@@D@BC@ADA@ABAB@B@@ABD@@B@BBB@B@BBDAB@BBBA@A@ABA@@@@@@B@@@BA@@BA@A@ABBB@B@@@@@B@F@B@B@DA@AB@@@BA@A@@@AA@@CA@@AAABCCA@A@@@A@A@@@AACBCB@AAAC@A@@@AB@@ABAB@@A@@B@@@@@@A@@@@BA@@BAB@B@BAB@@@B@@@@@B@@@BABC@@@CB@@@@@BBB@B@@BB@@BB@BB@@BA@@@@BBBA@@BD@@@BBB@@BB@@@BB@B@B@B@@@B@@@B@@@BD@@BB@B@@@@@@B@@@@@B@@@B@B@B@@BB@@BD@@BB@B@@@BB@A@@B@BB@AB@@@DB@@@@@AB@B@B@@AB@D@BAB@BABAD@BA@A@@@@@@AA@AB@B@@@@@D@@@@B@BB@@FDDB@BB@@@B@@@@B@@A@@BA@A@C@A@A@A@A@ABA@@@BB@@@@@@AB@@@@BB@B@@ABA@@@@BBB@@@@@B@BABAB@@ABB@BA@@D@@@BBB@@B@B@@@@@@ABC@A@ABC@@BA@@DA@@B@B@@@@@@H@@@B@D@B@BAB@BADADABCDABAD@D@B@D@@@BB@B@B@D@@BD@BAD@BBBBB@B@BAB@BCDA@AB@B@B@B@@@DA@@B@B@@@BA@@BAB@@BBBB@BBBBB@B@@AB@BB@@BAB@@BB@@BB@BB@@@B@@BB@BBB@BABB@@@FAB@B@BA@@B@B@@@BBBABBB@BBBBB@B@@BAB@DA@ABA@@AABA@A@@@CB@@BBB@BB@@BABBBA@@BCBABB@B@@B@@@B@BA@@D@@@BAB@@A@@BABCD@@AB@@A@@B@@A@@@ABA@A@AB@@AB@@A@@AA@@@@@AB@@A@@@AAA@A@A@ABA@@BAA@@@BA@@AABA@ABA@@@AB@@ABA@AB@@A@C@A@ABAAA@@@C@A@A@A@C@AC@E@@AA@CA@@AA@@C@@BAAA@AA@AA@BAAAA@@C@AAA@@@A@ABA@A@ABCBA@AAC@@@A@A@@AA@@@AAABA@@@CA@@@BA@@@AA@@AA@@A@@@A@@@BA@AB@BA@@AC@@@@A@@AA@AACAC@ABABA@@B@@B@D@DB@B@@@@@D@BA@BBB@@B@@@BCB@BF@BB@@A@@@C@@@A@A@A@AAC@@A@@@B@@@B@B@@@@B@BB@A@@B@@ADB@@B@@@@@@BA@ABA@A@B@AB@@A@@@@B@@B@@B@@A@@@A@A@@@BB@@@@@BAB@BD@@BBB@B@@C@@@A@@@A@C@@@A@AAAAI@@@ABA@A@ABA@@BABA@A@C@C@CBA@@AAAAA@@A@@A@@AB@@@D@@@B@BA@A@@@A@@B@B@@@@BB@@@@AD@@BB@@@@ABB@@@@B@B@@BBB@@BA@@B@@@B@@AB@@AB@@BBB@@@@@B@@@@@@@@@@@BDB@BB@B@@@B@@@@@B@B@B@@A@A@AB@@BBA@B@@@BBA@@@@B@@@@@B@@@@@@@B@B@@B@@BB@@@B@@B@@BB@BD@@@B@ABB@@B@@@BB@A@BBBB@B@BB@@@BD@@@@@B@@@BB@A@BB@B@@B@@B@@@B@@B@@BBABAB@@BB@BC@@@ADAB@@C@@@A@@@@B@@@B@DA@A@@@A@@B@@A@@BA@@B@@@DB@@BBD@B@DD@DBB@BAB@HBD@BDAB@DADAB@BA@CD@D@DBDBBAB@BABBBABABBDADBB@B@BABAB@B@@BFDB@@@BBBB@BBB@@BB@B@@B@@BB@@@DD@@B@@@@@BBB@@@BB@@@A@BBB@@BB@@@BABAB@B@@A@ABA@@@A@@@AB@@A@@@A@@B@@A@@@ABAB@BAB@@BB@BA@@@@BA@@@@@ABA@A@A@@@@B@@@B@B@@@B@B@@ABAD@@@BCBCD@@@B@@BB@B@B@D@@@B@B@B@@@B@D@B@B@BB@@@B@@@BB@BBBB@BD@BBBBDB@D@BBBBDFDDB@BABAD@@BBDBBBBBDBBD@DHBDB@AD@@AFBDHFFADA@@DBD@@BB@DADBHADAD@B@@EDCB@BAAABCAABABCB@ACBADA@@B@@BFBFCHAFABAHBFAD@D@D@DAB@B@@@BB@@BBB@AB@@@@A@@B@@@@AB@B@@AB@BAAA@@@@BA@CB@B@@BB@B@@@BBBDDB@BBBB@@@@@B@B@B@@@@A@@B@BAB@@@B@@A@@BB@@@@@A@@@@B@B@B@@BB@@BB@@AB@B@@BB@B@DBD@@@@A@@@@@ABBB@BBD@BB@@BB@@@@B@B@@@B@BB@@@@@BBB@@@BBB@@@BB@B@@@B@@BBB@@BB@@BBB@@BD@@BBBB@B@B@B@@AD@D@@@@@B@@A@ABA@@@AB@B@@@@@@@@@@C@@B@@AB@@A@@@A@@B@@@B@@A@@@@@BB@B@@B@@B@@ABB@@B@@@@@B@@A@@@AB@@A@A@A@@@AB@@@AAB@@AB@@@B@@C@@@@B@@A@@@ABAB@@A@@D@@@D@@@@@B@@BB@@@B@@@B@@@@@@@BABA@@B@@ABA@@BBBAB@BB@@B@B@@@B@BB@@@@@@BB@@@B@B@B@B@@@@BB@DBB@BBB@@B@@B@@@DB@@B@@@B@@B@@B@BB@@BB@AB@@@D@@@@@B@B@B@DCBA@@@AB@@@B@@AB@BBB@BBB@B@DB@@BBBBB@BBBB@@@@BDB@B@B@B@BA@@@AB@@@@@B@B@@AA@@A@@AC@ABCDADA@BB@BB@B@@BB@@@BB@@@@B@BB@@@DDBD@B@@B@D@@@@@BA@@@@BB@@@BB@@BBBA@BB@@B@B@B@@@B@@@D@D@@@B@@@@AB@DE@A@@@@B@@@B@B@@@@@B@@B@@B@@AB@@CB@@@@A@ABA@A@A@@B@B@@@B@@ABBB@@@@A@@DA@@B@@@BAB@@B@@B@@BB@@@B@DA@@D@B@B@@@B@B@B@@@B@B@B@BBB@B@DBB@B@@@B@@BBBB@@BB@@B@@D@@BB@@BBB@@BB@@@BB@@@BB@B@B@B@BBBBB@@@B@@B@BBBB@@B@@A@@AC@@@A@AA@@A@@@AD@BA@@@@B@BADADA@@@@B@@@BA@A@@@ABA@@B@BAB@@A@@@@BAB@@A@@B@@@B@@@B@@@B@BABA@@B@@AD@D@@@B@@@@B@@@@@B@B@@@B@@A@@B@@@B@BBB@@B@BBB@@BB@@@BB@@DBB@BB@@@A@A@@BA@@B@D@@@B@@@BA@@@@@@A@@@A@@@@A@A@@FADAB@@B@AB@@@@@D@BA@ABA@@@@B@@@@@@ABA@@@@BA@AB@@@B@B@@@@A@@BABA@@AA@@@A@@@A@@B@@@@A@@@AB@AA@@AAAA@@A@@@@A@AAA@A@@A@@AAAAAAC@@A@@@@AA@@@@@A@A@@@ABAAC@A@A@@@@AAA@@AA@@@A@@@AA@@A@@@@B@@@@A@A@ABE@@@A@@@A@@BAA@@A@@@AA@@C@A@A@@@@B@@@BAB@D@B@@@DCBABCB@@A@C@A@@@@@@AC@@@AA@@A@@@AB@@@B@B@@@D@BBB@BA@@@@BAB@@AB@B@B@BAB@@BB@@A@@@AA@@@AA@@@C@@@@AA@@@AAA@@@A@A@@AA@C@A@@B@BAB@BABAB@DAB@BBBBBB@BB@@@BB@@B@BB@@BAB@B@@@B@@ABA@@@A@A@A@AAABABA@AB@@AB@@@B@BABAD@@@BA@ABA@AA@B@@A@A@@@AA@@ACAC@@A@@AAA@@AA@AA@AA@@AA@A@A@@AAAAAAA@@@A@A@@C@@@@A@@A@A@@@A@ACAA@@@@A@@AA@@@@AA@A@EAA@A@@@@@A@CAA@@@@@BA@A@@BA@@@ABA@@BA@@B@@AB@BABA@@@AB@@ABA@A@A@@AA@A@AB@@@@A@A@@@A@@@A@A@@BA@A@@@@@AA@@@AAA@@@@@@@@A@@@@AAA@@A@@@AB@@A@@@@@AA@@A@A@@AA@AA@@A@@@A@@@@@AB@@A@@@@BAB@@@BA@@@@BAB@@A@@@A@@@@@A@@@AA@@AB@A@@A@@@A@A@AB@@A@@@@@AA@@@A@@A@A@@@A@@B@@A@A@C@@@A@@BA@@@@@A@@@@B@@A@@@@A@BA@ABAB@@A@@@AA@@A@AAA@@AAAA@A@A@A@@AA@AB@@@@ABA@@@A@@@A@@@C@AAA@ABA@@@A@CA@@A@C@AA@@A@@A@@ABA@@@AAAAC@@@C@A@@@AA@@A@AAA@@A@@@AA@@@@@@@A@A@@@A@AA@@@@A@@AC@@BA@@AE@AA@BA@A@@@@@@BA@A@@AA@A@@@@BA@A@A@@B@@A@@@A@@@A@@@A@AB@@@@@B@@@BBB@B@DB@@@BDB@@BA@@DBB@D@@@B@@AB@@@B@BA@A@ABAB@@@DABAB@@@BA@AA@@@@AAABADAB@B@@@B@@@BBB@B@BBB@@@B@@@@@B@D@B@B@@A@ABA@A@@@A@@@@B@@@@@BA@@A@@A@@A@@@@A@AA@A@@A@@@C@A@@@ABA@@@C@C@@@ABA@A@@C@A@A@@@AA@AAA@@BCB@@@BDB@BA@@B@BBB@@@B@BA@BBB@BBB@@B@@@B@B@@ABB@@B@B@@@B@@@@B@B@@B@BB@AB@DB@@FHB@B@BAB@BA@@FA@@@A@@BBB@@@@@B@@@B@@BB@@@@@@A@@@@BBB@B@BA@B@@@@@@@@B@@@@@@AA@@AB@@@DA@A@@D@@@@B@@@B@@@@@BB@@AB@A@@@BA@@AA@@@@@@B@@@@@@AB@A@@@@@@@@@BAB@@@DA@@A@@@A@@AB@@@B@B@B@D@@@@A@@AACCA@@AAC@AAAA@CB@@A@A@@@AA@@C@A@@B@@AB@@@@BBA@@B@@@@@@A@A@@B@@A@@@@@@@A@@B@@@@A@@@@AA@@@C@@A@@@A@@@A@@DA@@BA@@A@@AB@BA@A@@@C@A@@@AB@B@A@A@@AAA@AAA@A@@AA@@ACA@AA@A@@@@B@B@B@B@B@DB@@B@@AB@DC@@@@@AD@@ABA@@@@@AAA@@BA@A@A@A@C@A@A@A@@@@B@B@@@@@BC@ABA@A@@@A@@BBB@@BBA@@B@@@B@@BB@@@@@B@B@B@BB@@B@B@@@B@@AB@@A@@@@B@@@B@@A@@@A@A@@@AB@@A@@@@@A@A@@BAB@@@BAA@@@@@@AA@A@@AAB@@@C@A@@B@B@@@@BB@@@B@BA@@@@@@B@@A@@@@BAB@BA@@BB@@@@FDB@@A@@B@A@A@@A@@@@B@@A@@@A@@@@@@@@@AA@@@@@@A@@AA@A@@@@@A@@@AAA@C@A@@@AA@A@AC@@@@@ABA@AAAB@@A@@BA@@D@DAB@B@B@B@B@B@BABCB@@A@@A@@A@AA@@@BA@A@ABAB@@@B@BC@A@AHAD@B@@@BBB@@A@@@ACC@AB@BBB@BBB@B@B@@ADA@@AA@@C@@@A@AAA@@@CABA@A@@@C@@AAABAAA@ED@A@@@@AAAAAABAAAA@@AA@@@AA@@BA@@@C@@@@AA@@@A@@@A@AAAAA@AA@CA@AAA@@@A@AA@@AB@A@A@@A@@CC@@@@@A@A@A@@AA@@BABA@@D@@AB@@@@A@@@ABAAC@@B@@ABB@@@@B@@B@D@@@@D@BA@@@A@@CC@@@@@A@C@A@@DCB@@@AA@ACAAA@@@@@AB@@@@A@ADE@@BA@@BA@@@@ACDAAA@@ACAA@AB@@@@AAAA@@@B@@ADA@@BA@ABA@CB@B@@@@A@@@A@A@A@@A@CBAECA@@BA@AA@@@A@@BC@BAAABCCAACBEBC@@BG@A@ABA@A@@BHBH@B@@AB@@@@B@@@DA@A@@@AAA@E@A@AB@DBB@BA@@BCBA@AB@BABA@@BA@@@ABBD@@C@CF@B@BBB@B@@@BB@@BABC@@BAB@B@@@B@@ABA@@B@B@B@BA@@@@A@A@AA@@BA@@@@BCA@@@@A@@A@A@@@@@@B@@@@BB@@A@ABAA@@A@@@BA@@@ABA@@B@@BDC@@B@B@B@@@BB@@@@@C@A@@B@@@BABADC@AB@@A@@@ABA@@@@B@@@BABA@@@@@@BA@AA@A@@@@@A@@A@@@@AAA@AD@@A@@@@@@@BA@@@@A@@@@B@AA@@AB@@@@A@@A@@A@@A@@@@A@@@@@@@@D@@AA@@@@A@@@A@@@A@@@@@BB@@@@@@A@@@@@@A@@A@@A@@A@@@@@@@@@AB@@@@@A@@A@@B@@@@@B@@@B@@AA@@@@A@@@@BA@@@AAA@@@@@@@ABAA@AA@@A@@@@BA@@@@@@@C@@@@A@@@@AA@BA@A@@@@@@@BA@@B@BA@@B@@@AA@@@A@@A@@BA@A@@@@AA@@@AA@A@@@@AA@@A@@@A@AA@@@AA@BAA@@AFCB@@AB@@@@@@@GCECAC@@@C@AHCJIDABA@@@@BACEACAE@@@C@@@A@AAAEAE@G@C@@C@CDAD@BA@A@@B@B@BAAABADAFABC@ABCBEAE@CDE@CFAFCBAE@BEBADGA@@ABAJCRBBIFA@DDDDDDD@BB@D@AABC@AJDBD@BFABB@@DCBCBA@EBE@@BADGAGHQ@@BA@CDAB@BD@BBEDBF@DBBC@A@AG@AADG@A@@@AFADEH@@C@@@A@C@AHG@@@@BA@@BA@@@AB@AA@@@@A@A@@B@@A@@@A@@BA@A@A@@A@@BA@@A@A@CA@@ABA@C@@@A@@@CAA@AACB@@AB@@@@@@@AAA@@@B@@A@@@A@@@@@@@@A@@@A@@AAA@AAA@@@A@@A@A@@@@@ABBB@@A@@AAAA@@A@@@@@ABA@@B@@A@@@@@A@@@A@A@A@@@A@@A@ACA@AA@@A@@@@@A@@B@B@@@@@BA@@@@@AAB@A@@@@BA@@@@@A@@B@B@@@AB@@B@@@B@@AD@BA@@@@@@@@@A@@B@@A@@@@"],"encodeOffsets":[[112965,25560]]}}],"UTF8Encoding":true});}));