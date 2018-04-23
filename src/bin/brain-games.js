#!/usr/bin/env node

import { getUserName } from '../';

console.log('Welcome to the Brain Games!\n');
getUserName();

console.log('These games are available:\n* brain-balance\n* brain-calc\n* brain-even\n* brain-gcd\n* brain-prime\n* brain-progression\n\n');
console.log('To run a game, type its name and press "Enter"');
