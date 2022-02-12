__NUXT_JSONP__("/lessons/asm-x86-64/numbers", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{content:{slug:"numbers",layout:"lesson",module:u,title:"Numbers",desc:"Representation of numbers in the CPU",order:v,omulator:B,toc:[{id:C,depth:l,text:D},{id:E,depth:l,text:F},{id:G,depth:l,text:H},{id:I,depth:l,text:J},{id:K,depth:l,text:L},{id:M,depth:v,text:N},{id:O,depth:v,text:P}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Before we proceed further, we will take a short detour to learn about numbers.\nInternally, computers boil down to machines that move numbers, operate on numbers, read numbers.\nNumbers.\nNumbers.\nNUMBERS!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's learn more about how these chunks of metal we call computers, are somehow able to use electricity to represent numbers.\nMost computers are filled with these tiny components called "},{type:b,tag:k,props:{},children:[{type:a,value:"transistors"}]},{type:a,value:", which can act as a sort of switch for electric currents.\nWhen a small electric current is applied to this transistor \"switch\", it allows current to flow in another part of the transistor.\nTherefore, this small electric current determines whether current can flow ("},{type:b,tag:k,props:{},children:[{type:a,value:Q}]},{type:a,value:") and current cannot flow ("},{type:b,tag:k,props:{},children:[{type:a,value:w}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With a large number of transistors, we can create a large array of switches that could be set to the 1 or 0 state."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's see how we can represent numbers just using 1s and 0s!"}]},{type:a,value:c},{type:b,tag:s,props:{id:C},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#base-n-representation",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For most of us, we would have to count with numbers like 1, 2, 3 .. 8, 9, 10.\nThis numbering system is called the base-10 number system, also known as decimal."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We call it base-10 because the number system consists of 10 basic digits."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By using these 10 digits in an ingenious manner, we humans have been able to represent numbers far beyond our imagination, with only 10 little symbols.\nAmazing isn't it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since we only have 10 digits, we are taught to place these digits side by side in order to represent larger numbers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For instance, "},{type:b,tag:e,props:{},children:[{type:a,value:"1234"}]},{type:a,value:" uses 4 symbols to represent a number far beyond 10.\nWhile we intuitively understand that this is one-thousand two-hundred and thirty four, how is this decoded generally?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As we can observe, just the digits alone can only represent 10 values, "},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:" to "},{type:b,tag:e,props:{},children:[{type:a,value:"9"}]},{type:a,value:" (max).\nIn order to go to the next higher value, we use what we commonly refer to as the \"tens\" place.\nWe place a digit at the position second from the right and we decide that the value of the digit at that spot should be multiplied by 10 to represent its true value.\nThe same is done for the hundreds, thousands, etc."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In general, this is how we can think about this numbering system."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{alt:y,src:"\u002Flessons\u002Fasm-x86-64\u002Fnumbers\u002FBase10.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As we see, each digit to the right is multiplied by an increasing power of the base, which in our case is 10."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We can thus generalise this number system to support any possible base N."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{alt:y,src:"\u002Flessons\u002Fasm-x86-64\u002Fnumbers\u002FBaseN.png"},children:[]}]},{type:a,value:c},{type:b,tag:s,props:{id:E},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#base-2-binary",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So let's try to apply what we've learnt to computers!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As I've mentioned earlier, the computer is great at representing 1s and 0s using electric signals."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0, 1"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We can observe that we only have 2 \"digits\" at our disposal.\nThis implies that we should be using the base-2 numbering system!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Referring to our earlier diagram, we know that each digit of a base-2 numbering system will thus have to represent the "},{type:b,tag:e,props:{},children:[{type:a,value:"2^n"}]},{type:a,value:" place.\nThus the first few digits will represent: "},{type:b,tag:e,props:{},children:[{type:a,value:"1, 2, 4, 8, 16 ... "}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So let's try to represent some numbers.\nThe notation we will use will be "},{type:b,tag:e,props:{},children:[{type:a,value:"??? (n)"}]},{type:a,value:" where "},{type:b,tag:e,props:{},children:[{type:a,value:"n"}]},{type:a,value:" represents the base system we are using."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's try to represent the first 5 numbers"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0, 1, 2, 3, 4 (10)"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Will be:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0, 1, 10, 11, 100 (2)"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We can take a look at "},{type:b,tag:e,props:{},children:[{type:a,value:"11 (2)"}]},{type:a,value:" to understand what's going on.\nWe know that the right-most digit will be multiplied by "},{type:b,tag:e,props:{},children:[{type:a,value:"2^0"}]},{type:a,value:" and then the next will be multiplied by "},{type:b,tag:e,props:{},children:[{type:a,value:"2^1"}]},{type:a,value:".\nSo we can calculate:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"  1 * 2^1 + 1 * 2^0 \n= 1 * 2 + 1 * 1\n= 2 + 1\n= 3        (10)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It works out!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the computer, this number would be represented by 2 wires being on, therefore in the (1) state for each of them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This base-2 number system is commonly referred to as "},{type:b,tag:k,props:{},children:[{type:a,value:"binary"}]},{type:a,value:", and the digits are referred to as "},{type:b,tag:k,props:{},children:[{type:a,value:"bits"}]},{type:a,value:".\nThis is where the 64-bit in x86-64 comes from!\nA 64-bit CPU implies that generally, most calculations are done in the CPU utilising 64-bits.\nThus while a number like "},{type:b,tag:e,props:{},children:[{type:a,value:"3 (10) == 11 (2)"}]},{type:a,value:" only requires 2 bits to be represented, the CPU would likely \"waste\" some bits and use 64-bits to represent the number like so:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0000000000000000000000000000000000000000000000000000000000000011\n"}]}]}]},{type:a,value:c},{type:b,tag:"info-box",props:{},children:[{type:a,value:"\nThis would still have the same value as \n"},{type:b,tag:e,props:{},children:[{type:a,value:"\n11 (2)\n"}]},{type:a,value:"\n, since leading \n"},{type:b,tag:e,props:{},children:[{type:a,value:"\n0s\n"}]},{type:a,value:"\n do not affect the value of a number.\n"}]},{type:a,value:c},{type:b,tag:s,props:{id:G},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#base-16-hexadecimal",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another popular numbering system that you would encounter would be hexadecimal.\nHexadecimal is a base-16 numbering system.\nThus it can represent larger numbers than decimal (base-10) with a smaller amount of hexadecimal digits."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But now you may be wondering, if decimal uses "},{type:b,tag:e,props:{},children:[{type:a,value:R}]},{type:a,value:" as its "},{type:b,tag:k,props:{},children:[{type:a,value:"10"}]},{type:a,value:" digits, how do we have enough symbols for "},{type:b,tag:k,props:{},children:[{type:a,value:"16"}]},{type:a,value:" digits?\nFor hexadecimal, they use alphabets to fill up the remaining 6 symbols required."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So the hexadecimal numbering system would make use of:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The same general rules apply to this numbering system, and we've left it as an exercise for you to try to understand this numbering system more clearly."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To give you some help, here are some conversions!"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Base-10 (decimal)\n0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15\n\n==\n\nBase-16 (hexadecimal)\n0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Base-10 (decimal)\n20, 40, 60\n\n==\n\nBase-16 (hexadecimal)\n14, 28, 3c\n"}]}]}]},{type:a,value:c},{type:b,tag:s,props:{id:I},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#writing-convention",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Given that it can be confusing as to what numbering system is being used, there is a conventional way of writing binary, decimal and hexadecimal numbers to prevent ambiguity."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Binary numbers are preprended with "},{type:b,tag:e,props:{},children:[{type:a,value:"0b"}]},{type:a,value:S},{type:b,tag:e,props:{},children:[{type:a,value:"0b111"}]},{type:a,value:" would be a binary number "},{type:b,tag:e,props:{},children:[{type:a,value:"111"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hexadecimal numbers are preprended with "},{type:b,tag:e,props:{},children:[{type:a,value:"0x"}]},{type:a,value:S},{type:b,tag:e,props:{},children:[{type:a,value:"0x6a"}]},{type:a,value:" would be a hexadecimal number "},{type:b,tag:e,props:{},children:[{type:a,value:"6a"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If there is no prefix, then the number is assumed to be in decimal.\n"},{type:b,tag:e,props:{},children:[{type:a,value:T}]},{type:a,value:" is just "},{type:b,tag:e,props:{},children:[{type:a,value:T}]},{type:a,value:" in decimal."}]},{type:a,value:c},{type:b,tag:"quiz",props:{},children:[{type:a,value:z},{type:b,tag:A,props:{answer:"7"},children:[{type:a,value:U},{type:b,tag:e,props:{},children:[{type:a,value:"0b111 (bin)"}]},{type:a,value:V}]},{type:a,value:z},{type:b,tag:A,props:{answer:"106"},children:[{type:a,value:U},{type:b,tag:e,props:{},children:[{type:a,value:"0x6a (hex)"}]},{type:a,value:V}]},{type:a,value:z},{type:b,tag:A,props:{answer:"200"},children:[{type:a,value:"\n    Try to represent "},{type:b,tag:e,props:{},children:[{type:a,value:"50"}]},{type:a,value:" in base-5. Don't add any prefix.\n  "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:K},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#negative-numbers",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So far, we've only covered non-negative integers (0 ... N).\nHow can we represent negative numbers in the CPU?\nAnd more specifically, representing negative numbers in binary."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A logical first idea would be to allocate a single bit for every number, that indicates whether the number is negative or not.\nA "},{type:b,tag:e,props:{},children:[{type:a,value:Q}]},{type:a,value:" in the "},{type:b,tag:e,props:{},children:[{type:a,value:"is_negative"}]},{type:a,value:" bit indicates the number is negative, while a "},{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:" indicates it is positive."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And this would work very well in fact!\nHowever, CPU developers and other computer scientists found a preferable alternative to represent negative numbers which is more suitable for computers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This method is named "},{type:b,tag:k,props:{},children:[{type:a,value:"2s-complement"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I will first describe the method, which may sound unintuitive at first.\nThere are 2 steps to convert a positive number to its negative equivalent.\nWe can take the number 5 for instance.\nLet's consider an imaginary CPU that represents numbers with 4 bits (as compared to 64-bits like our usual CPUs).\nIn such a CPU, the number 5 would look like so:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0101\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now let's go through the steps of 2s complement that will turn it into the representation for -5."}]},{type:a,value:c},{type:b,tag:W,props:{},children:[{type:a,value:c},{type:b,tag:X,props:{},children:[{type:a,value:"Invert all bits of the number (1 -\u003E 0, 0 -\u003E 1)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"1010\n"}]}]}]},{type:a,value:c},{type:b,tag:W,props:{start:l},children:[{type:a,value:c},{type:b,tag:X,props:{},children:[{type:a,value:"Add 1"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"  1010\n+ 0001\n     =\n  1011\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now "},{type:b,tag:e,props:{},children:[{type:a,value:Y}]},{type:a,value:" is the binary representation of -5 in our 4-bit system.\nThis may look funny at first, since we understand "},{type:b,tag:e,props:{},children:[{type:a,value:Y}]},{type:a,value:" should represent 11 (decimal) in binary."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But let's see if this "},{type:b,tag:e,props:{},children:[{type:a,value:Z}]},{type:a,value:" value can fulfill the properties of a negative number.\nFirst, we can try to perform addition of -5 with 5."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"  1011 (-5)\n+ 0101 ( 5)\n     =\n 10000\n     =\n  0000 ( 0)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since our final result has 5-bits, we have to truncate the last bit as we are using a 4-bit representation of numbers for our example.\nAfter the truncation, we can see that our result is 0!\nThis works out mathematically, "},{type:b,tag:e,props:{},children:[{type:a,value:"-5 + 5 = 0"}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We can even try this with other additions, and it will always work out after truncation!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So how does this work?\nYou may have some clue that the truncation has a big importance to play.\nThis truncation is commonly referred to as an integer overflow, where the result of an operation is larger than the capacity defined for the integer.\nThus the extra bits have to be removed, which could lead to inaccuracy."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Somehow, we were able to abuse this behaviour through 2s complement.\nLet's take a deeper look."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"One way to think about integer overflows is a clock.\nIf we imagine that our 4-bit number were stored on a clock, the clock would look like so:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:x,props:{alt:y,src:"\u002Flessons\u002Fasm-x86-64\u002Fnumbers\u002F4BitClock.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Currently, the clock is pointing at the number 5.\nEach time we increment the number, the clock hand will move one-step clockwise.\nIf we increment the number too much, it's value will drop back to 0 and start incrementing from there."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now if we wish to subtract from the number, we could rotate the clock-hand counter-clockwise that many steps."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What if we wanted to avoid doing counter-clockwise rotations?\nWe instead have to rotate the hand clockwise a complement amount of times.\nIf we were to subtract 5 from 5, we know we should end up at 0 in the end."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Try to trace the clock to see how many clockwise steps are required to move the clock hand to 0."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's right, 11!\nThis is the same value we calculated when we performed the 2s complement calculation earlier :O\nThus, the 2s complement method is just a series of steps that allow us to perform this calculation that we did visually, in order to get negative numbers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By using 2s complement representation to represent negative numbers, we can therefore implement subtraction and addition by only implementing addition.\nThis is a great benefit for CPU developers as they can focus on developing addition for their CPUs without worrying too much about how subtraction can be done.\nAny subtractions can then be done by first converting the subtracting term using 2s complement, and then performing a simple addition with overflow!"}]},{type:a,value:c},{type:b,tag:_,props:{id:M},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#but-what-about-11",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At this point, we've established how we can represent -5 using 4-bits, but we represented -5 by using the value 11.\nHow would we know whether a number is 11 or -5?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The key to this is that it depends entirely on the context.\nIf we choose to only perform unsigned operations, then we do not care that the 4-bit binary value "},{type:b,tag:e,props:{},children:[{type:a,value:Z}]},{type:a,value:" could represent -5, we just treat it as 11."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If we chose to perform "},{type:b,tag:k,props:{},children:[{type:a,value:"signed"}]},{type:a,value:" operations, then we treat the value as -5 instead of 11."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thus during 4-bit unsigned operations, we can use 4-bits to represent the following range of numbers:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If we needed to make use of negative numbers, then we have to sacrifice some of the positive range in order to represent negative numbers within the same bit-space."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7\n"}]}]}]},{type:a,value:c},{type:b,tag:_,props:{id:O},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#in-cpus",tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now that we understand how negative numbers could be represented, we just need to extend the size of our integer storage to 32-bits or 64-bits or N-bits according to our CPU.\nAnd this is how modern computers represent numbers!"}]}]},dir:$,path:"\u002Flessons\u002Fasm-x86-64\u002Fnumbers",extension:".md",createdAt:aa,updatedAt:aa},module:{slug:"asm-x86-64",title:u,desc:"Learn about the assembly language understood by our home computers",diff:"Easy",order:l,toc:[],dir:"\u002Flessons",path:$},prev:{slug:"instructions-and-registers",module:u,title:"Instructions and Registers",desc:"Learn about instructions and registers"},next:{slug:"memory",module:u,title:"Memory",desc:"Download more RAM!"},isLesson:B,title:"Numbers | ASM (x86-64)",challenges:[]}],fetch:{},mutations:void 0}}("text","element","\n","p","code","div","nuxt-content-highlight","pre","language-text","line-numbers","strong",2,"a","true",-1,"span","icon","icon-link","h2",".","ASM (x86-64)",3,"0","img","","\n  ","text-quiz",true,"base-n-representation","Base-n representation","base-2-binary","Base-2 (Binary)","base-16-hexadecimal","Base-16 (Hexadecimal)","writing-convention","Writing convention","negative-numbers","Negative numbers","but-what-about-11","but what about 11?","in-cpus","In CPUs","1","0, 1, 2, 3, 4, 5, 6, 7, 8, 9",".\nSo ","123","\n    What is the decimal representation of ","?\n  ","ol","li","0b1011","1011","h3","\u002Flessons\u002Fasm-x86-64","2022-02-12T12:43:50.005Z")));