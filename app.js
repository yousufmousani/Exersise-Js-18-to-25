// Array Chapter 18 to 20



// Q:1

// for(var i=0;i<=4;i++){
//     document.write('hello world <br>')
// }

// Q:2

// for(var i=1;i<=10;i++){
//     document.write(i+ "<br>")
// }

// Q:3

// var userinp = +prompt('Enter value')
//    var userinp1 = +prompt('Table Length')
// for(var i=1; i<=userinp1; i++){
// document.write(userinp+" x "+i+" = "+userinp*userinp1,"<br>")
//  }

// Q:4

// var arr = ['Nokia','Samsung','Apple','Soni','Huawei']

// for(var i=0; i<=4; i++){
//         document.write(arr[i]+'<br>')

// }

// Q:5

// var arr = ['Apple','Banana','Mango','Orange','Starwberry']
// for(var i=0; i<=4; i++){
//             document.write(arr[i],'<br>')
// }

// Q:6
// var arr =['Keyboard','Mouse','Cpu','Flash drive']
// var arr6 = +prompt('Enter Index No')
// var arr2 = '0'
// var arr3 = '1'
// var arr4 = '2'
// var arr5 = '3'



// if(arr6 == arr2){
// document.write(arr.slice(0,1))
// }

// else if(arr6 == arr3){
//     document.write(arr.slice(1,2))
// }

// else if(arr6 == arr4){
//     document.write(arr.slice(2,3))
// }
// else if(arr6 == arr5){
//     document.write(arr.slice(3,4))
// }

// else{
//     document.write('Only 3 indexs Available in Array')
// }

// Q:7
// ----------

// Q:8

// var arr = ['cake','applepie','cookie','chips','patties']

// var arr2 = +prompt('Enter Item')

// if(arr2 == arr.slice(0,1)){
//     document.write('Cake is Availabe at index 0 in our Bakery')
// }
// else if(arr2 == arr.slice(1,2)){
//     document.write('applepie is Availabe at index 1 in our Bakery')
// }
// else if(arr2 == arr.slice(2,3)){
//     document.write('cookie is Availabe at index 2 in our Bakery')
// }
// else if(arr2 == arr.slice(3,4)){
//     document.write('chips is Availabe at index 3 in our Bakery')
// }
//  else if(arr2 == arr.slice(4,5)){
//         document.write('patties is Availabe at index 3 in our Bakery')
//     }
   
// else{'this is not available'}

// Q:9

// var A = [24,53,78,91,12]
// document.write('Array Items :'+A+'<br>'+'The Largest Number Is :'+A.slice(3,4))

// Q:10

// var A = [24,53,78,91,12]
// document.write('Array Items :'+A+'<br>'+'The Smallest Number Is :'+A.slice(4,5))

// Q:11

// var A = [24,53,78,91,12]
// document.write('Array Items :'+A+'<br>'+'The Largest Number Is :'+A.slice(3,4)+'<br>'+'The Samllest Number Is :'+A.slice(4,5))


//  Q:15

//  for(var i=1; i<=9; i=i+3){
//     for(var j=i; j< i+3; j++){
//         document.write(j+"")
//     }
//     document.write('<br>')
//  }




// _____________________________________________________________________________________________________________________________________________



// String Methods Chapter 20 to 25


// Q:1

// var usename1 =prompt('Enter First Name')
// var usename2 =prompt('Enter Last Name')
// document.write(usename1+" "+usename2)

// Q:2

// var userinp =prompt('Enter Mobile Phone Name')
// var userinp1 = userinp.length
// document.write("My Favorite Phone is :"+userinp+"<br>"+"Length Of String :" +userinp1)

// Q:7
// var city ='Islamabad'
// document.write('City :'+city.replace('Islam','Hyder')+'<br>'+'After Replacement :'+city)

// Q:8
// var ali ='ali and sami are best friend.They play cricket and foodball together.'
// document.write('Message :'+ali+'<br>'+'After Replacement :'+ali.replace('and','&'))

// Q:11
// var userinput = prompt('Enter Name')
// document.write('User input :'+userinput+'<br>')
// document.write('UpperCase :'+userinput.toUpperCase())

// Q:12
// var userinput = prompt('Enter Name')
// document.write('User input :'+userinput+'<br>')
// document.write('LowerCase :'+userinput.toLowerCase())

// Q:13
// var userinput = prompt('Enter Name')
// var userinput2 = userinput.slice(0,1).toUpperCase()
// var userinput3 = userinput.slice(1).toLowerCase()
// var userinput4 = (userinput2+userinput3)
// document.write('User input :'+userinput+'<br>')
// document.write('Title case :'+userinput4)


// Q:15
// var arr1 = prompt('Enter Value A')
// var arr2 = prompt('Enter Value B')
// var arr3 = (arr1+arr2)

// document.write('A is :'+arr1+'<br>'+'B is :'+arr2+'<br>'+'A + B is :'+arr3)

// Q:16
// var arr1 = +prompt('Enter Value A')
// var arr2 = +prompt('Enter Value B')
// var arr3 = (arr1-arr2)

// document.write('A is :'+arr1+'<br>'+'B is :'+arr2+'<br>'+'A - B is :'+arr3)

// Q:18
// var arr1 = ['cake','applepie','cookie','chips','patties']
// var arr2 = prompt('Enter Item Name').toLowerCase()
// if(arr2 == arr1.slice(0,1)){
//     document.write(arr2+' '+'is <b>availabe</b> at 0 index in our bakery')
// }
// else if(arr2 == arr1.slice(1,2)){
//     document.write(arr2+'is <b>availabe</b> at 1 index in our bakery')
// }
// else if(arr2 == arr1.slice(2,3)){
//     document.write(arr2+' '+'is <b>availabe</b> at 2 index in our bakery')
// }
// else if(arr2 == arr1.slice(3,4)){
//     document.write(arr2+' '+'is <b>availabe</b> at 3 index in our bakery')
// }
// else if(arr2 == arr1.slice(4,5)){
//     document.write(arr2+' '+'is <b>availabe</b> at 4 index in our bakery')
// } 
// else{
//     document.write('We are sorry .'+' '+arr2+' is <b>not avaliable</b> in our bakery')
// }

// Q:19
// var arr1 =prompt('Enter 1st')
// var arr2 =prompt('Enter 2nd')

// if(arr1 == arr2){
//     document.write('Equal')
// }
// else{
//     document.write(arr1+' '+'is greater than'+' '+arr2)
// }
