var _0x4076=["\x2E\x2E\x2F\x65\x76\x65\x6E\x74\x73","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x61\x78\x69\x6F\x73","\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\u3000\uD83C\uDFA5\x20\x2A\x41\x4C\x45\x58\x41\x20\x46\x42\x20\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x45\x52\x2A\x20\uD83D\uDC96\x0A","\uD83C\uDFA5\x20\x2A\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x49\x4E\x47\x20\x46\x42\x20\x56\x49\x44\x45\x4F\x2E\x2E\x2E\x2A\x20\uD83E\uDD0D","\uD83C\uDFA5\x20\x5F\x2A\x55\x20\x50\x20\x4C\x20\x4F\x20\x41\x20\x44\x20\x49\x20\x4E\x20\x47\x2A\x5F\x20\x20\uD83D\uDC95","\x57\x4F\x52\x4B\x54\x59\x50\x45","\x70\x75\x62\x6C\x69\x63","\x66\x62\x20\x3F\x28\x2E\x2A\x29","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\uD83E\uDDDB\u200D\u2642\uFE0F\x20\x2A\x47\x69\x76\x65\x20\x56\x61\x69\x6C\x64\x20\x46\x42\x20\x4C\x69\x6E\x6B\x2A\x20","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","","\x53\x49\x54\x45\x31","\x73\x6F\x63\x69\x61\x6C\x6D\x65\x64\x69\x61\x2F","\x46\x42\x53\x32","\x3D","\x26\x61\x70\x69\x6B\x65\x79\x3D","\x42\x41\x50\x49\x4D\x45","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x6A\x69\x64","\x74\x65\x78\x74","\x63\x6C\x69\x65\x6E\x74","\u26D4\uFE0F\x20\x2A\x49\x4E\x56\x41\x4C\x49\x44\x20\x46\x42\x20\x4C\x49\x4E\x4B\x2A","\x63\x61\x74\x63\x68","\x66\x72\x6F\x6D","\x76\x69\x64\x65\x6F","\x74\x68\x65\x6E","\x61\x64\x64\x43\x6F\x6D\x6D\x61\x6E\x64","\x66\x62\x76\x20\x3F\x28\x2E\x2A\x29","\u26D4\uFE0F\x20\x5F\x2A\x45\x52\x52\x4F\x52\x20\x34\x30\x34\x2A\x5F"];const lusifar=require(_0x4076[0]);const {MessageType,mimetype,Mimetype}=require(_0x4076[1]);const axios=require(_0x4076[2]);const Config=require(_0x4076[3]);const capt=_0x4076[4];const DOWNMSG=_0x4076[5];const UPMSG=_0x4076[6];let KSKK=Config[_0x4076[7]]== _0x4076[8]?true:true;let KSP=Config[_0x4076[7]]== _0x4076[8]?true:false;lusifar[_0x4076[32]]({pattern:_0x4076[9],fromMe:KSP,desc:_0x4076[10]},async (_0x7a77x9,_0x7a77xa)=>{const _0x7a77xb=_0x7a77xa[1];if(!_0x7a77xb){return  await _0x7a77x9[_0x4076[12]](_0x4076[11])}; await _0x7a77x9[_0x4076[12]](DOWNMSG);var _0x7a77xc=`${_0x4076[13]}${Config[_0x4076[14]]}${_0x4076[15]}${Config[_0x4076[16]]}${_0x4076[17]}${_0x7a77xb}${_0x4076[18]}${Config[_0x4076[19]]}${_0x4076[13]}`; await axios[_0x4076[23]](`${_0x4076[13]}${_0x7a77xc}${_0x4076[13]}`)[_0x4076[31]](async (_0x7a77xd)=>{const {hd}=_0x7a77xd[_0x4076[21]][_0x4076[20]];const _0x7a77xe= await axios[_0x4076[23]](hd,{responseType:_0x4076[22]}); await  new Promise((_0x7a77xf)=>{return setTimeout(_0x7a77xf,2000)}); await _0x7a77x9[_0x4076[26]][_0x4076[12]](_0x7a77x9[_0x4076[24]],UPMSG,MessageType[_0x4076[25]]); await _0x7a77x9[_0x4076[12]](Buffer[_0x4076[29]](_0x7a77xe[_0x4076[21]]),MessageType[_0x4076[30]],{caption:capt})[_0x4076[28]](async (_0x7a77x10)=>{return  await _0x7a77x9[_0x4076[12]](_0x4076[27])})})});lusifar[_0x4076[32]]({pattern:_0x4076[9],fromMe:KSKK,dontAddCommandList:true},async (_0x7a77x9,_0x7a77xa)=>{const _0x7a77xb=_0x7a77xa[1];if(!_0x7a77xb){return  await _0x7a77x9[_0x4076[12]](_0x4076[11])}; await _0x7a77x9[_0x4076[12]](DOWNMSG);var _0x7a77xc=`${_0x4076[13]}${Config[_0x4076[14]]}${_0x4076[15]}${Config[_0x4076[16]]}${_0x4076[17]}${_0x7a77xb}${_0x4076[18]}${Config[_0x4076[19]]}${_0x4076[13]}`; await axios[_0x4076[23]](`${_0x4076[13]}${_0x7a77xc}${_0x4076[13]}`)[_0x4076[31]](async (_0x7a77xd)=>{const {hd}=_0x7a77xd[_0x4076[21]][_0x4076[20]];const _0x7a77xe= await axios[_0x4076[23]](hd,{responseType:_0x4076[22]}); await  new Promise((_0x7a77xf)=>{return setTimeout(_0x7a77xf,2000)}); await _0x7a77x9[_0x4076[26]][_0x4076[12]](_0x7a77x9[_0x4076[24]],UPMSG,MessageType[_0x4076[25]]); await _0x7a77x9[_0x4076[12]](Buffer[_0x4076[29]](_0x7a77xe[_0x4076[21]]),MessageType[_0x4076[30]],{caption:capt})[_0x4076[28]](async (_0x7a77x10)=>{return  await _0x7a77x9[_0x4076[12]](_0x4076[27])})})});lusifar[_0x4076[32]]({pattern:_0x4076[33],fromMe:KSKK,dontAddCommandList:true},async (_0x7a77x9,_0x7a77xa)=>{const _0x7a77xb=_0x7a77xa[1];if(!_0x7a77xb){return  await _0x7a77x9[_0x4076[12]](_0x4076[11])}; await _0x7a77x9[_0x4076[12]](_0x4076[34]);var _0x7a77xc=`${_0x4076[13]}${Config[_0x4076[14]]}${_0x4076[15]}${Config[_0x4076[16]]}${_0x4076[17]}${_0x7a77xb}${_0x4076[18]}${Config[_0x4076[19]]}${_0x4076[13]}`; await axios[_0x4076[23]](`${_0x4076[13]}${_0x7a77xc}${_0x4076[13]}`)[_0x4076[31]](async (_0x7a77xd)=>{const {sd}=_0x7a77xd[_0x4076[21]][_0x4076[20]];const _0x7a77xe= await axios[_0x4076[23]](sd,{responseType:_0x4076[22]}); await  new Promise((_0x7a77xf)=>{return setTimeout(_0x7a77xf,2000)}); await _0x7a77x9[_0x4076[26]][_0x4076[12]](_0x7a77x9[_0x4076[24]],UPMSG,MessageType[_0x4076[25]]); await _0x7a77x9[_0x4076[12]](Buffer[_0x4076[29]](_0x7a77xe[_0x4076[21]]),MessageType[_0x4076[30]],{caption:capt})[_0x4076[28]](async (_0x7a77x10)=>{return  await _0x7a77x9[_0x4076[12]](_0x4076[27])})})})
