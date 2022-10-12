/*
  [3 bit version, 3 bit ID]
  header

  if ID === 4, it is literal value, rep. single number:
    length will be multiple of 4 bits
    and it's broken down into groups of 4 bits
    each 4 bit group prefixed by 1 (making each group length 5),
    except last group that's prefixed with 0

  otherwise, look at bit after header
  if 0,
    next 15 bits are number rep. total length in bits of subpackets in this
    packet
  otherwise,
    next 11 bits are number rep. number of subpackets contained by this packet

  After the 1 bit length ID and the 15 or 11 bit field, subpackets occur.

*/
const decode = (input) => {
  const hex2bin = (hex) => {
    const binaryArray = [];
    hex.split('').forEach((char) => {
      binaryArray.push(parseInt(char, 16).toString(2).padStart(4, '0'));
    });

    return binaryArray.join('');
  };

  input = hex2bin(input);

  const getPackets = (bin) => {
    const packets = [];
    let index = 0;
    while (bin.length - index >= 11) {
      const packet = {};
      packet.version = parseInt(bin.substr(0 + index, 3), 2);
      packet.type = parseInt(bin.substr(3 + index, 3), 2);
      if (packet.type === 4) {
        const bitsRead = [];
        let readPos = 6 + index;
        let infoBit = '0';
        do {
          infoBit = bin.substr(readPos, 1);
          bitsRead.push(bin.substr(readPos + 1, 4));
          readPos += 5;
        } while (readPos + 5 <= bin.length && infoBit !== '0');
        packet.data = parseInt(bitsRead.join(''), 2);
        index = readPos;
      } else if (bin.substr(6 + index, 1) === '0') {
        const lengthSubPackets = parseInt(bin.substr(7 + index, 15), 2);
        const subPacketString = bin.substr(22 + index, lengthSubPackets);
        const subPackets = getPackets(subPacketString);

        subPackets.forEach((subPack) => packets.push(subPack));
        index = 22 + index + lengthSubPackets;
      } else {
        const howManySubPackets = parseInt(bin.substr(7 + index, 11), 2);
        let subPacketStringLength = bin.length - (18 + index);
        let subPackets = [];
        while (subPackets.length < howManySubPackets) {
          subPackets = getPackets(bin.substr(18 + index, subPacketStringLength));
        }

        subPackets.forEach((subPack) => packets.push(subPack));
        index = 18 + index + subPacketStringLength;
      }

      packets.push(packet);
    }

    return packets;
  };

  const versionSum = getPackets(input).reduce((total, curr) => total + curr.version, 0);

  const getPacket = (bin) => {
    const packet = {};
    packet.version = parseInt(bin.substr(0, 3), 2);
    packet.type = parseInt(bin.substr(3, 3), 2);
    if (packet.type === 4) {
      const bitsRead = [];
      let readPos = 6;
      while (bin.substr(readPos, 1) !== '0') {
        bitsRead.push(bin.substr(readPos + 1, 4));
        readPos += 5;
      }
      bitsRead.push(bin.substr(readPos + 1, 4));
      readPos += 5;
      packet.data = parseInt(bitsRead.join(''), 2);
      packet.bitAfterLast = readPos;
    } else {
      let subPackets = [];
      let lengthSubPackets;
      let subStart;
      const fifteenBitter = bin.substr(6, 1) === '0';
      if (fifteenBitter) {
        lengthSubPackets = parseInt(bin.substr(7, 15), 2);
        subStart = 22;
      } else {
        lengthSubPackets = parseInt(bin.substr(7, 11), 2);
        subStart = 18;
      }

      while (lengthSubPackets > 0) {
        const subPack = getPacket(bin.substr(subStart));
        subStart += subPack.bitAfterLast;
        subPackets.push(subPack);
        if (fifteenBitter) {
          lengthSubPackets -= subPack.bitAfterLast;
        } else {
          lengthSubPackets--;
        }
      }
      packet.bitAfterLast = subStart;

      switch (packet.type.toString()) {
        case '0':
          packet.data = subPackets.reduce((total, curr) => total + curr.data, 0);
          break;
        case '1':
          packet.data = subPackets.reduce((total, curr) => total * curr.data, 1);
          break;
        case '2':
          packet.data = Math.min(...subPackets.map((pack) => pack.data));
          break;
        case '3':
          packet.data = Math.max(...subPackets.map((pack) => pack.data));
          break;
        case '5':
          packet.data = subPackets[0].data > subPackets[1].data ? 1 : 0;
          break;
        case '6':
          packet.data = subPackets[0].data < subPackets[1].data ? 1 : 0;
          break;
        case '7':
          packet.data = subPackets[0].data === subPackets[1].data ? 1 : 0;
          break;
      }
    }

    return packet;
  };

  return getPacket(input);
};

const sampleLiteral = 'D2FE28';

const puzzle = '620D79802F60098803B10E20C3C1007A2EC4C84136F0600BCB8AD0066E200CC7D89D0C4401F87104E094FEA82B0726613C6B692400E14A305802D112239802125FB69FF0015095B9D4ADCEE5B6782005301762200628012E006B80162007B01060A0051801E200528014002A118016802003801E2006100460400C1A001AB3DED1A00063D0E25771189394253A6B2671908020394359B6799529E69600A6A6EB5C2D4C4D764F7F8263805531AA5FE8D3AE33BEC6AB148968D7BFEF2FBD204CA3980250A3C01591EF94E5FF6A2698027A0094599AA471F299EA4FBC9E47277149C35C88E4E3B30043B315B675B6B9FBCCEC0017991D690A5A412E011CA8BC08979FD665298B6445402F97089792D48CF589E00A56FFFDA3EF12CBD24FA200C9002190AE3AC293007A0A41784A600C42485F0E6089805D0CE517E3C493DC900180213D1C5F1988D6802D346F33C840A0804CB9FE1CE006E6000844528570A40010E86B09A32200107321A20164F66BAB5244929AD0FCBC65AF3B4893C9D7C46401A64BA4E00437232D6774D6DEA51CE4DA88041DF0042467DCD28B133BE73C733D8CD703EE005CADF7D15200F32C0129EC4E7EB4605D28A52F2C762BEA010C8B94239AAF3C5523CB271802F3CB12EAC0002FC6B8F2600ACBD15780337939531EAD32B5272A63D5A657880353B005A73744F97D3F4AE277A7DA8803C4989DDBA802459D82BCF7E5CC5ED6242013427A167FC00D500010F8F119A1A8803F0C62DC7D200CAA7E1BC40C7401794C766BB3C58A00845691ADEF875894400C0CFA7CD86CF8F98027600ACA12495BF6FFEF20691ADE96692013E27A3DE197802E00085C6E8F30600010882B18A25880352D6D5712AE97E194E4F71D279803000084C688A71F440188FB0FA2A8803D0AE31C1D200DE25F3AAC7F1BA35802B3BE6D9DF369802F1CB401393F2249F918800829A1B40088A54F25330B134950E0';

decode(puzzle);
